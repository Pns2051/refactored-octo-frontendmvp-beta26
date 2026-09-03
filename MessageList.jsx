import React, { useEffect, useRef } from 'react';
import { Message } from './Message';

export function MessageList({ messages, lang, onCopy, onRetry, streaming }) {
  const ref = useRef(null);
  const atBottom = useRef(true);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const check = () => { atBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80; };
    el.addEventListener('scroll', check, { passive: true });
    return () => el.removeEventListener('scroll', check);
  }, []);
  useEffect(() => {
    const el = ref.current; if (!el || !atBottom.current) return;
    el.scrollTo({ top: el.scrollHeight, behavior: streaming ? 'auto' : 'smooth' });
  }, [messages, streaming]);

  return <div ref={ref} className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 sm:px-5">
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 pb-3">
      {messages.map((m, i) => <Message key={m.id ?? i} message={m} lang={lang} onCopy={onCopy} onRetry={() => onRetry(m)} />)}
    </div>
  </div>;
}
