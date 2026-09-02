import { ArrowRight } from '@phosphor-icons/react';

export function AlphaFeed() {
  return (
    <section id="alpha-feed" className="py-24 bg-[#050505] relative overflow-hidden select-none z-20">
      
      {/* Subtle ambient glow behind cards */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00FFCC]/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12">
          <div className="max-w-2xl">
            
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-6 font-mono text-[10px] tracking-widest font-bold uppercase">
              <span className="text-[#00FFCC]">✦ Social Intelligence Layer</span>
              <span className="flex items-center gap-1.5 text-red-500">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                Live Now
              </span>
            </div>

            <h2 
              className="text-4xl sm:text-5xl md:text-[52px] font-medium text-white tracking-tight leading-[1.05] mb-5 uppercase"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              YOUR GROUP CHAT <br />
              <span className="text-[#00FFCC]">
                JUST GOT PROFITABLE.
              </span>
            </h2>
            <p className="text-[#71717a] text-sm md:text-base leading-relaxed max-w-xl font-sans">
              Longs, Shorts and fresh positions keep hitting the group. See what's live, 
              check the numbers, and copy the trades you rate with your own size and risk.
            </p>
          </div>
          
          <div className="pb-2">
            <button className="group px-6 py-3.5 rounded-full bg-[#111111] border border-[#00FFCC]/30 hover:border-[#00FFCC] text-white text-xs font-bold tracking-widest flex items-center gap-3 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,204,0.05)] hover:shadow-[0_0_20px_rgba(0,255,204,0.15)] uppercase">
              ENTER ALPHA TRADE
              <div className="w-5 h-5 rounded-full bg-[#00FFCC]/20 flex items-center justify-center group-hover:bg-[#00FFCC] transition-colors">
                <ArrowRight size={12} weight="bold" className="text-[#00FFCC] group-hover:text-black" />
              </div>
            </button>
          </div>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Leaderboard/Feed */}
            <div className="rounded-3xl p-7 bg-[#0d0d0d] border border-white/[0.03] shadow-lg flex flex-col">
              
              {/* Card Header Stats */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-[32px] font-bold text-[#00FFCC] tracking-tight mb-1 font-mono">
                    $128.4M
                  </div>
                  <div className="text-[9px] text-[#71717a] font-mono tracking-[0.2em] uppercase">
                    Position Volume
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[28px] font-bold text-white tracking-tight mb-1 font-mono">
                    46,920
                  </div>
                  <div className="text-[9px] text-[#71717a] font-mono tracking-[0.2em] uppercase">
                    Trades - 72% Longs
                  </div>
                </div>
              </div>

              {/* Trades List */}
              <div className="space-y-3">
                {/* Trade 1 */}
                <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#141414] border border-white/[0.02] group">
                  <div className="flex items-center gap-3">
                    <span className="text-white/90 font-mono text-sm font-bold tracking-wide">SOL-PERP</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#00FFCC]/10 text-[#00FFCC] text-[9px] font-bold font-mono tracking-wider">
                      10x LONG
                    </span>
                  </div>
                  <div className="flex items-center gap-4 font-mono">
                    <span className="text-[#71717a] text-[11px]">$540K</span>
                    <span className="text-[#00FFCC] text-[11px] font-bold">+142.8%</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#1a1a1a] text-[#71717a] text-[10px] font-medium border border-white/[0.02]">
                      312 copies
                    </span>
                  </div>
                </div>

                {/* Trade 2 */}
                <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#141414] border border-white/[0.02] group">
                  <div className="flex items-center gap-3">
                    <span className="text-white/90 font-mono text-sm font-bold tracking-wide">BTC-PERP</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#00FFCC]/10 text-[#00FFCC] text-[9px] font-bold font-mono tracking-wider">
                      20x LONG
                    </span>
                  </div>
                  <div className="flex items-center gap-4 font-mono">
                    <span className="text-[#71717a] text-[11px]">$1.2M</span>
                    <span className="text-[#00FFCC] text-[11px] font-bold">+88.4%</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#1a1a1a] text-[#71717a] text-[10px] font-medium border border-white/[0.02]">
                      488 copies
                    </span>
                  </div>
                </div>

                {/* Trade 3 */}
                <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#141414] border border-white/[0.02] group">
                  <div className="flex items-center gap-3">
                    <span className="text-white/90 font-mono text-sm font-bold tracking-wide">ETH-PERP</span>
                    <span className="px-2 py-0.5 rounded-md bg-red-500/10 text-red-500 text-[9px] font-bold font-mono tracking-wider">
                      5x SHORT
                    </span>
                  </div>
                  <div className="flex items-center gap-4 font-mono">
                    <span className="text-[#71717a] text-[11px]">$380K</span>
                    <span className="text-red-500 text-[11px] font-bold">+34.6%</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#1a1a1a] text-[#71717a] text-[10px] font-medium border border-white/[0.02]">
                      195 copies
                    </span>
                  </div>
                </div>

                {/* Trade 4 */}
                <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#141414] border border-white/[0.02] group">
                  <div className="flex items-center gap-3">
                    <span className="text-white/90 font-mono text-sm font-bold tracking-wide">SUI-PERP</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#00FFCC]/10 text-[#00FFCC] text-[9px] font-bold font-mono tracking-wider">
                      15x LONG
                    </span>
                  </div>
                  <div className="flex items-center gap-4 font-mono">
                    <span className="text-[#71717a] text-[11px]">$210K</span>
                    <span className="text-[#00FFCC] text-[11px] font-bold">+62.1%</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#1a1a1a] text-[#71717a] text-[10px] font-medium border border-white/[0.02]">
                      140 copies
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column Text Block */}
            <div className="pl-1 pr-6 py-1">
              <h3 className="text-white font-bold text-base mb-1.5 uppercase tracking-wide font-sans">
                THE GROUP DOESN'T STOP TRADING.
              </h3>
              <p className="text-[#71717a] text-[13px] leading-relaxed">
                See positions as they hit the group, who's going Long or Short, and which trades are getting copied.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Card 2: Live Position Focus */}
            <div className="rounded-3xl p-8 bg-[#0d0d0d] border border-white/[0.03] shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
              
              <div>
                <div className="text-[56px] font-black text-[#60a5fa] bg-clip-text text-transparent bg-gradient-to-r from-[#00FFCC] to-[#3b82f6] tracking-tighter mb-1 leading-none font-mono">
                  +142.8%
                </div>
                <div className="text-[10px] text-[#71717a] font-mono tracking-[0.2em] uppercase mt-2">
                  Live Position PNL
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141414] border border-white/[0.02] min-w-[220px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/90 font-bold font-mono text-xs">SOL-PERP</span>
                  <span className="px-2 py-0.5 rounded-md bg-[#00FFCC]/10 text-[#00FFCC] text-[8px] font-bold font-mono tracking-wider">
                    LONG - 10x
                  </span>
                </div>
                <div className="flex flex-col gap-1 mb-4 font-mono text-[9px] text-[#71717a] tracking-wider uppercase">
                  <div>ENTRY $178.40 SIZE $540,000</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-[#71717a] font-mono">Social Execution</span>
                  <span className="text-[9px] text-[#60a5fa] font-bold font-mono px-2 py-0.5 bg-[#3b82f6]/10 rounded-md border border-[#3b82f6]/20">
                    COPIED 312x
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column Top Text Block */}
            <div className="pl-1 pr-6 py-1">
              <h3 className="text-white font-bold text-base mb-1.5 uppercase tracking-wide font-sans">
                SEE IT. LIKE IT. COPY IT.
              </h3>
              <p className="text-[#71717a] text-[13px] leading-relaxed max-w-xl">
                Check the position, leverage and live PnL. Like the setup? Copy it with your own size and risk.
              </p>
            </div>

            {/* Bottom 2 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-1">
              
              {/* Card 3 (Bottom Left) */}
              <div className="rounded-3xl p-7 bg-[#0d0d0d] border border-white/[0.03] shadow-lg flex flex-col justify-between">
                <div>
                  <div className="text-[32px] font-bold text-white mb-2 font-mono leading-none">
                    8,920
                  </div>
                  <div className="text-[9px] text-[#00FFCC] font-mono tracking-[0.15em] uppercase font-bold mt-2">
                    Active Alpha Traders <span className="text-[#71717a] ml-1">· 2,450 TODAY</span>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-white/[0.04]">
                  <h3 className="text-white font-bold text-sm mb-1.5 uppercase tracking-wide font-sans">
                    COPY. COUNTER. OR SCROLL.
                  </h3>
                  <p className="text-[#71717a] text-xs leading-relaxed">
                    See what the group is trading and choose how you want to play it.
                  </p>
                </div>
              </div>

              {/* Card 4 (Bottom Right) */}
              <div className="rounded-3xl p-7 bg-[#0d0d0d] border border-white/[0.03] shadow-lg flex flex-col justify-between">
                <div>
                  <div className="text-[32px] font-bold text-[#00FFCC] mb-2 font-mono leading-none">
                    $194.5K
                  </div>
                  <div className="text-[9px] text-[#71717a] font-mono tracking-[0.15em] uppercase font-bold mt-2">
                    Rewards Earned & Distributed
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-white/[0.04]">
                  <h3 className="text-white font-bold text-sm mb-1.5 uppercase tracking-wide font-sans">
                    BRING THE CREW. GET REWARDED.
                  </h3>
                  <p className="text-[#71717a] text-xs leading-relaxed">
                    Share your referral, bring traders into Alpha Trade, and earn rewards.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AlphaFeed;
