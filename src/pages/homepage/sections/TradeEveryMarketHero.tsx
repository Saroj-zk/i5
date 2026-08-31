import { motion } from 'framer-motion';

export function TradeEveryMarketHero() {
  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-center overflow-hidden select-none bg-black py-20 sm:py-24 lg:py-28">
      
      {/* Background Image: Celestial Portal & Walking Astronaut (Raw, untouched image) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner-1.png"
          alt="Trade Every Market"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Main Content Container (Positioned comfortably in view, never hidden) */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col items-start max-w-3xl">
        
        {/* Micro Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md mb-5 sm:mb-6"
        >
          <span className="text-white/70 text-xs">✦</span>
          <span
            className="text-xs font-normal text-white/80 tracking-wide"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            Powering next-gen traders.
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-[38px] sm:text-[48px] md:text-[58px] lg:text-[66px] xl:text-[72px] font-medium leading-[1.08] tracking-[-0.03em] max-w-2xl"
          style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif', fontWeight: 500 }}
        >
          Trade Every Market.<br />
          Stay Ahead.
        </motion.h1>

        {/* Frosted Glass CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-7"
        >
          <button
            onClick={() => window.open("https://forms.gle/dHNpTFpUBFaHvhME9", "_blank")}
            className="px-6 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-xs sm:text-[13px] uppercase tracking-wider font-medium transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            GET STARTED
          </button>
        </motion.div>

        {/* Products & Description Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 lg:mt-12 flex flex-col gap-3.5 max-w-sm sm:max-w-md"
        >
          <p
            className="text-white/75 text-xs sm:text-[13.5px] font-normal leading-[1.65]"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            Trade crypto, memes and global stocks in one place.
            <br />
            Powered by real-time intelligence and Agentic AI built for what moves next.
          </p>

          {/* Social Proof Indicator */}
          <div className="flex items-center gap-3 pt-0.5">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-6 w-6 rounded-full ring-1 ring-white/30 object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Trader 1"
              />
              <img
                className="inline-block h-6 w-6 rounded-full ring-1 ring-white/30 object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Trader 2"
              />
              <img
                className="inline-block h-6 w-6 rounded-full ring-1 ring-white/30 object-cover"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                alt="Trader 3"
              />
            </div>
            <span
              className="text-xs text-white/70 font-normal tracking-wide"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              Trusted by 12,000+ traders.
            </span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default TradeEveryMarketHero;
