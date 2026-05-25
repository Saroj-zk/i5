import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Activity } from 'lucide-react';
import gsap from 'gsap';
import Spline from '@splinetool/react-spline';
import SignalSequencer from './SignalSequencer';
import ProtocolCard from './ProtocolCard';

const Hero = ({ onJoinClick }) => {
  useEffect(() => {
    // Hero entry animations could go here if needed
  }, []);

  return (
    <>
      <section className="hero-section" style={{
        paddingTop: '6.5rem',
        paddingBottom: '0',
        height: '100vh',
        minHeight: '680px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Top: Center Aligned Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: '800px',
            margin: 'auto 0'
          }}>
            <div className="reveal" style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              <span className="badge" style={{ fontSize: '0.65rem', padding: '0.35rem 0.9rem', letterSpacing: '0.1em' }}>
                <Activity size={11} style={{ marginRight: '0.4rem', opacity: 0.7 }} />
                Now in private beta <span style={{ opacity: 0.3, margin: '0 0.4rem' }}>|</span> Built on Hyperliquid
              </span>
            </div>

            <h1 className="hero-title reveal" style={{
              textAlign: 'center',
              marginBottom: '1rem',
              whiteSpace: 'nowrap',
              fontSize: 'clamp(2rem, 5.8vw, 4.8rem)',
              letterSpacing: '-0.04em',
              lineHeight: '1.1'
            }}>
              From noise to <span style={{ color: 'var(--accent-secondary)', fontWeight: 800 }}>signals.</span>
            </h1>

            <div className="reveal" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(9, 99, 126, 0.06)',
              border: '1px solid rgba(9, 99, 126, 0.12)',
              borderRadius: '8px',
              padding: '0.5rem 1.1rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-gold)' }}></div>
              <span className="hero-os-label" style={{
                color: 'var(--accent-gold)',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}>
                Intelligence OS for Markets
              </span>
            </div>

            <p className="reveal" style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              marginBottom: '1.75rem',
              lineHeight: '1.65',
              fontWeight: 400,
              textAlign: 'center'
            }}>
              i5 is an intelligence-native trading network that aggregates smart-money flows,
              cohort behavior, and institutional-grade signals into a unified execution layer.
            </p>

            <div className="reveal" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <button onClick={onJoinClick} className="btn btn-primary">
                Join Waitlist <ArrowRight size={18} />
              </button>
            </div>

            {/* Mini stats row - Center aligned */}
            <div className="reveal hero-stats" style={{ justifyContent: 'center' }}>
              {[
                { value: '98.7%', label: 'Signal Accuracy' },
                { value: '<50ms', label: 'Latency' }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Spline Visual (Edge to Edge, full viewport width) */}
        <div className="reveal hero-spline-fullwidth" style={{
          width: '100vw',
          height: '350px',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          overflow: 'hidden',
          marginTop: '-190px',
          marginBottom: '0',
          background: 'transparent'
        }}>
          <Spline scene="https://prod.spline.design/x18xVdcAY7tK5oeQ/scene.splinecode" />
        </div>
      </section>

      {/* Sibling Section: Sits strictly below the fold (100vh) */}
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
