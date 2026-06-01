import React, { useEffect } from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import SignalSequencer from './SignalSequencer';

const Hero = ({ onJoinClick }) => {
  useEffect(() => {
    // Hero entry animations could go here if needed
  }, []);

  return (
    <>
      <section className="hero-section">
        {/* Sleek background orb specific to hero */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(126, 172, 181, 0.06) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="hero-grid">
            {/* Left Column: Hero Content */}
            <div className="reveal hero-content-col">
              <div className="hero-badge-row">
                <span className="badge" style={{ fontSize: '0.65rem', padding: '0.35rem 0.9rem', letterSpacing: '0.12em' }}>
                  <Activity size={11} style={{ marginRight: '0.4rem', opacity: 0.7 }} />
                  Now in private beta <span style={{ opacity: 0.3, margin: '0 0.4rem' }}>|</span> Built on Hyperliquid
                </span>
              </div>

              <h1 className="hero-title" style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.6rem)',
                letterSpacing: '-0.04em',
                lineHeight: '1.1',
                marginBottom: '1rem',
                fontWeight: 800
              }}>
                From noise to <span className="hero-title-accent">signals.</span>
              </h1>

              <div className="hero-os-label-wrapper">
                <div className="hero-os-label-dot"></div>
                <span className="hero-os-label">
                  Intelligence OS for Markets
                </span>
              </div>

              <p className="hero-description">
                i5 is an intelligence-native trading network that aggregates smart-money flows,
                cohort behavior, and institutional-grade signals into a unified execution layer.
              </p>

              <div className="hero-cta-row">
                <button onClick={onJoinClick} className="btn btn-primary">
                  Join Waitlist <ArrowRight size={18} />
                </button>
              </div>

              {/* Mini stats row */}
              <div className="hero-stats">
                {[
                  { value: '98.7%', label: 'Signal Accuracy' },
                  { value: '<50ms', label: 'Latency' }
                ].map((stat, i) => (
                  <div key={i} className="hero-stat-item">
                    <div className="hero-stat-value">{stat.value}</div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Spline Visual */}
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
        </div>
      </section>

      {/* Sibling Section: Sits strictly below the fold */}
      <section className="sequencer-section" style={{ padding: '3rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          {/* Full-width Signal Sequencer */}
          <div className="reveal" style={{ width: '100%', marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
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
    </>
  );
};

export default Hero;
