interface TweetCardData {
  avatarUrl: string;
  avatarType: string;
  name: string;
  handle: string;
  text: string;
  pnlImage: {
    pair: string;
    pnl: string;
    time: string;
    investedSol: string;
    investedUsd: string;
    gainSol: string;
    gainUsd: string;
    themeGradient: string;
    referralHandle: string;
  };
  customImgUrl?: string;
}

export function UserWinsWall() {
  // ROW 1: Distinct Blue-Chip Crypto PFPs (Bored Ape, Azuki, CryptoPunk, Milady)
  const ROW_1_TWEETS: TweetCardData[] = [
    {
      // Bored Ape Yacht Club (BAYC)
      avatarUrl: '/avatars/bayc.jpg',
      avatarType: 'BAYC',
      name: 'kuay',
      handle: '@Kuayineth',
      text: 'slept on a baby bag. funny',
      pnlImage: {
        pair: 'petition/SOL',
        pnl: '+4323.67%',
        time: '8h 48m',
        investedSol: '0.511 SOL',
        investedUsd: '$116.90',
        gainSol: '22.117 SOL',
        gainUsd: '$4,926.23',
        themeGradient: 'from-[#0e1726] via-[#08101a] to-black',
        referralHandle: 'kuayinn',
      },
    },
    {
      // Azuki Anime Samurai
      avatarUrl: '/avatars/azuki.jpg',
      avatarType: 'Azuki',
      name: 'Promise.sol',
      handle: '@sol_promise',
      text: '13 dollars, 13 minutes, 130x',
      pnlImage: {
        pair: 'TRUMP/SOL',
        pnl: '+13263.24%',
        time: '13m 17s',
        investedSol: '0.05 SOL',
        investedUsd: '$12.82',
        gainSol: '6.757 SOL',
        gainUsd: '$1,722.62',
        themeGradient: 'from-[#1c1214] via-[#0f090a] to-black',
        referralHandle: 'solpromise',
      },
    },
    {
      // Pixel CryptoPunk
      avatarUrl: '/avatars/punk.jpg',
      avatarType: 'CryptoPunk',
      name: 'Ferdie',
      handle: '@uravgcryptobro',
      text: 'Another 100 solana @i5AlphaTrade im gonna touch my self and think of you tonight bro. $i5 @i5AlphaTrade',
      pnlImage: {
        pair: 'PASTERNAK/SOL',
        pnl: '+1693.90%',
        time: '1h 14m',
        investedSol: '6.054 SOL',
        investedUsd: '$1,530.53',
        gainSol: '102.551 SOL',
        gainUsd: '$28,645.99',
        themeGradient: 'from-[#1e1315] via-[#10080a] to-black',
        referralHandle: 'ferdie682379',
      },
    },
    {
      // Milady Maker
      avatarUrl: '/avatars/milady.jpg',
      avatarType: 'Milady',
      name: 'inferno',
      handle: '@inferno_trades',
      text: 's/o @i5AlphaTrade for the fastest trades onchain',
      pnlImage: {
        pair: 'Alfred/SOL',
        pnl: '+2061.55%',
        time: '1d 23h 16m',
        investedSol: '9.802 SOL',
        investedUsd: '$1,023.30',
        gainSol: '977.724 SOL',
        gainUsd: '$102,964.66',
        themeGradient: 'from-[#15171c] via-[#0a0c0f] to-black',
        referralHandle: 'inferno_trades',
      },
    },
  ];

  // ROW 2: Distinct Blue-Chip Crypto PFPs (Pepe, Pudgy Penguin, DeGods, Doge)
  const ROW_2_TWEETS: TweetCardData[] = [
    {
      // Pepe the Frog Trader
      avatarUrl: '/avatars/pepe.jpg',
      avatarType: 'Pepe',
      name: 'Kiliko',
      handle: '@Ki1iko',
      text: 'never kill yourself',
      pnlImage: {
        pair: 'Mustard/SOL',
        pnl: '+396632.85%',
        time: '18h 1m',
        investedSol: '0.12 SOL',
        investedUsd: '$24.00',
        gainSol: '475.95 SOL',
        gainUsd: '$95,190.00',
        themeGradient: 'from-[#16181d] via-[#0c0d10] to-black',
        referralHandle: 'kiliko',
      },
    },
    {
      // Pudgy Penguin
      avatarUrl: '/avatars/pudgy.jpg',
      avatarType: 'PudgyPenguin',
      name: 'prosciutto',
      handle: '@prosciuttosol',
      text: "Had some big wins on the best trading bot on solana, @i5AlphaTrade. Big things coming rack up volume",
      pnlImage: {
        pair: 'autism/SOL',
        pnl: '+119.02%',
        time: '0h 31m',
        investedSol: '15.45 SOL',
        investedUsd: '$3,090.00',
        gainSol: '33.83 SOL',
        gainUsd: '$6,767.00',
        themeGradient: 'from-[#15171a] via-[#0c0d0f] to-black',
        referralHandle: 'prosciutto00760',
      },
    },
    {
      // DeGods King
      avatarUrl: '/avatars/degods.jpg',
      avatarType: 'DeGods',
      name: 'khurry',
      handle: '@khurrylicious',
      text: 'I just retired again',
      pnlImage: {
        pair: 'jellyjelly/SOL',
        pnl: '+26216.45%',
        time: '1h 34m',
        investedSol: '35.819 SOL',
        investedUsd: '$3,242.23',
        gainSol: '9390.6 SOL',
        gainUsd: '$2,163,435',
        themeGradient: 'from-[#0e1713] via-[#070d0a] to-black',
        referralHandle: 'shitcoinmj',
      },
    },
    {
      // OG Doge Trader
      avatarUrl: '/avatars/doge.jpg',
      avatarType: 'Doge',
      name: 'fomo',
      handle: '@fomomofosol',
      text: '7$ and a dream. I am using @i5AlphaTrade as my preferred trading bot <3',
      pnlImage: {
        pair: 'LSD/SOL',
        pnl: '+10948.50%',
        time: '3h 15m',
        investedSol: '0.052 SOL',
        investedUsd: '$7.64',
        gainSol: '5.746 SOL',
        gainUsd: '$829.80',
        themeGradient: 'from-[#0f1a14] via-[#080f0c] to-black',
        referralHandle: 'jayowtrades',
      },
    },
  ];

  const LOOPED_ROW_1 = [...ROW_1_TWEETS, ...ROW_1_TWEETS, ...ROW_1_TWEETS];
  const LOOPED_ROW_2 = [...ROW_2_TWEETS, ...ROW_2_TWEETS, ...ROW_2_TWEETS];

  const renderTrojanStyleCard = (tweet: TweetCardData, idx: number, prefix: string) => (
    <div
      key={`${prefix}-${tweet.handle}-${idx}`}
      className="w-[350px] sm:w-[390px] h-[330px] rounded-none border border-[#1f2228] bg-black p-4 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.9)] shrink-0 text-left"
    >
      {/* Top Header Section (Fixed Height: 40px) */}
      <div className="flex items-center gap-2.5 h-10 shrink-0">
        {/* Blue-Chip NFT Avatar (BAYC, Azuki, Punk, Milady, Pepe, Pudgy, DeGods, Doge) */}
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

      {/* Attached PnL Image Container (Uniform Fixed Height: 200px across all cards) */}
      {tweet.customImgUrl ? (
        <div className="h-[200px] w-full rounded-none overflow-hidden border border-[#20242b] bg-black shrink-0">
          <img src={tweet.customImgUrl} alt="PnL Share Ticket" className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className={`h-[200px] w-full rounded-none overflow-hidden border border-[#22272e] bg-gradient-to-br ${tweet.pnlImage.themeGradient} p-4 flex flex-col justify-between relative select-none shadow-md shrink-0`}>
          
          {/* Background Graphic Shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-l from-black/80 via-black/40 to-transparent pointer-events-none" />

          {/* Ticket Header: Logo + Pair + Duration */}
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-1.5 text-white/90 font-bold text-[11px] tracking-wider">
              <div className="w-3.5 h-3.5 rounded-none bg-[#00ba7c] flex items-center justify-center text-black text-[8px] font-black">
                i5
              </div>
              <span className="font-mono text-white/90">i5 ALPHA</span>
            </div>
            <div className="text-right">
              <span className="text-[13px] font-mono font-bold text-white block leading-tight">
                {tweet.pnlImage.pair}
              </span>
              <span className="text-[9.5px] font-mono text-white/50 block mt-0.5">
                ⏱ {tweet.pnlImage.time}
              </span>
            </div>
          </div>

          {/* Center: Giant Green PnL */}
          <div className="relative z-10 text-right my-auto">
            <span className="text-2xl sm:text-[28px] font-black font-mono text-[#00ba7c] tracking-tight block drop-shadow-[0_2px_10px_rgba(0,186,124,0.35)] leading-none">
              {tweet.pnlImage.pnl}
            </span>
          </div>

          {/* Bottom Row: Invested vs Current Gain + Referral Code */}
          <div className="flex items-end justify-between pt-2 border-t border-white/10 relative z-10 text-[9.5px] font-mono">
            <div className="flex gap-4">
              <div>
                <span className="text-white/40 block text-[8.5px]">Invested</span>
                <span className="text-white font-medium block leading-tight">{tweet.pnlImage.investedSol}</span>
                <span className="text-white/40 text-[8px] block">{tweet.pnlImage.investedUsd}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[8.5px]">Current Gain</span>
                <span className="text-[#00ba7c] font-bold block leading-tight">{tweet.pnlImage.gainSol}</span>
                <span className="text-[#00ba7c]/70 text-[8px] block">{tweet.pnlImage.gainUsd}</span>
              </div>
            </div>

            {/* Referral Watermark Pill */}
            <div className="flex items-center gap-1 text-[8.5px] font-mono text-white/40 bg-black/70 px-1.5 py-0.5 rounded-none border border-white/10 shrink-0">
              <span>Save 10% with i5</span>
              <div className="w-3.5 h-3.5 bg-white/20 rounded-none flex items-center justify-center text-[6.5px] text-white font-mono">
                QR
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );

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
