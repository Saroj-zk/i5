import { useState } from 'react';
// import { useThemeStore } from '../store/useThemeStore';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const { crtMode, toggleCrtMode } = useThemeStore();

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // Offset scroll for navbar height
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-20 border-b border-white/10 bg-black/90 backdrop-blur-md z-50 font-mono select-none flex items-center">
        <div className="w-full h-full flex items-center justify-between px-3 sm:pl-[72px] sm:pr-[72px] md:pl-[112px] md:pr-[112px] lg:pl-[160px] lg:pr-[120px] xl:pr-[120px]">

          {/* Left Column: Brand Logo, Name, Divider, Links */}
          <div className="flex items-center gap-2.5 lg:gap-3.5 xl:gap-6 shrink-0 h-full">
            {/* Brand Logo & Name */}
            <button
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 hover:opacity-85 transition-opacity cursor-pointer h-10 shrink-0"
            >
              <img src={logo} alt="i5 Logo" className="h-8 sm:h-9 lg:h-10 w-auto object-contain" />
            </button>

            {/* Left Divider Line (shown on md and above) */}
            <div className="hidden md:block w-px h-10 bg-white/10 shrink-0" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-2 lg:gap-4 xl:gap-6 text-[9px] lg:text-[10px] xl:text-xs font-bold uppercase tracking-wider shrink-0">
              <button
                onClick={() => scrollToSection('why-we-win')}
                className="text-white/60 hover:text-primary hover:before:content-['>_'] transition-colors cursor-pointer tracking-wider shrink-0"
              >
                PLATFORM
              </button>
              <button
                onClick={() => scrollToSection('core-features')}
                className="text-white/60 hover:text-primary hover:before:content-['>_'] transition-colors cursor-pointer tracking-wider shrink-0"
              >
                FEATURES
              </button>
              <button
                onClick={() => scrollToSection('built-for-traders')}
                className="text-white/60 hover:text-primary hover:before:content-['>_'] transition-colors cursor-pointer tracking-wider shrink-0"
              >
                COMPARE
              </button>
              <a
                href="https://i5.xyz/blog/"
                target='_blank'
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary hover:before:content-['>_'] transition-colors cursor-pointer tracking-wider shrink-0"
              >
                BLOG
              </a>
              {/* <button
                onClick={() => scrollToSection('intelligence-network')}
                className="text-white/60 hover:text-primary hover:before:content-['>_'] transition-colors cursor-pointer tracking-wider shrink-0"
              >
                USERS
              </button> */}
            </div>
          </div>

          {/* Center Column: Live system metrics (Centered) */}
          <div className="hidden md:flex flex-1 items-center justify-center mx-3 lg:mx-4 overflow-hidden h-full">
            <div className="flex items-center gap-2 lg:gap-3 xl:gap-5 text-[8px] lg:text-[9px] xl:text-[10px] text-white/40 tracking-wider shrink-0">

              {/* Degens Live: shown on md (768px) and up */}
              {/* <div className="flex items-center gap-1.5 shrink-0">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </span>
                <span className="text-white/70 font-bold shrink-0">{tradersCount.toLocaleString()} DEGENS LIVE</span>
              </div> */}

              {/* Status: shown on xl (1280px) and up */}
              {/* <div className="hidden xl:flex items-center gap-2 lg:gap-3 xl:gap-5 shrink-0">
                <div className="h-3 w-px bg-white/10 shrink-0" />
                <div className="flex items-center gap-1 shrink-0">
                  <Radio className="h-3 w-3 text-primary animate-pulse shrink-0" />
                  <span className="shrink-0">SYS_STATUS: <span className="text-primary font-bold">WEAPONIZED</span></span>
                </div>
              </div> */}

              {/* UTC Time: shown on xl (1280px) and up */}
              {/* <div className="hidden xl:flex items-center gap-3 xl:gap-5 shrink-0">
                <div className="h-3 w-px bg-white/10 shrink-0" />
                <div className="shrink-0">{time}</div>
              </div> */}
            </div>
          </div>

          {/* Right Column: Socials, CTA, Divider, Theme Toggle */}
          <div className="flex items-center gap-2 lg:gap-4 xl:gap-5 shrink-0 h-full">
            {/* Social Links: Hidden below xl (1280px) to save space on tablets/laptops */}
            <div className="hidden lg:flex items-center gap-2 lg:gap-3.5 xl:gap-4 shrink-0">
              <a
                href="https://x.com/ifivelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors cursor-pointer shrink-0"
                aria-label="X (Twitter)"
              >
                <svg className="h-3.5 w-3.5 xl:h-4 xl:w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://t.me/I5Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors cursor-pointer shrink-0"
                aria-label="Telegram"
              >
                <svg
                  className="h-4 w-4 xl:h-[18px] xl:w-[18px] fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.74 3.87-1.69 6.45-2.8 7.74-3.35 3.69-1.54 4.45-1.81 4.95-1.82.11 0 .36.03.52.16.13.1.17.24.19.34.02.21.01.42 0 .63z" />
                </svg>
              </a>
              <a
                href=" https://discord.gg/UASPfWuvAA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors cursor-pointer shrink-0"
                aria-label="Discord"
              >
                <svg className="h-4 w-4 xl:h-4.5 xl:w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/i5labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                aria-label="Instagram"
              >
                <svg
                  className="h-4.5 w-4.5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm5.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
                </svg>
              </a>
            </div>

            {/* CTA Button with CRT Scanlines overlay */}
            {/* <button 
              onClick={() => scrollToSection('intelligence-network')}
              className="hidden md:block text-[8px] lg:text-[10px] xl:text-xs bg-primary text-black font-black px-2.5 py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-2.5 border border-primary hover:bg-transparent hover:text-primary transition-colors cursor-pointer uppercase tracking-wider relative overflow-hidden shrink-0"
            >
              <span className="absolute inset-0 crt-scanline opacity-25 pointer-events-none" />
              <span className="relative z-10">ENTER THE WAR ROOM</span>
            </button> */}

            {/* Right Divider Line (shown on md and above) */}
            <div className="hidden md:block w-px h-10 bg-white/10 shrink-0 mx-1 xl:mx-2" />

            {/* Theme Toggle Button & Hamburger */}
            <div className="flex items-center gap-2 shrink-0">
              {/* <button
                onClick={toggleCrtMode}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
                  crtMode 
                    ? 'bg-primary border-primary text-black shadow-[0_0_10px_rgba(0,255,204,0.3)]' 
                    : 'bg-transparent border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                }`}
                title="Toggle CRT Mode"
              >
                <span className="text-[9px] font-bold tracking-wider">CRT</span>
              </button> */}

              {/* <ThemeToggleButton /> */}
              <button
                onClick={() => window.open("https://forms.gle/dHNpTFpUBFaHvhME9", "_blank")}
                className="bg-primary text-black text-xs sm:text-sm md:text-base font-body font-bold tracking-wider px-2 sm:px-4 py-3 sm:py-2 rounded-full inline-flex items-center gap-2 transition-transform duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] cursor-pointer active:scale-95 ml-1 lg:ml-2"
              >
                Whitelist Now
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white/80 hover:text-primary transition-colors p-1 focus:outline-none cursor-pointer animate-[flicker_0.15s_infinite]"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`min-h-screen fixed inset-x-0 top-20 bg-black/95 backdrop-blur-xl border-b border-white/10 z-40 transition-all duration-300 ease-in-out select-none font-mono ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col p-6 sm:p-8 gap-5 text-base font-bold">
          <button
            onClick={() => scrollToSection('why-we-win')}
            className="text-left py-2 text-white/60 hover:text-primary hover:pl-2 transition-all cursor-pointer tracking-wider border-b border-white/5"
          >
            &gt; PLATFORM
          </button>
          <button
            onClick={() => scrollToSection('core-features')}
            className="text-left py-2 text-white/60 hover:text-primary hover:pl-2 transition-all cursor-pointer tracking-wider border-b border-white/5"
          >
            &gt; FEATURES
          </button>
          <button
            onClick={() => scrollToSection('built-for-traders')}
            className="text-left py-2 text-white/60 hover:text-primary hover:pl-2 transition-all cursor-pointer tracking-wider border-b border-white/5"
          >
            &gt; COMPARE
          </button>
          <a
            href="https://i5.xyz/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-left py-2 text-white/60 hover:text-primary hover:pl-2 transition-all cursor-pointer tracking-wider border-b border-white/5"
          >
            &gt; BLOG
          </a>

          {/* <button 
            onClick={() => scrollToSection('intelligence-network')}
            className="w-full text-center mt-3 text-sm bg-primary text-black font-black py-3 border border-primary hover:bg-transparent hover:text-primary transition-colors cursor-pointer uppercase tracking-wider"
          >
            ENTER THE WAR ROOM
          </button> */}

          {/* Mobile Social Links */}
          <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-white/5">
            <a
              href="https://x.com/ifivelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X.COM</span>
            </a>
            <a
              href="https://t.me/I5Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.74 3.87-1.69 6.45-2.8 7.74-3.35 3.69-1.54 4.45-1.81 4.95-1.82.11 0 .36.03.52.16.13.1.17.24.19.34.02.21.01.42 0 .63z" />
              </svg>
              <span>TELEGRAM</span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              <span>DISCORD</span>
            </a>

            <a
              href="https://www.instagram.com/i5labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 text-sm"
              aria-label="Instagram"
            >
              <svg
                className="h-4.5 w-4.5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm5.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
              </svg>
              <span>INSTAGRAM</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}