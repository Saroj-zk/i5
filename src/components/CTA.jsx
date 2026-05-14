import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        <div className="card scroll-reveal" style={{ 
          textAlign: 'center', 
          padding: '7rem 2rem',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(126, 172, 181, 0.06) 100%)',
          backdropFilter: 'blur(40px)',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '32px',
          boxShadow: '0 40px 100px -20px rgba(10, 17, 22, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(126, 172, 181, 0.15)'
        }}>
          {/* Background Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'var(--accent-secondary)',
            filter: 'blur(200px)',
            opacity: 0.08,
            pointerEvents: 'none'
          }}></div>

          {/* Corner Decorations */}
          <div style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            width: '60px',
            height: '60px',
            borderTop: '2px solid rgba(126, 172, 181, 0.15)',
            borderLeft: '2px solid rgba(126, 172, 181, 0.15)',
            borderRadius: '4px 0 0 0',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            width: '60px',
            height: '60px',
            borderBottom: '2px solid rgba(126, 172, 181, 0.15)',
            borderRight: '2px solid rgba(126, 172, 181, 0.15)',
            borderRadius: '0 0 4px 0',
            pointerEvents: 'none'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.3em',
              color: 'var(--accent-secondary)',
              marginBottom: '2.5rem',
              textTransform: 'uppercase'
            }}>
              Join the Intelligence Network
            </div>

            <h2 className="section-title" style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--text-primary)', lineHeight: 1.1, fontWeight: 800 }}>
              Detect earlier. <span style={{ color: 'var(--accent-secondary)', fontWeight: 800 }}>Analyze faster.</span> <br />Execute smarter.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem', lineHeight: '1.7', fontWeight: 400 }}>
              The intelligence gap is closing. Secure your access to the i5 network today and start trading with an institutional edge.
            </p>
            
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#launch" className="btn btn-primary" style={{ padding: '1.15rem 3rem', fontSize: '1rem', fontWeight: 700 }}>
                Launch i5 App <ArrowRight size={20} strokeWidth={2.5} />
              </a>
              <a href="#docs" className="btn btn-secondary" style={{ padding: '1.15rem 2.5rem', fontSize: '1rem', fontWeight: 700 }}>
                <FileText size={18} /> Read Docs
              </a>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '3.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 10px rgba(34, 197, 94, 0.4)' }}></div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.15em' }}>
                NOW CONNECTED TO HYPERLIQUID MAINNET
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
