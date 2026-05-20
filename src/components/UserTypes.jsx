import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Box, 
  Users, 
  PieChart, 
  ArrowRight 
} from 'lucide-react';

const UserCard = ({ number, title, desc, icon: Icon, isWide }) => {
  return (
    <div className={`scroll-reveal user-card${isWide ? ' user-card--wide' : ''}`} style={{ 
      background: 'rgba(255, 255, 255, 0.75)', 
      backdropFilter: 'blur(30px)',
      borderRadius: '24px', 
      padding: '2.75rem 2.5rem', 
      boxShadow: '0 20px 60px rgba(10, 17, 22, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(10, 17, 22, 0.08)',
      display: 'flex',
      flexDirection: isWide ? 'row' : 'column',
      gap: isWide ? '2.5rem' : '1.75rem',
      height: '100%',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      cursor: 'pointer',
      gridColumn: isWide ? 'span 2' : 'span 1'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(126, 172, 181, 0.3)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
      e.currentTarget.style.boxShadow = '0 30px 80px rgba(126, 172, 181, 0.06), inset 0 1px 0 #FFFFFF';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'rgba(10, 17, 22, 0.08)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.75)';
      e.currentTarget.style.boxShadow = '0 20px 60px rgba(10, 17, 22, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
    }}
    >
      <div style={{ 
        width: '52px', 
        height: '52px', 
        borderRadius: '16px', 
        background: 'rgba(126, 172, 181, 0.08)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--accent-secondary)',
        boxShadow: '0 4px 12px rgba(126, 172, 181, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(126, 172, 181, 0.15)',
        flexShrink: 0
      }}>
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ 
          fontSize: '0.78rem', 
          fontWeight: 800, 
          color: 'var(--accent-secondary)', 
          marginBottom: '0.75rem',
          letterSpacing: '0.12em' 
        }}>
          {number}
        </div>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          color: 'var(--text-primary)', 
          marginBottom: '1rem',
          letterSpacing: '-0.01em'
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--text-secondary)', 
          lineHeight: 1.65
        }}>
          {desc}
        </p>
      </div>

      <div style={{ 
        marginTop: isWide ? 'auto' : '0', 
        alignSelf: isWide ? 'flex-end' : 'flex-start',
        color: 'var(--accent-secondary)', 
        display: 'flex', 
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.82rem',
        fontWeight: 700,
        opacity: 0.6,
        transition: 'opacity 0.3s'
      }}>
        <span>Learn more</span>
        <ArrowRight size={16} strokeWidth={2} />
      </div>
    </div>
  );
};

const UserTypes = () => {
  const users = [
    {
      number: '01',
      title: 'Scalpers',
      desc: 'React to momentum and volatility shifts the moment they form. Sub-second signal delivery for high-frequency edge.',
      icon: Zap
    },
    {
      number: '02',
      title: 'Swing Traders',
      desc: 'Track smart-money conviction across longer timeframes. See multi-day positioning trends before narratives break.',
      icon: TrendingUp
    },
    {
      number: '03',
      title: 'Quant Desks',
      desc: 'Structured market intelligence and behavioral signal feeds via API.',
      icon: Box
    },
    {
      number: '04',
      title: 'Signal Providers',
      desc: 'Build audiences and monetize verified, on-chain performance metrics.',
      icon: Users
    },
    {
      number: '05',
      title: 'Crypto Funds',
      desc: 'Monitor market structure and coordinated whale sentiment in real time. Institutional dashboards and risk overlays.',
      icon: PieChart,
      isWide: true
    }
  ];

  return (
    <section id="users" className="section-padding" style={{ background: 'transparent' }}>
      <div className="container">
        {/* Header */}
        <div className="scroll-reveal" style={{ marginBottom: '5rem' }}>
          <div style={{ 
            color: 'var(--accent-secondary)', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            letterSpacing: '0.3em', 
            marginBottom: '2rem'
          }}>
            BUILT FOR EVERY TRADER
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: 1.05, 
            marginBottom: '2rem',
            color: 'var(--text-primary)',
            fontWeight: 800
          }}>
            One platform. Every <span style={{ 
              color: 'var(--accent-secondary)', 
              fontWeight: 800
            }}>workflow.</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '550px',
            lineHeight: 1.7,
            marginBottom: '1rem'
          }}>
            From sub-second scalping to institutional portfolio management, i5 adapts to how you trade.
          </p>

          <div style={{ width: '60px', height: '3px', background: 'var(--accent-gold)', borderRadius: '2px' }}></div>
        </div>

        {/* User Types Grid - 3 top, 2 bottom (with last spanning 2) */}
        <div className="user-types-grid">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypes;
