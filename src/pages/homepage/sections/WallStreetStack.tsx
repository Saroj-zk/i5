import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   i5 — Bring Wall Street to Every Market
   Exact Inter Typography · Silky Smooth Scroll · Zero Stutter
   ═══════════════════════════════════════════════════════════════ */

const ACCENT = '#13c38f';

const LAYERS = [
  {
    img: '/1.png',
    tag: 'Layer 01 — Markets',
    headline: 'Every Market, Connected.',
    subtext:
      "i5 brings crypto markets, meme tokens, and global stocks into one connected market layer, so you're not jumping between platforms to see what's moving.",
    labels: ['Crypto', 'Memes', 'Stocks'],
  },
  {
    img: '/2.png',
    tag: 'Layer 02 — Signals',
    headline: 'More Than Market Data.',
    subtext:
      'Price is only part of the move. i5 connects market activity with smart money, wallets, on-chain flows, social momentum, narratives, and breaking news.',
    labels: ['On-chain', 'Smart Money', 'News', 'Social', 'Narratives'],
  },
  {
    img: '/3.png',
    tag: 'Layer 03 — Intelligence',
    headline: 'AI Agents Connect the Dots.',
    subtext:
      "i5 AI agents analyze activity across markets and data sources to find relevance, surface relevant context, and make sense of what's happening in real time.",
    labels: ['AI Agents', 'Analyze', 'Connect', 'Filter', 'Personalize'],
  },
  {
    img: '/4.png',
    tag: 'Layer 04 — Action',
    headline: 'Built to Act.',
    subtext:
      "What i5 finds doesn't end in another feed. Take it straight to alerts, AI research, the trading terminal, or Telegram when you're ready to move.",
    labels: ['Alerts', 'AI', 'Terminal', 'Telegram'],
  },
];

export function WallStreetStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkBreakpoint = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      checkBreakpoint();
      window.addEventListener('resize', checkBreakpoint);
      return () => window.removeEventListener('resize', checkBreakpoint);
    }
  }, []);

  /* ── Scroll-driven interaction (one-by-one with debounce / state guard) ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    let nextActive = 0;
    if (latest >= 0.75) {
      nextActive = 3;
    } else if (latest >= 0.50) {
      nextActive = 2;
    } else if (latest >= 0.25) {
      nextActive = 1;
    } else {
      nextActive = 0;
    }

    setActive((prev) => (prev !== nextActive ? nextActive : prev));
  });

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const stepHeight = containerHeight / 4;
    window.scrollTo({
      top: containerTop + stepHeight * index + 15,
      behavior: 'smooth',
    });
  };

  const layer = LAYERS[active];
  const STACK_STEP = isMobile ? 95 : 135;

  return (
    <section
      ref={containerRef}
      id="wall-street-stack"
      className="relative h-[320vh] bg-black text-white select-none"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── STICKY FULL-VIEWPORT CONTAINER ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start items-center pt-3 sm:pt-5 pb-4 px-4 sm:px-8 lg:px-12 overflow-hidden z-10">

        {/* ── 1. Top Section Header (Single Line with WALL STREET & EVERY MARKET Highlighted) ── */}
        <div
          style={{
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto clamp(10px, 1.8vh, 20px)',
            textAlign: 'center',
          }}
          className="shrink-0 pt-1 sm:pt-2 px-2"
        >
          <h2
            style={{
              fontSize: 'clamp(20px, 2.6vw, 42px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: '#fff',
              lineHeight: 1.15,
              margin: '0 auto',
              fontFamily: "'Inter', sans-serif",
            }}
            className="uppercase whitespace-normal sm:whitespace-nowrap"
          >
            BRING <span style={{ color: ACCENT, textShadow: '0 0 35px rgba(19,195,143,0.45)' }}>WALL STREET</span> TO <span style={{ color: ACCENT, textShadow: '0 0 35px rgba(19,195,143,0.45)' }}>EVERY TRADER</span>
          </h2>
          <p
            style={{
              marginTop: '6px',
              fontSize: 'clamp(12px, 0.95vw, 14.5px)',
              color: 'rgba(255,255,255,0.42)',
              maxWidth: '580px',
              lineHeight: 1.5,
              margin: '6px auto 0',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Crypto, memes, stocks, on-chain activity, and market-moving news
            come together in one real-time system built for smarter trading.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════
            2. MAIN ROW: [100% Visible 3D Stack] <---> [Connector] <---> [Content]
            ════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: '100%',
            maxWidth: '1300px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '16px' : 'clamp(20px, 3.5vw, 56px)',
            flex: '1 1 auto',
            overflow: 'visible',
          }}
        >
          {/* ── LEFT: Full 3D Stack (Large, 100% Unclipped, Hardware Accelerated) ── */}
          <div
            style={{
              width: isMobile ? '100%' : 'clamp(380px, 44vw, 560px)',
              height: isMobile ? '280px' : '460px',
              position: 'relative',
              overflow: 'visible',
              paddingTop: '16px',
            }}
            className="shrink-0 flex items-center justify-center"
          >
            {isMobile ? (
              /* Mobile: Single active card with smooth spring fade */
              <div style={{ width: '100%', maxWidth: '360px', position: 'relative' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      willChange: 'transform, opacity',
                      transform: 'translateZ(0)',
                    }}
                  >
                    <img
                      src={LAYERS[active].img}
                      alt={LAYERS[active].headline}
                      draggable={false}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '16px',
                        filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.8))',
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              /* Desktop: Full 4-Layer 3D Stack, Smooth Spring Translation */
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'visible',
                }}
              >
                <motion.div
                  animate={{
                    y: -active * STACK_STEP + (active === 0 ? 0 : 15),
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 240,
                    damping: 28,
                    mass: 0.8,
                  }}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '800px',
                    overflow: 'visible',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                  }}
                >
                  {LAYERS.map((l, i) => {
                    const isActive = i === active;
                    const restY = i * STACK_STEP;
                    const distance = Math.abs(i - active);

                    return (
                      <motion.div
                        key={i}
                        onClick={() => scrollToStep(i)}
                        animate={{
                          opacity: isActive ? 1 : distance === 1 ? 0.16 : distance === 2 ? 0.06 : 0.02,
                          scale: isActive ? 1.03 : 0.98,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          position: 'absolute',
                          top: restY,
                          left: 0,
                          width: '100%',
                          cursor: 'pointer',
                          borderRadius: '16px',
                          zIndex: isActive ? 20 : 4 - distance,
                          willChange: 'opacity, transform',
                          transform: 'translateZ(0)',
                          filter: isActive
                            ? 'drop-shadow(0 0 35px rgba(19,195,143,0.4))'
                            : 'none',
                        }}
                      >
                        <img
                          src={l.img}
                          alt={l.headline}
                          draggable={false}
                          style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            borderRadius: '16px',
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            )}
          </div>

          {/* ── MIDDLE: Dotted Connector Line ── */}
          {!isMobile && (
            <div
              style={{
                flex: '0 0 auto',
                width: 'clamp(36px, 3vw, 52px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="100%"
                height="32"
                viewBox="0 0 80 40"
                fill="none"
                style={{ overflow: 'visible' }}
              >
                <line
                  x1="4"
                  y1="20"
                  x2="68"
                  y2="20"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1.2"
                  strokeDasharray="4 5"
                />
                <circle
                  cx="72"
                  cy="20"
                  r="3.5"
                  fill={ACCENT}
                  style={{ filter: `drop-shadow(0 0 6px ${ACCENT})` }}
                />
                <circle cx="4" cy="20" r="2" fill="rgba(255,255,255,0.25)" />
                <circle r="1.8" fill={ACCENT} opacity="0.9">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path="M 4 20 L 68 20"
                  />
                </circle>
              </svg>
            </div>
          )}

          {/* ── RIGHT: Active Content Panel (Exact Inter Typography) ── */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              maxWidth: '450px',
              textAlign: 'left',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: 'opacity, transform' }}
              >
                {/* Tag */}
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: ACCENT,
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: ACCENT,
                      boxShadow: `0 0 8px ${ACCENT}`,
                      flexShrink: 0,
                    }}
                  />
                  {layer.tag}
                </div>

                {/* Headline */}
                <h3
                  style={{
                    fontSize: 'clamp(26px, 2.6vw, 42px)',
                    fontWeight: 600,
                    color: '#fff',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.15,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {layer.headline}
                </h3>

                {/* Subtext */}
                <p
                  style={{
                    marginTop: '12px',
                    fontSize: 'clamp(13px, 1.05vw, 15px)',
                    lineHeight: 1.65,
                    color: 'rgba(255,255,255,0.45)',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {layer.subtext}
                </p>

                {/* Label pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '7px',
                    marginTop: '18px',
                  }}
                >
                  {layer.labels.map((label, j) => (
                    <motion.span
                      key={label}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.03 + 0.04 }}
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: ACCENT,
                        border: `1px solid ${ACCENT}30`,
                        borderRadius: '100px',
                        padding: '4px 12px',
                        background: `${ACCENT}0c`,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {label}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mini nav list */}
            <div
              style={{
                marginTop: '26px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {LAYERS.map((l, i) => {
                const isCurrent = i === active;
                return (
                  <button
                    key={i}
                    onClick={() => scrollToStep(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '7px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      borderBottom:
                        i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      transition: 'all 0.25s ease',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: isCurrent ? ACCENT : 'transparent',
                        border: isCurrent
                          ? `1.5px solid ${ACCENT}`
                          : '1px solid rgba(255,255,255,0.14)',
                        boxShadow: isCurrent ? `0 0 8px ${ACCENT}66` : 'none',
                        flexShrink: 0,
                        transition: 'all 0.25s ease',
                      }}
                    />
                    <span
                      style={{
                        fontSize: 'clamp(12px, 1vw, 13.5px)',
                        color: isCurrent ? ACCENT : 'rgba(255,255,255,0.22)',
                        fontWeight: isCurrent ? 600 : 400,
                        letterSpacing: '-0.01em',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {l.headline}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WallStreetStack;
