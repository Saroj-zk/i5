import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar reveal ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div className="logo" style={{ fontWeight: 900, fontSize: '1.6rem', letterSpacing: '-0.06em', color: 'var(--text-primary)', lineHeight: 1 }}>
          i5<span style={{ color: 'var(--accent-gold)' }}>.</span>
        </div>
        <div style={{ width: '1px', height: '24px', background: 'rgba(10, 17, 22, 0.1)' }}></div>
        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 600 }}>
          Intelligence Network
        </span>
      </div>
      
      <ul className="nav-links">
        <li><a href="#platform">Platform</a></li>
        <li><a href="#capabilities">Features</a></li>
        <li><a href="#edge">Compare</a></li>
        <li><a href="#users">Users</a></li>
      </ul>
      
      <div className="nav-actions" style={{ display: 'flex', gap: '0.75rem' }}>
        <a href="#early" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>Early Access</a>
        <a href="#launch" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>Launch App</a>
      </div>
    </nav>
  );
};

export default Navbar;
