import React, { useState, useEffect } from 'react';
import { Settings, X, Check, FileText, ArrowRight } from 'lucide-react';

export default function ConfigNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if not previously dismissed
    const dismissed = localStorage.getItem('tc_config_notice_dismissed');
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('tc_config_notice_dismissed', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Configuration Assistant"
      className="fixed bottom-4 right-4 z-40 max-w-sm w-[calc(100vw-2rem)] bg-neutral-900 text-white rounded-2xl p-4 shadow-xl border border-neutral-700 animate-fadeIn"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300">
            <Settings className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold tracking-tight uppercase text-neutral-300">
            Personalization Helper
          </span>
        </div>
        <button
          onClick={handleDismiss}
          type="button"
          className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Dismiss helper notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
        Personalize your URLs (GitHub, LeetCode, LinkedIn, Email) in{' '}
        <code className="text-emerald-400 font-mono text-[11px] bg-neutral-800 px-1 py-0.5 rounded">
          src/data/portfolioData.js
        </code>{' '}
        and drop your real resume PDF into{' '}
        <code className="text-emerald-400 font-mono text-[11px] bg-neutral-800 px-1 py-0.5 rounded">
          public/resume.pdf
        </code>.
      </p>

      <div className="mt-3 pt-2.5 border-t border-neutral-800 flex items-center justify-between">
        <span className="text-[10px] text-neutral-400">
          This helper is dismissible.
        </span>
        <button
          onClick={handleDismiss}
          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 transition-colors"
        >
          Got it!
        </button>
      </div>
    </aside>
  );
}
