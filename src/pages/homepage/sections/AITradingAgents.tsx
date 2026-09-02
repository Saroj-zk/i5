import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightning, 
  CheckCircle,
  PaperPlaneTilt,
  ArrowsClockwise,
  Checks
} from '@phosphor-icons/react';

interface ChatMessage {
  id: string;
  sender: 'copilot' | 'user';
  text: string;
  time: string;
}

const FULL_CONVERSATION_SCRIPT: ChatMessage[] = [
  // 01. Initial Multi-Token Radar Alerts
  {
    id: 'msg-1',
    sender: 'copilot',
    text: 'Live Market Radar: 2 high-conviction breakouts detected across Hyperliquid perps:\n• SOL: +$4.15M whale inflow at $214.20. Supertrend 4H confirmed bullish.\n• BTC: +$18.2M delta break at $96,400. Funding neutral at 0.004%.',
    time: '14:28',
  },
  // 02. User Chooses Asset
  {
    id: 'msg-2',
    sender: 'user',
    text: "Let's focus on SOL. What setup does your model recommend?",
    time: '14:28',
  },
  // 03. Copilot Formulates Suggested Setup
  {
    id: 'msg-3',
    sender: 'copilot',
    text: 'Synthesizing orderbook depth and whale absorption for SOL-PERP:\n• Suggested Setup: 10x Long at $214.20\n• Take-Profit Target: $234.50 (+94.6%)\n• Trailing Stop-Loss: 1.8% ($210.30)\n• Historical Pattern Winrate: 94.2%',
    time: '14:29',
  },
  // 04. User Adjusts Parameters
  {
    id: 'msg-4',
    sender: 'user',
    text: "Looks strong, but let's reduce leverage to 5x, set position size to $5,000, and widen trailing stop to 2.5%.",
    time: '14:29',
  },
  // 05. Copilot Compiles & Asks for Execution
  {
    id: 'msg-5',
    sender: 'copilot',
    text: 'Updated: SOL-PERP 5x Long ($5,000 margin). Target: $228.50 (+33.4%). Trailing SL: $208.80 (-2.5%). Shall I execute directly on Hyperliquid, or do you want to adjust on terminal?',
    time: '14:30',
  },
  // 06. User Confirms
  {
    id: 'msg-6',
    sender: 'user',
    text: 'Execute it directly on Hyperliquid.',
    time: '14:30',
  },
  // 07. Copilot Executes & Arms Trailing SL
  {
    id: 'msg-7',
    sender: 'copilot',
    text: 'Order filled on Hyperliquid: Long SOL at $214.20 (5x). Non-custodial trailing stop armed at $208.80. Monitoring position 24/7.',
    time: '14:31',
  },
  // 08. Live Profit Ratchet Update
  {
    id: 'msg-8',
    sender: 'copilot',
    text: 'SOL trading at $222.80 (+20.1% PnL). Trailing stop automatically ratcheted up to $217.20 to lock in minimum guaranteed profit.',
    time: '14:34',
  },
  // 09. Final Position Closed & Realized Profit Summary
  {
    id: 'msg-9',
    sender: 'copilot',
    text: 'Take-profit target reached at $228.50. Position closed with +$1,670 in realized profit (+33.4% net gain). Total settled PnL from your last 4 trades is now +$5,090.',
    time: '14:38',
  },
];

// Realistic Recent Closed Trades Log
const RECENT_TRADES = [
  { pair: 'SOL / USD', side: 'LONG 5x', entry: '$214.20', exit: '$228.50', pnl: '+$1,670.00', roi: '+33.4%', time: 'Today' },
  { pair: 'BTC / USD', side: 'LONG 10x', entry: '$94,800', exit: '$96,500', pnl: '+$2,840.00', roi: '+18.2%', time: 'Yesterday' },
  { pair: 'HYPE / USD', side: 'LONG 5x', entry: '$22.10', exit: '$24.80', pnl: '+$980.00', roi: '+61.1%', time: '2d ago' },
];

export function AITradingAgents() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState<'copilot' | 'user'>('copilot');

  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll messages up strictly inside internal chat container
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleCount, isTyping]);

  // Automatic Natural Live Conversation Flow Animation
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (visibleCount < FULL_CONVERSATION_SCRIPT.length) {
      const nextMsg = FULL_CONVERSATION_SCRIPT[visibleCount];
      
      // Simulate typing indicator before next message
      timer = setTimeout(() => {
        setIsTyping(true);
        setTypingSender(nextMsg.sender);

        const typingDelay = nextMsg.sender === 'user' ? 1400 : 1800;
        
        setTimeout(() => {
          setIsTyping(false);
          setVisibleCount((prev) => prev + 1);
        }, typingDelay);

      }, 1900);

    } else {
      // Loop sequence after full conversation completes
      timer = setTimeout(() => {
        setVisibleCount(1);
      }, 7500);
    }

    return () => clearTimeout(timer);
  }, [visibleCount]);

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setIsDeployed(true);
      setTimeout(() => setIsDeployed(false), 3800);
    }, 1200);
  };

  return (
    <section className="relative py-20 sm:py-26 px-6 sm:px-12 md:px-16 lg:px-24 bg-black border-b border-white/10 select-none overflow-hidden text-left">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[380px] bg-[#00FFCC]/5 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Distinct Premium Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white uppercase leading-[1.08] tracking-[-0.03em]"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            TRADE WITH A COPILOT. <br />
            <span className="text-[#00FFCC] drop-shadow-[0_0_30px_rgba(0,255,204,0.35)]">
              OR HAND OVER TO AUTOPILOT.
            </span>
          </h2>

          <p
            className="text-white/60 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-sans leading-relaxed text-balance"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            Chat with AI for assisted orderbook execution, or deploy autonomous 24/7 quant trading agents on Hyperliquid.
          </p>
        </div>

        {/* SIDE-BY-SIDE DUAL TERMINAL SUITE WITH HEADERS & SEPARATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start font-mono relative">
          
          {/* ──────────────── LEFT COLUMN: COPILOT ──────────────── */}
          <div className="space-y-3">
            {/* Left Header */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                AI Copilot
              </h3>
              <p className="text-white/50 text-xs font-sans mt-0.5">
                Chat and execute trades directly.
              </p>
            </div>

            {/* Conversational Chat Window */}
            <div className="h-[640px] rounded-2xl border border-white/10 bg-[#08080a] flex flex-col justify-between shadow-2xl overflow-hidden">
            
              {/* Top Clean Header */}
              <div className="bg-[#0f0f13] px-5 py-3.5 border-b border-white/[0.08] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-[#00FFCC]/15 border border-[#00FFCC]/40 flex items-center justify-center text-[#00FFCC] font-bold text-xs">
                      i5
                    </div>
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#00FFCC] border-2 border-[#0f0f13]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xs tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                      i5 Trading Copilot
                    </h3>
                    <span className="text-white/40 text-[10.5px] font-sans block">
                      Live Stream · scanning onchain orderbooks
                    </span>
                  </div>
                </div>

                <span className="text-[9.5px] text-[#00FFCC] bg-[#00FFCC]/10 px-2 py-0.5 rounded-md border border-[#00FFCC]/20 uppercase tracking-wider font-bold">
                  LIVE CHAT
                </span>
              </div>

              {/* Fixed Scrollable Message Viewport */}
              <div 
                ref={chatContainerRef}
                className="p-5 overflow-y-auto flex-1 font-sans scrollbar-none flex flex-col justify-start"
              >
                
                <div className="space-y-3 text-xs">
                  
                  {/* Message Bubbles Stream */}
                  <AnimatePresence initial={false}>
                    {FULL_CONVERSATION_SCRIPT.slice(0, visibleCount).map((msg) => {
                      const isCopilot = msg.sender === 'copilot';

                      return (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className={`flex ${isCopilot ? 'justify-start items-start gap-2.5' : 'justify-end'}`}
                        >
                          {isCopilot && (
                            <div className="w-6 h-6 rounded-full bg-white/[0.08] flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5 font-mono">
                              i5
                            </div>
                          )}

                          <div
                            className={`p-3 rounded-xl leading-relaxed max-w-[88%] ${
                              isCopilot
                                ? 'rounded-tl-xs bg-[#121217] border border-white/[0.08] text-white/90'
                                : 'rounded-tr-xs bg-[#1a1b24] border border-white/10 text-white'
                            }`}
                          >
                            <p className="text-xs leading-relaxed whitespace-pre-line">
                              {msg.text}
                            </p>

                            <div className="flex items-center justify-between gap-2 mt-1 font-mono text-[9px] text-white/30">
                              <span>{msg.time}</span>
                              {!isCopilot && (
                                <span className="text-[#00FFCC] flex items-center gap-1">
                                  <Checks size={12} weight="bold" />
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                  {/* Animated Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex ${typingSender === 'copilot' ? 'justify-start items-center gap-2.5' : 'justify-end'}`}
                    >
                      {typingSender === 'copilot' && (
                        <div className="w-6 h-6 rounded-full bg-white/[0.08] flex items-center justify-center text-white text-[10px] font-bold shrink-0 font-mono">
                          i5
                        </div>
                      )}
                      <div className="px-3 py-2 rounded-xl bg-[#121217] border border-white/[0.08] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC] animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC] animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC] animate-bounce" />
                      </div>
                    </motion.div>
                  )}

                </div>

              </div>

              {/* Bottom Natural Chat Input Bar */}
              <div className="p-3.5 bg-[#0a0a0d] border-t border-white/[0.08] shrink-0 font-sans">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Ask Copilot about any token, setup, or parameters..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="w-full py-2.5 pl-3.5 pr-10 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#00FFCC]/50 transition-colors"
                  />
                  <button className="absolute right-2 w-7 h-7 rounded-lg bg-black text-[#00FFCC] border border-white/10 hover:bg-[#00FFCC] hover:text-black flex items-center justify-center transition-all cursor-pointer">
                    <PaperPlaneTilt size={13} weight="bold" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ──────────────── CENTER VERTICAL / HORIZONTAL SEPARATOR ──────────────── */}
          <div className="hidden lg:flex absolute left-1/2 top-[70px] bottom-0 -translate-x-1/2 flex-col items-center justify-center pointer-events-none z-20">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/15 to-transparent relative flex items-center justify-center">
              <span className="px-2.5 py-1 rounded-full bg-[#0d0d12] border border-white/10 text-white/40 text-[10px] font-mono font-bold uppercase tracking-widest shadow-lg">
                OR
              </span>
            </div>
          </div>

          {/* Mobile Separator */}
          <div className="flex lg:hidden items-center justify-center my-2">
            <div className="w-full h-[1px] bg-white/10 relative flex items-center justify-center">
              <span className="px-3 py-1 rounded-full bg-black border border-white/10 text-white/40 text-[10px] font-mono font-bold uppercase">
                OR
              </span>
            </div>
          </div>

          {/* ──────────────── RIGHT COLUMN: AUTOPILOT ──────────────── */}
          <div className="space-y-3">
            {/* Right Header */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                Autopilot Agent
              </h3>
              <p className="text-white/50 text-xs font-sans mt-0.5">
                24/7 autonomous trading.
              </p>
            </div>

            {/* Autonomous Trading Agent Dashboard */}
            <div className="h-[640px] rounded-2xl border border-white/10 bg-[#08080a] flex flex-col justify-between shadow-2xl overflow-hidden p-5 sm:p-6 font-mono">
            
              {/* 01. Agent Profile Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold text-sm tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
                      i5 Alpha Hunter #01
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC] animate-pulse" />
                  </div>
                  <span className="text-white/40 text-[10.5px] font-sans block mt-0.5">
                    Autonomous Multi-Token Quant Engine · Hyperliquid L1
                  </span>
                </div>

                <span className="text-[10px] text-[#00FFCC] bg-[#00FFCC]/10 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                  ACTIVE 24/7
                </span>
              </div>

              {/* 02. Agent Stats & Integrated Equity Growth Graph */}
              <div className="py-3 border-b border-white/[0.08]">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-white/40 text-[9px] uppercase tracking-wider block font-sans">
                      30D REALIZED PNL
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        +$18,490.50
                      </span>
                      <span className="text-[#00FFCC] font-bold text-xs">
                        +312.4% ROI
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-right text-[10.5px]">
                    <div>
                      <span className="text-white/40 text-[8.5px] block font-sans">P/L RATIO</span>
                      <span className="text-white font-bold">4.6 : 1</span>
                    </div>
                    <div>
                      <span className="text-white/40 text-[8.5px] block font-sans">WIN RATE</span>
                      <span className="text-[#00FFCC] font-bold">94.2%</span>
                    </div>
                    <div>
                      <span className="text-white/40 text-[8.5px] block font-sans">MAX DD</span>
                      <span className="text-white font-bold">4.8%</span>
                    </div>
                  </div>
                </div>

                {/* Minimal Clean SVG Equity Growth Sparkline */}
                <div className="h-14 w-full relative pt-1">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 48" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="equityGradProper" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00FFCC" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#00FFCC" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 40 Q 60 36, 120 30 T 240 20 T 320 10 T 400 3"
                      fill="none"
                      stroke="#00FFCC"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 0 40 Q 60 36, 120 30 T 240 20 T 320 10 T 400 3 L 400 48 L 0 48 Z"
                      fill="url(#equityGradProper)"
                    />
                  </svg>
                </div>
              </div>

              {/* 03. Agent Strategy Details & Risk Rails */}
              <div className="py-2.5 border-b border-white/[0.08] text-[10.5px] font-sans">
                <div className="flex items-center justify-between text-white/50 mb-1">
                  <span>Strategy Logic:</span>
                  <span className="text-white font-mono font-medium">Whale Inflow + Supertrend 4H</span>
                </div>
                <div className="flex items-center justify-between text-white/50">
                  <span>Risk Protocol:</span>
                  <span className="text-[#13c38f] font-mono font-medium">Max 5x · Auto-Ratchet Trailing SL (2.5%)</span>
                </div>
              </div>

              {/* 04. Recent Closed Trades of the Agent */}
              <div className="py-2.5 flex-1 flex flex-col justify-start">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9.5px] uppercase text-white/40 font-bold tracking-wider font-sans">
                    RECENT TRADES (CLOSED)
                  </span>
                  <span className="text-[9px] text-white/30 font-sans">Onchain Settled</span>
                </div>

                <div className="space-y-1.5 text-[10.5px]">
                  {RECENT_TRADES.map((trade, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC]" />
                        <span className="text-white font-bold">{trade.pair}</span>
                        <span className="text-white/40 text-[9.5px]">{trade.side}</span>
                        <span className="text-white/30 text-[9px] hidden sm:inline">{trade.entry} ➔ {trade.exit}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[#00FFCC] font-bold">{trade.pnl}</span>
                        <span className="text-[#13c38f] text-[9.5px] font-mono">({trade.roi})</span>
                        <span className="text-white/30 text-[9px]">{trade.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05. Deploy Agent Control Bar */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[10px] text-white/40 font-sans">
                  Zero human oversight · 24/7 Execution
                </span>
                <button
                  onClick={handleDeploy}
                  disabled={isDeploying || isDeployed}
                  className={`px-5 py-2 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                    isDeployed
                      ? 'bg-[#13c38f] text-black'
                      : isDeploying
                      ? 'bg-white/20 text-white'
                      : 'bg-[#00FFCC] hover:bg-[#00FFCC]/90 text-black shadow-[0_0_12px_rgba(0,255,204,0.25)]'
                  }`}
                >
                  {isDeploying ? (
                    <>
                      <ArrowsClockwise size={13} weight="bold" className="animate-spin" />
                      <span>DEPLOYING AGENT...</span>
                    </>
                  ) : isDeployed ? (
                    <>
                      <CheckCircle size={13} weight="bold" />
                      <span>AGENT ACTIVE 24/7</span>
                    </>
                  ) : (
                    <>
                      <Lightning size={13} weight="fill" />
                      <span>DEPLOY AGENT</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AITradingAgents;
