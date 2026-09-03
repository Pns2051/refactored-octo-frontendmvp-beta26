import React from 'react';
import { Copy, RotateCcw, AlertCircle, RefreshCcw } from 'lucide-react';
import { containsBangla, tx } from '../i18n';
import { MarkdownRenderer } from './MarkdownRenderer';

export function Message({ message, lang, onCopy, onRetry }) {
  const isUser = message.role === 'user';
  const isError = message.role === 'error';
  const bangla = containsBangla(message.content);
  return (
    <div className={`message-in flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`${isUser ? 'max-w-[86%] bg-gradient-to-br from-[#0A7A57] to-[#15B377] text-white' : isError ? 'max-w-[92%] border border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-100' : 'max-w-[92%] border border-[#E5E5E0] bg-white text-slate-900 dark:border-[#243029] dark:bg-[#171F1B] dark:text-[#E8F0EC]'} rounded-[16px] px-4 py-3 shadow-soft`}>
        {isError && <div className="mb-1 flex items-center gap-2 text-xs font-semibold"><AlertCircle className="h-4 w-4" />Error</div>}
        <div className={bangla ? 'font-bangla' : 'font-inter'} dir={bangla ? 'auto' : 'ltr'}>
          {isUser ? <div className="whitespace-pre-wrap break-words">{message.content}</div> : <MarkdownRenderer content={message.content} onCopy={onCopy} />}
          {message.streaming && <span className="ml-1 inline-block h-4 w-[2px] translate-y-0.5 animate-caret bg-bengal align-middle dark:bg-emerald-300" />}
        </div>
        {message.interrupted && (
          <div className="mt-2 border-t border-current/10 pt-2 text-xs opacity-80">{tx(lang, 'wrong')}</div>
        )}
        {message.retry && (
          <button onClick={onRetry} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-900/5 px-3 py-2 text-xs font-semibold hover:bg-slate-900/10 dark:bg-white/5 dark:hover:bg-white/10">
            <RefreshCcw className="h-3.5 w-3.5" />{tx(lang,'retry')}
          </button>
        )}
        {!isUser && !isError && !message.streaming && (
          <div className="mt-2 flex gap-1 border-t border-slate-100 pt-2 dark:border-[#243029]">
            <button aria-label="Copy response" onClick={() => onCopy(message.content)} className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5"><Copy className="h-4 w-4" /></button>
            <button aria-label="Regenerate" onClick={onRetry} className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5"><RotateCcw className="h-4 w-4" /></button>
          </div>
        )}
      </div>
    </div>
  );
}
