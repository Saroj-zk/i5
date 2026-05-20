import React from 'react';
import { 
  BarChart3, 
  Sparkles, 
  Users, 
  Target, 
  Zap 
} from 'lucide-react';
import intelligenceStackImg from '../assets/intelligence-stack.png';


const StackLayer = ({ number, title, layerType, desc, items, icon: Icon, isActive }) => {
  return (
    <div className="scroll-reveal" style={{ 
      padding: '3rem 0', 
      borderBottom: '1px solid rgba(10, 17, 22, 0.06)',
      display: 'flex',
      gap: '2rem',
      alignItems: 'flex-start'
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
        <div className="intelligence-stack-grid">
          
          {/* Left Column */}
          <div className="scroll-reveal intelligence-stack-sticky">
            <div style={{ 
              color: 'var(--accent-secondary)', 
              fontSize: '0.85rem', 
              fontWeight: 800, 
              letterSpacing: '0.3em', 
              marginBottom: '2rem'
            }}>
              THE I5 INTELLIGENCE STACK
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

            <div style={{ marginTop: '3rem', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(10, 17, 22, 0.08)', boxShadow: '0 30px 80px -20px rgba(10, 17, 22, 0.08)' }}>
              <img src={intelligenceStackImg} alt="i5 Intelligence Stack" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
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
