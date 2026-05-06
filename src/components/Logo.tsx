import React from 'react';

export function Logo({ className = "", iconOnly = false, textOnly = false }: { className?: string, iconOnly?: boolean, textOnly?: boolean }) {
  if (iconOnly) {
    return (
      <svg viewBox="0 0 100 100" className={`w-8 h-8 text-accent ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="28" strokeOpacity="0.4" />
        <circle cx="50" cy="50" r="4" fill="currentColor" stroke="none" />
      </svg>
    );
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
      <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 text-accent mb-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="28" strokeOpacity="0.4" />
        <circle cx="50" cy="50" r="4" fill="currentColor" stroke="none" />
      </svg>
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
