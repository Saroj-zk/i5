import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function TradeHeroBanner() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [livePrices, setLivePrices] = useState({
    btc: 67284.63,
    aapl: 193.42,
    pepe: 0.00001236,
    gold: 2318.40,
  });

  // Micro price fluctuation simulation to make the cards feel alive and dynamic
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePrices((prev) => ({
        btc: +(prev.btc + (Math.random() - 0.48) * 12).toFixed(2),
        aapl: +(prev.aapl + (Math.random() - 0.48) * 0.15).toFixed(2),
        pepe: +(prev.pepe + (Math.random() - 0.48) * 0.00000008).toFixed(8),
        gold: +(prev.gold + (Math.random() - 0.52) * 0.8).toFixed(2),
      }));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center bg-black overflow-hidden select-none py-10 lg:py-0">
      {/* Background Image with Dark Vignette & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-trade-banner.jpg"
          alt="Trade Every Market"
          className="w-full h-full object-cover object-center scale-100 lg:scale-[1.02] transition-transform duration-1000"
        />

        {/* Cinematic Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 lg:from-black/90 lg:via-black/40 lg:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 pointer-events-none" />
      </div>

      {/* Grid Pattern Overlay matching i5 branding */}
      <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center opacity-30 mix-blend-screen">
        <img
          src="/overlaay.png"
          alt="Overlay Grid"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full min-h-[80vh] py-8 lg:py-12">
          
          {/* Left Column: Big Bold Typography & CTA */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start justify-center relative z-20">
            {/* Top Micro Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#bbf438] animate-pulse" />
              <span
                className="text-[11px] font-mono tracking-widest uppercase text-white/70"
                style={{ fontFamily: '"M PLUS 1 Code", monospace' }}
              >
                MULTI-ASSET INTELLIGENCE
              </span>
            </motion.div>

            {/* Giant Display Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <h1
                className="uppercase leading-[0.88] tracking-[-0.025em] text-white"
                style={{
                  fontFamily: '"Oswald", "League Spartan", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(3rem, 7.5vw, 6.2rem)',
                }}
              >
                <span className="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">TRADE</span>
                <span
                  className="block text-[#bbf438] drop-shadow-[0_0_35px_rgba(187,244,56,0.4)]"
                  style={{ color: '#bbf438' }}
                >
                  EVERY MARKET.
                </span>
                <span className="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">STAY AHEAD.</span>
              </h1>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#D1D5DB] text-[1rem] sm:text-[1.12rem] lg:text-[1.2rem] font-light leading-relaxed max-w-lg mt-5 lg:mt-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Trade crypto, memes, and global stocks in one place. Powered by real-time intelligence and Agentic AI built for what moves next.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 mt-8 lg:mt-10"
            >
              <button
                onClick={() => window.open("https://forms.gle/dHNpTFpUBFaHvhME9", "_blank")}
                className="bg-[#bbf438] text-black font-bold text-sm sm:text-base px-8 py-3.5 rounded-full cursor-pointer hover:bg-[#a5e024] hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(187,244,56,0.4)] flex items-center gap-2 group"
                style={{ fontFamily: '"League Spartan", sans-serif' }}
              >
                <span>EXPLORE TESTNET</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Floating Live Glassmorphic Cards Overlay */}
          <div className="lg:col-span-5 xl:col-span-6 relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center pointer-events-auto">
            
            {/* CARD 1: BTCUSD (Top Left/Center of Right Area) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.04, y: -4 }}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
              className="absolute top-2 sm:top-6 left-0 sm:left-4 lg:left-8 w-[190px] sm:w-[220px] rounded-2xl bg-[#080d16]/75 backdrop-blur-xl border border-white/15 p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300"
              style={{
                boxShadow: activeCard === 1 ? '0 0 25px rgba(34,197,94,0.3), 0 8px 32px rgba(0,0,0,0.8)' : undefined,
                borderColor: activeCard === 1 ? 'rgba(187,244,56,0.4)' : 'rgba(255,255,255,0.15)'
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-bold text-xs sm:text-sm font-mono tracking-tight">BTCUSD</span>
                <span className="text-[#22c55e] text-[11px] font-mono font-semibold bg-[#22c55e]/10 px-1.5 py-0.5 rounded border border-[#22c55e]/20">+1.32%</span>
              </div>
              <p className="text-white/45 text-[9px] uppercase tracking-wider font-mono">BITCOIN / US DOLLAR</p>
              <div className="text-white font-mono font-bold text-lg sm:text-xl tracking-tight mt-1.5">
                ${livePrices.btc.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              {/* Green SVG Sparkline */}
              <div className="w-full h-8 mt-2 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="btcGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 22 Q 15 25, 30 18 T 60 14 T 80 8 T 100 4 L 100 30 L 0 30 Z" fill="url(#btcGrad)" />
                  <path d="M 0 22 Q 15 25, 30 18 T 60 14 T 80 8 T 100 4" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="100" cy="4" r="3" fill="#bbf438" className="animate-ping opacity-75" />
                  <circle cx="100" cy="4" r="2.5" fill="#22c55e" />
                </svg>
              </div>
            </motion.div>

            {/* CARD 2: AAPL (Top Right of Right Area) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.04, y: -4 }}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
              className="absolute top-8 sm:top-14 right-0 sm:right-2 lg:right-4 w-[170px] sm:w-[195px] rounded-2xl bg-[#080d16]/75 backdrop-blur-xl border border-white/15 p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300"
              style={{
                boxShadow: activeCard === 2 ? '0 0 25px rgba(34,197,94,0.3), 0 8px 32px rgba(0,0,0,0.8)' : undefined,
                borderColor: activeCard === 2 ? 'rgba(187,244,56,0.4)' : 'rgba(255,255,255,0.15)'
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-bold text-xs sm:text-sm font-mono tracking-tight">AAPL</span>
                <span className="text-[#22c55e] text-[11px] font-mono font-semibold bg-[#22c55e]/10 px-1.5 py-0.5 rounded border border-[#22c55e]/20">+0.45%</span>
              </div>
              <p className="text-white/45 text-[9px] uppercase tracking-wider font-mono">APPLE INC / NASDAQ</p>
              <div className="text-white font-mono font-bold text-lg sm:text-xl tracking-tight mt-1.5">
                ${livePrices.aapl.toFixed(2)}
              </div>
              {/* Green SVG Sparkline */}
              <div className="w-full h-8 mt-2 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path d="M 0 20 Q 25 24, 50 14 T 75 16 T 100 6" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="100" cy="6" r="2.5" fill="#22c55e" />
                </svg>
              </div>
            </motion.div>

            {/* CARD 3: PEPEUSDT (Center Right) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.04, y: -4 }}
              onMouseEnter={() => setActiveCard(3)}
              onMouseLeave={() => setActiveCard(null)}
              className="absolute top-[180px] sm:top-[200px] lg:top-[220px] left-2 sm:left-12 lg:left-14 w-[185px] sm:w-[210px] rounded-2xl bg-[#080d16]/75 backdrop-blur-xl border border-white/15 p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300"
              style={{
                boxShadow: activeCard === 3 ? '0 0 25px rgba(34,197,94,0.3), 0 8px 32px rgba(0,0,0,0.8)' : undefined,
                borderColor: activeCard === 3 ? 'rgba(187,244,56,0.4)' : 'rgba(255,255,255,0.15)'
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-bold text-xs sm:text-sm font-mono tracking-tight">PEPEUSDT</span>
                <span className="text-[#22c55e] text-[11px] font-mono font-semibold bg-[#22c55e]/10 px-1.5 py-0.5 rounded border border-[#22c55e]/20">+3.18%</span>
              </div>
              <p className="text-white/45 text-[9px] uppercase tracking-wider font-mono">PEPE / USDT</p>
              <div className="text-white font-mono font-bold text-base sm:text-lg tracking-tight mt-1.5">
                ${livePrices.pepe.toFixed(8)}
              </div>
              {/* Volatile Green Sparkline */}
              <div className="w-full h-8 mt-2 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path d="M 0 24 L 20 18 L 35 26 L 55 10 L 70 20 L 85 8 L 100 4" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="100" cy="4" r="2.5" fill="#22c55e" />
                </svg>
              </div>
            </motion.div>

            {/* CARD 4: XAUUSD (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ scale: 1.04, y: -4 }}
              onMouseEnter={() => setActiveCard(4)}
              onMouseLeave={() => setActiveCard(null)}
              className="absolute bottom-2 sm:bottom-6 lg:bottom-10 right-2 sm:right-6 lg:right-8 w-[175px] sm:w-[200px] rounded-2xl bg-[#080d16]/75 backdrop-blur-xl border border-white/15 p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300"
              style={{
                boxShadow: activeCard === 4 ? '0 0 25px rgba(239,68,68,0.3), 0 8px 32px rgba(0,0,0,0.8)' : undefined,
                borderColor: activeCard === 4 ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.15)'
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-bold text-xs sm:text-sm font-mono tracking-tight">XAUUSD</span>
                <span className="text-[#ef4444] text-[11px] font-mono font-semibold bg-[#ef4444]/10 px-1.5 py-0.5 rounded border border-[#ef4444]/20">-0.27%</span>
              </div>
              <p className="text-white/45 text-[9px] uppercase tracking-wider font-mono">GOLD / US DOLLAR</p>
              <div className="text-white font-mono font-bold text-lg sm:text-xl tracking-tight mt-1.5">
                ${livePrices.gold.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              {/* Red SVG Sparkline */}
              <div className="w-full h-8 mt-2 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path d="M 0 8 Q 25 6, 45 16 T 70 14 T 100 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="100" cy="24" r="2.5" fill="#ef4444" />
                </svg>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default TradeHeroBanner;
