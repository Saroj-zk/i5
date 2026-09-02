
import CourseDesignCard, { type ClanCardData } from '@/components/ui/course-design-cards';

const CLANS_DATA: ClanCardData[] = [
  {
    id: 1,
    rank: 1,
    rankText: 'Rank #01',
    rankColor: '#00FFCC',
    title: 'Apex Alpha TG',
    subtitle: 'Telegram Trading Syndicate',
    clanAvatar: '/avatars/bayc.jpg',
    heroNumber: '+41.2%',
    heroLabel: '30D Collective Return',
    metrics: [
      { label: '30D Volume', value: '$8.4M' },
      { label: 'Clan Win Rate', value: '92.4%' },
      { label: 'Top Alpha Call', value: 'SOL Momentum Longs' },
      { label: 'Group Members', value: '128 Traders' },
    ],
  },
  {
    id: 2,
    rank: 2,
    rankText: 'Rank #02',
    rankColor: '#38bdf8',
    title: 'Orderflow Desk TG',
    subtitle: 'Telegram Trading Syndicate',
    clanAvatar: '/avatars/azuki.jpg',
    heroNumber: '+33.8%',
    heroLabel: '30D Collective Return',
    metrics: [
      { label: '30D Volume', value: '$6.9M' },
      { label: 'Clan Win Rate', value: '84.1%' },
      { label: 'Top Alpha Call', value: 'Range Breakouts' },
      { label: 'Group Members', value: '96 Traders' },
    ],
  },
  {
    id: 3,
    rank: 3,
    rankText: 'Rank #03',
    rankColor: '#13c38f',
    title: 'Midnight Scalpers TG',
    subtitle: 'Telegram Trading Syndicate',
    clanAvatar: '/avatars/punk.jpg',
    heroNumber: '+27.5%',
    heroLabel: '30D Collective Return',
    metrics: [
      { label: '30D Volume', value: '$5.1M' },
      { label: 'Clan Win Rate', value: '78.6%' },
      { label: 'Top Alpha Call', value: 'Asian Mean Reversion' },
      { label: 'Group Members', value: '74 Traders' },
    ],
  },
  {
    id: 4,
    rank: 4,
    rankText: 'Rank #04',
    rankColor: '#a855f7',
    title: 'Whale Trackers TG',
    subtitle: 'Telegram Trading Syndicate',
    clanAvatar: '/avatars/degods.jpg',
    heroNumber: '+22.1%',
    heroLabel: '30D Collective Return',
    metrics: [
      { label: '30D Volume', value: '$11.3M' },
      { label: 'Clan Win Rate', value: '71.3%' },
      { label: 'Top Alpha Call', value: 'Tier-1 Wallet Rotations' },
      { label: 'Group Members', value: '41 Traders' },
    ],
  },
];

export function SocialTradingClans() {
  return (
    <section className="relative py-20 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-24 bg-black border-b border-white/10 select-none overflow-hidden text-left">
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#00FFCC]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#00FFCC]/20 bg-[#00FFCC]/5 mb-3 font-mono text-xs text-[#00FFCC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC] animate-pulse" />
              <span className="uppercase tracking-widest font-semibold">SOCIAL TRADING NETWORK</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium text-white uppercase leading-[1.05] tracking-[-0.03em]"
              style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
            >
              TRADE ALONE. <br />
              <span className="text-[#00FFCC] drop-shadow-[0_0_30px_rgba(0,255,204,0.35)]">
                OR TRADE WITH A CREW.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-white/60">
            <span className="text-white font-bold text-xs uppercase px-2.5 py-1 rounded border border-white/10 bg-white/[0.02]">
              SEASON 01 ACTIVE
            </span>
            <span>$500K Collective Prize Pool</span>
          </div>
        </div>

        {/* 4 TELEGRAM CLAN CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLANS_DATA.map((clan) => (
            <CourseDesignCard key={clan.id} data={clan} />
          ))}
        </div>

        {/* Bottom Clan League Live Telemetry */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#00FFCC] shadow-[0_0_8px_#00FFCC]" />
            <span className="text-white">Telegram clans share live signals, copy trade top performers, and pool fee rebates 24/7.</span>
          </div>

          <button
            type="button"
            className="text-[#00FFCC] hover:underline font-bold shrink-0 cursor-pointer"
          >
            Connect Your Telegram Group & Invite Traders →
          </button>
        </div>

      </div>
    </section>
  );
}

export default SocialTradingClans;
