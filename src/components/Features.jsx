import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const Features = () => {
  return (
    <section id="platform" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div className="scroll-reveal">
            <div style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '1rem' }}>[ 01 THE PROBLEM ]</div>
            <h2 className="section-title">The modern trading <br /><span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>stack is broken.</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px', lineHeight: '1.6' }}>
              Traders are drowning in data but starving for intelligence. Ad-hoc tools, fragmented signals, and manual execution layers lead to missed opportunities and decay.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="card" style={{ padding: '1.5rem', background: 'rgba(255, 59, 48, 0.03)', borderColor: 'rgba(255, 59, 48, 0.1)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <XCircle size={18} color="#FF3B30" />
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>Fragmented Tooling</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Switching between 5+ tabs just to verify a single trade idea.</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', background: 'rgba(255, 59, 48, 0.03)', borderColor: 'rgba(255, 59, 48, 0.1)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <XCircle size={18} color="#FF3B30" />
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>Information Decay</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>By the time you see the signal, the institutional move is over.</p>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal">
            <div className="card" style={{ padding: '3rem', background: 'rgba(245, 197, 66, 0.02)', borderColor: 'rgba(245, 197, 66, 0.2)' }}>
              <div style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '2rem' }}>THE i5 SOLUTION</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  'Unified Intelligence OS',
                  'Real-time Flow Aggregation',
                  'Predictive AI Core',
                  'Integrated Execution Layer'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <CheckCircle2 size={20} color="var(--accent-gold)" />
                    <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ marginTop: '3rem', height: '150px', background: 'rgba(245, 197, 66, 0.05)', borderRadius: '12px', border: '1px dashed rgba(245, 197, 66, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>+84%</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Efficiency Gain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
