import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './sections/HeroSection';
import { BannerSection } from './sections/banner-section';
import { AlphaFeed } from './sections/AlphaFeed';
import { MarketIntelligence } from './sections/MarketIntelligence';
import { WallStreetStack } from './sections/WallStreetStack';
import { CoreFeatures } from './sections/CoreFeatures';
import { Edge } from './sections/Edge';
import { BuiltForTraders } from './sections/BuiltForTraders';
import { BuildWithI5 } from './sections/BuildWithI5';
import { IntelligenceNetwork } from './sections/IntelligenceNetwork';
import { Footer } from './sections/Footer';

export function HomePage() {
  const [isShaking, setIsShaking] = useState(false);
  const [currentSlide] = useState(0);

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 600);
  };

  useEffect(() => {
    // Prevent browser from automatically scrolling down on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`w-full overflow-x-clip ${isShaking ? 'animate-[shake_0.4s_ease-in-out_infinite]' : ''}`}>
      <div className="zoom-content">
        
        {/* Slider Container */}
        <div className="relative w-full overflow-hidden bg-black grid full-height-slider">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full [grid-area:1/1]"
            >
              {currentSlide === 0 ? (
                <BannerSection />
              ) : (
                <HeroSection triggerShake={triggerShake} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <AlphaFeed />
        <MarketIntelligence />
        <WallStreetStack />
        <CoreFeatures />
        <Edge />
        <BuiltForTraders />
        <BuildWithI5 />
        <IntelligenceNetwork />
      </div>
      <Footer />
    </div>
  );
}
