import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Check, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const COMPARISONS = [
  {
    traditional: 'Market data here. Trading somewhere else.',
    i5: 'Live data to execution, one flow.',
  },
  {
    traditional: 'Find the meme. Then hunt down the on-chain data.',
    i5: 'Discover, check, trade. Done.',
  },
  {
    traditional: 'AI works. As long as you keep prompting it.',
    i5: 'Agentic AI keeps working.',
  },
  {
    traditional: 'News drops. Now figure out what it actually means.',
    i5: 'Real-time news with market context.',
  },
  {
    traditional: 'Found the trade. Time to switch platforms.',
    i5: 'One-click execution.',
  },
  {
    traditional: 'Close the terminal. There goes the setup.',
    i5: 'Terminal or Telegram. Keep trading.',
  },
];

export function Edge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setHoveredRowIndex(0);
    }
  }, []);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) return;
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    if (width === 0) return;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex >= 0 && newIndex < COMPARISONS.length && newIndex !== hoveredRowIndex) {
      setHoveredRowIndex(newIndex);
    }
  };

  const handleRowSelect = (idx: number) => {
    setHoveredRowIndex(idx);
    if (mobileScrollContainerRef.current) {
      const container = mobileScrollContainerRef.current;
      container.scrollTo({
        left: idx * container.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();
    const ctx = gsap.context(() => {
      // Header animations
      gsap.from('.edge-header > *', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
      });

      // Comparison table fade-in
      gsap.from('.edge-table', {
        scrollTrigger: {
          trigger: '.edge-table',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Alternating row entries
      const rows = containerRef.current?.querySelectorAll('.edge-row');
      rows?.forEach((row, idx) => {
        const isMobile = window.innerWidth < 768;
        gsap.fromTo(
          row,
          { opacity: 0, x: isMobile ? 0 : idx % 2 === 0 ? -20 : 20 },
          {
            scrollTrigger: {
              trigger: '.edge-table',
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            opacity: 1,
            x: 0,
            delay: idx * 0.05,
            duration: 0.6,
            ease: 'power2.out',
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="i5-edge"
      className="relative min-h-screen flex items-center justify-center py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-white/10 select-none bg-black overflow-hidden"
    >
      {/* Glitch and animation keyframe injections */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes sweep {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(150%);
          }
        }
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        @keyframes glitch-shake {
          0% { transform: translate(0, 0) skew(0deg); }
          10% { transform: translate(-1px, 1px) skew(-2deg); }
          20% { transform: translate(1px, -1px) skew(1deg); }
          30% { transform: translate(0px, 1px) skew(0deg); }
          40% { transform: translate(-1px, -1px) skew(2deg); }
          50% { transform: translate(1px, 1px) skew(-1deg); }
          60% { transform: translate(0px, 0px) skew(0deg); }
          100% { transform: translate(0, 0) skew(0deg); }
        }
        @keyframes bounce-left {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(-4px); }
        }
        @keyframes bounce-right {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(4px); }
        }
        .animate-bounce-left {
          animation: bounce-left 1.2s infinite ease-in-out;
        }
        .animate-bounce-right {
          animation: bounce-right 1.2s infinite ease-in-out;
        }
      `}</style>

      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Header & Quick Stats */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center">
            <div className="edge-header max-w-xl text-left">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-primary block mb-2 font-bold">
                // THE i5 DIFFERENCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase leading-[1.08] tracking-tight">
                MARKETS MOVE FAST.{' '}
                <span className="text-primary" style={{ textShadow: '0 0 35px rgba(0,255,204,0.4)' }}>
                  YOUR STACK SHOULD TOO.
                </span>
              </h2>
              <p className="text-white/70 font-body text-sm sm:text-base md:text-lg mt-5 leading-relaxed">
                Everything your trading stack was missing just entered the chat.
              </p>
            </div>
          </div>

          {/* Right Column: Brutalist Comparison Table */}
          <div className="lg:col-span-7 w-full">
            <div className="edge-table border-2 border-white/10 bg-black/60 backdrop-blur-md overflow-hidden md:overflow-visible relative shadow-[4px_4px_0px_rgba(255,255,255,0.02)] w-full flex flex-col">
              
              {/* Left arrow navigator on mobile */}
              {hoveredRowIndex !== null && hoveredRowIndex > 0 && (
                <button
                  onClick={() => handleRowSelect(hoveredRowIndex - 1)}
                  className="absolute left-2 top-[62%] md:hidden z-40 bg-black/90 backdrop-blur-md border border-primary/30 text-primary p-2 rounded-full shadow-[0_0_10px_rgba(0,255,204,0.2)] animate-bounce-left transition-all duration-300"
                  aria-label="Previous compare slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}

              {/* Right arrow navigator on mobile */}
              {(hoveredRowIndex === null || hoveredRowIndex < COMPARISONS.length - 1) && (
                <button
                  onClick={() => handleRowSelect(hoveredRowIndex === null ? 1 : hoveredRowIndex + 1)}
                  className="absolute right-2 top-[62%] md:hidden z-40 bg-black/90 backdrop-blur-md border border-primary/30 text-primary p-2 rounded-full shadow-[0_0_10px_rgba(0,255,204,0.2)] animate-bounce-right transition-all duration-300"
                  aria-label="Next compare slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {/* Table Header Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-white/10 bg-white/5 font-mono text-xs uppercase tracking-widest shrink-0">
                <div className="p-3.5 sm:p-4 text-white/60 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-between">
                  <span className="font-bold">The Usual Way</span>
                  <span className="text-red-500/90 font-bold">[ FRAGMENTED ]</span>
                </div>
                <div className="p-3.5 sm:p-4 text-primary flex items-center justify-between bg-primary/5">
                  <span className="font-bold">
                    <span className="text-white lowercase">i5</span> Platform
                  </span>
                  <span className="text-primary font-black animate-pulse">[ CONNECTED ]</span>
                </div>
              </div>

              {/* Comparison Rows */}
              <div
                ref={mobileScrollContainerRef}
                onScroll={handleMobileScroll}
                className="divide-y-0 md:divide-y divide-white/5 font-mono text-xs sm:text-sm flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-none w-full"
              >
                {COMPARISONS.map((row, idx) => (
                  <div
                    key={idx}
                    className={`edge-row grid grid-cols-1 md:grid-cols-2 group border-white/10 transition-all duration-300 relative w-full shrink-0 snap-start md:w-auto md:shrink ${
                      hoveredRowIndex === idx
                        ? 'bg-primary/[0.03] border-y border-y-primary/20 scale-[1.005] z-20'
                        : 'bg-transparent border-y border-y-transparent'
                    }`}
                    onMouseEnter={() => setHoveredRowIndex(idx)}
                    onMouseLeave={() => setHoveredRowIndex(null)}
                  >
                    {/* Glowing outer border box (full 4-sided outline on hover) */}
                    {hoveredRowIndex === idx && (
                      <div className="absolute inset-0 border border-primary shadow-[0_0_15px_rgba(0,255,204,0.25)] pointer-events-none z-30" />
                    )}

                    {/* Left side: The Usual Way (Fragmented) */}
                    <div
                      className={`p-3.5 sm:p-4 border-b border-white/5 md:border-b-0 md:border-r border-white/10 flex items-center gap-3 transition-opacity duration-300 relative overflow-hidden z-10 ${
                        hoveredRowIndex !== null && hoveredRowIndex !== idx ? 'opacity-30' : 'opacity-100'
                      } ${hoveredRowIndex === idx ? 'text-red-500/50' : 'text-white/60'}`}
                    >
                      {/* Sweep scan inside cell */}
                      {hoveredRowIndex === idx && (
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-[sweep_0.8s_ease-out_forwards] pointer-events-none z-0" />
                      )}
                      <X className="w-4 h-4 text-red-500/70 shrink-0 relative z-10" />
                      <span
                        className={`relative z-10 leading-snug ${
                          hoveredRowIndex === idx ? 'animate-[glitch-shake_0.3s_infinite] line-through font-mono' : ''
                        }`}
                      >
                        {row.traditional}
                      </span>
                    </div>

                    {/* Right side: i5 (Connected) */}
                    <div
                      className={`p-3.5 sm:p-4 flex items-center gap-3 transition-all duration-300 relative overflow-hidden z-10 ${
                        hoveredRowIndex !== null && hoveredRowIndex !== idx ? 'opacity-30' : 'opacity-100'
                      } ${hoveredRowIndex === idx ? 'bg-primary/5 text-primary' : 'bg-primary/[0.01] text-white'}`}
                    >
                      {/* Sweep scan inside cell */}
                      {hoveredRowIndex === idx && (
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-[sweep_0.8s_ease-out_forwards] pointer-events-none z-0" />
                      )}

                      {/* Checkmark wrapper with neon concentric ripples */}
                      <div className="relative flex items-center justify-center shrink-0 w-5 h-5 z-10">
                        {hoveredRowIndex === idx && (
                          <>
                            <span className="absolute inset-0 rounded-full border border-primary/50 animate-[ripple_0.8s_ease-out_infinite]" />
                            <span className="absolute inset-0 rounded-full border border-primary/20 animate-[ripple_0.8s_ease-out_infinite_0.3s]" />
                          </>
                        )}
                        <Check
                          className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 relative z-10 ${
                            hoveredRowIndex === idx
                              ? 'scale-125 rotate-6 filter drop-shadow-[0_0_6px_#00ffcc]'
                              : 'scale-100'
                          }`}
                        />
                      </div>

                      <span
                        className={`relative z-10 leading-snug ${
                          hoveredRowIndex === idx ? 'font-black tracking-wide text-primary' : 'font-bold tracking-wide text-white'
                        }`}
                      >
                        {row.i5}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile swipe navigation dots */}
            <div className="flex md:hidden flex-col items-center gap-2 mt-3">
              <div className="flex justify-center items-center gap-2">
                {COMPARISONS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRowSelect(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      hoveredRowIndex === idx || (hoveredRowIndex === null && idx === 0)
                        ? 'bg-primary w-4'
                        : 'bg-white/20 w-1.5'
                    }`}
                    aria-label={`Go to row ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="text-[9px] font-mono text-white/30 tracking-widest uppercase flex items-center gap-1.5 animate-pulse">
                <span>&larr;</span> swipe to compare <span>&rarr;</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Edge;
