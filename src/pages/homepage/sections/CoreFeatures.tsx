import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Wallet, Globe, Bot, Bell, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CoreFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Header animations
      gsap.from('.features-header > *', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Cards staggered entry
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        scale: 0.96,
        stagger: 0.08,
        duration: 0.8,
        ease: 'back.out(1.2)',
      });

      // Hover animations for all cards
      const cards = containerRef.current?.querySelectorAll('.feature-card');
      cards?.forEach((card) => {
        const iconWrapper = card.querySelector('.feature-icon-wrapper');
        const icon = card.querySelector('.feature-icon');
        const isFlagship = card.classList.contains('border-primary');

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -6,
            borderColor: '#00ffcc',
            boxShadow: '0px 10px 20px rgba(0, 255, 204, 0.25)',
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
          if (iconWrapper) {
            gsap.to(iconWrapper, {
              scale: 1.1,
              borderColor: 'rgba(0, 255, 204, 0.4)',
              backgroundColor: 'rgba(0, 255, 204, 0.15)',
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          }
          if (icon) {
            gsap.to(icon, {
              rotation: 12,
              color: '#00ffcc',
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            borderColor: isFlagship ? '#00ffcc' : 'rgba(255, 255, 255, 0.15)',
            boxShadow: isFlagship ? '4px 4px 0px #00ffcc' : '4px 4px 0px rgba(255, 255, 255, 0.05)',
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
          if (iconWrapper) {
            gsap.to(iconWrapper, {
              scale: 1,
              borderColor: isFlagship ? 'rgba(0, 255, 204, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              backgroundColor: isFlagship ? 'rgba(0, 255, 204, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          }
          if (icon) {
            gsap.to(icon, {
              rotation: 0,
              color: isFlagship ? '#00ffcc' : '#ffffff',
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="core-features"
      className="relative py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-white/10 select-none bg-[#030304] overflow-hidden"
    >
      {/* Background glow overlay */}
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="features-header max-w-none mb-16 text-left">
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-primary block mb-2">
            // UNDER THE HOOD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase leading-[1.1]">
            BUILT FOR HYPER-FAST MARKETS.
          </h2>
          <p className="text-white/70 font-body text-sm sm:text-base md:text-lg mt-6 leading-relaxed">
            Millisecond data, on-chain context, Agentic AI, and connected execution, built to keep up with markets in motion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: MILLISECOND MARKET DATA (FLAGSHIP) */}
          <div className="feature-card relative border-r-2 border-b-2 border-primary bg-primary/5 p-6 sm:p-8 shadow-[4px_4px_0px_#00ffcc] flex flex-col justify-between overflow-hidden cursor-pointer">
            <div className="absolute top-0 right-0 bg-primary text-black font-mono font-black text-[9px] px-3 py-1 uppercase tracking-wider">
              FLAGSHIP
            </div>
            
            <div>
              <div className="feature-icon-wrapper mb-6 p-2 w-fit bg-primary/10 border border-primary/20">
                <Cpu className="feature-icon w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-3">
                MILLISECOND MARKET DATA
              </h3>
              <p className="text-xs sm:text-base text-white/60 font-body leading-relaxed">
                Live pricing, market activity, positions, and trading data keep the experience current from discovery through execution.
              </p>
            </div>

            <div className="hidden md:flex mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-primary/80 items-center justify-between">
              <span>[ MS-LEVEL · LIVE DATA · 24/7 ]</span>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="hidden max-md:block border-t border-dashed border-primary/30 my-2" />

          {/* Card 2: ON-CHAIN MEME DATA */}
          <div className="feature-card relative border-r-2 border-b-2 border-white/15 bg-black p-6 sm:p-8 shadow-[4px_4px_0px_rgba(255,255,255,0.05)] flex flex-col justify-between overflow-hidden cursor-pointer">
            <div>
              <div className="feature-icon-wrapper mb-6 p-2 w-fit bg-white/5 border border-white/10">
                <Wallet className="feature-icon w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-3">
                ON-CHAIN MEME DATA
              </h3>
              <p className="text-xs sm:text-base text-white/60 font-body leading-relaxed">
                Token launches, wallets, holders, liquidity, volume, and transactions power meme discovery and trading.
              </p>
            </div>

            <div className="hidden md:flex mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-white/50 items-center justify-between">
              <span>[ 6+ DATA POINTS · ON-CHAIN · LIVE ]</span>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="hidden max-md:block border-t border-dashed border-primary/30 my-2" />

          {/* Card 3: GLOBAL MARKET ACCESS */}
          <div className="feature-card relative border-r-2 border-b-2 border-white/15 bg-black p-6 sm:p-8 shadow-[4px_4px_0px_rgba(255,255,255,0.05)] flex flex-col justify-between overflow-hidden cursor-pointer">
            <div>
              <div className="feature-icon-wrapper mb-6 p-2 w-fit bg-white/5 border border-white/10">
                <Globe className="feature-icon w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-3">
                GLOBAL MARKET ACCESS
              </h3>
              <p className="text-xs sm:text-base text-white/60 font-body leading-relaxed">
                Crypto and global stocks come together through one trading environment with live pricing, charts, research, and execution.
              </p>
            </div>

            <div className="hidden md:flex mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-white/50 items-center justify-between">
              <span>[ 2 MARKET CLASSES · ONE TERMINAL · LIVE ]</span>
            </div>
          </div>

          {/* Divider 3 */}
          <div className="hidden max-md:block border-t border-dashed border-primary/30 my-2" />

          {/* Card 4: AGENTIC AI */}
          <div className="feature-card relative border-r-2 border-b-2 border-white/15 bg-black p-6 sm:p-8 shadow-[4px_4px_0px_rgba(255,255,255,0.05)] flex flex-col justify-between overflow-hidden cursor-pointer">
            <div>
              <div className="feature-icon-wrapper mb-6 p-2 w-fit bg-white/5 border border-white/10">
                <Bot className="feature-icon w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-3">
                AGENTIC AI
              </h3>
              <p className="text-xs sm:text-base text-white/60 font-body leading-relaxed">
                AI agents research, monitor, track changing conditions, and run repeatable workflows beyond a single prompt.
              </p>
            </div>

            <div className="hidden md:flex mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-white/50 items-center justify-between">
              <span>[ 24/7 · RESEARCH · MONITOR · AUTOMATE ]</span>
            </div>
          </div>

          {/* Divider 4 */}
          <div className="hidden max-md:block border-t border-dashed border-primary/30 my-2" />

          {/* Card 5: REAL-TIME EVENT INTELLIGENCE */}
          <div className="feature-card relative border-r-2 border-b-2 border-white/15 bg-black p-6 sm:p-8 shadow-[4px_4px_0px_rgba(255,255,255,0.05)] flex flex-col justify-between overflow-hidden cursor-pointer">
            <div>
              <div className="feature-icon-wrapper mb-6 p-2 w-fit bg-white/5 border border-white/10">
                <Bell className="feature-icon w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-3">
                REAL-TIME EVENT INTELLIGENCE
              </h3>
              <p className="text-xs sm:text-base text-white/60 font-body leading-relaxed">
                Breaking developments are mapped to relevant assets and market context, turning incoming news into information traders can use.
              </p>
            </div>

            <div className="hidden md:flex mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-white/50 items-center justify-between">
              <span>[ REAL-TIME · ASSET CONTEXT · MARKET IMPACT ]</span>
            </div>
          </div>

          {/* Divider 5 */}
          <div className="hidden max-md:block border-t border-dashed border-primary/30 my-2" />

          {/* Card 6: CONNECTED EXECUTION */}
          <div className="feature-card relative border-r-2 border-b-2 border-white/15 bg-black p-6 sm:p-8 shadow-[4px_4px_0px_rgba(255,255,255,0.05)] flex flex-col justify-between overflow-hidden cursor-pointer">
            <div>
              <div className="feature-icon-wrapper mb-6 p-2 w-fit bg-white/5 border border-white/10">
                <Share2 className="feature-icon w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-3">
                CONNECTED EXECUTION
              </h3>
              <p className="text-xs sm:text-base text-white/60 font-body leading-relaxed">
                Market data, on-chain signals, news context, and AI come together with one-click terminal and Telegram execution.
              </p>
            </div>

            <div className="hidden md:flex mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-white/50 items-center justify-between">
              <span>[ TERMINAL · TELEGRAM · 1-TAP · 24/7 ]</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CoreFeatures;
