import React from 'react';
import {
  Users,
  Shield,
  Briefcase,
  Globe,
  Leaf,
  PieChart
} from 'lucide-react';

const AllocationCol = ({ icon: Icon, label, value, subLabel, isSpecial }) => (
  <div style={{
    padding: '2.5rem 2rem',
    borderRight: isSpecial ? 'none' : '1px solid rgba(10, 17, 22, 0.05)',
    borderBottom: '1px solid rgba(10, 17, 22, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    flex: '1 1 200px',
    background: isSpecial ? 'rgba(126, 172, 181, 0.04)' : 'transparent',
    transition: 'all 0.3s ease',
    position: 'relative'
  }}>
    {/* Zero strikethrough effect for non-special items */}
    {!isSpecial && value === '0' && (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-12deg)',
        width: '80%',
        height: '2px',
        background: 'rgba(220, 38, 38, 0.06)',
        borderRadius: '1px',
        pointerEvents: 'none'
      }}></div>
    )}
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        background: isSpecial ? 'rgba(126, 172, 181, 0.1)' : 'rgba(10, 17, 22, 0.03)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isSpecial ? 'var(--accent-secondary)' : '#8F9CAE',
        boxShadow: isSpecial ? '0 4px 12px rgba(126, 172, 181, 0.06)' : 'none'
      }}>
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <span style={{
        fontSize: '0.72rem',
        fontWeight: 800,
        letterSpacing: '0.12em',
        color: 'var(--text-muted)',
        textTransform: 'uppercase'
      }}>
        {label}
      </span>
    </div>

    <div>
      <div style={{
        fontSize: '3rem',
        fontWeight: 700,
        color: isSpecial ? 'var(--accent-secondary)' : value === '0' ? 'rgba(10, 17, 22, 0.15)' : 'var(--text-primary)',
        lineHeight: 1,
        marginBottom: '0.75rem'
      }}>
        {value}
      </div>
      <div style={{
        fontSize: '0.78rem',
        fontWeight: 700,
        color: 'var(--text-muted)',
        letterSpacing: '0.05em'
      }}>
        {subLabel}
      </div>
    </div>
  </div>
);

const AllocationSection = () => {
  return (
    <section id="allocation" className="section-padding" style={{ background: 'transparent' }}>
      <div className="container">
        {/* Header Text */}
        <div className="scroll-reveal" style={{ marginBottom: '5rem' }}>
          <div style={{
            color: 'var(--accent-secondary)',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.3em',
            marginBottom: '2rem'
          }}>
            [ 06 ] TOKEN ECONOMICS
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.05,
            marginBottom: '2rem',
            color: 'var(--text-primary)',
            fontWeight: 800,
            maxWidth: '650px'
          }}>
            The allocation table is <span style={{
              color: 'var(--accent-secondary)',
              fontWeight: 800
            }}>empty.</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '580px',
            lineHeight: '1.7',
            fontWeight: 400,
            marginBottom: '1rem'
          }}>
            i5 ships with no pre-mined supply. No team allocation. No foundation.
            No investor round denominated in tokens. No public sale. No airdrop.
            100% of $i5 enters circulation through emission, earned by operators running infrastructure on the network.
          </p>

          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-gold))', borderRadius: '2px' }}></div>
        </div>

        {/* Allocation Card */}
        <div className="scroll-reveal" style={{
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(30px)',
          borderRadius: '24px',
          boxShadow: '0 30px 90px -20px rgba(10, 17, 22, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(10, 17, 22, 0.08)',
          overflow: 'hidden'
        }}>
          {/* Card Header Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem 2.5rem',
            borderBottom: '1px solid rgba(10, 17, 22, 0.06)',
            background: 'rgba(10, 17, 22, 0.015)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(126, 172, 181, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-secondary)',
                border: '1px solid rgba(126, 172, 181, 0.15)'
              }}>
                <PieChart size={18} strokeWidth={2} />
              </div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: 'var(--text-muted)'
              }}>
                SUPPLY DISTRIBUTION
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>21,000,000</span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                color: 'var(--accent-secondary)',
                letterSpacing: '0.1em',
                background: 'rgba(126, 172, 181, 0.1)',
                padding: '0.2rem 0.6rem',
                borderRadius: '6px',
                border: '1px solid rgba(126, 172, 181, 0.15)'
              }}>MAX</span>
            </div>
          </div>

          {/* Grid Content */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <AllocationCol icon={Users} label="TEAM" value="0" subLabel="$i5" />
            <AllocationCol icon={Shield} label="FOUNDATION" value="0" subLabel="$i5" />
            <AllocationCol icon={Briefcase} label="INVESTORS" value="0" subLabel="$i5" />
            <AllocationCol icon={Globe} label="PUBLIC SALE" value="0" subLabel="$i5" />
            <AllocationCol
              icon={Leaf}
              label="EARNED VIA EMISSION"
              value="100%"
              subLabel="% of 21,000,000 $i5"
              isSpecial={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllocationSection;
