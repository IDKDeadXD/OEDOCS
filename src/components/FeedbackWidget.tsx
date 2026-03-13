'use client';

import { useState, useEffect } from 'react';

const DISCORD_URL = 'https://discord.gg/SAnkmn4aNJ';

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Animate in after state flip
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setVisible(false);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2 bg-bg-secondary border border-border rounded-full text-sm text-text-secondary hover:text-text-primary hover:border-purple/50 shadow-lg transition-colors"
        aria-label="Report a docs issue"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        <span className="hidden sm:block">Feedback</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-150 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className={`relative w-full max-w-sm bg-bg-secondary border border-border rounded-xl shadow-2xl p-6 transition-all duration-150 ${
              visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-text-primary font-semibold text-base">Notice something wrong?</h2>
                <p className="text-text-muted text-sm mt-0.5">Missing info, incorrect details, broken page?</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-text-primary p-1 ml-3 rounded-md transition-colors"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-text-secondary text-sm mb-5 leading-relaxed">
              Let us know in the Discord. You can report incorrect docs, suggest new pages, or just ask a question.
            </p>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-2.5 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" />
              </svg>
              Open Discord
            </a>
          </div>
        </div>
      )}
    </>
  );
}
