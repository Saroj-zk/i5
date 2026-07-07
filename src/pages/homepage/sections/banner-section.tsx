import { useEffect, useState } from 'react';

export function BannerSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Target date: July 22nd, 2026, 5:00 PM (Adapts to User's Local Timezone)
    const targetDate = new Date(2026, 6, 22, 17, 0, 0);

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return; // Timer finished
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center bg-black overflow-hidden select-none py-8 lg:py-0">
      
      {/* Overlay (First Layer / Topmost Background) */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
         <img 
           src="/overlaay.png" 
           alt="Overlay Grid" 
           className="w-full h-full object-cover opacity-70 mix-blend-screen"
         />
      </div>

      {/* Hourglass (Desktop Only): Absolutely positioned to the right to never overlap left text */}
      <div className="hidden lg:flex absolute inset-y-0 right-0 w-[50%] justify-center items-center pointer-events-none z-0">
         <img 
           src="/testnet-img-1.png" 
           alt="Hourglass" 
           className="w-auto h-[75%] max-h-[700px] object-contain opacity-90 mix-blend-screen"
         />
      </div>

      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 relative h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          
          {/* Left Content (z-20 brings it above the overlay) */}
          <div className="flex flex-col items-start w-full relative z-20">
            <div className="flex flex-col gap-1 w-max max-w-full">
              <img src="/testnet-img-2.png" alt="i5 TESTNET" className="w-full h-auto object-contain filter drop-shadow-[0_0_15px_rgba(0,255,204,0.3)]" />
              <h2 
                className="text-white uppercase leading-[1.1] whitespace-nowrap text-[30px] md:text-[40px] lg:text-[60px] mt-4 md:mt-4 lg:mt-6"
                style={{ fontFamily: '"League Spartan", sans-serif', fontWeight: 500 }}
              >
                Launching Soon
              </h2>
            </div>
            
            <p className="text-[#C5C5C5] text-[1rem] sm:text-[1.1rem] lg:text-[1.25rem] font-light leading-snug max-w-md lg:max-w-[33rem] mt-6" style={{ fontFamily: '"M PLUS 1 Code", monospace' }}>
              Trade before the crowd with AI-powered market intelligence, real-time alerts, and actionable trading insights. Everything you need to stay ahead, in one platform.
            </p>

            {/* Countdown Timer */}
            <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mt-8 lg:mt-12" style={{ fontFamily: '"M PLUS 1 Code", monospace' }}>
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-[60px] h-[55px] sm:w-[80px] sm:h-[65px] md:w-[95px] lg:w-[110px] lg:h-[75px] rounded-md bg-gradient-to-b from-[#021815] to-[#010907] border border-[#00ffaa]/10 shadow-[inset_0_0_15px_rgba(0,255,170,0.05)] flex items-center justify-center">
                  <span className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-widest drop-shadow-[0_0_12px_rgba(0,255,170,0.6)]">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[#00ffaa]/60 text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] font-medium">DAYS</span>
              </div>
              
              <div className="flex items-center justify-center h-[55px] sm:h-[65px] lg:h-[75px]">
                <span className="text-primary/70 text-xl sm:text-2xl lg:text-3xl font-bold animate-pulse drop-shadow-[0_0_8px_rgba(0,255,170,0.5)] -translate-y-0.5">:</span>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-[60px] h-[55px] sm:w-[80px] sm:h-[65px] md:w-[95px] lg:w-[110px] lg:h-[75px] rounded-md bg-gradient-to-b from-[#021815] to-[#010907] border border-[#00ffaa]/10 shadow-[inset_0_0_15px_rgba(0,255,170,0.05)] flex items-center justify-center">
                  <span className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-widest drop-shadow-[0_0_12px_rgba(0,255,170,0.6)]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[#00ffaa]/60 text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] font-medium">HOURS</span>
              </div>
              
              <div className="flex items-center justify-center h-[55px] sm:h-[65px] lg:h-[75px]">
                <span className="text-primary/70 text-xl sm:text-2xl lg:text-3xl font-bold animate-pulse drop-shadow-[0_0_8px_rgba(0,255,170,0.5)] -translate-y-0.5">:</span>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-[60px] h-[55px] sm:w-[80px] sm:h-[65px] md:w-[95px] lg:w-[110px] lg:h-[75px] rounded-md bg-gradient-to-b from-[#021815] to-[#010907] border border-[#00ffaa]/10 shadow-[inset_0_0_15px_rgba(0,255,170,0.05)] flex items-center justify-center">
                  <span className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-widest drop-shadow-[0_0_12px_rgba(0,255,170,0.6)]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[#00ffaa]/60 text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] font-medium">MINUTES</span>
              </div>
              
              <div className="flex items-center justify-center h-[55px] sm:h-[65px] lg:h-[75px]">
                <span className="text-primary/70 text-xl sm:text-2xl lg:text-3xl font-bold animate-pulse drop-shadow-[0_0_8px_rgba(0,255,170,0.5)] -translate-y-0.5">:</span>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-[60px] h-[55px] sm:w-[80px] sm:h-[65px] md:w-[95px] lg:w-[110px] lg:h-[75px] rounded-md bg-gradient-to-b from-[#021815] to-[#010907] border border-[#00ffaa]/10 shadow-[inset_0_0_15px_rgba(0,255,170,0.05)] flex items-center justify-center">
                  <span className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-widest drop-shadow-[0_0_12px_rgba(0,255,170,0.6)]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[#00ffaa]/60 text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] font-medium">SECONDS</span>
              </div>
            </div>

            <div className="mt-10 lg:mt-14">
              <button 
                onClick={() => window.open("https://forms.gle/dHNpTFpUBFaHvhME9", "_blank")}
                className="bg-[#00FFCC] text-black font-semibold text-sm sm:text-base px-6 py-2.5 sm:px-8 sm:py-3 rounded-full cursor-pointer hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,204,0.4)]"
                style={{ fontFamily: '"League Spartan", sans-serif' }}
              >
                Whitelist Now
              </button>
            </div>
          </div>
          
          {/* Hourglass (Mobile Only): Fits inside the grid flow so it properly stacks below text */}
          <div className="flex lg:hidden justify-center items-center relative w-full h-[350px] sm:h-[450px] mt-8 pointer-events-none z-0">
             <div className="absolute inset-0 flex justify-center items-center">
                <img 
                  src="/testnet-img-1.png" 
                  alt="Hourglass" 
                  className="w-auto h-[110%] sm:h-[115%] object-contain opacity-90 mix-blend-screen"
                />
             </div>
          </div>

          {/* Empty right column on Desktop to reserve space */}
          <div className="hidden lg:block w-full h-full pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
}
