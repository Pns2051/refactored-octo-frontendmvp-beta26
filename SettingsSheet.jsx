import React from 'react';
import { X, Globe2, Moon, Sun, Share2, Info, CreditCard } from 'lucide-react';
import { tx } from '../i18n';

export function SettingsSheet({ open, onClose, lang, setLang, dark, setDark, credits, onShare }) {
  return <div className={`fixed inset-0 z-[60] flex items-end justify-center transition-opacity ${open?'opacity-100':'pointer-events-none opacity-0'}`}>
    <div onClick={onClose} className="absolute inset-0 bg-black/35" />
    <section className={`relative w-full max-w-lg rounded-t-3xl border border-slate-200 bg-white p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] shadow-2xl transition-transform duration-250 ease-smooth dark:border-[#243029] dark:bg-[#171F1B] ${open?'translate-y-0':'translate-y-full'}`}>
      <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-600" />
      <div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{tx(lang,'settings')}</h2><button aria-label="Close settings" onClick={onClose} className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5"><X className="h-5 w-5" /></button></div>
      <div className="space-y-3">
        <div className="rounded-2xl border border-slate-200 p-4 dark:border-[#243029]">
          <div className="mb-3 flex items-center gap-3 font-semibold"><Globe2 className="h-5 w-5 text-bengal" />{tx(lang,'selectLanguage')}</div>
          <div className="grid grid-cols-2 gap-2">{[['bn','বাংলা 🇧🇩'],['en','English 🌐']].map(([v,l]) => <button key={v} onClick={()=>{setLang(v);localStorage.setItem('bondhu_lang',v)}} className={`rounded-xl border px-3 py-2.5 text-sm font-semibold ${lang===v?'border-bengal bg-emerald-50 dark:bg-emerald-950/30':'border-slate-200 dark:border-[#243029]'}`}>{l}</button>)}</div>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 dark:border-[#243029]"><div className="flex items-center gap-3 font-semibold">{dark?<Moon className="h-5 w-5 text-bengal"/>:<Sun className="h-5 w-5 text-bengal"/>}{tx(lang,'darkMode')}</div><button onClick={()=>setDark(v=>!v)} className={`relative h-7 w-12 rounded-full p-1 transition ${dark?'bg-bengal':'bg-slate-300'}`} aria-label="Toggle dark mode"><span className={`block h-5 w-5 rounded-full bg-white shadow transition-transform ${dark?'translate-x-5':'translate-x-0'}`} /></button></div>
        <div className="rounded-2xl border border-slate-200 p-4 dark:border-[#243029]"><div className="flex items-center gap-3 font-semibold"><CreditCard className="h-5 w-5 text-bengal" />{tx(lang,'credits')}: <span>{credits ?? '—'}</span></div><p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{tx(lang,'refill')}</p></div>
        <button onClick={onShare} className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 p-4 text-left font-semibold hover:bg-slate-50 dark:border-[#243029] dark:hover:bg-white/5"><Share2 className="h-5 w-5 text-bengal" />{tx(lang,'share')}</button>
        <div className="rounded-2xl border border-slate-200 p-4 dark:border-[#243029]"><div className="flex items-center gap-3 font-semibold"><Info className="h-5 w-5 text-bengal" />{tx(lang,'about')}</div><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300">{tx(lang,'aboutText')}</p><p className="mt-2 text-xs text-slate-400">{tx(lang,'version')}</p></div>
      </div>
    </section>
  </div>;
}
