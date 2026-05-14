import React from 'react';
import { Target, Users, Cpu, Activity, Bell, MessageSquare } from 'lucide-react';

const BentoGrid = () => {
  const features = [
    { 
      title: 'Smart-Money Tracking', 
      desc: 'Follow the capital. Real-time monitoring of institutional and high-conviction wallets.', 
      icon: Target,
      color: 'var(--accent-gold)',
      size: 'wide'
    },
    { 
      title: 'Cohort Analysis', 
      desc: 'Understand group behavior. Identify when specific trader segments are accumulating.', 
      icon: Users,
      color: 'var(--accent-cyan)'
    },
    { 
      title: 'AI Signal Engine', 
      desc: 'Proprietary LLMs trained on years of market data to detect non-obvious patterns.', 
      icon: Cpu,
      color: 'var(--accent-purple)',
      size: 'tall'
    },
    { 
      title: 'Real-time Heatmaps', 
      desc: 'Visualize orderbook depth and liquidation zones with sub-second latency.', 
      icon: Activity,
      color: 'var(--accent-lime)'
    },
    { 
      title: 'Custom Alerting', 
      desc: 'Never miss a move. Set complex logic-based alerts across any data stream.', 
      icon: Bell,
      color: 'var(--accent-gold)'
    },
    { 
      title: 'Social Intelligence', 
      desc: 'Aggregate sentiment and alpha from social streams before they hit the tape.', 
      icon: MessageSquare,
      color: 'var(--accent-cyan)',
      size: 'wide'
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container">
        <div className="scroll-reveal" style={{ marginBottom: '6rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '1rem' }}>[ 03 CORE CAPABILITIES ]</div>
          <h2 className="section-title">The intelligence stack <br />for <span style={{ color: 'var(--accent-secondary)', fontWeight: 800 }}>the next generation.</span></h2>
        </div>
        
        <div className="bento-grid">
          {features.map((f, i) => (
            <div key={i} className={`card bento-item ${f.size || ''} scroll-reveal`}>
              <f.icon style={{ color: f.color, marginBottom: '1.5rem' }} size={32} strokeWidth={1.5} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                {f.desc}
              </p>
              
              {/* Subtle background glow for each card based on its accent color */}
              <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '150px',
                height: '150px',
                background: f.color,
                filter: 'blur(100px)',
                opacity: 0.05,
                pointerEvents: 'none'
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
