import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <a 
    href={href} 
    style={{ 
      color: 'var(--text-muted)', 
      textDecoration: 'none', 
      fontSize: '0.9rem', 
      transition: 'all 0.2s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem'
    }} 
    onMouseEnter={(e) => {
      e.currentTarget.style.color = 'var(--accent-gold)';
      e.currentTarget.style.transform = 'translateX(3px)';
    }} 
    onMouseLeave={(e) => {
      e.currentTarget.style.color = 'var(--text-muted)';
      e.currentTarget.style.transform = 'translateX(0)';
    }}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer style={{ 
      padding: '5rem 0 3rem', 
      borderTop: '1px solid rgba(10, 17, 22, 0.06)', 
      background: 'transparent', 
      position: 'relative' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', 
          gap: '3rem', 
          marginBottom: '5rem' 
        }}>
          {/* Brand Column */}
          <div>
            <div className="logo-group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div className="logo" style={{ fontWeight: 900, fontSize: '1.8rem', letterSpacing: '-0.06em', color: 'var(--text-primary)', lineHeight: 1 }}>
                i5<span style={{ color: 'var(--accent-gold)' }}>.</span>
              </div>
              <div style={{ width: '1px', height: '20px', background: 'rgba(10, 17, 22, 0.1)' }}></div>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 700 }}>
                Intelligence Network
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', maxWidth: '280px' }}>
              The intelligence-native trading network for the next generation of institutional markets.
            </p>
          </div>
          
          {/* Platform Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Platform</span>
            <FooterLink href="#">Intelligence Stack</FooterLink>
            <FooterLink href="#">Signal Engine</FooterLink>
            <FooterLink href="#">Wallet Tracking</FooterLink>
            <FooterLink href="#">Alerts & Webhooks</FooterLink>
          </div>
          
          {/* Company Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Company</span>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Research</FooterLink>
            <FooterLink href="#">Blog <ArrowUpRight size={12} /></FooterLink>
          </div>

          {/* Newsletter */}
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1.25rem' }}>Signal Newsletter</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>Stay updated with the latest market intelligence and network updates.</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="email@address.com" 
                style={{ 
                  flex: '1 1 160px', 
                  background: 'rgba(255, 255, 255, 0.8)', 
                  border: '1px solid rgba(10, 17, 22, 0.1)', 
                  borderRadius: '100px', 
                  padding: '0.75rem 1.25rem', 
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  boxShadow: 'inset 0 2px 4px rgba(10, 17, 22, 0.02)',
                  fontFamily: 'var(--font-main)',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(126, 172, 181, 0.4)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(10, 17, 22, 0.1)'}
              />
              <button className="btn btn-primary" style={{ padding: '0.75rem 1.25rem', fontSize: '0.82rem', flexShrink: 0 }}>Subscribe</button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '2.5rem', 
          borderTop: '1px solid rgba(10, 17, 22, 0.06)', 
          flexWrap: 'wrap', 
          gap: '1.5rem' 
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 500 }}>
            © 2026 i5 Intelligence Network. Built on Hyperliquid.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Status</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
