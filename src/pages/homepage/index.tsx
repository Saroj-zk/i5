import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { TradeEveryMarketHero } from './sections/TradeEveryMarketHero';
import { TelegramHyperliquidBanner } from './sections/TelegramHyperliquidBanner';
import { BannerSection } from './sections/banner-section';
import { MarketIntelligence } from './sections/MarketIntelligence';
import { WallStreetStack } from './sections/WallStreetStack';
import { CoreFeatures } from './sections/CoreFeatures';
import { Edge } from './sections/Edge';
import { BuiltForTraders } from './sections/BuiltForTraders';
// import { BuildWithI5 } from './sections/BuildWithI5';
import { IntelligenceNetwork } from './sections/IntelligenceNetwork';
import { Footer } from './sections/Footer';

export function HomePage() {
  const [isShaking] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const SLIDES = [
    { id: 0, title: 'Trade Every Market', component: <TradeEveryMarketHero /> },
    { id: 1, title: 'See Who Moved', component: <TelegramHyperliquidBanner /> },
    { id: 2, title: 'Testnet Launch', component: <BannerSection /> },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, [SLIDES.length]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  // Auto-play sliding banner every 8 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    // Prevent browser from automatically scrolling down on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { ease: 'easeOut', duration: 0.4 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { ease: 'easeIn', duration: 0.4 },
        opacity: { duration: 0.35 },
      },
    }),
  };

  return (
    <div className={`w-full overflow-x-clip ${isShaking ? 'animate-[shake_0.4s_ease-in-out_infinite]' : ''}`}>
      <div className="zoom-content">
        
        {/* Interactive Hero Slider Container */}
        <div
          className="relative w-full overflow-hidden bg-black grid full-height-slider group/slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full [grid-area:1/1]"
            >
              {SLIDES[currentSlide].component}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Pagination Indicators (Frosted Glass Minimal Design) */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-400 rounded-full cursor-pointer relative ${
                  currentSlide === idx
                    ? 'w-6 sm:w-7 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* <AlphaFeed /> */}
        <MarketIntelligence />
        <WallStreetStack />
        <CoreFeatures />
        <Edge />
        <BuiltForTraders />
        {/* <BuildWithI5 /> */}
        <IntelligenceNetwork />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
