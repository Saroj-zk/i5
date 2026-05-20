import React from 'react';
import { 
  Wallet, 
  PieChart, 
  Brain, 
  LayoutGrid, 
  Bell, 
  MessagesSquare 
} from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, desc, isHighlighted }) => (
  <div style={{ 
    padding: isHighlighted ? '3rem 2.5rem' : '2.5rem 2rem',
    background: isHighlighted ? 'rgba(9, 99, 126, 0.03)' : 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(30px)',
    borderRadius: '24px',
    border: `1px solid ${isHighlighted ? 'rgba(126, 172, 181, 0.18)' : 'rgba(10, 17, 22, 0.08)'}`,
    boxShadow: isHighlighted 
      ? '0 30px 80px rgba(126, 172, 181, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)' 
      : '0 20px 60px rgba(10, 17, 22, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
    height: '100%'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.borderColor = 'rgba(126, 172, 181, 0.3)';
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
    e.currentTarget.style.boxShadow = '0 30px 80px rgba(126, 172, 181, 0.06), inset 0 1px 0 #FFFFFF';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.borderColor = isHighlighted ? 'rgba(126, 172, 181, 0.18)' : 'rgba(10, 17, 22, 0.08)';
    e.currentTarget.style.background = isHighlighted ? 'rgba(9, 99, 126, 0.03)' : 'rgba(255, 255, 255, 0.75)';
    e.currentTarget.style.boxShadow = isHighlighted 
      ? '0 30px 80px rgba(126, 172, 181, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)' 
      : '0 20px 60px rgba(10, 17, 22, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
  }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ 
        width: isHighlighted ? '60px' : '52px', 
        height: isHighlighted ? '60px' : '52px', 
        borderRadius: '16px', 
        background: isHighlighted ? 'rgba(126, 172, 181, 0.1)' : 'rgba(126, 172, 181, 0.06)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--accent-secondary)',
        flexShrink: 0,
        boxShadow: '0 4px 12px rgba(126, 172, 181, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(126, 172, 181, 0.15)'
      }}>
        <Icon size={isHighlighted ? 26 : 22} strokeWidth={1.8} />
      </div>
      {isHighlighted && (
        <span style={{
          fontSize: '0.65rem',
          fontWeight: 800,
          letterSpacing: '0.15em',
          color: 'var(--accent-secondary)',
          background: 'rgba(126, 172, 181, 0.08)',
          padding: '0.25rem 0.75rem',
          borderRadius: '100px',
          border: '1px solid rgba(126, 172, 181, 0.15)'
        }}>FLAGSHIP</span>
      )}
    </div>
    
    <div>
      <h3 style={{ 
        fontSize: isHighlighted ? '1.5rem' : '1.3rem', 
        fontWeight: 700, 
        color: 'var(--text-primary)', 
        marginBottom: '0.85rem'
      }}>{title}</h3>
      <p style={{ 
        fontSize: '0.98rem', 
        color: 'var(--text-secondary)', 
        lineHeight: 1.65
      }}>
        {desc}
      </p>
    </div>
  </div>
);

const CoreFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Signal Engine',
      desc: 'Order flow + wallet behavior + funding + sentiment fused into ranked, conviction-scored trade setups with explainable reasoning.',
      isHighlighted: true
    },
    {
      icon: Wallet,
      title: 'Smart-Money Tracking',
      desc: 'Live positions, PnL, leverage, and historical behavior of elite Hyperliquid wallets — in real time.'
    },
    {
      icon: PieChart,
      title: 'Cohort Analytics',
      desc: 'Segment the market into whales, elites, retail, and the liquidated. See positioning shift before price does.'
    },
    {
      icon: LayoutGrid,
      title: 'Liquidation Heatmaps',
      desc: 'Visualize where leverage is clustered. Trade liquidity events instead of getting caught in them.'
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      desc: 'Whale activity, funding swings, narrative acceleration — delivered to mobile, Telegram, Discord, or webhooks.'
    },
    {
      icon: MessagesSquare,
      title: 'Social Trading Streams',
      desc: 'Every asset becomes a live intelligence feed. Bloomberg Terminal meets Stocktwits meets Hyperliquid.'
    }
  ];

  return (
    <section id="capabilities" className="section-padding" style={{ background: 'transparent' }}>
      <div className="container">
        {/* Header Section */}
        <div className="scroll-reveal" style={{ marginBottom: '4rem' }}>
          <div style={{ 
            color: 'var(--accent-secondary)', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            letterSpacing: '0.3em', 
            marginBottom: '2rem'
          }}>
            CORE FEATURES
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: 1.1, 
            marginBottom: '2rem',
            color: 'var(--text-primary)',
            fontWeight: 800,
            maxWidth: '900px'
          }}>
            Everything you need to read the market — and <span style={{ 
              color: 'var(--accent-secondary)', 
              fontWeight: 800
            }}>act</span> on it.
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            lineHeight: 1.7,
            marginBottom: '1rem'
          }}>
            Six core capabilities. One integrated intelligence layer. Zero guesswork.
          </p>

          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-gold))', borderRadius: '2px' }}></div>
        </div>

        {/* Bento-style Grid — featured card takes up more space */}
        <div className="scroll-reveal features-grid">
          {features.map((feature, index) => (
            <div key={index} style={{ gridColumn: index === 0 ? 'span 1' : undefined }}>
              <FeatureItem {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
