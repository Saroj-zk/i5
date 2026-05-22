import React, { useEffect, useRef, useState } from 'react';
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
