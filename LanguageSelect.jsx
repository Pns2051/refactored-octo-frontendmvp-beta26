import React, { useState } from 'react';
import { Globe2, Check } from 'lucide-react';
import { tx } from '../i18n';

export function LanguageSelect({ onSelect }) {
  const [lang, setLang] = useState('bn');
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-50 p-5 dark:bg-[#0E1512]">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-soft dark:bg-[#171F1B] sm:p-8">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-bengal text-xl font-bold text-white shadow-soft">বন্ধু</div>
        <h1 className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">{tx(lang, 'selectLanguage')}</h1>
        <div className="mt-6 grid gap-3">
          {[['bn','বাংলা 🇧🇩'],['en','English 🌐']].map(([value,label]) => (
            <button key={value} onClick={() => setLang(value)} className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200 ${lang===value ? 'border-bengal bg-emerald-50 shadow-soft dark:bg-emerald-950/30' : 'border-slate-200 dark:border-[#243029]'}`}>
              <span className="flex items-center gap-3 text-base font-semibold"><Globe2 className="h-5 w-5 text-bengal" />{label}</span>
              {lang===value && <Check className="h-5 w-5 text-bengal" />}
            </button>
          ))}
        </div>
        <button onClick={() => onSelect(lang)} className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#0A7A57] to-[#15B377] py-3.5 font-bold text-white shadow-soft transition hover:-translate-y-0.5 active:translate-y-0">{tx(lang, 'continue')}</button>
      </div>
    </div>
  );
}
