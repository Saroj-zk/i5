import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreFeatures from './components/CoreFeatures';
import Spline from '@splinetool/react-spline';
import CTA from './components/CTA';
import TrustedBy from './components/TrustedBy';
import IntelligenceStack from './components/IntelligenceStack';
import ComparisonSection from './components/ComparisonSection';
import UserTypes from './components/UserTypes';
import AllocationSection from './components/AllocationSection';
import Footer from './components/Footer';
import JoinUsModal from './components/JoinUsModal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Animations removed for instant-load feel
  }, []);

  return (
    <div ref={mainRef} className="app-container">
      <div className="ambient-bg">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>

      <Navbar />

      <main>
        <Hero onJoinClick={() => setIsModalOpen(true)} />
        <TrustedBy />
        <div className="section-divider"></div>
        <IntelligenceStack />
        <div className="section-divider"></div>
        {/* Desktop Spline Interactive Section */}
        <div className="spline-desktop-container" style={{ 
          width: '100vw', 
          height: '100vh', 
          position: 'relative', 
          left: '50%', 
          right: '50%', 
          marginLeft: '-50vw', 
          marginRight: '-50vw', 
          overflow: 'hidden', 
          background: 'transparent' 
        }}>
          <div className="spline-desktop-text-top">
            "Turn your Telegram community into a live trading environment."
          </div>
          <iframe 
            src="https://my.spline.design/challengefinallive-vppph91KBdhU99JzlnOIBJYa-USa/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            className="spline-desktop-iframe"
            title="i5 Interactive Spline Section (Desktop)"
          ></iframe>
          <div className="spline-desktop-text-bottom">
            Take long and short positions together while navigating volatility in real time. <br />
            <span style={{ color: 'var(--accent-secondary)', fontWeight: 850 }}>Trade with confidence.</span>
          </div>
        </div>

        {/* Mobile & Tablet Spline Interactive Section (Portable Responsive Sizes) */}
        <div className="spline-mobile-container" style={{ 
          width: '100vw', 
          height: '100vh', 
          position: 'relative', 
          left: '50%', 
          right: '50%', 
          marginLeft: '-50vw', 
          marginRight: '-50vw', 
          overflow: 'hidden', 
          background: 'transparent' 
        }}>
          <div className="spline-mobile-text-top">
            "Turn your Telegram community into a live trading environment."
          </div>
          <iframe 
            src="https://my.spline.design/challengefinallive-vppph91KBdhU99JzlnOIBJYa-kWR/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            className="spline-mobile-iframe"
            title="i5 Interactive Spline Section (Mobile/Tablet)"
          ></iframe>
          <div className="spline-mobile-text-bottom">
            Take long and short positions together while navigating volatility in real time. <br />
            <span style={{ color: 'var(--accent-secondary)', fontWeight: 850 }}>Trade with confidence.</span>
          </div>
        </div>
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
      <JoinUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
