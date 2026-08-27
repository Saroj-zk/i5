"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChartLineUp,
  Lightning,
  CurrencyBtc,
  Newspaper,
  Brain,
  TrendUp,
  Eye,
  Broadcast,
  Target,
  ArrowUp,
  ArrowDown,
  CircleNotch,
  Check,
  Warning,
  ShieldCheck,
} from "@phosphor-icons/react";
import { cn } from "../../../lib/utils";

/* ------------------------------------------------------
   i5 - Intelligence Built for Every Market
   Responsive Bento Grid:
   Desktop (lg): 3 top row, 2 bottom row (Card 4 spans 2 cols)
   Tablet (md): 2 columns (cards 1,2 then 3,5 then 4 spans 2)
   Mobile: 1 column
------------------------------------------------------ */

interface FeatCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

function FeatCard({ title, description, children, className = "" }: FeatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col w-full h-full",
        "transition-all duration-500 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-[#13c38f]/30 hover:shadow-[0_0_40px_rgba(19,195,143,0.08)] overflow-hidden",
        className
      )}
    >
      {/* Top glow line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[rgba(19,195,143,0.5)] transition-all duration-500 z-20" />

      {/* Card Header */}
      <div className="p-5 sm:p-6 pb-3 sm:pb-4 relative z-10 flex flex-col justify-start">
        <h3 className="font-semibold text-white text-[16px] sm:text-[17px] tracking-tight leading-snug mb-2 font-display">
          {title}
        </h3>
        <p className="text-white/50 text-[13px] sm:text-[13.5px] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Card Visual Content Container */}
      <div className="relative flex-1 overflow-hidden bg-black/40 mx-3.5 sm:mx-4 mb-3.5 sm:mb-4 rounded-xl border border-white/[0.04] flex flex-col min-h-[220px] sm:min-h-[240px]">
        {children}
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------
   Card 1 - One-Tap Social Trading (Pipeline Flow)
   SOCIAL -> ROUTER -> 1-TAP -> LONG / SHORT
--------------------------------------------- */

type FlowStep = "source" | "ingest" | "analyze" | "signal" | "execute" | "report";

const VW = 320;
const VH = 220;

interface NodeConfig {
  id: string;
  x: number;
  y: number;
  icon: React.ElementType;
  label: string;
  type: "box" | "circle";
}

const NODES: NodeConfig[] = [
  { id: "A", x: 44, y: 110, icon: Broadcast, label: "SOCIAL", type: "box" },
  { id: "Router", x: 114, y: 110, icon: Eye, label: "", type: "circle" },
  { id: "C", x: 184, y: 110, icon: Brain, label: "1-TAP", type: "box" },
  { id: "B", x: 266, y: 48, icon: TrendUp, label: "LONG", type: "box" },
  { id: "D", x: 266, y: 172, icon: Target, label: "SHORT", type: "box" },
];

interface FlowPath {
  id: string;
  d: string;
  activeSteps: FlowStep[];
}

const PATHS: FlowPath[] = [
  { id: "a-to-router", d: "M 68 110 L 102 110", activeSteps: ["source"] },
  { id: "router-to-analyze", d: "M 126 110 L 160 110", activeSteps: ["analyze"] },
  { id: "analyze-to-signal", d: "M 184 86 L 184 48 L 242 48", activeSteps: ["signal"] },
  { id: "analyze-to-execute", d: "M 184 134 L 184 172 L 242 172", activeSteps: ["execute"] },
  { id: "response-1", d: "M 160 110 L 126 110", activeSteps: ["report"] },
  { id: "response-2", d: "M 102 110 L 68 110", activeSteps: ["report"] },
];

const NODE_BG: Record<string, string> = {
  A: "bg-[#13c38f]",
  Router: "",
  C: "bg-emerald-600",
  B: "bg-teal-500",
  D: "bg-cyan-600",
};

function Card1() {
  const [step, setStep] = useState<FlowStep>("source");

  useEffect(() => {
    const steps: FlowStep[] = ["source", "ingest", "analyze", "signal", "execute", "report"];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % steps.length;
      setStep(steps[idx]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const isNodeActive = (nodeId: string) => {
    switch (step) {
      case "source": return nodeId === "A";
      case "ingest": return nodeId === "Router";
      case "analyze": return nodeId === "C";
      case "signal": return nodeId === "C" || nodeId === "B";
      case "execute": return nodeId === "C" || nodeId === "D";
      case "report": return nodeId === "C" || nodeId === "Router" || nodeId === "A";
      default: return false;
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden select-none bg-[#050505] flex items-center justify-center p-2">
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="i5-grid-c1" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.6" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#i5-grid-c1)" />
      </svg>

      <svg className="w-full h-full max-h-[220px]" viewBox={`0 0 ${VW} ${VH}`} preserveAspectRatio="xMidYMid meet" aria-hidden>
        {/* Static path lines */}
        {["M 68 110 L 102 110", "M 126 110 L 160 110", "M 184 86 L 184 48 L 242 48", "M 184 134 L 184 172 L 242 172"].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" strokeDasharray="3 3" />
        ))}

        {/* Active flow */}
        {PATHS.map((p) => {
          if (!p.activeSteps.includes(step)) return null;
          return (
            <g key={p.id}>
              <motion.path d={p.d} fill="none" stroke="#13c38f" strokeWidth="3.5" strokeOpacity="0.25"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} />
              <motion.path d={p.d} fill="none" stroke="#13c38f" strokeWidth="1.8"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} />
            </g>
          );
        })}

        {/* Node boxes */}
        {NODES.map((node) => {
          const isBox = node.type === "box";
          const w = isBox ? 48 : 24;
          const h = isBox ? 48 : 24;
          const active = isNodeActive(node.id);

          return (
            <foreignObject key={node.id} x={node.x - w / 2} y={node.y - h / 2} width={w} height={h} className="overflow-visible">
              <div className="w-full h-full flex items-center justify-center">
                {isBox ? (
                  <div className={cn(
                    "w-full h-full rounded-[12px] border flex flex-col items-center justify-center text-white shadow-lg",
                    active ? `${NODE_BG[node.id]} border-[rgba(19,195,143,0.6)] shadow-[0_0_20px_rgba(19,195,143,0.35)]` : "bg-[#111] border-[rgba(255,255,255,0.08)]",
                    "transition-all duration-500"
                  )}>
                    <node.icon className="w-4 h-4 mb-0.5" weight="fill" />
                    <span className="text-[7px] font-mono font-bold tracking-wider">{node.label}</span>
                  </div>
                ) : (
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    active ? "bg-[rgba(19,195,143,0.2)] border-[#13c38f]" : "bg-[#111] border-[rgba(255,255,255,0.12)]"
                  )}>
                    <motion.div
                      className={cn("w-2.5 h-2.5 rounded-full border border-dashed", active ? "border-[#13c38f]" : "border-[rgba(255,255,255,0.15)]")}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    />
                  </div>
                )}
              </div>
            </foreignObject>
          );
        })}
      </svg>
    </div>
  );
}

/* ---------------------------------------------
   Card 2 - Discover & Trade Memes (Stats & Bars)
   $PEPE/USD, MEME VOL, animated volume bars
--------------------------------------------- */
function Card2() {
  const bars = [45, 75, 35, 85, 60, 95, 50];
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => { setActiveIdx((p) => (p === 0 ? 1 : 0)); }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-2.5 justify-between p-3.5 sm:p-4">
      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {[
          { label: "$PEPE/USD", value: "$0.00012", trend: "+342%" },
          { label: "Meme Vol", value: "$4.2M", trend: "+88%" },
        ].map((s, i) => {
          const isActive = i === activeIdx || hoveredIdx === i;
          return (
            <div key={i} className="h-[62px] sm:h-[66px] relative select-none">
              <div className="absolute inset-0 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)]" />
              <motion.div
                className="absolute inset-0 w-full h-full rounded-xl bg-[#0d0d0d] border border-[rgba(255,255,255,0.08)] p-2.5 sm:p-3 hover:border-[rgba(19,195,143,0.2)] transition-colors duration-300 flex items-center justify-between gap-1.5 sm:gap-3 cursor-pointer"
                animate={{ x: isActive ? "3px" : "0px", y: isActive ? "-3px" : "0px" }}
                transition={{ type: "spring", stiffness: 200, damping: 16 }}
                onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="flex flex-col min-w-0">
                  <span className="text-[7.5px] sm:text-[8px] text-muted-foreground font-mono uppercase tracking-widest leading-none truncate">{s.label}</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-white leading-none mt-1 sm:mt-1.5 tracking-tight">{s.value}</span>
                  <span className={cn("text-[7.5px] sm:text-[8px] font-mono font-bold mt-1 sm:mt-1.5", s.trend.startsWith("+") ? "text-[#13c38f]" : "text-red-400")}>{s.trend}</span>
                </div>
                <div className="w-10 sm:w-12 h-5 sm:h-6 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 48 24">
                    <motion.path
                      d={i === 0 ? "M 0 18 L 16 11 L 32 14 L 48 4" : "M 0 4 L 16 12 L 32 8 L 48 18"}
                      fill="none" stroke="#13c38f" strokeWidth="1.2" strokeLinecap="round" strokeOpacity={0.6}
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Animated bars */}
      <div className="flex-1 flex items-end gap-1.5 sm:gap-2 min-h-[75px] sm:min-h-[85px] my-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 h-full rounded-xl bg-[#080808] border border-[rgba(255,255,255,0.05)] relative overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-[#13c38f] rounded-t-[8px] sm:rounded-t-[10px] shadow-[0_0_12px_rgba(19,195,143,0.3)]"
              initial={{ height: "0%" }}
              animate={{ height: [`${h}%`, `${Math.min(95, h + 15)}%`, `${Math.max(10, h - 20)}%`, `${h}%`] }}
              transition={{ repeat: Infinity, duration: 3 + (i % 3) * 0.8, ease: "easeInOut", delay: i * 0.1 }}
            />
          </div>
        ))}
      </div>

      {/* Day labels */}
      <div className="flex justify-between px-1">
        {days.map((d) => (
          <span key={d} className="text-[7px] sm:text-[7.5px] font-mono text-muted-foreground/60">{d}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Card 3 - Trade Crypto & Global Stocks (3D Carousel Stack)
   BTC/USD, NVDA, ETH/USD, TSLA, SPX
--------------------------------------------- */
const SIGNAL_STATUS: Record<string, { icon: React.ElementType; color: string; bg: string; gradient: string; border: string }> = {
  bullish: { icon: ArrowUp, color: "text-[#13c38f]", bg: "bg-[rgba(19,195,143,0.15)]", gradient: "bg-gradient-to-b from-[#13c38f] to-emerald-600", border: "border-emerald-600" },
  active: { icon: CircleNotch, color: "text-cyan-400", bg: "bg-cyan-400/15", gradient: "bg-gradient-to-b from-cyan-400 to-cyan-600", border: "border-cyan-600" },
  alert: { icon: Warning, color: "text-amber-400", bg: "bg-amber-400/15", gradient: "bg-gradient-to-b from-amber-400 to-amber-600", border: "border-amber-600" },
  bearish: { icon: ArrowDown, color: "text-red-400", bg: "bg-red-400/15", gradient: "bg-gradient-to-b from-red-400 to-red-600", border: "border-red-500" },
  confirmed: { icon: Check, color: "text-[#13c38f]", bg: "bg-[rgba(19,195,143,0.15)]", gradient: "bg-gradient-to-b from-[#13c38f] to-emerald-600", border: "border-emerald-600" },
};

function Card3() {
  const signals = [
    { source: "BTC/USD", action: "Breaks $68.5k - +4.2% intraday", status: "bullish", t: "2s ago" },
    { source: "NVDA", action: "Gap up to $138.50 - +5.8% earnings", status: "confirmed", t: "15s ago" },
    { source: "ETH/USD", action: "Staking inflow +$42M - +3.1%", status: "bullish", t: "1m ago" },
    { source: "TSLA", action: "Breakout past $248 - +4.5%", status: "active", t: "3m ago" },
    { source: "SPX 500", action: "All-time high reached - risk on", status: "bullish", t: "5m ago" },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { setActiveIdx((p) => (p + 1) % signals.length); }, 2400);
    return () => clearInterval(interval);
  }, [signals.length]);

  const getSlot = (i: number) => {
    const N = signals.length;
    let rel = i - activeIdx;
    if (rel > Math.floor(N / 2)) rel -= N;
    if (rel < -Math.floor(N / 2)) rel += N;
    return rel;
  };

  const Y: Record<string, number> = { "-2": -64, "-1": -36, "0": 0, "1": 36, "2": 64 };

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden p-2 sm:p-3">
      {signals.map((l, i) => {
        const slot = getSlot(i);
        const si = SIGNAL_STATUS[l.status];
        const abs = Math.abs(slot);
        const isActive = slot === 0;
        const isVisible = abs <= 2;
        const yOffset = Y[String(slot)] ?? (slot < 0 ? -120 : 120);
        const scale = isActive ? 1 : abs === 1 ? 0.93 : 0.86;
        const opacity = isActive ? 1 : abs === 1 ? 0.65 : 0.35;

        return (
          <motion.div key={l.source} className="absolute left-0 right-0 mx-auto px-2 max-w-[95%]"
            style={{ zIndex: isActive ? 30 : abs === 1 ? 20 : 10 }}
            animate={{
              y: isVisible ? yOffset : slot < 0 ? -150 : 150,
              scale, opacity: isVisible ? opacity : 0,
            }}
            transition={{
              y: { type: "spring", stiffness: 500, damping: 35 },
              scale: { type: "spring", stiffness: 500, damping: 35 },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
          >
            <div className={cn(
              "w-full rounded-2xl border flex items-center gap-2 sm:gap-2.5 transition-all duration-300",
              isActive ? "px-3 py-2 sm:py-2.5 bg-[#0d0d0d] border-[rgba(255,255,255,0.12)] shadow-xl" : "px-2.5 py-1.5 bg-[#080808] border-[rgba(255,255,255,0.05)]"
            )}>
              <div className={cn(
                "shrink-0 rounded-[8px] flex items-center justify-center font-bold text-white shadow-lg",
                si.gradient, "border", si.border,
                isActive ? "w-7 h-7 sm:w-8 sm:h-8" : "w-5 h-5"
              )}>
                <si.icon weight="bold" className={cn(isActive ? "w-3.5 h-3.5 sm:w-4 sm:h-4" : "w-2.5 h-2.5", l.status === "active" && "animate-spin")} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className={cn("font-mono font-semibold text-white leading-none", isActive ? "text-[10px] sm:text-[11px]" : "text-[9px]")}>{l.source}</span>
                  <span className={cn("font-mono uppercase tracking-wide rounded px-1 py-0.5", si.bg, si.color, isActive ? "text-[7px]" : "text-[6px]")}>{l.status}</span>
                </div>
                {isActive && <p className="text-[8.5px] sm:text-[9.5px] text-muted-foreground truncate mt-0.5 leading-tight">{l.action}</p>}
              </div>
              {isActive && <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground shrink-0">{l.t}</span>}
            </div>
          </motion.div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
        {signals.map((_, i) => (
          <motion.div key={i} className="rounded-full bg-white/25"
            animate={{ width: i === activeIdx ? 14 : 4, opacity: i === activeIdx ? 0.7 : 0.2 }}
            style={{ height: 3 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Card 4 - Trade with Agentic AI (Multi-Market Scanner & Stream)
   Responsive layout for desktop & mobile
--------------------------------------------- */
const MKT_ICONS: Record<string, React.ElementType> = {
  crypto: CurrencyBtc,
  stocks: ChartLineUp,
  memes: Lightning,
  "ai agents": Brain,
};

const MKT_COLORS: Record<string, { bar: string; dot: string; badge: string; btnBg: string; btnBorder: string }> = {
  crypto: { bar: "from-[#13c38f] to-emerald-400", dot: "bg-[#13c38f]", badge: "bg-[rgba(19,195,143,0.15)] text-[#13c38f]", btnBg: "bg-[#13c38f]", btnBorder: "border-emerald-600" },
  stocks: { bar: "from-cyan-500 to-cyan-400", dot: "bg-cyan-500", badge: "bg-cyan-500/15 text-cyan-400", btnBg: "bg-cyan-500", btnBorder: "border-cyan-600" },
  memes: { bar: "from-amber-500 to-amber-400", dot: "bg-amber-500", badge: "bg-amber-500/15 text-amber-400", btnBg: "bg-amber-500", btnBorder: "border-amber-600" },
  "ai agents": { bar: "from-violet-500 to-violet-400", dot: "bg-violet-500", badge: "bg-violet-500/15 text-violet-400", btnBg: "bg-violet-500", btnBorder: "border-violet-600" },
};

const SCAN_QUERIES = [
  { ns: "crypto", q: "AI detected $BTC breakout structure", t: "0.2s" },
  { ns: "stocks", q: "AI correlated $NVDA with AI narrative", t: "1.1s" },
  { ns: "memes", q: "AI tracked $PEPE whale accumulation", t: "2.4s" },
  { ns: "ai agents", q: "Automated risk/reward: 4.2x target", t: "4.0s" },
  { ns: "crypto", q: "AI flagged ETH staking inflow surge", t: "5.8s" },
  { ns: "stocks", q: "AI verified SPX macro continuation", t: "7.2s" },
];

function Card4() {
  const markets = [
    { name: "crypto", hits: 342, fill: 88 },
    { name: "stocks", hits: 218, fill: 56 },
    { name: "memes", hits: 97, fill: 25 },
    { name: "ai agents", hits: 148, fill: 42 },
  ];

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { setTick((p) => (p + 1) % SCAN_QUERIES.length); }, 2000);
    return () => clearInterval(interval);
  }, []);

  const activeNs = SCAN_QUERIES[tick].ns;
  const recentQueries = [0, 1, 2, 3].map((offset) => SCAN_QUERIES[(tick - offset + SCAN_QUERIES.length) % SCAN_QUERIES.length]);

  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-4 p-4 sm:p-5">
      {/* Left: Market scan bars */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <p className="text-[8px] sm:text-[8.5px] font-mono uppercase tracking-widest text-muted-foreground mb-2.5 sm:mb-3">
            AI Agent Scanning
          </p>
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {markets.map((ns, i) => {
              const c = MKT_COLORS[ns.name];
              const isActive = ns.name === activeNs;
              const Icon = MKT_ICONS[ns.name] as React.ComponentType<{ size?: number; weight?: string; className?: string }>;
              return (
                <div key={ns.name} className="flex items-center gap-2 sm:gap-3 group relative">
                  <div className={cn(
                    "relative flex shrink-0 items-center justify-center w-7 h-7 sm:w-[32px] sm:h-[32px] rounded-[8px] sm:rounded-[10px] border transition-all duration-500",
                    isActive ? `shadow-lg text-white ${c.btnBg} ${c.btnBorder} scale-105` : "bg-[#111] border-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.35)]"
                  )}>
                    <Icon size={14} weight={isActive ? "fill" : "regular"} className="relative z-10" />
                  </div>
                  <span className={cn("text-[9px] sm:text-[10px] font-mono w-14 sm:w-16 shrink-0 transition-colors duration-400 capitalize", isActive ? "text-white font-semibold" : "text-muted-foreground")}>
                    {ns.name}
                  </span>
                  <div className="flex-1 h-1.5 bg-[rgba(255,255,255,0.03)] rounded-full overflow-hidden relative">
                    <motion.div
                      className={cn("absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r", c.bar)}
                      initial={{ width: "0%" }}
                      animate={{ width: `${ns.fill}%`, opacity: isActive ? 1 : 0.25 }}
                      transition={{ width: { duration: 1.2, delay: i * 0.1, type: "spring", bounce: 0.2 }, opacity: { duration: 0.4 } }}
                    >
                      {isActive && (
                        <motion.div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
                      )}
                    </motion.div>
                  </div>
                  <div className={cn("flex items-center gap-1 w-8 sm:w-10 justify-end transition-all duration-500 shrink-0", isActive ? "opacity-100" : "opacity-50")}>
                    <span className={cn("text-[8.5px] sm:text-[9px] font-mono font-medium", isActive ? "text-white" : "text-muted-foreground")}>{ns.hits}</span>
                    {isActive && <motion.div className={cn("w-1 h-1 rounded-full", c.dot)}
                      animate={{ opacity: [1, 0.2, 1], scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 pt-3 mt-2 border-t border-white/[0.04]">
          <div className="relative flex items-center justify-center w-2 h-2">
            <motion.div className="absolute inset-0 rounded-full bg-[rgba(19,195,143,0.4)]"
              animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#13c38f]" />
          </div>
          <span className="text-[7.5px] sm:text-[8px] font-mono text-muted-foreground font-medium tracking-wide">
            AI Agent scanning active
          </span>
        </div>
      </div>

      {/* Middle Vertical Divider (Desktop & Tablet) */}
      <div className="hidden sm:block w-px bg-[rgba(255,255,255,0.06)] self-stretch shrink-0" />

      {/* Right: Scan log stream */}
      <div className="w-full sm:w-[180px] lg:w-[210px] shrink-0 flex flex-col">
        <p className="text-[8px] sm:text-[8.5px] font-mono uppercase tracking-widest text-muted-foreground mb-2 sm:mb-2.5">
          AI Agent Log
        </p>
        <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
          {recentQueries.map((q, qi) => {
            const c = MKT_COLORS[q.ns];
            return (
              <motion.div key={`${q.ns}-${q.q}-${qi}`}
                className="rounded-xl border border-[rgba(255,255,255,0.05)] bg-[#080808] px-2.5 py-1.5 sm:py-2"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: qi === 0 ? 1 : qi === 1 ? 0.8 : qi === 2 ? 0.5 : 0.25, y: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 35, delay: qi * 0.05 }}
              >
                <div className="flex items-center gap-1 mb-0.5 sm:mb-1">
                  <span className={cn("text-[6px] sm:text-[6.5px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded-md", c.badge)}>{q.ns}</span>
                  <span className="text-[6.5px] sm:text-[7px] font-mono text-muted-foreground/50 ml-auto tabular-nums">{q.t}</span>
                </div>
                <p className="text-[7.5px] sm:text-[8px] text-[rgba(255,255,255,0.7)] leading-tight font-mono truncate">{q.q}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Card 5 - Real-Time News Intelligence (4-Tile Dashboard)
   Fed Signals, SEC Filings, Macro Alerts, News Impact
--------------------------------------------- */
function Card5() {
  const tools = [
    { name: "Fed Signals", calls: 14, icon: Broadcast, latency: "12ms", color: "bg-gradient-to-b from-[#13c38f] to-emerald-600", borderColor: "border-emerald-600" },
    { name: "SEC Filings", calls: 8, icon: ShieldCheck, latency: "28ms", color: "bg-gradient-to-b from-cyan-400 to-cyan-600", borderColor: "border-cyan-600" },
    { name: "Macro Alerts", calls: 22, icon: Lightning, latency: "18ms", color: "bg-gradient-to-b from-amber-400 to-amber-600", borderColor: "border-amber-600" },
    { name: "News Impact", calls: 31, icon: Newspaper, latency: "45ms", color: "bg-gradient-to-b from-violet-400 to-violet-600", borderColor: "border-violet-600" },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-3 sm:p-4">
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full">
        {tools.map((t, i) => (
          <motion.div key={i}
            className="relative rounded-[12px] sm:rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[#0a0a0a] hover:border-[rgba(19,195,143,0.2)] transition-all duration-300 flex flex-col justify-between p-2 sm:p-2.5 group"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="flex items-start justify-between">
              <div className={cn("w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-[7px] sm:rounded-[8px] flex items-center justify-center text-white shadow-lg border group-hover:scale-105 transition-transform duration-300", t.color, t.borderColor)}>
                <t.icon weight="fill" className="w-2.5 h-2.5 sm:w-3 sm:h-3 relative z-10" />
              </div>
              <div className="flex flex-col items-end gap-0.5 mt-0.5">
                <span className="text-[11px] sm:text-[12px] font-mono font-bold text-white leading-none">{t.calls}</span>
                <span className="text-[6.5px] sm:text-[7px] font-mono text-muted-foreground uppercase tracking-widest leading-none">Alerts</span>
              </div>
            </div>
            <div className="mt-1.5 sm:mt-2 flex flex-col gap-1 sm:gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-mono font-medium text-white tracking-tight truncate mr-1">{t.name}</span>
                <span className="text-[7.5px] sm:text-[8px] font-mono text-muted-foreground tabular-nums shrink-0">{t.latency}</span>
              </div>
              <div className="w-full h-1 sm:h-1.5 bg-[rgba(255,255,255,0.03)] rounded-full overflow-hidden relative">
                <motion.div className={cn("absolute left-0 top-0 bottom-0 rounded-full", t.color)}
                  initial={{ width: "0%" }} animate={{ width: `${(t.calls / 31) * 100}%` }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Main Bento Section Component
--------------------------------------------- */
export function MarketIntelligence() {
  return (
    <section id="market-intelligence" className="py-20 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-black select-none border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-white/40 border border-white/10 rounded-full px-4 py-1.5 mb-5 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#13c38f] animate-pulse inline-block" />
            Platform Intelligence
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-4">
            Intelligence Built for{" "}
            <span className="text-[#13c38f]" style={{ textShadow: "0 0 40px rgba(19,195,143,0.35)" }}>
              Every Market
            </span>
          </h2>
          
          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ textWrap: "balance" }}>
            Everything you need to discover, understand, and execute the next market opportunity across crypto, stocks, memes, AI, and breaking news.
          </p>
        </motion.div>

        {/* Fully Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: One-Tap Social Trading */}
          <div className="col-span-1 min-h-[440px] sm:min-h-[460px] flex">
            <FeatCard
              title="One-Tap Social Trading."
              description="Go Long or Short from the i5 terminal or Telegram. Share live trades with your group, see how others are positioned, and take your side in a single tap."
            >
              <Card1 />
            </FeatCard>
          </div>

          {/* Card 2: Discover & Trade Memes */}
          <div className="col-span-1 min-h-[440px] sm:min-h-[460px] flex">
            <FeatCard
              title="Discover & Trade Memes."
              description="Discover new and trending meme tokens, track smart money and on-chain activity, analyze what’s gaining momentum, and move from discovery to trade in one place."
            >
              <Card2 />
            </FeatCard>
          </div>

          {/* Card 3: Trade Crypto & Global Stocks */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 min-h-[440px] sm:min-h-[460px] flex">
            <FeatCard
              title="Trade Crypto & Global Stocks."
              description="Access stocks alongside crypto in one trading experience. Follow real-time price action, understand what’s moving, and execute without switching platforms."
            >
              <Card3 />
            </FeatCard>
          </div>

          {/* Card 4: Trade with Agentic AI */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 min-h-[440px] sm:min-h-[460px] flex">
            <FeatCard
              title="Trade with Agentic AI."
              description="Ask anything about a token, stock, wallet, or narrative. Get instant market context, compare assets, analyze trends, and uncover opportunities through AI."
            >
              <Card4 />
            </FeatCard>
          </div>

          {/* Card 5: Real-Time News Intelligence */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 min-h-[440px] sm:min-h-[460px] flex">
            <FeatCard
              title="Real-Time News Intelligence."
              description="Surface the developments that matter as they happen. Understand the market impact, see which assets could react, and act on relevant information faster."
            >
              <Card5 />
            </FeatCard>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MarketIntelligence;
