import { useState } from 'react';
import { motion } from 'framer-motion';

const ACCENT = '#13c38f';

const STEPS = [
  {
    num: '01',
    title: 'CHOOSE YOUR MARKET',
    description:
      'Memes, crypto, or global stocks. Trade what you’re into without rebuilding your setup every time.',
    options: ['MEMES', 'CRYPTO', 'GLOBAL STOCKS'],
  },
  {
    num: '02',
    title: 'CHOOSE YOUR MODE',
    description:
      'Go fully hands-on, bring in AI when you need it, or let Agentic AI handle the legwork.',
    options: ['MANUAL', 'AI-ASSISTED', 'AGENTIC'],
  },
  {
    num: '03',
    title: 'CHOOSE YOUR PACE',
    description:
      'Catch something fast or spend time building conviction. i5 works for both sides of the trade.',
    options: ['INSTANT', 'MONITOR', 'RESEARCH'],
  },
  {
    num: '04',
    title: 'CHOOSE YOUR FLOW',
    description:
      'Research it. Watch it. Trade it. Automate it. Use as much or as little of the stack as the trade needs.',
    options: ['RESEARCH', 'MONITOR', 'TRADE', 'AUTOMATE'],
  },
  {
    num: '05',
    title: 'CHOOSE WHERE YOU TRADE',
    description:
      'Desk or on the move. Keep your trading flow within reach across the terminal and Telegram.',
    options: ['TERMINAL', 'TELEGRAM'],
  },
];

export function BuiltForTraders() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="built-for-traders"
      className="relative py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-white/10 select-none bg-[#030304] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#13c38f]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-left max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 text-[10.5px] font-mono tracking-widest uppercase text-[#13c38f] border border-[#13c38f]/20 bg-[#13c38f]/5 rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#13c38f] animate-pulse" />
            // YOUR RULES
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            YOUR MARKET.{' '}
            <span style={{ color: ACCENT, textShadow: '0 0 35px rgba(19,195,143,0.35)' }}>
              YOUR RULES.
            </span>
          </h2>
          <p
            className="text-white/70 text-sm sm:text-base md:text-lg mt-4 max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Memes today. Crypto tomorrow. Global stocks next. Pick your market, set your style, and make i5 work around you.
          </p>
        </motion.div>

        {/* Clean Step-by-Step Rows (Non-Bento Design) */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {STEPS.map((step, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`py-6 sm:py-7 px-4 sm:px-6 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative group ${
                  isHovered ? 'bg-[#13c38f]/[0.03]' : 'bg-transparent'
                }`}
              >
                {/* Left vertical indicator line on hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-300 ${
                    isHovered ? 'bg-[#13c38f] shadow-[0_0_8px_#13c38f]' : 'bg-transparent'
                  }`}
                />

                {/* Left: Number & Title */}
                <div className="flex items-start sm:items-center gap-4 lg:w-1/3 shrink-0">
                  <span
                    className={`font-mono text-sm sm:text-base font-bold transition-colors duration-300 ${
                      isHovered ? 'text-[#13c38f]' : 'text-white/30'
                    }`}
                  >
                    {step.num}
                  </span>
                  <h3
                    className={`text-base sm:text-lg font-bold tracking-tight uppercase transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-white/90'
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Middle: Description */}
                <div className="lg:w-1/3 lg:px-4">
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Right: Step Option Pills */}
                <div className="lg:w-1/3 flex flex-wrap items-center lg:justify-end gap-2 shrink-0">
                  {step.options.map((opt, optIdx) => (
                    <span
                      key={optIdx}
                      className={`text-[10.5px] font-mono font-medium tracking-wider px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                        isHovered
                          ? 'border-[#13c38f]/40 bg-[#13c38f]/10 text-[#13c38f]'
                          : 'border-white/10 bg-white/[0.02] text-white/60'
                      }`}
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default BuiltForTraders;
