import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Activity } from 'lucide-react';
import gsap from 'gsap';
import SignalSequencer from './SignalSequencer';
import ProtocolCard from './ProtocolCard';

const Hero = () => {
  useEffect(() => {
    // Hero entry animations could go here if needed
  }, []);

  return (
    <section className="section-padding hero-section" style={{ paddingTop: '10rem', paddingBottom: '2rem' }}>
      <div className="container">
        {/* Main Hero Split Layout */}
        <div className="hero-grid">
          {/* Left: Content */}
          <div style={{ textAlign: 'left' }}>
            <div className="reveal" style={{ marginBottom: '1rem' }}>
              <span className="badge">
                <Activity size={14} style={{ marginRight: '0.5rem', opacity: 0.7 }} />
                Now in private beta <span style={{ opacity: 0.3, margin: '0 0.5rem' }}>|</span> Built on Hyperliquid
              </span>
            </div>

            <h1 className="hero-title reveal" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              From noise to <span style={{ color: 'var(--accent-secondary)', fontWeight: 800 }}>signals.</span>
            </h1>

            <div className="reveal" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(9, 99, 126, 0.06)',
              border: '1px solid rgba(9, 99, 126, 0.12)',
              borderRadius: '8px',
              padding: '0.6rem 1.25rem',
              marginBottom: '2rem'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-gold)' }}></div>
              <span className="hero-os-label" style={{
                color: 'var(--accent-gold)',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}>
                Intelligence OS for Markets
              </span>
            </div>

            <p className="reveal" style={{
              color: 'var(--text-secondary)',
              fontSize: '1.2rem',
              maxWidth: '560px',
              marginBottom: '3rem',
              lineHeight: '1.75',
              fontWeight: 400
            }}>
              i5 is an intelligence-native trading network that aggregates smart-money flows,
              cohort behavior, and institutional-grade signals into a unified execution layer.
            </p>

            <div className="reveal" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              {/* <a href="#launch" className="btn btn-primary">
                Launch i5 <ChevronRight size={18} />
              </a> */}
              <a href="#signals" className="btn btn-secondary">
                Coming Soon...
              </a>
            </div>

            {/* Mini stats row */}
            <div className="reveal hero-stats">
              {[
                { value: '12K+', label: 'Wallets Tracked' },
                { value: '98.7%', label: 'Signal Accuracy' },
                { value: '<50ms', label: 'Latency' }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Spline Visual */}
          <div className="reveal hero-spline">
            <iframe
              src="https://my.spline.design/chromaticcopycopy-7vx5SxUc9sQUTgbV5UnxyDvb-nON/"
              frameBorder="0"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="i5 Spline Visual"
            ></iframe>
          </div>
        </div>

        {/* Full-width Signal Sequencer */}
        <div className="reveal" style={{ width: '100%', marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(10, 17, 22, 0.08))' }}></div>
            <span style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontWeight: 800,
              letterSpacing: '0.2em',
              whiteSpace: 'nowrap'
            }}>
              REAL-TIME INTELLIGENCE FLOW
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(10, 17, 22, 0.08), transparent)' }}></div>
          </div>
          <SignalSequencer />
        </div>


      </div>
    </section>
  );
};

export default Hero;
