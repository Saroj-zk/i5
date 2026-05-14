import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreFeatures from './components/CoreFeatures';
import CTA from './components/CTA';
import TrustedBy from './components/TrustedBy';
import IntelligenceStack from './components/IntelligenceStack';
import ComparisonSection from './components/ComparisonSection';
import UserTypes from './components/UserTypes';
import AllocationSection from './components/AllocationSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.fade-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="app-container">
      <div className="ambient-bg">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <TrustedBy />
        <div className="section-divider"></div>
        <IntelligenceStack />
        <div className="section-divider"></div>
        <CoreFeatures />
        <div className="section-divider"></div>
        <ComparisonSection />
        <div className="section-divider"></div>
        <UserTypes />
        <div className="section-divider"></div>
        <AllocationSection />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
