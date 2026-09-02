import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Broadcast, CaretUp, CaretDown } from '@phosphor-icons/react';

interface LeaderboardEntry {
  id: string;
  wallet: string;
  entityName: string;
  badge: string;
  pair: string;
  side: 'LONG' | 'SHORT';
  leverage: string;
  amount: string;
  inflowRaw: number;
  winrate: string;
  time: string;
  token: 'BTC' | 'SOL' | 'HYPE';
  rankDelta?: number; // positive = moved up, negative = moved down, 0 = unchanged
  isFlashGreen?: boolean;
  isFlashRed?: boolean;
}

const INITIAL_ENTRIES: LeaderboardEntry[] = [
  {
    id: 'w-1',
    wallet: '0x7f3a...d21c',
    entityName: 'HyperWhale #01',
    badge: 'TIER-1 WHALE · RANK 1',
    pair: 'BTC / USDT',
    side: 'LONG',
    leverage: '10x PERP',
    amount: '+$4,880,000',
    inflowRaw: 4880000,
    winrate: '94.2%',
    time: 'just now',
    token: 'BTC',
    rankDelta: 0,
  },
  {
    id: 'w-2',
    wallet: '0x88c2...11ea',
    entityName: 'Solana Giga-Whale',
    badge: 'SOL ACCUMULATOR',
    pair: 'SOL / USDT',
    side: 'LONG',
    leverage: '5x PERP',
    amount: '+$4,150,000',
    inflowRaw: 4150000,
    winrate: '91.8%',
    time: '4s ago',
    token: 'SOL',
    rankDelta: 0,
  },
  {
    id: 'w-3',
    wallet: '0x91b0...a4e8',
    entityName: 'Apex Quant Cohort',
    badge: 'QUANT DESK',
    pair: 'BTC / USDT',
    side: 'LONG',
    leverage: 'SPOT INFLOW',
    amount: '+$3,640,000',
    inflowRaw: 3640000,
    winrate: '89.4%',
    time: '8s ago',
    token: 'BTC',
    rankDelta: 0,
  },
  {
    id: 'w-4',
    wallet: '0x32f1...90bb',
    entityName: 'Perp King #03',
    badge: 'TOP 100 · RANK 3',
    pair: 'SOL / USDT',
    side: 'LONG',
    leverage: '20x PERP',
    amount: '+$3,120,000',
    inflowRaw: 3120000,
    winrate: '95.0%',
    time: '12s ago',
    token: 'SOL',
    rankDelta: 0,
  },
  {
    id: 'w-5',
    wallet: '0x55aa...33de',
    entityName: 'Foundation Whale',
    badge: 'HL FOUNDATION',
    pair: 'HYPE / USDT',
    side: 'LONG',
    leverage: '10x PERP',
    amount: '+$2,750,000',
    inflowRaw: 2750000,
    winrate: '92.4%',
    time: '18s ago',
    token: 'HYPE',
    rankDelta: 0,
  },
  {
    id: 'w-6',
    wallet: '0x4c2e...9f07',
    entityName: 'Alpha Arb Fund',
    badge: 'QUANT COHORT',
    pair: 'BTC / USDT',
    side: 'LONG',
    leverage: 'DELTA NEUTRAL',
    amount: '+$2,320,000',
    inflowRaw: 2320000,
    winrate: '88.6%',
    time: '24s ago',
    token: 'BTC',
    rankDelta: 0,
  },
  {
    id: 'w-7',
    wallet: '0xaa41...89cc',
    entityName: 'Profit Sniper #04',
    badge: 'PROFIT SNIPER',
    pair: 'SOL / USDT',
    side: 'LONG',
    leverage: '15x PERP',
    amount: '+$1,980,000',
    inflowRaw: 1980000,
    winrate: '96.2%',
    time: '32s ago',
    token: 'SOL',
    rankDelta: 0,
  },
  {
    id: 'w-8',
    wallet: '0xa19d...7b33',
    entityName: 'Syndicate Lead',
    badge: 'VERIFIED ALPHA',
    pair: 'HYPE / USDT',
    side: 'LONG',
    leverage: '5x PERP',
    amount: '+$1,450,000',
    inflowRaw: 1450000,
    winrate: '90.5%',
    time: '45s ago',
    token: 'HYPE',
    rankDelta: 0,
  },
];

const POOL_NEW_WALLETS = [
  { wallet: '0x6e12...44fa', entityName: 'Delta Neutral Whale', badge: 'TIER-1 WHALE', pair: 'SOL / USDT', side: 'LONG' as const, leverage: '10x PERP', token: 'SOL' as const, winrate: '97.4%' },
  { wallet: '0x19bb...8801', entityName: 'Hyperliquid Arbitrage', badge: 'QUANT DESK', pair: 'HYPE / USDT', side: 'LONG' as const, leverage: 'SPOT ROTATION', token: 'HYPE' as const, winrate: '93.8%' },
  { wallet: '0xd83f...912a', entityName: 'Macro Momentum Lead', badge: 'TOP 100 · RANK 2', pair: 'BTC / USDT', side: 'LONG' as const, leverage: '20x PERP', token: 'BTC' as const, winrate: '95.6%' },
  { wallet: '0xfa02...71ce', entityName: 'Liquidity Hunter #08', badge: 'PROFIT SNIPER', pair: 'SOL / USDT', side: 'LONG' as const, leverage: '15x PERP', token: 'SOL' as const, winrate: '92.1%' },
  { wallet: '0x89e0...11bc', entityName: 'Whale Cluster Lead', badge: 'TIER-1 WHALE', pair: 'SOL / USDT', side: 'LONG' as const, leverage: '10x PERP', token: 'SOL' as const, winrate: '96.8%' },
  { wallet: '0x3f71...90da', entityName: 'Institutional Arb', badge: 'QUANT COHORT', pair: 'BTC / USDT', side: 'LONG' as const, leverage: 'DELTA NEUTRAL', token: 'BTC' as const, winrate: '91.2%' },
];

export function SmartMoneyConviction() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(INITIAL_ENTRIES);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [isPaused, setIsPaused] = useState(false);
  const [trackedVolume, setTrackedVolume] = useState<number>(148290000);
  const [lastDetected, setLastDetected] = useState<string>('0x7f3a...d21c rotated +$3.28M into BTC longs');
  const [poolIdx, setPoolIdx] = useState(0);

  const FILTERS = ['ALL', 'BTC', 'SOL', 'HYPE'];

  // Dynamic Random-Row Rank Shift & Decrease/Increase Arrows Every 1.2s
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setEntries((prev) => {
        const next = [...prev];
        
        // Pick a random row (from index 1 to 7) to boost or insert
        const targetIdx = Math.floor(Math.random() * (next.length - 1)) + 1;
        const shouldInsertNew = Math.random() > 0.45;

        if (shouldInsertNew) {
          // A new whale enters at a random rank, pushing lower rows down!
          const newWalletData = POOL_NEW_WALLETS[poolIdx % POOL_NEW_WALLETS.length];
          const newInflow = Math.floor(Math.random() * 2500000) + 2200000;
          
          const newEntry: LeaderboardEntry = {
            id: `w-${Date.now()}-${Math.random()}`,
            wallet: newWalletData.wallet,
            entityName: newWalletData.entityName,
            badge: newWalletData.badge,
            pair: newWalletData.pair,
            side: newWalletData.side,
            leverage: newWalletData.leverage,
            amount: `+$${(newInflow).toLocaleString('en-US')}`,
            inflowRaw: newInflow,
            winrate: newWalletData.winrate,
            time: 'just now',
            token: newWalletData.token,
            rankDelta: 1, // entered and gained rank
            isFlashGreen: true,
            isFlashRed: false,
          };

          // Mark the row pushed down as decreased rank
          const shifted: LeaderboardEntry[] = next.map((item, idx) => {
            if (idx >= targetIdx) {
              return {
                ...item,
                rankDelta: -1, // moved down!
                isFlashGreen: false,
                isFlashRed: true,
              };
            }
            return {
              ...item,
              rankDelta: 0,
              isFlashGreen: false,
              isFlashRed: false,
            };
          });

          // Insert newEntry at targetIdx and slice to 8
          shifted.splice(targetIdx, 0, newEntry);
          setLastDetected(`${newEntry.wallet} entered ${newEntry.amount} ${newEntry.pair.split(' ')[0]} ${newEntry.side}`);
          return shifted.slice(0, 8);

        } else {
          // An existing random row overtakes the one above it!
          const swapIdx = targetIdx;
          const prevIdx = targetIdx - 1;

          const movingUp = {
            ...next[swapIdx],
            inflowRaw: next[swapIdx].inflowRaw + Math.floor(Math.random() * 600000) + 200000,
            amount: `+$${(next[swapIdx].inflowRaw + 400000).toLocaleString('en-US')}`,
            time: 'just now',
            rankDelta: 1, // moved up!
            isFlashGreen: true,
            isFlashRed: false,
          };

          const movingDown = {
            ...next[prevIdx],
            rankDelta: -1, // moved down!
            isFlashGreen: false,
            isFlashRed: true,
          };

          const updated = [...next];
          updated[prevIdx] = movingUp;
          updated[swapIdx] = movingDown;

          // Clear other rows deltas
          const finalClean = updated.map((item, idx) => {
            if (idx !== prevIdx && idx !== swapIdx) {
              return { ...item, rankDelta: 0, isFlashGreen: false, isFlashRed: false };
            }
            return item;
          });

          setLastDetected(`${movingUp.wallet} surged to rank #${prevIdx + 1} (${movingUp.amount})`);
          return finalClean;
        }
      });

      setTrackedVolume((v) => v + Math.floor(Math.random() * 850000) + 380000);
      setPoolIdx((p) => p + 1);
    }, 1200);

    return () => clearInterval(interval);
  }, [isPaused, poolIdx]);

  const filteredEntries = activeFilter === 'ALL'
    ? entries
    : entries.filter((e) => e.token === activeFilter);

  return (
    <section className="relative py-20 sm:py-26 px-6 sm:px-12 md:px-16 lg:px-24 bg-black border-b border-white/10 select-none overflow-hidden text-center">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#00FFCC]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Centered Monolithic Header */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          
          {/* Centered Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00FFCC]/20 bg-[#00FFCC]/5 backdrop-blur-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC]" />
            <span className="text-[11px] font-mono font-medium text-[#00FFCC] uppercase tracking-widest">
              LIVE SMART-MONEY RADAR
            </span>
          </div>

          {/* Centered Big Headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium text-white uppercase leading-[1.04] tracking-[-0.03em]"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            ONE TRADE IS A CALL. <br />
            <span className="text-[#00FFCC] drop-shadow-[0_0_35px_rgba(0,255,204,0.35)]">
              CONVICTION IS A PATTERN.
            </span>
          </h2>
          
          {/* Centered Subtitle */}
          <p
            className="text-white/60 text-sm sm:text-base mt-4 leading-relaxed max-w-xl mx-auto font-normal"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            i5 watches top-performing wallets, whales and quants to reveal where institutional capital is clustering in real time.
          </p>

          {/* Centered Filter Tabs */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mt-6 font-mono text-xs">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                  activeFilter === f
                    ? 'bg-[#00FFCC] text-black shadow-[0_0_15px_rgba(0,255,204,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {f === 'ALL' ? 'ALL FLOWS' : `${f} CLUSTER`}
              </button>
            ))}
          </div>
        </div>

        {/* LIVE WHALE TELEMETRY STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 mb-4 border-b border-white/10 font-mono text-xs text-left">
          
          {/* 24h Tracked Volume */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <span className="text-[10px] text-white/40 uppercase block">24H WHALE INFLOWS</span>
              <span className="text-sm font-black text-[#00FFCC] block">
                ${(trackedVolume / 1000000).toFixed(2)}M
              </span>
            </div>
            <span className="text-[10px] text-[#00FFCC] bg-[#00FFCC]/10 px-2 py-0.5 rounded font-bold">
              SCANNING 24/7
            </span>
          </div>

          {/* Active Wallets & Clusters */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <span className="text-[10px] text-white/40 uppercase block">VERIFIED SMART WALLETS</span>
              <span className="text-sm font-black text-white block">
                4,280 Tracked
              </span>
            </div>
            <span className="text-[10px] text-white/60 bg-white/[0.04] px-2 py-0.5 rounded font-bold">
              34 CLUSTERS
            </span>
          </div>

          {/* Real-time Inflow Alert */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-[#00FFCC]/20 truncate">
            <div className="truncate min-w-0 pr-2">
              <span className="text-[10px] text-[#00FFCC] uppercase font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC]" />
                LATEST POSITION MOVE
              </span>
              <span className="text-[11.5px] text-white font-medium block truncate mt-0.5">
                {lastDetected}
              </span>
            </div>
            <span className="text-[10px] text-white/40 uppercase shrink-0">LIVE</span>
          </div>

        </div>

        {/* Stable Fixed-Height Table with Green Increase / Red Decrease Rank Indicators */}
        <div 
          className="w-full font-mono text-left"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Table Column Headers */}
          <div className="grid grid-cols-12 px-4 py-2.5 text-white/40 text-[10px] uppercase tracking-wider border-b border-white/10 h-9 items-center">
            <div className="col-span-2 sm:col-span-1">RANK</div>
            <div className="col-span-4 sm:col-span-4 text-left">SMART WALLET / ENTITY</div>
            <div className="col-span-3 sm:col-span-3 text-left">CONVICTION ASSET</div>
            <div className="col-span-2 sm:col-span-2 text-right">INFLOW SIZE</div>
            <div className="col-span-1 sm:col-span-2 text-right">WINRATE / TIME</div>
          </div>

          {/* Fixed Height Row Container (Exactly 8 Slots, Zero Layout Shifts) */}
          <div className="flex flex-col divide-y divide-white/[0.06] min-h-[420px]">
            {filteredEntries.map((entry, index) => {
              const rankNum = String(index + 1).padStart(2, '0');
              const delta = entry.rankDelta || 0;
              
              return (
                <motion.div
                  key={entry.id}
                  initial={
                    entry.isFlashGreen 
                      ? { backgroundColor: 'rgba(0, 255, 204, 0.22)' }
                      : entry.isFlashRed 
                      ? { backgroundColor: 'rgba(255, 77, 77, 0.12)' }
                      : false
                  }
                  animate={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="grid grid-cols-12 items-center px-4 h-[52px] hover:bg-white/[0.02] transition-colors text-xs relative"
                >
                  {/* Rank with Dynamic Delta Arrow (Green Up / Red Down) */}
                  <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5">
                    <span className="font-bold text-white/40">
                      {rankNum}
                    </span>

                    {/* Rank Position Delta Arrow */}
                    {delta > 0 && (
                      <span className="flex items-center text-[#00FFCC] text-[10px] font-bold">
                        <CaretUp size={12} weight="fill" />
                      </span>
                    )}
                    {delta < 0 && (
                      <span className="flex items-center text-[#ff4d4d] text-[10px] font-bold">
                        <CaretDown size={12} weight="fill" />
                      </span>
                    )}
                  </div>

                  {/* Wallet & Entity Name */}
                  <div className="col-span-4 sm:col-span-4 flex items-center gap-3 text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC] shadow-[0_0_6px_#00FFCC] shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold truncate">{entry.wallet}</span>
                        <span className="text-[9.5px] text-white/40 hidden sm:inline truncate">· {entry.entityName}</span>
                      </div>
                      <span className="text-[10px] text-[#00FFCC]/70 truncate">{entry.badge}</span>
                    </div>
                  </div>

                  {/* Target Asset Pair & Execution Type */}
                  <div className="col-span-3 sm:col-span-3 flex items-center gap-2 text-left">
                    <span className="text-white font-medium">{entry.pair}</span>
                    <span className="text-[10px] font-bold text-[#00FFCC] bg-[#00FFCC]/10 px-1.5 py-0.5 rounded">
                      {entry.side}
                    </span>
                    <span className="text-[9px] text-white/40 bg-white/[0.04] px-1 py-0.5 rounded hidden md:inline">
                      {entry.leverage}
                    </span>
                  </div>

                  {/* Inflow Amount */}
                  <div className="col-span-2 sm:col-span-2 text-right">
                    <span className={`text-sm sm:text-base font-black transition-colors ${
                      entry.isFlashGreen ? 'text-[#00FFCC]' : 'text-white'
                    }`}>
                      {entry.amount}
                    </span>
                  </div>

                  {/* Winrate & Timestamp */}
                  <div className="col-span-1 sm:col-span-2 flex flex-col items-end text-right">
                    <span className="text-[#00FFCC] font-bold text-xs">{entry.winrate} WR</span>
                    <span className="text-[10px] text-white/40">{entry.time}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Live Status & Direct Action Ticker */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-4 border-t border-white/10 text-xs text-white/60">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[#00FFCC]">
                <Broadcast size={14} weight="bold" />
                <span>Live Onchain Radar Active</span>
              </span>
              <span>·</span>
              <span className="text-white/40">Tracking 4,280+ Verified Smart Wallets</span>
            </div>

            <button
              onClick={() => window.open("https://forms.gle/dHNpTFpUBFaHvhME9", "_blank")}
              className="inline-flex items-center gap-2 text-white hover:text-[#00FFCC] font-bold transition-colors cursor-pointer"
            >
              <span>Track Whale Clusters in Real Time</span>
              <ArrowRight size={13} weight="bold" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SmartMoneyConviction;
