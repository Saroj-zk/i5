import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function BuildWithI5() {
  const tags = [
    'MARKET DATA',
    'AGENTIC AI',
    'MARKET INTELLIGENCE',
    'EXECUTION',
    'LIVE FEEDS',
    'ON-CHAIN CONTEXT',
    'SMART ROUTING',
    'AGENT WORKFLOWS',
  ];

  return (
    <section
      id="build-with-i5"
      className="relative py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-white/10 select-none bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/40 shadow-[0_0_15px_rgba(0,255,204,0.15)]">
                <span>&lt; &gt;</span>
                <span>BUILD WITH i5</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase leading-[1.05] tracking-tight">
              YOUR PRODUCT.<br />
              <span className="text-primary" style={{ textShadow: '0 0 35px rgba(0,255,204,0.4)' }}>
                POWERED BY i5.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-white/70 font-body text-base sm:text-lg mt-5 leading-relaxed max-w-xl">
              Take the tech behind i5 and plug it into what you’re building.
            </p>

            {/* Feature Tag Boxes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2.5 mt-8 max-w-xl"
            >
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-1.5 bg-black border border-white/20 text-white/80 font-mono text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-200 cursor-default hover:shadow-[0_0_10px_rgba(0,255,204,0.2)]"
                >
                  {tag}
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <button
                onClick={() => window.open('https://forms.gle/dHNpTFpUBFaHvhME9', '_blank')}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-black font-mono font-black text-xs uppercase tracking-wider hover:bg-white transition-all duration-200 cursor-pointer shadow-[4px_4px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_#00ffcc] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>BUILD WITH i5</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column: Clean Minimalist Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="rounded-none border border-white/20 bg-[#060607] overflow-hidden shadow-[6px_6px_0px_rgba(255,255,255,0.05)] hover:border-primary/40 hover:shadow-[6px_6px_0px_rgba(0,255,204,0.15)] transition-all duration-300">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-black border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="font-mono text-xs text-white/40 ml-3">
                    ~/i5-core
                  </span>
                </div>
                <span className="font-mono text-[10px] text-primary/80 uppercase tracking-widest font-bold">
                  LIVE SDK
                </span>
              </div>

              {/* Terminal Code Body */}
              <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed text-white min-h-[300px] flex flex-col justify-center bg-black">
                <div className="space-y-1.5">
                  <div className="text-white font-bold flex items-center">
                    <span className="text-primary mr-2 font-black">$</span>
                    <span>npm install @i5/core</span>
                  </div>
                  
                  <div className="text-primary font-medium mb-5">
                    ✓ installed in 0.8s
                  </div>

                  <div className="text-purple-400">
                    import &#123; i5 &#125; from &quot;@i5/core&quot;;
                  </div>
                  
                  <div className="text-cyan-300">
                    const engine = new i5(&#123; apiKey: &quot;i5_live_key&quot; &#125;);
                  </div>
                  
                  <div className="text-cyan-300">
                    await engine.connect([&quot;crypto&quot;, &quot;memes&quot;, &quot;stocks&quot;]);
                  </div>
                  
                  <div className="text-amber-300">
                    engine.on(&quot;trade&quot;, (signal) =&gt; signal.execute());
                  </div>

                  {/* Blinking Cursor */}
                  <div className="inline-block w-2.5 h-4 bg-primary animate-pulse mt-2" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default BuildWithI5;
