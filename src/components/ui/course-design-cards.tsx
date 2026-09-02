import React from 'react';
import { ArrowUpRight, PaperPlaneTilt } from '@phosphor-icons/react';

export interface ClanMetric {
  label: string;
  value: string;
}

export interface ClanCardData {
  id: number;
  rank: number;
  rankText: string;
  rankColor: string;
  title: string;
  subtitle: string;
  heroNumber: string;
  heroLabel: string;
  metrics: ClanMetric[];
  clanAvatar: string;
}

export interface ClanCardProps {
  data: ClanCardData;
}

export const CourseDesignCard: React.FC<ClanCardProps> = ({ data }) => {
  const {

    rankText,
    rankColor,
    title,
    subtitle,
    heroNumber,
    heroLabel,
    metrics,
    clanAvatar,
  } = data;

  return (
    <div
      className="p-5 sm:p-6 rounded-md bg-[#131316] border border-white/[0.08] hover:border-white/20 hover:bg-[#18181c] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between text-left group select-none shadow-md"
    >
      {/* ─── 1. TOP STATUS ROW: Telegram Clan & Rank ─── */}
      <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5 text-xs text-[#229ED9] font-sans font-medium">
          <PaperPlaneTilt size={13} weight="fill" />
          <span>Telegram Clan</span>
        </div>

        <span 
          className="text-xs font-mono font-bold tracking-tight"
          style={{ color: rankColor }}
        >
          {rankText}
        </span>
      </div>

      {/* ─── 2. PFP AVATAR & CLAN IDENTITY ─── */}
      <div className="flex items-center gap-3 mb-5">
        <img
          src={clanAvatar}
          alt={title}
          className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0 shadow-sm"
        />
        <div className="min-w-0">
          <h3 
            className="text-white font-bold text-sm sm:text-base tracking-tight leading-snug truncate group-hover:text-[#00FFCC] transition-colors"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            {title}
          </h3>
          <p className="text-white/45 text-[11px] font-sans truncate">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ─── 3. HERO RETURN VALUE ─── */}
      <div className="mb-4 pb-3.5 border-b border-white/[0.06]">
        <span className="text-white/40 text-[11px] font-sans block mb-1">
          {heroLabel}
        </span>
        <div 
          className="text-3xl sm:text-[38px] font-bold text-white tracking-tight leading-none font-mono"
          style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
        >
          {heroNumber}
        </div>
      </div>

      {/* ─── 4. CLAN METRICS & TRADING STATS ─── */}
      <div className="space-y-2 font-sans mb-4">
        {metrics.map((m, idx) => (
          <div key={idx} className="flex items-center justify-between text-xs">
            <span className="text-white/50 text-[11.5px]">{m.label}</span>
            <span className="text-white font-semibold font-mono text-[11.5px]">{m.value}</span>
          </div>
        ))}
      </div>

      {/* ─── 5. BOTTOM ACTION ─── */}
      <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between mt-auto">
        <span className="text-white/40 text-[11px] font-sans">
          Telegram synced
        </span>
        <button
          type="button"
          className="text-[#00FFCC] hover:text-white font-bold text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer group-hover:translate-x-0.5"
        >
          <span>Join Clan</span>
          <ArrowUpRight size={13} weight="bold" />
        </button>
      </div>

    </div>
  );
};

export default CourseDesignCard;
