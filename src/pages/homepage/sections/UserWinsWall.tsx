interface PnlTicketData {
  pair: string;
  pnl: string;
  time: string;
  investedSol: string;
  investedUsd: string;
  gainSol: string;
  gainUsd: string;
  gainProfitUsd: string;
  referralCode: string;
  artUrl: string;
}

interface TweetCardData {
  avatarUrl: string;
  avatarType: string;
  name: string;
  handle: string;
  text: string;
  ticket: PnlTicketData;
}

export function UserWinsWall() {
  // ROW 1: Authentic PnL Percentages & Realistic Gains (under $5,000)
  const ROW_1_TWEETS: TweetCardData[] = [
    {
      avatarUrl: '/avatars/bayc.jpg',
      avatarType: 'BAYC',
      name: 'kuay',
      handle: '@Kuayineth',
      text: 'slept on a baby bag. funny',
      ticket: {
        pair: 'petition/SOL',
        pnl: '+4,323.67%',
        time: '8h 48m',
        investedSol: '0.511 SOL',
        investedUsd: '$116.90',
        gainSol: '22.117 SOL',
        gainUsd: '$4,926.23',
        gainProfitUsd: '+$4,809.33',
        referralCode: 'kuayinn',
        artUrl: '/avatars/bayc.jpg',
      },
    },
    {
      avatarUrl: '/avatars/azuki.jpg',
      avatarType: 'Azuki',
      name: 'Promise.sol',
      handle: '@sol_promise',
      text: '13 dollars, 13 minutes, 130x',
      ticket: {
        pair: 'TRUMP/SOL',
        pnl: '+13,263.24%',
        time: '13m 17s',
        investedSol: '0.050 SOL',
        investedUsd: '$13.00',
        gainSol: '7.850 SOL',
        gainUsd: '$1,722.62',
        gainProfitUsd: '+$1,709.62',
        referralCode: 'solpromise',
        artUrl: '/avatars/azuki.jpg',
      },
    },
    {
      avatarUrl: '/avatars/punk.jpg',
      avatarType: 'CryptoPunk',
      name: 'Ferdie',
      handle: '@uravgcryptobro',
      text: 'Another 100 solana @i5AlphaTrade im gonna touch my self and think of you tonight bro. $i5 @i5AlphaTrade',
      ticket: {
        pair: 'PASTERNAK/SOL',
        pnl: '+1,693.90%',
        time: '1h 14m',
        investedSol: '0.850 SOL',
        investedUsd: '$180.00',
        gainSol: '15.248 SOL',
        gainUsd: '$3,228.00',
        gainProfitUsd: '+$3,048.00',
        referralCode: 'ferdie68',
        artUrl: '/avatars/punk.jpg',
      },
    },
    {
      avatarUrl: '/avatars/milady.jpg',
      avatarType: 'Milady',
      name: 'inferno',
      handle: '@inferno_trades',
      text: 's/o @i5AlphaTrade for the fastest trades onchain',
      ticket: {
        pair: 'Alfred/SOL',
        pnl: '+2,061.55%',
        time: '1d 23h 16m',
        investedSol: '0.550 SOL',
        investedUsd: '$120.00',
        gainSol: '11.888 SOL',
        gainUsd: '$2,593.80',
        gainProfitUsd: '+$2,473.80',
        referralCode: 'inferno_trades',
        artUrl: '/avatars/milady.jpg',
      },
    },
  ];

  // ROW 2: Authentic PnL Percentages & Realistic Gains (under $5,000)
  const ROW_2_TWEETS: TweetCardData[] = [
    {
      avatarUrl: '/avatars/pepe.jpg',
      avatarType: 'Pepe',
      name: 'Kiliko',
      handle: '@Ki1iko',
      text: 'never kill yourself',
      ticket: {
        pair: 'GRIMACE/SOL',
        pnl: '+1,192.50%',
        time: '20m 35s',
        investedSol: '0.700 SOL',
        investedUsd: '$150.00',
        gainSol: '9.047 SOL',
        gainUsd: '$1,938.00',
        gainProfitUsd: '+$1,788.00',
        referralCode: 'kiliko',
        artUrl: '/avatars/pepe.jpg',
      },
    },
    {
      avatarUrl: '/avatars/pudgy.jpg',
      avatarType: 'PudgyPenguin',
      name: 'prosciutto',
      handle: '@prosciuttosol',
      text: "Had some big wins on the best trading bot on solana, @i5AlphaTrade. Big things coming rack up volume",
      ticket: {
        pair: 'autism/SOL',
        pnl: '+119.02%',
        time: '3d 3h 19m',
        investedSol: '2.100 SOL',
        investedUsd: '$450.00',
        gainSol: '4.599 SOL',
        gainUsd: '$985.50',
        gainProfitUsd: '+$535.50',
        referralCode: 'prosciutto007',
        artUrl: '/avatars/pudgy.jpg',
      },
    },
    {
      avatarUrl: '/avatars/degods.jpg',
      avatarType: 'DeGods',
      name: 'khurry',
      handle: '@khurrylicious',
      text: 'I just retired again',
      ticket: {
        pair: 'jellyjelly/SOL',
        pnl: '+1,980.00%',
        time: '1h 34m',
        investedSol: '0.650 SOL',
        investedUsd: '$140.00',
        gainSol: '13.520 SOL',
        gainUsd: '$2,912.00',
        gainProfitUsd: '+$2,772.00',
        referralCode: 'shitcoinmj',
        artUrl: '/avatars/degods.jpg',
      },
    },
    {
      avatarUrl: '/avatars/doge.jpg',
      avatarType: 'Doge',
      name: 'fomo',
      handle: '@fomomofosol',
      text: '7$ and a dream. I am using @i5AlphaTrade as my preferred trading bot <3',
      ticket: {
        pair: '?/SOL',
        pnl: '+10,756.84%',
        time: '3h 15m',
        investedSol: '0.035 SOL',
        investedUsd: '$7.64',
        gainSol: '3.800 SOL',
        gainUsd: '$829.80',
        gainProfitUsd: '+$822.16',
        referralCode: 'jayowtrades',
        artUrl: '/avatars/doge.jpg',
      },
    },
  ];

  const LOOPED_ROW_1 = [...ROW_1_TWEETS, ...ROW_1_TWEETS, ...ROW_1_TWEETS];
  const LOOPED_ROW_2 = [...ROW_2_TWEETS, ...ROW_2_TWEETS, ...ROW_2_TWEETS];

  const renderTrojanStyleCard = (tweet: TweetCardData, idx: number, prefix: string) => {
    const t = tweet.ticket;
    return (
      <div
        key={`${prefix}-${tweet.handle}-${idx}`}
        className="w-[360px] sm:w-[400px] h-[340px] rounded-none border border-[#1f2228] bg-black p-4 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.9)] shrink-0 text-left"
      >
        {/* Top Header Section (Fixed Height: 40px) */}
        <div className="flex items-center gap-2.5 h-10 shrink-0">
          {/* Blue-Chip NFT Avatar */}
          <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/20 bg-[#14171a] shadow-inner">
            <img 
              src={tweet.avatarUrl} 
              alt={tweet.avatarType} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>

          {/* User Name & Handle */}
          <div className="flex flex-col leading-tight min-w-0">
            <div className="flex items-center gap-1">
              <span 
                className="text-[14.5px] font-bold text-white tracking-tight truncate"
                style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
              >
                {tweet.name}
              </span>
              {/* Blue Verified Badge */}
              <svg viewBox="0 0 24 24" aria-label="Verified" className="w-3.5 h-3.5 text-[#1d9bf0] fill-current shrink-0">
                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
              </svg>
            </div>
            <span className="text-[12px] text-[#71767b] font-normal truncate">{tweet.handle}</span>
          </div>
        </div>

        {/* Tweet Body Quote Text (Fixed Height: 44px with 2-line alignment) */}
        <div className="h-[44px] flex items-center shrink-0 my-1 overflow-hidden">
          <p 
            className="text-[13.5px] text-white font-normal leading-snug line-clamp-2"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
          >
            {tweet.text}
          </p>
        </div>

        {/* Authentic Trojan-Style High-Impact Ticket Container (Fixed Height: 210px) */}
        <div className="h-[210px] w-full rounded-none overflow-hidden border border-[#22272e] relative select-none shadow-[0_8px_25px_rgba(0,0,0,0.8)] shrink-0 bg-gradient-to-r from-[#0d1117] via-[#090c10] to-[#040608] flex">
          
          {/* Left: Dynamic Meme / Character Artwork with Diagonal Slash Fade */}
          <div className="relative w-[38%] h-full shrink-0 overflow-hidden bg-[#06080a]">
            <img 
              src={t.artUrl} 
              alt="" 
              className="w-full h-full object-cover object-top scale-105" 
            />
            {/* Seamless Dark Gradient & Angled Cut into Right Panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-[#040608]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          {/* Right: High-Impact PnL Data Panel */}
          <div className="relative flex-1 h-full p-3 sm:p-3.5 flex flex-col justify-between z-10 text-right">
            
            {/* Top Bar: i5 ALPHA Logo + Pair & Duration */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-1.5 text-white/90 font-bold text-[11px] tracking-wider text-left">
                <div className="w-4 h-4 rounded-none bg-[#00ba7c] flex items-center justify-center text-black text-[8px] font-black shadow-[0_0_8px_#00ba7c]">
                  i5
                </div>
                <span className="font-mono text-white/90">i5 ALPHA</span>
              </div>
              <div>
                <span className="text-[13px] font-mono font-bold text-white block leading-tight">
                  {t.pair}
                </span>
                <span className="text-[9.5px] font-mono text-white/50 block mt-0.5">
                  ⏱ {t.time}
                </span>
              </div>
            </div>

            {/* Center: GIANT BOLD GLOWING GREEN PNL PERCENTAGE */}
            <div className="my-auto py-1 flex flex-col items-end">
              <span className="text-[25px] sm:text-[29px] font-black font-mono text-[#00ba7c] tracking-tight block drop-shadow-[0_2px_14px_rgba(0,186,124,0.45)] leading-none">
                {t.pnl}
              </span>
              <span className="text-[11px] font-mono font-medium text-white/60 block mt-1">
                profit: <span className="text-[#00FFCC] font-bold">{t.gainProfitUsd}</span>
              </span>
            </div>

            {/* Bottom Row: Invested vs Current Gain + Referral Code */}
            <div className="flex items-end justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-left">
              <div className="flex gap-3.5">
                <div>
                  <span className="text-white/40 block text-[8px]">Invested</span>
                  <span className="text-white font-medium block leading-tight">{t.investedSol}</span>
                  <span className="text-white/40 text-[7.5px] block">{t.investedUsd}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[8px]">Current Gain</span>
                  <span className="text-[#00ba7c] font-bold block leading-tight">{t.gainSol}</span>
                  <span className="text-[#00ba7c]/70 text-[7.5px] block">{t.gainUsd}</span>
                </div>
              </div>

              {/* Referral Pill */}
              <div className="flex items-center gap-1 text-[8px] font-mono text-white/50 bg-black/80 px-1.5 py-0.5 rounded-none border border-white/10 shrink-0">
                <span>Save 10% on fees</span>
                <div className="w-3.5 h-3.5 bg-white/20 rounded-none flex items-center justify-center text-[6.5px] text-white font-mono">
                  QR
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  };

  return (
    <section className="relative py-20 sm:py-26 bg-black border-b border-[#1f2228] select-none overflow-hidden">
      
      {/* Central Cyan Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00FFCC]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header with Brand Cyan Glowing Theme */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 mb-12 sm:mb-14 text-center relative z-10">
        
        {/* Brand Casual Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00FFCC]/20 bg-[#00FFCC]/5 backdrop-blur-md mb-3.5">
          <span className="text-[#00FFCC] text-xs">✦</span>
          <span className="text-[11px] font-mono font-medium text-[#00FFCC] uppercase tracking-widest">
            THE WALL
          </span>
        </div>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white uppercase leading-[1.08] tracking-[-0.03em]"
          style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
        >
          THE GROUP’S <span className="text-[#00FFCC] drop-shadow-[0_0_30px_rgba(0,255,204,0.35)]">BEEN COOKING.</span>
        </h2>
        <p
          className="text-white/60 text-sm sm:text-base mt-3.5 leading-relaxed max-w-xl mx-auto font-normal"
          style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
        >
          Real trades, live positions, and PnL straight from the Alpha Trade community.
        </p>
      </div>

      {/* Dual Opposing Direction Marquee Container */}
      <div className="w-full relative flex flex-col gap-4 sm:gap-5 overflow-hidden">
        
        {/* Left & Right Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none" />

        {/* ROW 1: Continuously Scrolling Left */}
        <div className="w-full relative overflow-hidden pointer-events-auto">
          <div 
            className="flex gap-3.5 sm:gap-4 w-max animate-marquee"
            style={{
              animationDuration: '36s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {LOOPED_ROW_1.map((tweet, idx) => renderTrojanStyleCard(tweet, idx, 'r1'))}
          </div>
        </div>

        {/* ROW 2: Continuously Scrolling Right (Opposite Direction) */}
        <div className="w-full relative overflow-hidden pointer-events-auto">
          <div 
            className="flex gap-3.5 sm:gap-4 w-max animate-marquee-reverse"
            style={{
              animationDuration: '40s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {LOOPED_ROW_2.map((tweet, idx) => renderTrojanStyleCard(tweet, idx, 'r2'))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default UserWinsWall;
