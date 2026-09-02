import { useState } from 'react';
import { 
  MagnifyingGlass,
  ChartLineUp, Target, Cpu,
  GitFork, UsersThree,
  ShieldCheck
} from '@phosphor-icons/react';

export function RevenueEngine() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('referrals');
  const referralLink = 'i5.trade/ref/alpha-9f2c';

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${referralLink}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Trimmed to 4 logs to fit perfectly without a scrollbar
  const REFERRAL_LOGS = [
    { 
      date: 'Today 18:15', 
      wallet: '0x7a81...4f39', 
      friendName: 'Alex P.', 
      avatar: '/avatars/bayc.jpg',
      tier: 'Level 1 · Direct', 
      pair: 'SOL-PERP', 
      feeCut: '25% Share', 
      status: 'Settled' 
    },
    { 
      date: 'Today 18:11', 
      wallet: '0x3d91...7e2a', 
      friendName: 'CryptoKev', 
      avatar: '/avatars/azuki.jpg',
      tier: 'Level 1 · Direct', 
      pair: 'BTC-PERP', 
      feeCut: '25% Share', 
      status: 'Settled' 
    },
    { 
      date: 'Today 14:42', 
      wallet: '0x1a82...9b5c', 
      friendName: 'NovaTrader', 
      avatar: '/avatars/punk.jpg',
      tier: 'Level 2 · Squad', 
      pair: 'ETH-PERP', 
      feeCut: '8% Share', 
      status: 'Settled' 
    },
    { 
      date: 'Yesterday', 
      wallet: '0x992b...18de', 
      friendName: 'SolanaWhale', 
      avatar: '/avatars/milady.jpg',
      tier: 'Level 1 · Direct', 
      pair: 'SOL-PERP', 
      feeCut: '25% Share', 
      status: 'Settled' 
    },
  ];

  return (
    <section 
      id="revenue-engine" 
      className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#030304] border-b border-white/5 select-none overflow-hidden text-left"
    >
      {/* Hyper-Realistic Ambient Lighting & Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-[#00FFCC]/5 via-[#38bdf8]/5 to-transparent rounded-full blur-[260px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Section Title Header - Compacted */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-white/5 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00FFCC]/30 bg-[#00FFCC]/10 mb-3 font-mono text-[9px] text-[#00FFCC] backdrop-blur-md shadow-[0_0_20px_rgba(0,255,204,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC] shadow-[0_0_8px_#00FFCC] animate-pulse" />
              <span className="uppercase tracking-[0.2em] font-bold">FRIENDS REFERRAL NETWORK</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-medium text-white uppercase leading-[1.05] tracking-[-0.03em]"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              INVITE FRIENDS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] to-[#38bdf8] drop-shadow-[0_0_40px_rgba(0,255,204,0.4)]">
                EARN FEE CUTS.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 font-mono">
            {/* 1-Click Referral Link (Physical Display Style) */}
            <div className="flex items-center gap-2 p-1 pl-4 rounded-xl bg-[#090a0f] border-t border-l border-white/10 border-b border-r border-black shadow-[inset_0_4px_20px_rgba(0,0,0,0.5),0_2px_10px_rgba(0,0,0,0.8)] text-xs">
              <span className="text-white/90 font-bold tracking-tight truncate drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                {referralLink}
              </span>
              <button
                onClick={handleCopy}
                className="px-4 py-1.5 rounded-lg bg-gradient-to-b from-[#00FFCC] to-[#00ccaa] hover:from-[#33ffdd] hover:to-[#00eebb] text-black font-black text-[10px] uppercase tracking-widest transition-all duration-200 shadow-[0_0_20px_rgba(0,255,204,0.4),inset_0_1px_1px_rgba(255,255,255,0.8)] border border-[#00aa88] shrink-0 cursor-pointer active:scale-95"
              >
                {copied ? 'COPIED' : 'COPY'}
              </button>
            </div>
          </div>
        </div>

        {/* ─── ULTRA-HIGH-END COMPACT DASHBOARD TERMINAL ─── */}
        <div className="rounded-[24px] p-1.5 bg-gradient-to-b from-white/10 to-transparent shadow-[0_40px_100px_rgba(0,0,0,0.95),0_0_60px_rgba(0,255,204,0.05)] relative overflow-hidden backdrop-blur-3xl">
          {/* Internal Frame */}
          <div className="rounded-[20px] border border-black/50 bg-[#0a0b10]/90 backdrop-blur-xl overflow-hidden font-sans text-xs flex flex-col md:flex-row relative z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            
            {/* ═══ 1. LEFT SIDEBAR (Ultra-Crafted Navigation - Compact) ═══ */}
            <div className="w-full md:w-[240px] p-5 bg-[#07080b]/95 border-r border-black/80 flex flex-col justify-between shadow-[2px_0_10px_rgba(0,0,0,0.5)] z-20">
              <div>
                {/* Brand Logo with Physical Gem Glow */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00FFCC] to-[#005544] text-black font-black flex items-center justify-center text-sm shadow-[0_0_30px_rgba(0,255,204,0.5),inset_0_2px_4px_rgba(255,255,255,0.6)] border-t border-l border-white/40">
                    i5
                  </div>
                  <div>
                    <span className="text-white font-black text-lg tracking-tight font-mono block leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                      i5.trade
                    </span>
                    <span className="text-[9px] text-[#00FFCC] font-mono tracking-widest font-bold mt-0.5 block">HYPERLIQUID L1</span>
                  </div>
                </div>

                {/* Nav Group 1: Core Markets */}
                <div className="mb-5">
                  <span className="text-[8px] uppercase font-mono text-white/20 tracking-[0.2em] font-bold block mb-2 px-2">
                    Trading Markets
                  </span>
                  <div className="space-y-1 font-mono">
                    <button className="w-full text-left px-2 py-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2.5 text-[11px] font-medium">
                      <ChartLineUp size={14} className="text-white/30" />
                      <span>Perpetuals DEX</span>
                    </button>
                    <button className="w-full text-left px-2 py-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2.5 text-[11px] font-medium">
                      <Target size={14} className="text-white/30" />
                      <span>Meme Sniper Engine</span>
                    </button>
                    <button className="w-full text-left px-2 py-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2.5 text-[11px] font-medium">
                      <Cpu size={14} className="text-white/30" />
                      <span>Trading AI Agents</span>
                    </button>
                  </div>
                </div>

                {/* Nav Group 2: Affiliate Network (Active Neon Highlight) */}
                <div className="mb-4">
                  <span className="text-[8px] uppercase font-mono text-white/20 tracking-[0.2em] font-bold block mb-2 px-2">
                    Referral Network
                  </span>
                  <div className="space-y-1 font-mono">
                    <button 
                      onClick={() => setActiveTab('referrals')}
                      className={`w-full text-left px-2 py-2 rounded-lg font-bold flex items-center gap-2.5 text-[11px] transition-all relative overflow-hidden ${
                        activeTab === 'referrals'
                          ? 'text-[#00FFCC] bg-gradient-to-r from-[#00FFCC]/15 to-transparent border-l-2 border-[#00FFCC] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                          : 'text-white/50 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {activeTab === 'referrals' && (
                        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#00FFCC]/40 to-transparent blur-md" />
                      )}
                      <GitFork size={14} className="text-[#00FFCC] relative z-10" weight="bold" />
                      <span className="relative z-10 drop-shadow-[0_0_8px_rgba(0,255,204,0.5)]">3-Tier Referral Tree</span>
                    </button>
                    <button className="w-full text-left px-2 py-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2.5 text-[11px] font-medium">
                      <UsersThree size={14} className="text-white/30" />
                      <span>Telegram Clan Leagues</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Network Status (Physical LED style) */}
              <div className="pt-4 border-t border-white/[0.04] space-y-3 font-mono text-[9px] text-white/40">
                <div className="flex items-center gap-2.5 px-2.5 bg-[#0a0c10] py-1.5 rounded-md border border-black shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFCC] opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFCC] shadow-[0_0_8px_#00FFCC]"></span>
                  </div>
                  <span className="text-white/70 font-semibold tracking-wider uppercase">HL Mainnet Sync</span>
                </div>
              </div>
            </div>

            {/* ═══ 2. MAIN CENTER ARENA (High-End Depth & Polish - Compact) ═══ */}
            <div className="flex-1 p-5 md:p-6 flex flex-col overflow-hidden relative z-10 bg-[#0a0b10]">
              
              {/* Top Navigation Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 mb-5 border-b border-white/[0.04]">
                <div className="relative flex-1 w-full max-w-[300px]">
                  <MagnifyingGlass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                  <input 
                    type="text"
                    placeholder="Search downline..."
                    className="w-full bg-[#050608] border-t border-l border-white/5 border-b border-r border-black shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] rounded-lg pl-9 pr-3 py-2 text-[10px] text-white placeholder-white/20 focus:outline-none focus:border-[#00FFCC]/50 transition-colors font-mono"
                  />
                </div>

                <div className="flex items-center gap-3 font-mono">
                  {/* Glass Connect Button */}
                  <button className="group px-3 py-1.5 rounded-lg bg-[#00FFCC]/10 border border-[#00FFCC]/30 hover:bg-[#00FFCC]/20 text-[#00FFCC] font-bold text-[10px] flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,204,0.1),inset_0_1px_2px_rgba(255,255,255,0.2)] cursor-pointer backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC] shadow-[0_0_6px_#00FFCC] group-hover:scale-110 transition-transform" />
                    <span className="drop-shadow-[0_0_8px_rgba(0,255,204,0.5)]">0x7a81...4f39</span>
                  </button>
                </div>
              </div>

              {/* 4 HIGH-CRAFT VIP HERO CARDS (Glassmorphism & Depth - Compact) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                
                {/* ── CARD 1: 3D SHIELD & VIP STATUS ── */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#181a24] to-[#0c0d12] border-t border-l border-white/10 border-b border-r border-black flex flex-col justify-between relative overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.6),inset_0_0_15px_rgba(255,255,255,0.02)] group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between text-[8px] text-white/40 font-mono mb-2 tracking-widest uppercase">
                    <span className="text-white font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 shadow-inner">
                      TIER STATUS
                    </span>
                  </div>

                  {/* High-Res 3D Silver Shield Asset - Scaled Down */}
                  <div className="my-2 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-[#00FFCC]/20 rounded-full blur-[15px]" />
                      <img 
                        src="/assets/silver-shield.jpg" 
                        alt="Silver VIP Shield" 
                        className="w-full h-full object-cover rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.8)] border border-white/5 mix-blend-screen"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-12 h-12 rounded-xl bg-gradient-to-b from-[#e0e0e0] to-[#707070] p-[2px] shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        <div className="w-full h-full rounded-xl bg-[#14151c] flex items-center justify-center text-white">
                           <ShieldCheck size={24} weight="fill" className="text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]" />
                        </div>
                      </div>
                    </div>
                    <span className="text-white font-black text-[11px] tracking-[0.1em] uppercase mt-2.5 block font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      LEVEL 01
                    </span>
                  </div>

                  {/* Milestone Progress Bar */}
                  <div className="space-y-1.5 mt-2">
                    <div className="flex items-center justify-between text-[8px] text-[#00FFCC] font-mono font-bold tracking-widest">
                      <span>POOL</span>
                      <span>36.0% MAX</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] overflow-hidden p-[1px]">
                      <div className="w-[75%] h-full bg-gradient-to-r from-[#00FFCC]/50 to-[#00FFCC] rounded-full shadow-[0_0_8px_#00FFCC]" />
                    </div>
                  </div>
                </div>

                {/* ── CARD 2: TIER 1 (25% DIRECT CUT) ── */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#2a1d06] via-[#120d02] to-[#0a0701] border-t border-l border-[#d4af37]/30 border-b border-r border-black flex flex-col justify-between text-left relative overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(212,175,55,0.05)] group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#ffd166]/15 rounded-full blur-[20px] pointer-events-none group-hover:bg-[#ffd166]/25 transition-colors duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-[8px] text-white/50 font-mono mb-3 tracking-widest uppercase">
                      <span>Tier 01</span>
                      <span className="text-[#ffd166] font-bold px-1.5 py-0.5 rounded bg-[#ffd166]/10 border border-[#ffd166]/30 shadow-[0_0_8px_rgba(255,209,102,0.2)]">
                        DIRECT
                      </span>
                    </div>
                    
                    <div className="mt-3 mb-1">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#ffe8a1] to-[#cca329] font-mono tracking-tighter leading-none drop-shadow-[0_4px_10px_rgba(255,209,102,0.4)]">
                        25%
                      </div>
                    </div>
                    <span className="text-[10px] text-[#ffd166] font-sans font-semibold tracking-wide block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      Direct Fee Share
                    </span>
                  </div>

                  <div className="relative z-10 mt-3 pt-2 border-t border-white/[0.05] text-[9px] text-white/40 font-mono flex items-center justify-between uppercase tracking-wider">
                    <span>Trade Vol</span>
                    <span className="text-white/80 font-bold">Perps</span>
                  </div>
                </div>

                {/* ── CARD 3: TIER 2 (8% SQUAD BOOST) ── */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#06291d] via-[#02100b] to-[#010805] border-t border-l border-[#00FFCC]/20 border-b border-r border-black flex flex-col justify-between text-left relative overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(0,255,204,0.03)] group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#00FFCC]/10 rounded-full blur-[20px] pointer-events-none group-hover:bg-[#00FFCC]/20 transition-colors duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-[8px] text-white/50 font-mono mb-3 tracking-widest uppercase">
                      <span>Tier 02</span>
                      <span className="text-[#00FFCC] font-bold px-1.5 py-0.5 rounded bg-[#00FFCC]/10 border border-[#00FFCC]/30 shadow-[0_0_8px_rgba(0,255,204,0.2)]">
                        SQUAD
                      </span>
                    </div>
                    
                    <div className="mt-3 mb-1">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#aafff0] to-[#00b399] font-mono tracking-tighter leading-none drop-shadow-[0_4px_10px_rgba(0,255,204,0.4)]">
                        8%
                      </div>
                    </div>
                    <span className="text-[10px] text-[#00FFCC] font-sans font-semibold tracking-wide block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      Squad Passive
                    </span>
                  </div>

                  <div className="relative z-10 mt-3 pt-2 border-t border-white/[0.05] text-[9px] text-white/40 font-mono flex items-center justify-between uppercase tracking-wider">
                    <span>Downline</span>
                    <span className="text-[#00FFCC]/80 font-bold">Auto</span>
                  </div>
                </div>

                {/* ── CARD 4: TIER 3 (3% NETWORK ROYALTY) ── */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#061c2e] via-[#020b12] to-[#010509] border-t border-l border-[#38bdf8]/20 border-b border-r border-black flex flex-col justify-between text-left relative overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(56,189,248,0.03)] group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#38bdf8]/10 rounded-full blur-[20px] pointer-events-none group-hover:bg-[#38bdf8]/20 transition-colors duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-[8px] text-white/50 font-mono mb-3 tracking-widest uppercase">
                      <span>Tier 03</span>
                      <span className="text-[#38bdf8] font-bold px-1.5 py-0.5 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/30 shadow-[0_0_8px_rgba(56,189,248,0.2)]">
                        NETWORK
                      </span>
                    </div>
                    
                    <div className="mt-3 mb-1">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#bae6fd] to-[#0284c7] font-mono tracking-tighter leading-none drop-shadow-[0_4px_10px_rgba(56,189,248,0.4)]">
                        3%
                      </div>
                    </div>
                    <span className="text-[10px] text-[#38bdf8] font-sans font-semibold tracking-wide block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      Network Royalty
                    </span>
                  </div>

                  <div className="relative z-10 mt-3 pt-2 border-t border-white/[0.05] text-[9px] text-white/40 font-mono flex items-center justify-between uppercase tracking-wider">
                    <span>3rd-Gen</span>
                    <span className="text-[#38bdf8]/80 font-bold">Perpetual</span>
                  </div>
                </div>

              </div>

              {/* ── REAL-TIME FRIENDS REFERRAL LEDGER TABLE (No Scroll, Compact) ── */}
              <div className="rounded-xl border-t border-l border-white/[0.08] border-b border-r border-black bg-[#07080b]/90 shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.01)] overflow-hidden backdrop-blur-md">
                <div className="p-3 px-5 bg-gradient-to-r from-white/[0.03] to-transparent border-b border-white/[0.05] flex items-center justify-between font-mono">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-sm bg-[#00FFCC] shadow-[0_0_8px_#00FFCC]" />
                    <span className="text-white font-black tracking-wider text-[11px] uppercase">Live Distribution Feed</span>
                  </div>
                </div>

                <div className="font-mono text-xs overflow-hidden">
                  <div className="grid grid-cols-12 gap-3 px-5 py-2.5 text-[8px] text-white/30 uppercase tracking-widest border-b border-white/[0.02]">
                    <div className="col-span-2">Time</div>
                    <div className="col-span-4">Node</div>
                    <div className="col-span-3 hidden sm:block">Route</div>
                    <div className="col-span-3 text-right">Yield</div>
                  </div>

                  {REFERRAL_LOGS.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-3 px-5 py-2.5 items-center border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                      
                      {/* Date & Time */}
                      <div className="col-span-2 text-white/40 text-[9px]">{row.date}</div>

                      {/* Received From */}
                      <div className="col-span-5 sm:col-span-4 flex items-center gap-2.5">
                        <div className="relative">
                          <img 
                            src={row.avatar} 
                            alt={row.friendName} 
                            className="w-6 h-6 rounded object-cover border border-white/20 shadow-[0_2px_5px_rgba(0,0,0,0.5)] z-10 relative" 
                          />
                        </div>
                        <div className="min-w-0">
                          <span className="text-white font-bold text-[10px] block truncate">{row.friendName}</span>
                          <span className="text-white/30 text-[8px] block font-mono truncate tracking-wider">{row.wallet}</span>
                        </div>
                      </div>

                      {/* Tier Relationship */}
                      <div className="col-span-3 hidden sm:block">
                        <span className="text-white/50 text-[10px] font-sans block">{row.tier}</span>
                        <span className="text-white/80 font-bold text-[9px]">{row.pair}</span>
                      </div>

                      {/* Fee Share Rate & Status */}
                      <div className="col-span-5 sm:col-span-3 flex items-center justify-end gap-2">
                        <span className="text-[#00FFCC] font-black text-[11px] drop-shadow-[0_0_5px_rgba(0,255,204,0.4)] whitespace-nowrap">
                          {row.feeCut}
                        </span>
                        <span className="text-[7px] font-bold text-[#00FFCC] bg-[#00FFCC]/10 border border-[#00FFCC]/30 px-1.5 py-0.5 rounded shadow-[0_0_3px_rgba(0,255,204,0.2)] whitespace-nowrap">
                          ✓ {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default RevenueEngine;
