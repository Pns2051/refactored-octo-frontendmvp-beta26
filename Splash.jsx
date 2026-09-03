import React, { useEffect } from 'react';
import { Logo } from './Logo';

export function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-bengal splash-bg text-white">
      <div className="splash-sun" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-3 text-4xl font-extrabold tracking-tight">
          <span className="stagger">B</span><span className="stagger">o</span><span className="stagger">n</span><span className="stagger">d</span><span className="stagger">h</span><span className="stagger">u</span><span className="stagger"> </span><span className="stagger">A</span><span className="stagger">I</span><span className="stagger-dot">●</span>
        </div>
        <div className="splash-bangla text-xl font-bold">বন্ধু</div>
        <div className="splash-tag mt-2 text-sm text-emerald-50">বাংলাদেশের নিজস্ব প্রথম AI</div>
      </div>
    </div>
  );
}
