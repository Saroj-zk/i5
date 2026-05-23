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
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a
                href="https://x.com/ifivelabs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(10, 17, 22, 0.03)',
                  border: '1px solid rgba(10, 17, 22, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-gold)';
                  e.currentTarget.style.borderColor = 'rgba(126, 172, 181, 0.3)';
                  e.currentTarget.style.background = 'rgba(126, 172, 181, 0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'rgba(10, 17, 22, 0.05)';
                  e.currentTarget.style.background = 'rgba(10, 17, 22, 0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Twitter/X"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                </svg>
              </a>
              <a
                href="https://t.me/I5Labs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(10, 17, 22, 0.03)',
                  border: '1px solid rgba(10, 17, 22, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-gold)';
                  e.currentTarget.style.borderColor = 'rgba(126, 172, 181, 0.3)';
                  e.currentTarget.style.background = 'rgba(126, 172, 181, 0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'rgba(10, 17, 22, 0.05)';
                  e.currentTarget.style.background = 'rgba(10, 17, 22, 0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Telegram"
              >
                <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://discord.gg/rf3FTS7F"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(10, 17, 22, 0.03)',
                  border: '1px solid rgba(10, 17, 22, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-gold)';
                  e.currentTarget.style.borderColor = 'rgba(126, 172, 181, 0.3)';
                  e.currentTarget.style.background = 'rgba(126, 172, 181, 0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'rgba(10, 17, 22, 0.05)';
                  e.currentTarget.style.background = 'rgba(10, 17, 22, 0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Discord"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                </svg>
              </a>
            </div>
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
