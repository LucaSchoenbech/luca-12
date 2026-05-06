import React from 'react';

export function Logo({ className = "", iconOnly = false, textOnly = false }: { className?: string, iconOnly?: boolean, textOnly?: boolean }) {
  const isLight = className.includes('text-paper');

  const LogoIcon = () => (
    <svg viewBox="0 0 100 100" className={`${iconOnly ? 'w-8 h-8' : 'w-20 h-20 md:w-24'} ${className}`} fill="none">
      {!isLight && (
        <defs>
          <linearGradient id="gold" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ab8235" />
            <stop offset="100%" stopColor="#dcb569" />
          </linearGradient>
          <linearGradient id="navy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#141d2e" />
            <stop offset="100%" stopColor="#0b111c" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" floodColor="#000" />
          </filter>
        </defs>
      )}

      {/* Navy Bottom Half */}
      <g filter={!isLight ? "url(#shadow)" : undefined}>
        <path d="M 48 90 C 35 85 15 70 15 50 C 20 46 28 52 30 58 C 34 68 40 72 48 74 Z" fill={isLight ? "currentColor" : "url(#navy)"} opacity={isLight ? 0.8 : 1} />
        <path d="M 52 90 C 65 85 85 70 85 50 C 80 46 72 52 70 58 C 66 68 60 72 52 74 Z" fill={isLight ? "currentColor" : "url(#navy)"} opacity={isLight ? 0.8 : 1} />
      </g>

      {/* Gold Top Half */}
      <g filter={!isLight ? "url(#shadow)" : undefined}>
        <path d="M 48 10 C 35 15 15 30 15 50 C 20 54 28 48 30 42 C 34 32 40 28 48 26 Z" fill={isLight ? "currentColor" : "url(#gold)"} />
        <path d="M 52 10 C 65 15 85 30 85 50 C 80 54 72 48 70 42 C 66 32 60 28 52 26 Z" fill={isLight ? "currentColor" : "url(#gold)"} />
      </g>

      {/* Center Dot */}
      <circle cx="50" cy="50" r="8" fill={isLight ? "currentColor" : "url(#gold)"} />
    </svg>
  );

  if (iconOnly) {
    return <LogoIcon />;
  }

  if (textOnly) {
    return (
      <span className={`font-display text-ink tracking-widest uppercase ${className}`}>
        Schoenbech
      </span>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="mb-6">
        <LogoIcon />
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink tracking-[0.15em] mb-4">
        SCHOENBECH
      </h2>
      <div className="w-12 h-[1px] bg-accent mb-4"></div>
      <span className="text-[10px] md:text-xs tracking-[0.3em] font-bold text-accent uppercase">
        Talent Sourcing Advisory
      </span>
    </div>
  );
}
