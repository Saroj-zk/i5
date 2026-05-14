import React from 'react';
import { 
  Play, 
  PieChart, 
  Pickaxe, 
  Users, 
  Shield, 
  Clock, 
  Leaf, 
  Sparkles 
} from 'lucide-react';

const ProtocolRow = ({ icon: Icon, label, value, color, isLast }) => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '1rem 0',
    borderBottom: isLast ? 'none' : '1px solid rgba(10, 17, 22, 0.04)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
      <div style={{ 
        width: '34px', 
        height: '34px', 
        borderRadius: '10px', 
        background: color === 'teal' ? 'rgba(9, 99, 126, 0.06)' : color === 'green' ? 'rgba(0, 90, 91, 0.06)' : 'rgba(10, 17, 22, 0.03)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: color === 'teal' ? 'var(--accent-gold)' : color === 'green' ? 'var(--color-oceanic)' : '#8F9CAE',
        border: color !== 'default' ? `1px solid ${color === 'teal' ? 'rgba(9, 99, 126, 0.1)' : color === 'green' ? 'rgba(0, 90, 91, 0.1)' : 'rgba(10, 17, 22, 0.04)'}` : 'none'
      }}>
        <Icon size={16} strokeWidth={1.5} />
      </div>
      <span style={{ 
        fontSize: '0.72rem', 
        fontWeight: 700, 
        letterSpacing: '0.12em', 
        color: '#8F9CAE',
        textTransform: 'uppercase'
      }}>
        {label}
      </span>
    </div>
    <span style={{ 
      fontSize: '1rem', 
      fontWeight: 800, 
      color: color === 'teal' ? 'var(--accent-gold)' : color === 'green' ? 'var(--color-oceanic)' : 'var(--text-primary)',
      fontFamily: 'var(--font-main)',
      letterSpacing: '-0.02em'
    }}>
      {value}
    </span>
  </div>
);

const ProtocolCard = () => {
  const rows = [
    { icon: PieChart, label: 'SUPPLY CAP', value: '21,000,000', color: 'default' },
    { icon: Pickaxe, label: 'PRE-MINED', value: '0', color: 'teal' },
    { icon: Users, label: 'TEAM ALLOCATION', value: '0', color: 'teal' },
    { icon: Shield, label: 'FOUNDATION', value: '0', color: 'teal' },
    { icon: Clock, label: 'HALVING', value: '~4 yrs', color: 'default' },
    { icon: Leaf, label: 'EARNED VIA EMISSION', value: '100%', color: 'green' },
    { icon: Sparkles, label: 'GENESIS', value: 'TBD', color: 'default' }
  ];

  return (
    <div className="reveal" style={{ 
      background: 'rgba(255, 255, 255, 0.75)', 
      backdropFilter: 'blur(40px)',
      borderRadius: '24px', 
      padding: '0', 
      boxShadow: '0 30px 80px -20px rgba(10, 17, 22, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(10, 17, 22, 0.08)',
      width: '100%',
      maxWidth: '480px',
      overflow: 'hidden'
    }}>
      {/* Card Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1.5rem 2rem',
        borderBottom: '1px solid rgba(10, 17, 22, 0.06)',
        background: 'rgba(10, 17, 22, 0.015)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ 
            width: '36px', 
            height: '36px', 
            borderRadius: '50%', 
            background: 'rgba(9, 99, 126, 0.08)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--accent-gold)',
            border: '1px solid rgba(9, 99, 126, 0.12)'
          }}>
            <Play size={16} fill="var(--accent-gold)" />
          </div>
          <span style={{ 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            letterSpacing: '0.2em', 
            color: 'var(--text-primary)' 
          }}>
            PROTOCOL
          </span>
        </div>
        <div style={{ 
          padding: '4px 12px', 
          borderRadius: '100px', 
          background: 'rgba(126, 172, 181, 0.08)', 
          fontSize: '0.65rem', 
          fontWeight: 800, 
          color: 'var(--accent-secondary)',
          letterSpacing: '0.1em',
          border: '1px solid rgba(126, 172, 181, 0.15)'
        }}>
          v0.1
        </div>
      </div>

      {/* Rows */}
      <div style={{ padding: '1rem 2rem 2rem', display: 'flex', flexDirection: 'column' }}>
        {rows.map((row, i) => (
          <ProtocolRow key={i} {...row} isLast={i === rows.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default ProtocolCard;
