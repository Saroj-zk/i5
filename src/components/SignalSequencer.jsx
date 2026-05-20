import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SignalSequencer = () => {
  const containerRef = useRef(null);

  // 4x Length Expansion: Tracks now contain exactly 28 varied components each (originally 7)
  // Each trigger component has a dedicated unique word assigned permanently
  const tracks = [
    {
      name: 'WHALE_FLOW', color: '#5E5CE6', signals: [
        { type: 'pill', width: '80px' },
        { type: 'dot' },
        { type: 'pill', width: '120px' },
        { type: 'trigger', label: 'Alpha Detected' },
        { type: 'pill', width: '60px' },
        { type: 'dot' },
        { type: 'pill', width: '100px' },
        { type: 'dot' },
        { type: 'pill', width: '90px' },
        { type: 'pill', width: '50px' },
        { type: 'trigger', label: 'Momentum Shift' },
        { type: 'dot' },
        { type: 'pill', width: '130px' },
        { type: 'dot' },
        { type: 'pill', width: '70px' },
        { type: 'dot' },
        { type: 'pill', width: '110px' },
        { type: 'trigger', label: 'Liquidity Gap' },
        { type: 'pill', width: '80px' },
        { type: 'dot' },
        { type: 'pill', width: '120px' },
        { type: 'dot' },
        { type: 'pill', width: '100px' },
        { type: 'trigger', label: 'Whale Accumulation' },
        { type: 'pill', width: '60px' },
        { type: 'dot' },
        { type: 'pill', width: '140px' },
        { type: 'dot' }
      ]
    },
    {
      name: 'SIGNAL_ENGINE', color: '#40CBE0', signals: [
        { type: 'pill', width: '100px' },
        { type: 'trigger', label: 'Sentiment Flip' },
        { type: 'pill', width: '70px' },
        { type: 'dot' },
        { type: 'pill', width: '130px' },
        { type: 'dot' },
        { type: 'pill', width: '90px' },
        { type: 'dot' },
        { type: 'pill', width: '110px' },
        { type: 'trigger', label: 'Large Transfer' },
        { type: 'pill', width: '80px' },
        { type: 'dot' },
        { type: 'pill', width: '120px' },
        { type: 'dot' },
        { type: 'pill', width: '60px' },
        { type: 'dot' },
        { type: 'pill', width: '100px' },
        { type: 'trigger', label: 'Breakout Triggered' },
        { type: 'pill', width: '70px' },
        { type: 'dot' },
        { type: 'pill', width: '140px' },
        { type: 'dot' },
        { type: 'pill', width: '90px' },
        { type: 'trigger', label: 'Smart Money Inflow' },
        { type: 'pill', width: '50px' },
        { type: 'dot' },
        { type: 'pill', width: '120px' },
        { type: 'dot' }
      ]
    },
    {
      name: 'EXECUTION_LAYER', color: '#BF5AF2', signals: [
        { type: 'pill', width: '90px' },
        { type: 'dot' },
        { type: 'pill', width: '110px' },
        { type: 'trigger', label: 'Volatility Spike' },
        { type: 'pill', width: '80px' },
        { type: 'dot' },
        { type: 'pill', width: '120px' },
        { type: 'dot' },
        { type: 'pill', width: '100px' },
        { type: 'trigger', label: 'Capital Rotation' },
        { type: 'pill', width: '60px' },
        { type: 'dot' },
        { type: 'pill', width: '130px' },
        { type: 'dot' },
        { type: 'pill', width: '70px' },
        { type: 'dot' },
        { type: 'pill', width: '90px' },
        { type: 'trigger', label: 'Order Flow Surge' },
        { type: 'pill', width: '80px' },
        { type: 'dot' },
        { type: 'pill', width: '110px' },
        { type: 'dot' },
        { type: 'pill', width: '120px' },
        { type: 'trigger', label: 'Trend Reversal' },
        { type: 'pill', width: '70px' },
        { type: 'dot' },
        { type: 'pill', width: '100px' },
        { type: 'dot' }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scrolling logic (Optimized speed settings)
      const rows = document.querySelectorAll('.sequencer-row-inner');
      rows.forEach((row, i) => {
        const direction = i % 2 === 0 ? -1 : 1;
        const duration = 30 + i * 5;

        gsap.fromTo(row,
          { xPercent: direction === -1 ? 0 : -25 },
          {
            xPercent: direction === -1 ? -25 : 0,
            ease: 'none',
            duration: duration,
            repeat: -1
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sequencer-wrapper" style={{
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      padding: '4rem 0 1rem 0',
      background: 'rgba(10, 17, 22, 0.012)',
      borderTop: '1px solid rgba(10, 17, 22, 0.03)',
      borderBottom: '1px solid rgba(10, 17, 22, 0.03)',
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
        {tracks.map((track, trackIdx) => (
          <React.Fragment key={trackIdx}>
            {/* Delicate instrument separator line */}
            {trackIdx > 0 && (
              <div style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(10, 17, 22, 0.04) 20%, rgba(10, 17, 22, 0.04) 80%, transparent)',
                margin: '0.5rem 0'
              }} />
            )}

            <div className="sequencer-row" style={{
              height: '40px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div className="sequencer-row-inner" style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                position: 'absolute',
                left: 0,
                padding: 0,
                willChange: 'transform'
              }}>
                {[...Array(4)].map((_, loopIdx) => (
                  <div key={loopIdx} style={{ display: 'flex', gap: '4rem', alignItems: 'center', paddingRight: '4rem' }}>
                    {track.signals.map((sig, sigIdx) => {
                      return (
                        <div key={sigIdx} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {sig.type === 'trigger' && sig.label && (
                            <PopupLabel label={sig.label} color={track.color} />
                          )}

                          {sig.type === 'pill' && (
                            <div
                              className="sequencer-capsule"
                              style={{
                                width: sig.width,
                                height: '22px',
                                background: `${track.color}15`,
                                border: `1px solid ${track.color}44`,
                                borderRadius: '100px',
                                backdropFilter: 'blur(4px)',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = `${track.color}35`;
                                e.currentTarget.style.borderColor = `${track.color}88`;
                                e.currentTarget.style.boxShadow = `0 0 15px ${track.color}22`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = `${track.color}15`;
                                e.currentTarget.style.borderColor = `${track.color}44`;
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            ></div>
                          )}
                          {sig.type === 'dot' && (
                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(10, 17, 22, 0.15)' }}></div>
                          )}
                          {sig.type === 'trigger' && (
                            <div style={{
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: `${track.color}08`,
                              border: `1px solid ${track.color}55`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative'
                            }}>
                              {/* Concentric Telemetry Pulsing Rings */}
                              <div className="telemetry-halo" style={{ background: `${track.color}18`, border: `1px solid ${track.color}33` }}></div>
                              <div className="telemetry-halo" style={{ background: `${track.color}0a`, border: `1px solid ${track.color}18`, animationDelay: '1.2s' }}></div>

                              <div style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: track.color,
                                boxShadow: `0 0 12px ${track.color}`,
                                position: 'relative',
                                zIndex: 2
                              }}></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const PopupLabel = ({ label, color }) => {
  return (
    <div className="popup-label-container" style={{
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      zIndex: 50,
      pointerEvents: 'none'
    }}>
      <div
        className="popup-label-inner"
        style={{
          padding: '0.5rem 1.1rem',
          background: 'rgba(255, 255, 255, 0.98)',
          border: `1px solid ${color}33`,
          borderRadius: '8px',
          color: color,
          fontSize: '0.72rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          boxShadow: `0 12px 30px rgba(10, 17, 22, 0.08), 0 0 20px ${color}10`,
          backdropFilter: 'blur(16px)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {label}
      </div>
      <div style={{
        width: '1.5px',
        height: '10px',
        background: `linear-gradient(to bottom, ${color}44, transparent)`
      }}></div>
    </div>
  );
};

export default SignalSequencer;
