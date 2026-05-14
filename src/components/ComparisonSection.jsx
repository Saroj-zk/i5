import React from 'react';
import { 
  Search, 
  Layout, 
  Clock, 
  BarChart3, 
  MessageCircle, 
  HelpCircle,
  Brain, 
  Monitor, 
  Bell, 
  TrendingUp, 
  Waves, 
  Target,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const ComparisonRow = ({ tradIcon: TradIcon, tradLabel, i5Icon: I5Icon, i5Label, style }) => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr auto 1.2fr', 
      alignItems: 'center', 
      padding: '1.75rem 3.5rem',
      borderBottom: '1px solid rgba(10, 17, 22, 0.05)',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      ...style
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(126, 172, 181, 0.03)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'transparent';
    }}
    >
      {/* Traditional Side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ 
          width: '44px', 
          height: '44px', 
          borderRadius: '50%', 
          background: 'rgba(10, 17, 22, 0.03)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#8F9CAE',
          flexShrink: 0
        }}>
          <TradIcon size={20} strokeWidth={1.8} />
        </div>
        <span style={{ fontSize: '1.05rem', color: 'var(--text-muted)', fontWeight: 500, textDecoration: 'line-through', textDecorationColor: 'rgba(143, 156, 174, 0.3)' }}>{tradLabel}</span>
      </div>

      {/* Arrow */}
      <div style={{ color: 'var(--accent-secondary)', padding: '0 2rem', display: 'flex', alignItems: 'center', opacity: 0.5 }}>
        <ChevronRight size={18} strokeWidth={2} />
      </div>

      {/* i5 Side */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1.25rem',
        paddingLeft: '1rem' 
      }}>
        <div style={{ 
          width: '44px', 
          height: '44px', 
          borderRadius: '14px', 
          background: 'rgba(9, 99, 126, 0.06)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'var(--accent-gold)',
          boxShadow: '0 4px 12px rgba(9, 99, 126, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(9, 99, 126, 0.12)',
          flexShrink: 0
        }}>
          <I5Icon size={20} strokeWidth={2} />
        </div>
        <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 700 }}>{i5Label}</span>
      </div>
    </div>
  );
};

const ComparisonSection = () => {
  const comparisons = [
    { tradIcon: Search, tradLabel: 'Manual analysis', i5Icon: Brain, i5Label: 'AI-assisted intelligence' },
    { tradIcon: Layout, tradLabel: 'Fragmented tools', i5Icon: Monitor, i5Label: 'Unified terminal' },
    { tradIcon: Clock, tradLabel: 'Delayed reaction', i5Icon: Bell, i5Label: 'Real-time alerts' },
    { tradIcon: BarChart3, tradLabel: 'Basic charts', i5Icon: TrendingUp, i5Label: 'Smart-money analytics' },
    { tradIcon: MessageCircle, tradLabel: 'Public sentiment', i5Icon: Waves, i5Label: 'Whale positioning insights' },
    { tradIcon: HelpCircle, tradLabel: 'Guesswork', i5Icon: Target, i5Label: 'Data-driven conviction' }
  ];

  return (
    <section id="edge" className="section-padding" style={{ background: 'transparent' }}>
      <div className="container">
        {/* Header */}
        <div className="scroll-reveal" style={{ marginBottom: '4rem' }}>
          <div style={{ 
            color: 'var(--accent-gold)', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            letterSpacing: '0.3em', 
            marginBottom: '2rem'
          }}>
            [ 04 ] THE i5 EDGE
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: 1.05, 
            marginBottom: '2rem',
            color: 'var(--text-primary)',
            fontWeight: 800
          }}>
            Traditional trading vs. <span style={{ 
              color: 'var(--accent-gold)', 
              fontWeight: 800
            }}>i5.</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            lineHeight: 1.7,
            marginBottom: '1rem'
          }}>
            Every row is a paradigm shift. Stop guessing — start knowing.
          </p>

          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--accent-gold), var(--accent-secondary))', borderRadius: '2px' }}></div>
        </div>

        {/* Comparison Table Card */}
        <div className="scroll-reveal" style={{ 
          background: 'rgba(255, 255, 255, 0.75)', 
          backdropFilter: 'blur(30px)',
          borderRadius: '24px', 
          boxShadow: '0 30px 90px -20px rgba(10, 17, 22, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(10, 17, 22, 0.08)',
          overflow: 'hidden'
        }}>
          {/* Table Header Row */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr auto 1.2fr', 
            padding: '2rem 3.5rem',
            borderBottom: '1px solid rgba(10, 17, 22, 0.06)',
            background: 'rgba(10, 17, 22, 0.015)'
          }}>
            <div style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              letterSpacing: '0.15em', 
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DC2626', opacity: 0.5 }}></span>
              TRADITIONAL TRADING
            </div>
            <div style={{ width: '60px' }}></div>
            <div style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              letterSpacing: '0.15em', 
              color: 'var(--accent-gold)',
              paddingLeft: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-gold)' }}></span>
              I5 INTELLIGENCE
            </div>
          </div>

          {/* Data Rows */}
          {comparisons.map((item, index) => (
            <ComparisonRow 
              key={index} 
              {...item} 
              style={index === comparisons.length - 1 ? { borderBottom: 'none' } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
