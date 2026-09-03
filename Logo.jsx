import React from 'react';

export function Logo({ compact = false, dark = false }) {
  return (
    <div className={`flex items-center gap-2 ${compact ? 'scale-[.92] origin-center' : ''}`} aria-label="Bondhu AI">
      <span className={`relative font-extrabold tracking-tight ${dark ? 'text-white' : 'text-slate-900 dark:text-white'}`}>বন্ধু</span>
      <span className="relative font-extrabold tracking-tight">AI<span className="ml-0.5 align-top text-xs text-sunrise">●</span></span>
    </div>
  );
}
