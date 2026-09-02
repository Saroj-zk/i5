import { ArrowRight } from '@phosphor-icons/react';

export function LeaderboardConviction() {
  return (
    <section className="relative py-20 sm:py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-black border-b border-white/10 select-none overflow-hidden">

      {/* Ambient Refractive Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-br from-[#00FFCC]/7 via-[#38bdf8]/4 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-[#13c38f]/5 via-transparent to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            {/* Left Kicker Tag with Red Pulsing LIVE NOW */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 flex-wrap">
              <span className="text-[#00FFCC] text-xs">✦</span>
              <span className="text-xs font-mono font-medium tracking-widest text-[#00FFCC] uppercase">
                SOCIAL INTELLIGENCE LAYER
              </span>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest text-[#ff3b57] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3b57] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3b57] shadow-[0_0_10px_#ff3b57]" />
                </span>
                <span>LIVE NOW</span>
              </div>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-white uppercase leading-[1.08] tracking-[-0.03em]"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              YOUR GROUP CHAT <br className="hidden sm:inline" />
              <span className="text-[#00FFCC] drop-shadow-[0_0_30px_rgba(0,255,204,0.35)]">JUST GOT PROFITABLE.</span>
            </h2>
            <p
              className="text-white/60 text-sm sm:text-base mt-3.5 leading-relaxed max-w-xl font-normal"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              Longs, Shorts and fresh positions keep hitting the group. See what’s live, check the numbers, and copy the trades you rate with your own size and risk.
            </p>
          </div>

          {/* Right Column: Premium Liquid Glass Action Button */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => window.open("https://forms.gle/dHNpTFpUBFaHvhME9", "_blank")}
              className="relative group px-6 py-3 rounded-full border border-[#00FFCC]/40 hover:border-[#00FFCC] bg-gradient-to-r from-[#00FFCC]/15 via-white/[0.06] to-[#38bdf8]/15 hover:from-[#00FFCC]/25 hover:to-[#38bdf8]/25 backdrop-blur-2xl text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(0,255,204,0.18),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,204,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] cursor-pointer flex items-center gap-2.5 overflow-hidden"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              {/* Shimmer Sweep Effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform ease-out pointer-events-none" />
              
              <span>ENTER ALPHA TRADE</span>
              <div className="w-5 h-5 rounded-full bg-[#00FFCC]/20 group-hover:bg-[#00FFCC] flex items-center justify-center text-[#00FFCC] group-hover:text-black transition-all">
                <ArrowRight size={11} weight="bold" />
              </div>
            </button>
          </div>
        </div>

        {/* Bento Grid Layout (Harmonious Scale, Premium Depth, Clear Visuals) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* LEFT BENTO — LIVE GROUP ACTIVITY (5 Columns) */}
          <div className="lg:col-span-5 rounded-3xl border border-white/[0.08] hover:border-white/15 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-black/80 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden group transition-all duration-300">

            <div className="relative z-10 w-full flex flex-col gap-5">
              
              {/* Clean Stats Bar */}
              <div className="flex items-baseline justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span
                    className="text-2xl sm:text-3xl font-bold text-[#00FFCC] block tracking-tight drop-shadow-[0_0_15px_rgba(0,255,204,0.25)]"
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
                    $128.4M
                  </span>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mt-1">
                    POSITION VOLUME
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className="text-xl sm:text-2xl font-bold text-white block tracking-tight"
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
                    46,920
                  </span>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mt-1">
                    TRADES · 72% LONGS
                  </span>
                </div>
              </div>

              {/* Feed Rows */}
              <div className="flex flex-col gap-2.5">
                {/* Item 1 */}
                <div className="p-3 px-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 backdrop-blur-md flex items-center justify-between transition-all">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-[13px] font-medium text-white tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                      SOL-PERP
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#00FFCC]/10 text-[#00FFCC] border border-[#00FFCC]/20">
                      10× LONG
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-white/40 font-normal">$540K</span>
                    <span className="text-[#00FFCC] font-bold">+142.8%</span>
                    <span className="text-[10px] text-white/50 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-full hidden sm:inline">
                      312 copies
                    </span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-3 px-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 backdrop-blur-md flex items-center justify-between transition-all">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-[13px] font-medium text-white tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                      BTC-PERP
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#00FFCC]/10 text-[#00FFCC] border border-[#00FFCC]/20">
                      20× LONG
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-white/40 font-normal">$1.2M</span>
                    <span className="text-[#00FFCC] font-bold">+88.4%</span>
                    <span className="text-[10px] text-white/50 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-full hidden sm:inline">
                      480 copies
                    </span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-3 px-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 backdrop-blur-md flex items-center justify-between transition-all">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-[13px] font-medium text-white tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                      ETH-PERP
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#f43f5e]/10 text-[#f43f5e] border border-[#f43f5e]/20">
                      5× SHORT
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-white/40 font-normal">$380K</span>
                    <span className="text-[#f43f5e] font-bold">+34.6%</span>
                    <span className="text-[10px] text-white/50 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-full hidden sm:inline">
                      195 copies
                    </span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="p-3 px-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 backdrop-blur-md flex items-center justify-between transition-all">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-[13px] font-medium text-white tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                      SUI-PERP
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#00FFCC]/10 text-[#00FFCC] border border-[#00FFCC]/20">
                      15× LONG
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-white/40 font-normal">$210K</span>
                    <span className="text-[#00FFCC] font-bold">+62.1%</span>
                    <span className="text-[10px] text-white/50 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-full hidden sm:inline">
                      140 copies
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Copy */}
            <div className="pt-5 mt-5 border-t border-white/[0.08] relative z-10">
              <h3
                className="text-base sm:text-lg font-medium text-white uppercase tracking-tight mb-1.5"
                style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
              >
                THE GROUP DOESN’T STOP TRADING.
              </h3>
              <p
                className="text-xs sm:text-[13px] text-white/60 font-normal leading-relaxed"
                style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
              >
                See positions as they hit the group, who's going Long or Short, and which trades are getting copied.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 justify-between">

            {/* LARGE TOP-RIGHT HERO CARD */}
            <div className="rounded-3xl border border-white/[0.08] hover:border-white/15 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-black/80 backdrop-blur-xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-300">

              {/* Ambient Top Glow Flare */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#00FFCC]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative z-10">
                {/* Hero Metric */}
                <div>
                  <span
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] to-[#38bdf8] tracking-tight block drop-shadow-[0_0_30px_rgba(0,255,204,0.35)] leading-none"
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
                    +142.8%
                  </span>
                  <span className="text-[11px] font-mono font-medium tracking-wider text-white/60 uppercase mt-2 block">
                    LIVE POSITION PNL
                  </span>
                </div>

                {/* Right Side: Position Ticket */}
                <div className="relative z-10 w-full sm:w-auto">
                  <div className="p-3.5 px-4 rounded-xl border border-white/15 bg-black/60 backdrop-blur-xl flex flex-col gap-1.5 shadow-lg min-w-[210px]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs sm:text-[13px] font-mono font-bold text-white">SOL-PERP</span>
                      <span className="text-[9.5px] font-mono text-[#00FFCC] bg-[#00FFCC]/10 px-2 py-0.5 rounded-full font-semibold border border-[#00FFCC]/20">
                        LONG · 10×
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-white/50 pt-1.5 border-t border-white/[0.08]">
                      <span>ENTRY $178.40</span>
                      <span>SIZE $540,000</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono pt-0.5 text-white/40">
                      <span>Social Execution</span>
                      <span className="text-[#38bdf8] font-semibold">COPIED 312×</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Copy */}
              <div className="pt-5 mt-5 border-t border-white/[0.08] relative z-10">
                <h3
                  className="text-base sm:text-lg font-medium text-white uppercase tracking-tight mb-1"
                  style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                >
                  SEE IT. LIKE IT. COPY IT.
                </h3>
                <p
                  className="text-xs sm:text-[13px] text-white/60 font-normal leading-relaxed max-w-xl"
                  style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                >
                  Check the position, leverage and live PnL. Like the setup? Copy it with your own size and risk.
                </p>
              </div>

            </div>

            {/* BOTTOM 2 HIGHLIGHT CARDS ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

              {/* BOTTOM-LEFT — ACTIVE TRADERS */}
              <div className="rounded-3xl border border-white/[0.08] hover:border-white/15 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-black/80 backdrop-blur-xl p-6 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-300">

                {/* Metric Display */}
                <div className="mb-4 pb-3.5 border-b border-white/[0.08]">
                  <span
                    className="text-2xl sm:text-3xl font-bold text-white block tracking-tight"
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
                    8,920
                  </span>
                  <span className="text-[10px] font-mono text-[#00FFCC] uppercase tracking-wider block mt-1">
                    ACTIVE ALPHA TRADERS · 2,450 TODAY
                  </span>
                </div>

                <div>
                  <h3
                    className="text-sm sm:text-base font-medium text-white uppercase tracking-tight mb-1"
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
                    COPY. COUNTER. OR SCROLL.
                  </h3>
                  <p
                    className="text-xs text-white/60 font-normal leading-relaxed"
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
                    See what the group is trading and choose how you want to play it.
                  </p>
                </div>
              </div>

              {/* BOTTOM-RIGHT — REWARDS EARNED */}
              <div className="rounded-3xl border border-white/[0.08] hover:border-white/15 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-black/80 backdrop-blur-xl p-6 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-300">

                {/* Metric Display */}
                <div className="mb-4 pb-3.5 border-b border-white/[0.08]">
                  <span
                    className="text-2xl sm:text-3xl font-bold text-[#00FFCC] block tracking-tight drop-shadow-[0_0_20px_rgba(0,255,204,0.25)]"
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
                    $194.5K
                  </span>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block mt-1">
                    REWARDS EARNED & DISTRIBUTED
                  </span>
                </div>

                <div>
                  <h3
                    className="text-sm sm:text-base font-medium text-white uppercase tracking-tight mb-1"
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
                    BRING THE CREW. GET REWARDED.
                  </h3>
                  <p
                    className="text-xs text-white/60 font-normal leading-relaxed"
                    style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                  >
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

export default LeaderboardConviction;
