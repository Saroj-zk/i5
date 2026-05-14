import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      desc: 'For individual traders exploring intelligence-native markets.',
      features: ['Basic Smart-Money Tracking', 'Real-time Price Alerts', 'Social Sentiment Feed', 'Hyperliquid Connectivity']
    },
    {
      name: 'Pro',
      price: '$49',
      desc: 'Advanced intelligence for professional traders and analysts.',
      features: ['Full Cohort Analysis', 'AI Signal Engine Access', 'Unlimited Heatmaps', 'Priority Signal Delivery', 'Custom Logic Alerts'],
      popular: true
    },
    {
      name: 'Institutional',
      price: 'Custom',
      desc: 'Enterprise-grade infrastructure for funds and organizations.',
      features: ['Dedicated AI Node', 'White-glove Onboarding', 'API Execution Layer', 'Custom Data Integrations', 'SLA Guarantees']
    }
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '1rem' }}>[ 08 INVESTMENT ]</div>
          <h2 className="section-title">Institutional power. <br /><span style={{ color: 'var(--accent-secondary)', fontWeight: 800 }}>Accessible to all.</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {plans.map((plan, i) => (
            <div key={i} className="card scroll-reveal" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              borderColor: plan.popular ? 'var(--accent-gold)' : 'var(--border-subtle)',
              background: plan.popular ? 'rgba(245, 197, 66, 0.03)' : 'var(--bg-card)'
            }}>
              {plan.popular && (
                <div style={{ 
                  position: 'absolute', 
                  top: '1.5rem', 
                  right: '1.5rem', 
                  fontSize: '0.7rem', 
                  fontWeight: 800, 
                  background: 'var(--accent-gold)', 
                  color: '#000', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '100px' 
                }}>MOST POPULAR</div>
              )}
              
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 800 }}>{plan.price}</span>
                  {plan.price !== 'Custom' && <span style={{ color: 'var(--text-muted)' }}>/mo</span>}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>{plan.desc}</p>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Check size={16} color="var(--accent-gold)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href="#" className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
