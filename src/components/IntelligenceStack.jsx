import React from 'react';
import { 
  BarChart3, 
  Sparkles, 
  Users, 
  Target, 
  Zap 
} from 'lucide-react';

const StackLayer = ({ number, title, layerType, desc, items, icon: Icon, isActive }) => {
  return (
    <div className="scroll-reveal" style={{ 
      padding: '3rem 0', 
      borderBottom: '1px solid rgba(10, 17, 22, 0.06)',
      display: 'flex',
      gap: '2rem',
      alignItems: 'flex-start',
      transition: 'all 0.3s ease',
      cursor: 'default'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.paddingLeft = '1rem';
      e.currentTarget.style.background = 'rgba(126, 172, 181, 0.02)';
      e.currentTarget.style.borderRadius = '16px';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.paddingLeft = '0';
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.borderRadius = '0';
    }}
    >
      <div style={{ 
        fontSize: '1rem', 
        fontWeight: 800, 
        color: isActive ? 'var(--accent-secondary)' : 'var(--text-muted)', 
        width: '36px',
        paddingTop: '0.5rem',
        opacity: isActive ? 1 : 0.5,
        transition: 'all 0.3s'
      }}>
        {number}
      </div>

      <div style={{ 
        width: '60px', 
        height: '60px', 
        borderRadius: '18px', 
        background: isActive ? 'rgba(126, 172, 181, 0.1)' : 'rgba(126, 172, 181, 0.05)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--accent-secondary)',
        flexShrink: 0,
        boxShadow: isActive ? '0 8px 24px rgba(126, 172, 181, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)' : '0 4px 12px rgba(126, 172, 181, 0.04)',
        border: `1px solid rgba(126, 172, 181, ${isActive ? '0.2' : '0.1'})`,
        transition: 'all 0.3s'
      }}>
        <Icon size={24} strokeWidth={1.8} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{title}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ 
              width: '5px', 
              height: '5px', 
              borderRadius: '50%', 
              background: 'var(--accent-secondary)',
              boxShadow: isActive ? '0 0 8px rgba(126, 172, 181, 0.5)' : 'none'
            }}></div>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: 800, 
              letterSpacing: '0.15em', 
              color: 'var(--accent-secondary)',
              opacity: 0.8
            }}>{layerType}</span>
          </div>
        </div>

        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--text-secondary)', 
          lineHeight: 1.65, 
          marginBottom: '1.5rem',
          maxWidth: '580px'
        }}>
          {desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {items.map((item, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              background: 'rgba(126, 172, 181, 0.04)',
              border: '1px solid rgba(126, 172, 181, 0.08)',
              borderRadius: '100px',
              padding: '0.35rem 0.85rem'
            }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-secondary)', opacity: 0.6 }}></div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IsometricStack = () => {
  return (
    <div style={{ 
      background: 'rgba(255, 255, 255, 0.75)', 
      backdropFilter: 'blur(30px)',
      borderRadius: '24px', 
      padding: '3rem',
      boxShadow: '0 30px 80px -20px rgba(10, 17, 22, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(10, 17, 22, 0.08)',
      marginTop: '3rem',
      position: 'relative',
      height: '380px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <svg width="100%" height="100%" viewBox="0 0 450 350" style={{ overflow: 'visible' }}>
        {/* Connection Lines with animated dash */}
        <g opacity="0.15">
          {[0, 1, 2, 3, 4].map(i => (
            <path 
              key={i}
              d={`M 130 ${80 + i * 45} Q 220 175 320 175`} 
              fill="none" 
              stroke="var(--accent-secondary)" 
              strokeWidth="1.5" 
              strokeDasharray="4 4" 
            />
          ))}
        </g>

        {/* Isometric Planes */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(0, ${i * 45})`}>
            {/* Shadow/Depth */}
            <path 
              d="M 50 55 L 150 35 L 175 70 L 75 90 Z" 
              fill="rgba(10, 17, 22, 0.05)"
              transform="translate(2, 4)"
            />
            {/* Main Plane */}
            <path 
              d="M 50 50 L 150 30 L 175 65 L 75 85 Z" 
              fill={i === 0 ? 'rgba(126, 172, 181, 0.12)' : '#FFFFFF'} 
              stroke={i === 0 ? 'var(--accent-secondary)' : 'rgba(10, 17, 22, 0.1)'} 
              strokeWidth="1.5"
            />
            <text x="110" y="62" fontSize="12" fontWeight="800" fill={i === 0 ? 'var(--accent-secondary)' : 'var(--text-primary)'} opacity={i === 0 ? 1 : 0.2}>0{i+1}</text>
          </g>
        ))}

        {/* Central i5 Node with Pulse Effect */}
        <g transform="translate(350, 175)">
          <circle r="45" fill="#FFFFFF" stroke="rgba(10, 17, 22, 0.08)" strokeWidth="1" />
          <circle r="36" fill="none" stroke="var(--accent-secondary)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <text x="0" y="10" textAnchor="middle" fontSize="28" fontWeight="800" fill="var(--text-primary)">i5</text>
        </g>
      </svg>
    </div>
  );
};

const IntelligenceStack = () => {
  const layers = [
    {
      number: '01',
      title: 'Market Intelligence',
      layerType: 'DATA LAYER',
      icon: BarChart3,
      desc: 'Hyperliquid order flow, perps, funding, OI, volatility, liquidity maps, and liquidation streams — ingested in real time.',
      items: ['Order flow', 'Funding & OI', 'Liquidity maps', 'Liquidations'],
      isActive: true
    },
    {
      number: '02',
      title: 'AI Intelligence',
      layerType: 'AGENT LAYER',
      icon: Sparkles,
      desc: 'Specialized agents — Signal, Narrative, Risk, Execution, Learning — coordinate across the entire trading workflow.',
      items: ['Signal agents', 'Narrative agents', 'Risk agents', 'Execution agents']
    },
    {
      number: '03',
      title: 'Community Intelligence',
      layerType: 'NETWORK LAYER',
      icon: Users,
      desc: 'Traders publish signals, validate setups, and earn transparent on-chain reputation. Merit-based intelligence at scale.',
      items: ['Reputation scores', 'Signal marketplace', 'Copy trading', 'Watchlists']
    },
    {
      number: '04',
      title: 'Event Intelligence',
      layerType: 'DETECTION LAYER',
      icon: Target,
      desc: 'Whale transfers, funding spikes, volume anomalies, and narrative shifts — surfaced as ranked, contextual events.',
      items: ['Whale moves', 'Volume anomalies', 'Narrative shifts', 'Volatility events']
    },
    {
      number: '05',
      title: 'Execution Intelligence',
      layerType: 'ACTION LAYER',
      icon: Zap,
      desc: 'From signal to fill in one workflow. One-click trades, dynamic stops, scaling, and policy-bound automation.',
      items: ['One-click trades', 'Dynamic stops', 'Copy workflows', 'Risk policies']
    }
  ];

  return (
    <section id="platform" className="section-padding" style={{ background: 'transparent' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.2fr', 
          gap: '4rem',
          alignItems: 'flex-start'
        }}>
          
          {/* Left Column */}
          <div className="scroll-reveal" style={{ position: 'sticky', top: '6rem' }}>
            <div style={{ 
              color: 'var(--accent-secondary)', 
              fontSize: '0.85rem', 
              fontWeight: 800, 
              letterSpacing: '0.3em', 
              marginBottom: '2rem'
            }}>
              [ 02 ] THE I5 INTELLIGENCE STACK
            </div>
            
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              lineHeight: 1.05, 
              marginBottom: '2rem',
              color: 'var(--text-primary)',
              fontWeight: 800
            }}>
              Five layers.<br />
              <span style={{ 
                color: 'var(--accent-secondary)', 
                fontWeight: 800
              }}>One coordinated runtime.</span>
            </h2>

            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.7,
              maxWidth: '460px',
              marginBottom: '1.5rem'
            }}>
              Most platforms display data. i5 interprets it. Each layer compounds the next — perception sharpens context, context sharpens reasoning, reasoning directs action, action feeds reflection.
            </p>

            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-gold))', borderRadius: '2px', marginBottom: '2rem' }}></div>

            <IsometricStack />
          </div>

          {/* Right Column */}
          <div className="scroll-reveal">
            <div style={{ borderTop: '1px solid rgba(10, 17, 22, 0.06)' }}>
              {layers.map((layer, index) => (
                <StackLayer key={index} {...layer} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntelligenceStack;
