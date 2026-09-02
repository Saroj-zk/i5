import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Broadcast,
  UsersThree, 
  TerminalWindow, 
  Cpu, 
  Target, 
  ChartLineUp
} from '@phosphor-icons/react';

const ROADMAP_STEPS = [
  {
    num: '01',
    phase: 'PHASE 01',
    title: 'News Intelligence',
    status: 'LIVE',
    isLive: true,
    isTop: true,
    icon: Broadcast,
    tagline: 'Sub-second breaking catalyst radar & AI reaction score',
  },
  {
    num: '02',
    phase: 'PHASE 02',
    title: 'Social Trading',
    status: 'LIVE',
    isLive: true,
    isTop: false,
    icon: UsersThree,
    tagline: 'Trading clan guilds, 1-tap copy & royalty fee sharing',
  },
  {
    num: '03',
    phase: 'MILESTONE',
    title: 'Testnet Releasing',
    status: 'ACTIVE NOW',
    isLive: true,
    isRelease: true,
    isTop: true,
    icon: TerminalWindow,
    tagline: 'Public trading tournament on Hyperliquid L1 sandbox',
  },
  {
    num: '04',
    phase: 'PHASE 03',
    title: 'Trading AI Agents',
    status: 'LIVE',
    isLive: true,
    isTop: false,
    icon: Cpu,
    tagline: 'Conversational Copilot & 24/7 autonomous quant bot',
  },
  {
    num: '05',
    phase: 'PHASE 04',
    title: 'Meme Sniper Engine',
    status: 'MAINNET',
    isLive: true,
    isTop: true,
    icon: Target,
    tagline: 'Bonding curve discovery, dev dump radar & auto-sniping',
  },
  {
    num: '06',
    phase: 'PHASE 05',
    title: 'Global Stocks',
    status: 'Q2 2025',
    isLive: false,
    isTop: false,
    icon: ChartLineUp,
    tagline: '24/7 synthetic stock perps with crypto collateral',
  },
];

export function ProductRoadmap() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section 
      id="product-roadmap" 
      className="relative py-24 sm:py-32 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#030305] border-b border-white/10 select-none overflow-hidden text-left"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[450px] bg-[#00FFCC]/5 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#00FFCC]/20 bg-[#00FFCC]/5 mb-3 font-mono text-[10.5px] text-[#00FFCC] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC] animate-pulse" />
              <span>EXECUTION ROADMAP</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-white uppercase leading-[1.08] tracking-[-0.03em]"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              THE ROADMAP. <br />
              <span className="text-[#00FFCC] drop-shadow-[0_0_30px_rgba(0,255,204,0.35)]">
                TIMELINE OF EXECUTION.
              </span>
            </h2>
          </div>
        </div>

        {/* HIGH-TECH PRECISION TIMELINE TRACK */}
        <div className="relative font-mono overflow-x-auto pb-8 pt-4 px-2 scrollbar-none">
          <div className="min-w-[1080px] px-3 flex flex-col items-stretch">
            
            {/* ════════════════ TIER 1: TOP CARDS ROW ════════════════ */}
            <div className="grid grid-cols-6 gap-5 h-[145px] items-end">
              {ROADMAP_STEPS.map((step, idx) => {
                const isHovered = hoveredIdx === idx;
                const Icon = step.icon;

                if (!step.isTop) {
                  return <div key={`top-empty-${idx}`} className="h-full" />;
                }

                return (
                  <div 
                    key={`top-${idx}`} 
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="flex flex-col items-center justify-end h-full relative"
                  >
                    {/* Top Clean Glass Box */}
                    <div
                      className={`w-full p-4 rounded-xl border transition-all duration-300 bg-[#09090e] flex flex-col justify-between ${
                        step.isRelease
                          ? 'border-[#00FFCC] bg-gradient-to-b from-[#00FFCC]/[0.12] to-[#09090e] shadow-[0_0_25px_rgba(0,255,204,0.2)]'
                          : isHovered
                          ? 'border-[#00FFCC]/70 shadow-[0_0_18px_rgba(0,255,204,0.15)]'
                          : 'border-white/10'
                      }`}
                    >
                      <div>
                        {/* Status & Icon Row */}
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <span 
                            className={`text-[8.5px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                              step.isRelease
                                ? 'bg-[#00FFCC] text-black font-bold'
                                : step.isLive
                                ? 'text-[#00FFCC] bg-[#00FFCC]/10 border border-[#00FFCC]/30'
                                : 'text-white/40 bg-white/[0.04] border border-white/10'
                            }`}
                          >
                            {step.status}
                          </span>
                          <Icon size={15} className={step.isRelease ? 'text-[#00FFCC]' : 'text-white/50'} weight="bold" />
                        </div>

                        {/* Title */}
                        <h3 
                          className="text-white font-bold text-xs sm:text-[13px] tracking-tight leading-snug mb-1 truncate"
                          style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                        >
                          {step.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-white/45 text-[10px] font-sans leading-tight line-clamp-2">
                          {step.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Precision Vertical Stem Leading Down Directly to Node */}
                    <div className={`w-[1.5px] h-6 transition-all duration-300 shrink-0 ${
                      step.isRelease || isHovered 
                        ? 'bg-[#00FFCC] shadow-[0_0_10px_rgba(0,255,204,0.8)]' 
                        : 'bg-[#00FFCC]/25'
                    }`} />
                  </div>
                );
              })}
            </div>

            {/* ════════════════ TIER 2: FUTURISTIC LASER CONDUIT & DIAL NODES ════════════════ */}
            <div className="relative h-[60px] flex items-center">
              
              {/* Outer Optical Conduit Chamber */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[14px] bg-[#00FFCC]/[0.02] border-y border-[#00FFCC]/10 rounded-full z-0 pointer-events-none" />

              {/* Inactive Future Track (Nodes 04 to 06) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[58.33%] h-[2px] bg-[#00FFCC]/15 z-0" />

              {/* Glowing Active Laser Core (0% to 41.67% at Testnet Node) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2.5px] w-[41.67%] bg-gradient-to-r from-[#00FFCC]/50 via-[#00FFCC] to-[#00FFCC] shadow-[0_0_18px_rgba(0,255,204,0.95)] z-0">
                {/* Smooth Traveling Neon Light Pulse */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-16 h-[4px] bg-[#00FFCC] rounded-full blur-[1.5px] shadow-[0_0_14px_#00FFCC]"
                  animate={{
                    left: ['0%', '92%'],
                    opacity: [0.2, 1, 1, 0.2],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* 6 Precision Concentric Dial Nodes */}
              <div className="grid grid-cols-6 gap-5 w-full relative z-10">
                {ROADMAP_STEPS.map((step, idx) => {
                  const isHovered = hoveredIdx === idx;
                  const isPassedOrCurrent = idx <= 2; // Nodes 0, 1, 2

                  return (
                    <div 
                      key={`node-${idx}`} 
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="flex items-center justify-center cursor-pointer relative"
                    >
                      {/* Active Beacon Pulse Aura for Testnet */}
                      {step.isRelease && (
                        <span className="absolute w-12 h-12 rounded-full border border-[#00FFCC]/40 animate-ping pointer-events-none" />
                      )}

                      {/* Outer Concentric Bezel */}
                      <div 
                        className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 bg-black ${
                          step.isRelease
                            ? 'border-[#00FFCC] shadow-[0_0_25px_rgba(0,255,204,0.9)] scale-105'
                            : isHovered
                            ? 'border-[#00FFCC] shadow-[0_0_18px_rgba(0,255,204,0.6)] scale-105'
                            : isPassedOrCurrent
                            ? 'border-[#00FFCC]/60 shadow-[0_0_10px_rgba(0,255,204,0.3)]'
                            : 'border-white/15'
                        }`}
                      >
                        {/* Inner Number Core */}
                        <div 
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            step.isRelease
                              ? 'bg-[#00FFCC] text-black font-bold'
                              : isPassedOrCurrent
                              ? 'bg-[#00FFCC]/10 text-[#00FFCC] font-bold border border-[#00FFCC]/30'
                              : 'bg-white/[0.03] text-white/40'
                          }`}
                        >
                          <span className="text-[10px] tracking-tight">{step.num}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ════════════════ TIER 3: BOTTOM CARDS ROW ════════════════ */}
            <div className="grid grid-cols-6 gap-5 h-[145px] items-start">
              {ROADMAP_STEPS.map((step, idx) => {
                const isHovered = hoveredIdx === idx;
                const Icon = step.icon;

                if (step.isTop) {
                  return <div key={`bottom-empty-${idx}`} className="h-full" />;
                }

                return (
                  <div 
                    key={`bottom-${idx}`} 
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="flex flex-col items-center justify-start h-full relative"
                  >
                    {/* Precision Vertical Stem Leading Up Directly to Node */}
                    <div className={`w-[1.5px] h-6 transition-all duration-300 shrink-0 ${
                      isHovered 
                        ? 'bg-[#00FFCC] shadow-[0_0_10px_rgba(0,255,204,0.8)]' 
                        : 'bg-[#00FFCC]/25'
                    }`} />

                    {/* Bottom Clean Glass Box */}
                    <div
                      className={`w-full p-4 rounded-xl border transition-all duration-300 bg-[#09090e] flex flex-col justify-between ${
                        isHovered
                          ? 'border-[#00FFCC]/70 shadow-[0_0_18px_rgba(0,255,204,0.15)]'
                          : 'border-white/10'
                      }`}
                    >
                      <div>
                        {/* Status & Icon Row */}
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <span 
                            className={`text-[8.5px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                              step.isLive
                                ? 'text-[#00FFCC] bg-[#00FFCC]/10 border border-[#00FFCC]/30'
                                : 'text-white/40 bg-white/[0.04] border border-white/10'
                            }`}
                          >
                            {step.status}
                          </span>
                          <Icon size={15} className="text-white/50" weight="bold" />
                        </div>

                        {/* Title */}
                        <h3 
                          className="text-white font-bold text-xs sm:text-[13px] tracking-tight leading-snug mb-1 truncate"
                          style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                        >
                          {step.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-white/45 text-[10px] font-sans leading-tight line-clamp-2">
                          {step.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductRoadmap;
