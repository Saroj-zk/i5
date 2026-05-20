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
        <img src="/I5_Black.png" alt="i5 Logo" style={{ height: '38px', width: 'auto', display: 'block' }} />
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



    </nav>
  );
};

export default Navbar;
