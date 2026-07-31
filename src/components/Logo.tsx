interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export function RamMark({ className = 'h-10 w-10', light = false }: { className?: string; light?: boolean }) {
  const stroke = light ? '#f7e8c8' : 'url(#markGold)';
  const fill = light ? '#f3ddaa' : '#c97a20';

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="markGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f6e0a9" />
          <stop offset="35%" stopColor="#d8a24b" />
          <stop offset="70%" stopColor="#a96718" />
          <stop offset="100%" stopColor="#f2c96b" />
        </linearGradient>
        <linearGradient id="markGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff4d4" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#e3b55a" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="41" fill="none" stroke={stroke} strokeWidth="2.2" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="url(#markGlow)" strokeWidth="1.1" strokeDasharray="2 3" />

      <path d="M30 68c8-10 14-14 20-16 7 3 12 8 20 16" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M35 50c5-16 12-24 15-24 4 0 10 8 15 24" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M42 31c4 2 7 3 8 3 4 0 7-1 10-3" fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />

      <path d="M40 62c3-5 7-8 10-8 3 0 7 3 10 8" fill="none" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 39h12" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M46 56h8" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="50" cy="50" r="3" fill={light ? '#fff2c2' : '#f5d983'} />

      <path d="M22 50c7-11 14-16 28-16" fill="none" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M78 50c-7-11-14-16-28-16" fill="none" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M46 26c5-3 10-3 16 0" fill="none" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />

      <path d="M25 24c4-4 7-6 10-6" fill="none" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M75 24c-4-4-7-6-10-6" fill="none" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M23 76c5 3 8 4 11 4" fill="none" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M77 76c-5 3-8 4-11 4" fill="none" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />

      <path d="M42 70h16" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M40 74h20" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ className = '', showText = true, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <RamMark className="h-9 w-9 shrink-0" light={light} />
      {showText && (
        <div className="leading-none">
          <div className={`font-serif-lux text-lg font-semibold tracking-[0.28em] ${light ? 'text-marble-100' : 'text-marble-900'}`}>
            RAMYA
          </div>
          <div className={`font-serif-lux text-[0.64rem] font-medium tracking-[0.4em] ${light ? 'text-gold-200' : 'text-gold-700'}`}>
            MARBLE MURTI
          </div>
        </div>
      )}
    </div>
  );
}
