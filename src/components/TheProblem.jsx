import React from 'react';
import { 
  BarChart3, 
  Wallet, 
  Send, 
  Bird, 
  Droplet, 
  Radio, 
  Briefcase, 
  Terminal, 
  Smile 
} from 'lucide-react';

const GridItem = ({ icon: Icon, title }) => {
  return (
    <div style={{ 
      padding: '2.5rem 2rem', 
      border: '1px solid #F0F2F5',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Icon with subtle background circle */}
      <div style={{ 
        width: '44px', 
        height: '44px', 
        borderRadius: '50%', 
        background: '#F8F9FA', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#0A171D',
        position: 'relative',
        zIndex: 2
      }}>
        <Icon size={20} strokeWidth={1.5} />
      </div>

      {/* Title with gold dash */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', position: 'relative', zIndex: 2 }}>
        <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--accent-gold)' }}></div>
        <span style={{ 
          fontSize: '0.7rem', 
          fontWeight: 700, 
          letterSpacing: '0.15em', 
          color: '#0A171D',
          opacity: 0.8,
          textTransform: 'uppercase'
        }}>{title}</span>
      </div>

      {/* Subtle revolving background shape (High Fidelity) */}
      <div className="intelligence-pulse" style={{
        position: 'absolute',
        top: '20%',
        left: '20%',
        width: '60px',
        height: '60px',
        border: '1px solid var(--accent-gold)',
        borderRadius: '40%',
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 1
      }}></div>
    </div>
  );
};

const TheProblem = () => {
  const items = [
    { icon: BarChart3, title: 'Charts' },
    { icon: Wallet, title: 'Wallet Trackers' },
    { icon: Send, title: 'Telegram' },
    { icon: Bird, title: 'Twitter Feeds' },
    { icon: Droplet, title: 'Liquidation Maps' },
    { icon: Radio, title: 'Signal Channels' },
    { icon: Briefcase, title: 'Funding Tools' },
    { icon: Terminal, title: 'Execution Terminals' },
    { icon: Smile, title: 'Sentiment Apps' }
  ];

  return (
    <section className="section-padding" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.6fr', 
          gap: '5rem', 
          alignItems: 'center' 
        }}>
          
          {/* Left Column: Text Content */}
          <div className="scroll-reveal">
            <div style={{ 
              color: 'var(--accent-gold)', 
              fontSize: '0.85rem', 
              fontWeight: 800, 
              letterSpacing: '0.3em', 
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span>[ 01 ]</span>
              <span style={{ textTransform: 'uppercase' }}>The Problem</span>
            </div>
            
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              lineHeight: 1, 
              marginBottom: '2.5rem',
              color: '#0A171D',
              fontWeight: 600
            }}>
              The modern trading <br />
              stack is <span style={{ 
                color: 'var(--accent-gold)', 
                fontWeight: 800
              }}>broken.</span>
            </h2>

            <p style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.8,
              maxWidth: '520px',
              marginBottom: '2rem'
            }}>
              Charts. Wallet trackers. Telegram. Twitter. Liquidation dashboards. Signal channels. Funding tools. Execution terminals.
            </p>

            <p style={{ 
              fontSize: '1.15rem', 
              color: '#0A171D', 
              fontWeight: 500,
              lineHeight: 1.8,
              maxWidth: '520px'
            }}>
              The result: <span style={{ opacity: 0.6 }}>fragmented workflows, delayed reactions, and missed opportunities.</span>
            </p>

            {/* Subtle Gold Divider */}
            <div style={{ width: '60px', height: '2px', background: 'var(--accent-gold)', marginTop: '3rem' }}></div>
          </div>

          {/* Right Column: High Fidelity Grid Card */}
          <div className="scroll-reveal">
            <div style={{ 
              background: '#FFFFFF', 
              borderRadius: '24px', 
              boxShadow: '0 20px 80px rgba(0,0,0,0.06)',
              border: '1px solid #F0F2F5',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0
            }}>
              {items.map((item, index) => (
                <GridItem key={index} {...item} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        .intelligence-pulse {
          animation: pulse-rotate 20s linear infinite;
        }
      `}} />
    </section>
  );
};

export default TheProblem;
