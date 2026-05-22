import React, { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setStatus('loading');
    setErrorMessage('');

    const formUrl = import.meta.env.VITE_FORM_URL || import.meta.env.FORM_URL;
    const entryEmail = import.meta.env.VITE_ENTRY_EMAIL || import.meta.env.ENTRY_EMAIL;

    if (!formUrl || !entryEmail) {
      setStatus('error');
      setErrorMessage('Waitlist configuration is missing.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append(entryEmail, email);

      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setStatus('success');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <footer style={{
      padding: '5rem 0 3rem',
      borderTop: '1px solid rgba(10, 17, 22, 0.06)',
      background: 'transparent',
      position: 'relative'
    }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <div className="logo-group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <img src="/I5_Black.png" alt="i5 Logo" style={{ height: '44px', width: 'auto', display: 'block' }} />
              <div style={{ width: '1px', height: '20px', background: 'rgba(10, 17, 22, 0.1)' }}></div>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 700 }}>
                Intelligence Network
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', maxWidth: '280px' }}>
              The intelligence layer built for traders on Hyperliquid mainnet.
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
            {/* <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Research</FooterLink> */}
            <FooterLink href="#">Blog <ArrowUpRight size={12} /></FooterLink>
          </div>

          {/* Newsletter */}
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1.25rem' }}>Signal Newsletter</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>Stay updated with the latest market intelligence and network updates.</p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="email@address.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  disabled={status === 'loading'}
                  style={{
                    flex: '1 1 160px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: status === 'error' ? '1px solid #D92D20' : '1px solid rgba(10, 17, 22, 0.1)',
                    borderRadius: '100px',
                    padding: '0.75rem 1.25rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    boxShadow: 'inset 0 2px 4px rgba(10, 17, 22, 0.02)',
                    fontFamily: 'var(--font-main)',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => {
                    if (status !== 'error') {
                      e.currentTarget.style.borderColor = 'rgba(126, 172, 181, 0.4)';
                    }
                  }}
                  onBlur={(e) => {
                    if (status !== 'error') {
                      e.currentTarget.style.borderColor = 'rgba(10, 17, 22, 0.1)';
                    }
                  }}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'loading'}
                  style={{ padding: '0.75rem 1.25rem', fontSize: '0.82rem', flexShrink: 0 }}
                >
                  {status === 'loading' ? 'Sending...' : 'Subscribe'}
                </button>
              </div>
              {status === 'success' && (
                <p style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.25rem' }}>
                  ✓ Subscribed successfully!
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#D92D20', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.25rem' }}>
                  {errorMessage || 'Something went wrong. Please try again.'}
                </p>
              )}
            </form>
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
            {/* <FooterLink href="#">Status</FooterLink> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
