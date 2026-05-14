import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SignalSequencer = () => {
  const containerRef = useRef(null);
  // Track which signals have active popups: { trackIdx-sigIdx: true }
  const [activePopups, setActivePopups] = useState({});

  const tracks = [
    {
      name: 'WHALE_FLOW', color: '#5E5CE6', signals: [
        { type: 'pill', width: '80px' },
        { type: 'dot' },
        { type: 'pill', width: '120px', label: 'Whale Accumulation' },
        { type: 'trigger', label: 'Large Transfer' },
        { type: 'pill', width: '60px' },
        { type: 'dot' },
        { type: 'pill', width: '100px' }
      ]
    },
    {
      name: 'SIGNAL_ENGINE', color: '#40CBE0', signals: [
        { type: 'pill', width: '100px', label: 'Momentum Shift' },
        { type: 'trigger', label: 'Alpha Detected' },
        { type: 'pill', width: '70px' },
        { type: 'dot' },
        { type: 'pill', width: '130px' },
        { type: 'dot' },
        { type: 'pill', width: '90px' }
      ]
    },
    {
      name: 'EXECUTION_LAYER', color: '#BF5AF2', signals: [
        { type: 'pill', width: '90px' },
        { type: 'dot' },
        { type: 'pill', width: '110px' },
        { type: 'trigger', label: 'Liquidity Gap' },
        { type: 'pill', width: '80px' },
        { type: 'dot' },
        { type: 'pill', width: '120px' }
      ]
    },
    {
      name: 'SENTIMENT_OS', color: '#7EACB5', signals: [
        { type: 'pill', width: '120px', label: 'Social Spike' },
        { type: 'trigger' },
        { type: 'pill', width: '80px' },
        { type: 'dot' },
        { type: 'pill', width: '100px', label: 'Sentiment Pivot' },
        { type: 'dot' },
        { type: 'pill', width: '70px' }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scrolling logic
      const rows = document.querySelectorAll('.sequencer-row-inner');
      rows.forEach((row, i) => {
        const direction = i % 2 === 0 ? -1 : 1;
        const duration = 25 + i * 5;

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

      // Popup trigger logic
      const interval = setInterval(() => {
        const trackIdx = Math.floor(Math.random() * tracks.length);
        const track = tracks[trackIdx];
        const signalsWithLabels = track.signals
          .map((s, i) => ({ ...s, i }))
          .filter(s => s.label);

        const signal = signalsWithLabels[Math.floor(Math.random() * signalsWithLabels.length)];
        const popupKey = `${trackIdx}-${signal.i}`;

        setActivePopups(prev => ({ ...prev, [popupKey]: true }));

        setTimeout(() => {
          setActivePopups(prev => {
            const next = { ...prev };
            delete next[popupKey];
            return next;
          });
        }, 4000);
      }, 2000);

      return () => clearInterval(interval);
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
      padding: '7rem 0',
      background: 'rgba(10, 17, 22, 0.015)',
      borderTop: '1px solid rgba(10, 17, 22, 0.03)',
      borderBottom: '1px solid rgba(10, 17, 22, 0.03)',
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 2 }}>
        {tracks.map((track, trackIdx) => (
          <div key={trackIdx} className="sequencer-row" style={{
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
                    const popupKey = `${trackIdx}-${sigIdx}`;
                    const isPopupActive = activePopups[popupKey];

                    return (
                      <div key={sigIdx} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {isPopupActive && sig.label && (
                          <PopupLabel label={sig.label} color={track.color} />
                        )}

                        {sig.type === 'pill' && (
                          <div style={{
                            width: sig.width,
                            height: '22px',
                            background: `${track.color}15`,
                            border: `1px solid ${track.color}44`,
                            borderRadius: '100px',
                            backdropFilter: 'blur(4px)'
                          }}></div>
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
                            justifyContent: 'center'
                          }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: track.color, boxShadow: `0 0 12px ${track.color}` }}></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PopupLabel = ({ label, color }) => {
  const labelRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(labelRef.current,
      { opacity: 0, y: 15, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
    );
    gsap.to(labelRef.current, {
      opacity: 0,
      y: -15,
      scale: 0.8,
      delay: 3.2,
      duration: 0.6
    });
  }, []);

  return (
    <div ref={labelRef} style={{
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '14px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      zIndex: 50
    }}>
      <div style={{
        padding: '0.45rem 1rem',
        background: 'rgba(255, 255, 255, 0.95)',
        border: `1px solid ${color}44`,
        borderRadius: '8px',
        color: color,
        fontSize: '0.7rem',
        fontWeight: 800,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        boxShadow: `0 12px 30px rgba(10, 17, 22, 0.12), 0 0 20px ${color}15`,
        backdropFilter: 'blur(12px)'
      }}>
        {label}
      </div>
      <div style={{
        width: '1.5px',
        height: '18px',
        background: `linear-gradient(to bottom, ${color}66, transparent)`
      }}></div>
    </div>
  );
};

export default SignalSequencer;
