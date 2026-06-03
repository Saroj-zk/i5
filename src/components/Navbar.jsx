import React, { useEffect, useState } from 'react';

const Navbar = ({ onJoinClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialStyle = {
    color: 'var(--text-muted)',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(10, 17, 22, 0.03)',
    border: '1px solid rgba(10, 17, 22, 0.05)',
    cursor: 'pointer',

  };

  const handleSocialMouseEnter = (e) => {
    e.currentTarget.style.color = 'var(--accent-gold)';
    e.currentTarget.style.borderColor = 'rgba(126, 172, 181, 0.3)';
    e.currentTarget.style.background = 'rgba(126, 172, 181, 0.05)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleSocialMouseLeave = (e) => {
    e.currentTarget.style.color = 'var(--text-muted)';
    e.currentTarget.style.borderColor = 'rgba(10, 17, 22, 0.05)';
    e.currentTarget.style.background = 'rgba(10, 17, 22, 0.03)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleMobileJoinClick = () => {
    setMobileMenuOpen(false);
    onJoinClick();
  };

  const handleSectionScroll = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (section) {
      // Change URL name without #
      window.history.pushState(null, '', `/${id}`);

      // Smooth scroll
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={`navbar reveal ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="logo-group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src="/I5_Black.png" alt="i5 Logo" style={{ height: '38px', width: 'auto', display: 'block' }} />
        <div style={{ width: '1px', height: '24px', background: 'rgba(10, 17, 22, 0.1)' }}></div>
        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 600 }}>
          Intelligence Network
        </span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/platform" onClick={(e) => handleSectionScroll(e, 'platform')}>
            Platform
          </a>
        </li>

        <li>
          <a href="/capabilities" onClick={(e) => handleSectionScroll(e, 'capabilities')}>
            Features
          </a>
        </li>

        <li>
          <a href="/edge" onClick={(e) => handleSectionScroll(e, 'edge')}>
            Compare
          </a>
        </li>

        <li>
          <a href="/users" onClick={(e) => handleSectionScroll(e, 'users')}>
            Users
          </a>
        </li>
      </ul>

      <div className="desktop-nav-divider"></div>

      <div className="header-socials-container">
        <a
          href="https://x.com/ifivelabs"
          target="_blank"
          rel="noopener noreferrer"
          style={socialStyle}
          onMouseEnter={handleSocialMouseEnter}
          onMouseLeave={handleSocialMouseLeave}
          aria-label="Twitter/X"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
          </svg>
        </a>
        <a
          href="https://t.me/I5Labs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...socialStyle,
            margin: '0 1rem',
          }}
          onMouseEnter={handleSocialMouseEnter}
          onMouseLeave={handleSocialMouseLeave}
          aria-label="Telegram"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://discord.gg/UASPfWuvAA"
          target="_blank"
          rel="noopener noreferrer"
          style={socialStyle}
          onMouseEnter={handleSocialMouseEnter}
          onMouseLeave={handleSocialMouseLeave}
          aria-label="Discord"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
          </svg>
        </a>
      </div>

      <button onClick={onJoinClick} className="btn btn-primary desktop-waitlist-btn" style={{
        padding: '0.55rem 1.35rem',
        fontSize: '0.82rem',
        marginLeft: '1.25rem',
        whiteSpace: 'nowrap',
        border: 'none',
        cursor: 'pointer'
      }}>
        Join Waitlist
      </button>

      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        )}
      </button>

      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <ul className="mobile-nav-links">
            <li>
              <a href="/platform" onClick={(e) => { handleSectionScroll(e, 'platform'); handleLinkClick(); }}>
                Platform
              </a>
            </li>
            <li>
              <a href="/capabilities" onClick={(e) => { handleSectionScroll(e, 'capabilities'); handleLinkClick(); }}>
                Features
              </a>
            </li>
            <li>
              <a href="/edge" onClick={(e) => { handleSectionScroll(e, 'edge'); handleLinkClick(); }}>
                Compare
              </a>
            </li>
            <li>
              <a href="/users" onClick={(e) => { handleSectionScroll(e, 'users'); handleLinkClick(); }}>
                Users
              </a>
            </li>
          </ul>

          <div className="mobile-socials-container">
            <a
              href="https://x.com/ifivelabs"
              target="_blank"
              rel="noopener noreferrer"
              style={socialStyle}
              onMouseEnter={handleSocialMouseEnter}
              onMouseLeave={handleSocialMouseLeave}
              aria-label="Twitter/X"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
              </svg>
            </a>
            <a
              href="https://t.me/I5Labs"
              target="_blank"
              rel="noopener noreferrer"
              style={socialStyle}
              onMouseEnter={handleSocialMouseEnter}
              onMouseLeave={handleSocialMouseLeave}
              aria-label="Telegram"
            >
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://discord.gg/UASPfWuvAA"
              target="_blank"
              rel="noopener noreferrer"
              style={socialStyle}
              onMouseEnter={handleSocialMouseEnter}
              onMouseLeave={handleSocialMouseLeave}
              aria-label="Discord"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>
          </div>

          <button
            onClick={handleMobileJoinClick}
            className="btn btn-primary"
            style={{
              padding: '0.55rem 1.35rem',
              fontSize: '0.82rem',
              whiteSpace: 'nowrap',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              maxWidth: '220px',
              textAlign: 'center'
            }}
          >
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;