import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './sections/HeroSection';
import { BannerSection } from './sections/banner-section';
import { AlphaFeed } from './sections/AlphaFeed';
import { IntelligenceStack } from './sections/IntelligenceStack';
import { CoreFeatures } from './sections/CoreFeatures';
import { Edge } from './sections/Edge';
import { BuiltForTraders } from './sections/BuiltForTraders';
import { IntelligenceNetwork } from './sections/IntelligenceNetwork';
import { Footer } from './sections/Footer';

export function HomePage() {
  const [isShaking, setIsShaking] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // useEffect(() => {
  //   // Dynamic slide duration: 20s for Banner (slide 0), 5s for Hero (slide 1)
  //   const delay = currentSlide === 0 ? 20000 : 5000;
  //   const timer = setTimeout(() => {
  //     setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  //   }, delay);
  //   return () => clearTimeout(timer);
  // }, [currentSlide]);

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
          
          {/* Slider Navigation Dots */}
          {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-[100]">
            <button 
              onClick={() => setCurrentSlide(0)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-primary scale-125' : 'bg-white/20 hover:bg-white/40'}`}
              aria-label="Go to slide 1"
            />
            <button 
              onClick={() => setCurrentSlide(1)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-primary scale-125' : 'bg-white/20 hover:bg-white/40'}`}
              aria-label="Go to slide 2"
            />
          </div> */}
        </div>

        <AlphaFeed />
        <IntelligenceStack />
        <CoreFeatures />
        <Edge />
        <BuiltForTraders />
        <IntelligenceNetwork />
      </div>
      <Footer />
    </div>
  );
}
