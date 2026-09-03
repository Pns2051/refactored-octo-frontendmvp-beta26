import React from 'react';
import { Plus, X, Settings, Trash2, MessageSquare } from 'lucide-react';
import { tx } from '../i18n';

function relativeTime(date, lang) {
  const diff = Math.max(0, Date.now() - new Date(date).getTime());
  const m = Math.floor(diff / 60000), h = Math.floor(m / 60), d = Math.floor(h / 24);
  if (lang === 'bn') {
    if (m < 1) return 'এইমাত্র'; if (m < 60) return `${m} মিনিট আগে`; if (h < 24) return `${h} ঘণ্টা আগে`; return `${d} দিন আগে`;
  }
  if (m < 1) return 'just now'; if (m < 60) return `${m} min ago`; if (h < 24) return `${h} hour${h===1?'':'s'} ago`; return `${d} day${d===1?'':'s'} ago`;
}

export function HistoryDrawer({ open, sessions, currentId, lang, onClose, onNew, onOpen, onDelete, onSettings }) {
  return <>
    <div onClick={onClose} className={`fixed inset-0 z-40 bg-black/35 transition-opacity ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} />
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-[min(88vw,360px)] flex-col border-r border-slate-200 bg-stone-50 shadow-2xl transition-transform duration-250 ease-smooth dark:border-[#243029] dark:bg-[#0E1512] ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-[#243029]">
        <h2 className="font-bold text-slate-900 dark:text-white">{tx(lang,'history')}</h2>
        <button aria-label="Close history" onClick={onClose} className="rounded-xl p-2 text-slate-500 hover:bg-slate-200 dark:hover:bg-white/5"><X className="h-5 w-5" /></button>
      </div>
      <div className="p-3">
        <button onClick={onNew} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0A7A57] to-[#15B377] px-4 py-3 font-semibold text-white shadow-soft"><Plus className="h-5 w-5" />{tx(lang,'newChat')}</button>
      </div>
      <div className="flex-1 overflow-y-auto px-2 pb-4">
        {sessions.length === 0 ? <div className="p-6 text-center text-sm text-slate-500">{tx(lang,'noHistory')}</div> : sessions.map(s => (
          <div key={s.id} className={`group mb-1 flex items-center gap-2 rounded-xl px-3 py-3 ${currentId===s.id ? 'bg-emerald-50 dark:bg-emerald-950/30' : 'hover:bg-slate-100 dark:hover:bg-white/5'}`}>
            <button onClick={() => onOpen(s.id)} className="min-w-0 flex-1 text-left">
              <div className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{s.title || 'New chat'}</div>
              <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500"><MessageSquare className="h-3.5 w-3.5" />{s.message_count} · {relativeTime(s.created_at, lang)}</div>
            </button>
            <button aria-label={tx(lang,'delete')} onClick={() => onDelete(s)} className="rounded-lg p-2 text-slate-400 opacity-70 hover:bg-red-50 hover:text-sunrise dark:hover:bg-red-950/20"><Trash2 className="h-4 w-4" /></button>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 p-3 dark:border-[#243029]">
        <button onClick={onSettings} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5"><Settings className="h-5 w-5 text-bengal" />{tx(lang,'settings')}</button>
      </div>
    </aside>
  </>;
}
