import React from 'react';
import { 
  Zap, 
  BarChart3, 
  Radio, 
  Crown, 
  Wallet 
} from 'lucide-react';

const TrustedBy = () => {
  const items = [
    { label: "Perp Traders", icon: Zap, stat: "2.4K+" },
    { label: "Quant Desks", icon: BarChart3, stat: "180+" },
    { label: "Signal Providers", icon: Radio, stat: "340+" },
    { label: "Hyperliquid Power Users", icon: Crown, stat: "1.2K+" },
    { label: "Crypto-Native Funds", icon: Wallet, stat: "90+" }
  ];

  return (
    <section style={{ 
      padding: '3rem 0 6rem 0', 
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle Grid Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(rgba(10, 17, 22, 0.04) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        opacity: 0.5,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '0.5rem'
          }}>
            <div style={{ flex: '0 1 120px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(10, 17, 22, 0.08))' }}></div>
            <h2 style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              opacity: 0.7,
              whiteSpace: 'nowrap'
            }}>
              Trusted By
            </h2>
            <div style={{ flex: '0 1 120px', height: '1px', background: 'linear-gradient(90deg, rgba(10, 17, 22, 0.08), transparent)' }}></div>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '1.25rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {items.map((item, idx) => (
            <div key={idx} className="scroll-reveal" style={{
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(10, 17, 22, 0.06)',
              borderRadius: '20px',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '1rem',
              boxShadow: '0 10px 30px rgba(10, 17, 22, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.borderColor = 'rgba(126, 172, 181, 0.25)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(126, 172, 181, 0.06), inset 0 1px 0 #FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.65)';
              e.currentTarget.style.borderColor = 'rgba(10, 17, 22, 0.06)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(10, 17, 22, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
            }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(126, 172, 181, 0.06)',
                border: '1px solid rgba(126, 172, 181, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-secondary)'
              }}>
                <item.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 800, 
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem'
                }}>
                  {item.stat}
                </div>
                <span style={{ 
                  fontSize: '0.82rem', 
                  fontWeight: 600, 
                  color: 'var(--text-muted)',
                  letterSpacing: '0.02em'
                }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
