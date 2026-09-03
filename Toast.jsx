import React, { useEffect } from 'react';

export function Toast({ message, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);
  if (!message) return null;
  return <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 z-[90] -translate-x-1/2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-lg dark:bg-white dark:text-slate-900">{message}</div>;
}
