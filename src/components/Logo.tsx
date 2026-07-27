interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

/**
 * Ram bow emblem mark used across navbar, footer, preloader.
 */
export function RamMark({ className = 'h-10 w-10', light = false }: { className?: string; light?: boolean }) {
  const stroke = light ? '#f6f1ea' : 'url(#markGold)';
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="45" fill="none" stroke={stroke} strokeWidth="1.4" opacity="0.8" />
      <path d="M28 50 Q50 22 72 50 Q50 78 28 50 Z" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 50 L82 50" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="50" cy="50" r="3" fill={light ? '#e2ad4f' : '#d4902f'} />
      <defs>
        <linearGradient id="markGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b97423" />
          <stop offset="50%" stopColor="#e2ad4f" />
          <stop offset="100%" stopColor="#d4902f" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo({ className = '', showText = true, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <RamMark className="h-9 w-9 shrink-0" light={light} />
      {showText && (
        <div className="leading-none">
          <div className={`font-serif-lux text-lg font-semibold tracking-[0.25em] ${light ? 'text-marble-100' : 'text-marble-900'}`}>
            RAMYA
          </div>
          <div className="font-serif-lux text-[0.65rem] font-medium tracking-[0.4em] gold-text">
            MARBLE MURTI
          </div>
        </div>
      )}
    </div>
  );
}
