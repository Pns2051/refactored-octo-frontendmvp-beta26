import React, { useEffect, useRef } from 'react';
import { Paperclip, Send, X } from 'lucide-react';
import { tx } from '../i18n';

export function Composer({ value, onChange, onSend, onStop, disabled, streaming, lang, onToast }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 132)}px`;
  }, [value]);
  return (
    <div className="sticky bottom-0 z-20 bg-gradient-to-t from-stone-50 via-stone-50 to-transparent px-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] pt-3 dark:from-[#0E1512] dark:via-[#0E1512]">
      <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-[24px] border border-[#E5E5E0] bg-white p-2 shadow-soft dark:border-[#243029] dark:bg-[#171F1B]">
        <button type="button" aria-label={tx(lang,'attachment')} onClick={() => onToast(tx(lang,'attachmentSoon'))} className="mb-0.5 rounded-full p-2.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"><Paperclip className="h-5 w-5" /></button>
        <textarea ref={ref} value={value} onChange={e => onChange(e.target.value)} rows={1} maxLength={4000} placeholder={tx(lang,'emptyHint')} aria-label={tx(lang,'emptyHint')} className="max-h-[132px] min-h-[44px] flex-1 resize-none bg-transparent px-1 py-2.5 text-[15px] outline-none placeholder:text-slate-400 dark:text-white" disabled={disabled && !streaming} />
        <div className="mb-0.5 flex items-center gap-1">
          <span className={`mr-1 hidden text-[10px] sm:block ${value.length > 4000 ? 'text-red-500' : 'text-slate-400'}`}>{value.length}/4000</span>
          {streaming ? (
            <button type="button" aria-label={tx(lang,'stop')} onClick={onStop} className="flex h-11 w-11 items-center justify-center rounded-full bg-sunrise text-white shadow-soft active:scale-95"><X className="h-5 w-5" /></button>
          ) : (
            <button type="button" aria-label={tx(lang,'send')} onClick={onSend} disabled={!value.trim() || disabled || value.length > 4000} className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#0A7A57] to-[#15B377] text-white shadow-soft transition enabled:hover:-translate-y-0.5 enabled:active:scale-95 disabled:opacity-40"><Send className="h-5 w-5" /></button>
          )}
        </div>
      </div>
    </div>
  );
}
