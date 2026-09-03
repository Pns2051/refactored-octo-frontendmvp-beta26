import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Copy } from 'lucide-react';

export function MarkdownRenderer({ content, onCopy }) {
  return (
    <div className="markdown prose prose-slate max-w-none text-[15px] leading-7 dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={{
        code({inline, className, children, ...props}) {
          const value = String(children).replace(/\n$/, '');
          if (inline) return <code className={className} {...props}>{children}</code>;
          return (
            <div className="group relative my-3 overflow-hidden rounded-xl border border-slate-200 bg-[#0f1720] dark:border-[#243029]">
              <button aria-label="Copy code" onClick={() => onCopy(value)} className="absolute right-2 top-2 rounded-lg bg-white/10 p-2 text-white opacity-80 transition hover:bg-white/20">
                <Copy className="h-4 w-4" />
              </button>
              <pre className="overflow-x-auto p-4 pr-12 text-[13px]"><code className={className} {...props}>{children}</code></pre>
            </div>
          );
        },
        table({children}) { return <div className="my-3 overflow-x-auto rounded-xl border border-slate-200 dark:border-[#243029]"><table>{children}</table></div>; },
        a({children, ...props}) { return <a {...props} target="_blank" rel="noreferrer">{children}</a>; }
      }}>{content}</ReactMarkdown>
    </div>
  );
}
