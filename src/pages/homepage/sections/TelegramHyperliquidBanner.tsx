import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TelegramLogo, Check, ArrowRight, ShieldCheck } from '@phosphor-icons/react';

export function TelegramHyperliquidBanner() {
  const [copied, setCopied] = useState(false);
  const [activeSignal, setActiveSignal] = useState(0);

  const SIGNALS = [
    {
      id: 0,
      protocol: 'Hyperliquid L1 Perps',
      trader: '0x7a8...92c',
      traderLabel: 'Leaderboard #1',
      symbol: 'SOL-PERP',
      side: 'LONG 25x',
      posSize: '$640,000 (4,486 SOL)',
      avgEntry: '$142.65',
      markPrice: '$151.80',
      pnlValue: '+$41,046.90',
      roePercent: '+160.7% ROE',
      timeAgo: '42ms ago',
      context: 'Aggressive taker buy swept $2.4M asks. Open Interest +12.4% with negative funding skew.',
      badge: 'Whale Long',
      badgeColor: 'text-[#00FFCC] bg-[#00FFCC]/10 border-[#00FFCC]/30',
      pnlColor: 'text-[#00FFCC]',
    },
    {
      id: 1,
      protocol: 'Solana DEX Migration',
      trader: 'AlphaKOL.eth',
      traderLabel: 'Smart Money',
      symbol: 'PENGU / SOL',
      side: 'SPOT ACCUMULATE',
      posSize: '120 SOL ($18,240)',
      avgEntry: '$0.0384 ($3.8M MC)',
      markPrice: '$0.0892 ($8.9M MC)',
      pnlValue: '+$24,129.60',
      roePercent: '+132.3% ROI',
      timeAgo: '2m ago',
      context: '3 Tier-1 Smart Money wallets accumulated in same block post-bonding curve. Liquidity locked.',
      badge: 'Smart Money',
      badgeColor: 'text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/30',
      pnlColor: 'text-[#38bdf8]',
    },
    {
      id: 2,
      protocol: 'Hyperliquid Liq Engine',
      trader: 'SqueezeRadar_Bot',
      traderLabel: 'Short Squeeze',
      symbol: 'BTC-PERP',
      side: 'LONG 50x',
      posSize: '$1,850,000 (27.0 BTC)',
      avgEntry: '$68,420.00',
      markPrice: '$69,280.00',
      pnlValue: '+$23,220.00',
      roePercent: '+62.7% ROE',
      timeAgo: '18s ago',
      context: 'Cumulative Volume Delta (CVD) diverged sharply from spot. $18.4M short stops cascade-triggered.',
      badge: 'Liquidation Cascade',
      badgeColor: 'text-[#f43f5e] bg-[#f43f5e]/10 border-[#f43f5e]/30',
      pnlColor: 'text-[#f43f5e]',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % SIGNALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [SIGNALS.length]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const current = SIGNALS[activeSignal];

  return (
    <section className="relative w-full h-full min-h-screen flex items-center justify-center bg-black overflow-hidden select-none py-16 sm:py-20 lg:py-0">
      
      {/* Background Overlay Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30 mix-blend-screen">
        <img
          src="/overlaay.png"
          alt="Overlay Grid"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Atmospheric Refractive Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00FFCC]/10 via-[#38bdf8]/5 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-[380px] h-[380px] bg-[#13c38f]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative h-full flex items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-h-[80vh] py-10 lg:py-14">
          
          {/* Left Column: Clean, Proportionate Modern Typography */}
          <div className="lg:col-span-6 flex flex-col items-start w-full relative z-20">
            
            {/* Top Micro Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md mb-5 sm:mb-6"
            >
              <span className="text-[#00FFCC] text-xs">✦</span>
              <span
                className="text-xs font-normal text-white/80 tracking-wide"
                style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
              >
                Live on Hyperliquid · Built for Telegram
              </span>
            </motion.div>

            {/* Display Headline (Proportionately Sized) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-1 w-full"
            >
              <h1
                className="text-white uppercase text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[62px] font-medium leading-[1.06] tracking-[-0.03em]"
                style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif', fontWeight: 500 }}
              >
                <span className="block text-white">SEE WHO MOVED.</span>
                <span
                  className="block text-[#00FFCC] drop-shadow-[0_0_35px_rgba(0,255,204,0.45)]"
                  style={{ color: '#00FFCC' }}
                >
                  MAKE YOUR MOVE.
                </span>
              </h1>
            </motion.div>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/70 text-xs sm:text-[13.5px] font-normal leading-[1.65] max-w-md lg:max-w-[30rem] mt-5"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              Follow top-performing traders, track whale positions and liquidation pressure, and get the context behind every move before you trade.
            </motion.p>

            {/* Frosted Glass CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 sm:mt-8"
            >
              <button
                onClick={() => window.open("https://forms.gle/dHNpTFpUBFaHvhME9", "_blank")}
                className="px-6 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-xs sm:text-[13px] uppercase tracking-wider font-medium transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer flex items-center gap-2"
                style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
              >
                <span>ENTER THE i5 TESTNET</span>
                <ArrowRight size={14} weight="bold" />
              </button>
            </motion.div>

            {/* Telemetry Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-2 text-xs text-white/50 border-t border-white/[0.08] pt-4 w-full max-w-md"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              <div className="inline-flex items-center gap-1.5">
                <span className="text-[#00FFCC]">✦</span>
                <span className="text-white/70">Sub-Second Finality</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="inline-flex items-center gap-1.5">
                <span className="text-[#38bdf8]">✦</span>
                <span className="text-white/70">500+ Tracked Whales</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="inline-flex items-center gap-1.5">
                <span className="text-[#22c55e]">✦</span>
                <span className="text-white/70">Telegram 1-Tap Execution</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Compact, High-Density Liquid Glass Console */}
          <div className="lg:col-span-6 relative w-full flex justify-center z-20 mt-4 lg:mt-0">
            
            {/* Liquid Glass Shell (Compact & Proportionate) */}
            <div className="w-full max-w-[440px] xl:max-w-[460px] rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-black/60 backdrop-blur-2xl p-4 sm:p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              
              {/* Top Specular Glow Flare */}
              <div className="absolute -top-14 -right-14 w-40 h-40 bg-gradient-to-br from-[#00FFCC]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-[#00FFCC] shadow-inner">
                    <TelegramLogo size={16} weight="fill" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-semibold text-white tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                      i5 Alpha Trade
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00FFCC]/10 border border-[#00FFCC]/25 text-[10px] font-medium text-[#00FFCC]">
                  <span className="w-1 h-1 rounded-full bg-[#00FFCC]" />
                  <span>Live Feed</span>
                </div>
              </div>

              {/* Signal Switcher Tab Bar */}
              <div className="flex items-center gap-1.5 my-3">
                {SIGNALS.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSignal(idx)}
                    className={`flex-1 py-1 px-1.5 rounded-lg text-[10.5px] transition-all cursor-pointer truncate font-medium ${
                      activeSignal === idx
                        ? 'bg-[#00FFCC]/15 text-[#00FFCC] border border-[#00FFCC]/35 shadow-[0_0_8px_rgba(0,255,204,0.15)]'
                        : 'bg-white/[0.03] text-white/40 border border-white/5 hover:text-white/70'
                    }`}
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
                    {s.badge}
                  </button>
                ))}
              </div>

              {/* Dynamic Live Signal Content Tile */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-3.5 sm:p-4 relative overflow-hidden"
                >
                  {/* Trader Identifier */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-white" style={{ fontFamily: '"M PLUS 1 Code", monospace' }}>
                        {current.trader}
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full border ${current.badgeColor} font-medium`}>
                        {current.traderLabel}
                      </span>
                    </div>
                    <span className="text-[10px] text-white/40 font-normal">{current.timeAgo}</span>
                  </div>

                  {/* Main Position & Asset */}
                  <div className="flex items-baseline justify-between mt-0.5">
                    <div>
                      <span className="text-lg sm:text-xl font-semibold text-white tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                        {current.symbol}
                      </span>
                      <span className={`ml-2 text-[10px] font-semibold px-1.5 py-0.5 rounded border ${current.badgeColor}`}>
                        {current.side}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`text-base sm:text-lg font-bold font-mono ${current.pnlColor} drop-shadow-[0_0_10px_rgba(0,255,204,0.3)]`}>
                        {current.roePercent}
                      </span>
                    </div>
                  </div>

                  {/* Authentic Crypto Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2.5 mt-2.5 border-t border-white/[0.06] text-xs">
                    <div>
                      <span className="text-white/40 block text-[10px]">Avg Entry</span>
                      <strong className="text-white font-mono text-[11px]">{current.avgEntry}</strong>
                    </div>
                    <div>
                      <span className="text-white/40 block text-[10px]">Mark Price</span>
                      <strong className="text-white font-mono text-[11px]">{current.markPrice}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-white/40 block text-[10px]">Unrealized PnL</span>
                      <strong className={`font-mono text-[11px] ${current.pnlColor}`}>{current.pnlValue}</strong>
                    </div>
                  </div>

                  {/* Position Notional */}
                  <div className="mt-2 pt-1.5 border-t border-white/[0.04] flex items-center justify-between text-[10.5px] font-mono text-white/50">
                    <span>Position Size</span>
                    <span className="text-white/80">{current.posSize}</span>
                  </div>

                  {/* Context Intelligence Glass Tag */}
                  <div className="mt-2.5 p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-start gap-1.5">
                    <span className="text-xs text-[#00FFCC] shrink-0">✦</span>
                    <p className="text-[11px] text-white/75 font-normal leading-relaxed" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                      <strong className="text-[#00FFCC] font-medium">On-Chain Context:</strong> {current.context}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Frosted Glass 1-Tap Copy Action Bar */}
              <div className="mt-3.5 flex flex-col gap-1.5 relative z-10">
                <button
                  onClick={handleCopy}
                  className={`w-full py-2.5 px-4 rounded-full border backdrop-blur-xl text-xs font-medium transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_4px_20px_rgba(0,0,0,0.4)] flex items-center justify-between group cursor-pointer ${
                    copied
                      ? 'border-[#00FFCC]/40 bg-[#00FFCC]/15 text-[#00FFCC]'
                      : 'border-white/20 hover:border-[#00FFCC]/40 bg-white/[0.07] hover:bg-white/[0.12] text-white'
                  }`}
                  style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                >
                  {copied ? (
                    <div className="flex items-center justify-center gap-1.5 w-full text-center">
                      <Check size={15} weight="bold" className="text-[#00FFCC]" />
                      <span className="font-semibold text-[#00FFCC] text-xs">Position Replicated · Synced to Telegram</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <TelegramLogo size={15} weight="fill" className="text-[#38bdf8]" />
                        <span className="font-normal text-white/90">Replicate Move via Telegram</span>
                      </div>
                      <span className="text-[10.5px] text-[#00FFCC] font-mono font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        1-Tap Execution
                        <ArrowRight size={11} weight="bold" />
                      </span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/40 pt-0.5">
                  <ShieldCheck size={12} className="text-[#00FFCC]/70" />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>Non-custodial execution on Hyperliquid L1 orderflow</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default TelegramHyperliquidBanner;
