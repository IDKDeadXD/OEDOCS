'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import searchIndex from '@/generated/search-index.json';
import { useMobileNav } from './MobileNavContext';

interface SearchEntry {
  title: string;
  description: string;
  href: string;
  headings: string[];
  content: string;
}

interface SearchResult {
  entry: SearchEntry;
  matchContext: string;
  score: number;
}

// Words too common to be useful for matching
const STOP_WORDS = new Set([
  'how','to','the','a','an','is','it','in','on','at','for','of','and','or',
  'with','do','does','can','i','my','you','your','what','where','when','why',
  'who','will','be','are','was','has','have','get','use','make','by','if','as',
  'so','but','about','from','this','that','these','those','do','set','up','out',
]);

// Expand common shorthand and synonyms into additional search terms
const ALIASES: Record<string, string[]> = {
  money:      ['economy','balance','currency','coins','pay','withdraw'],
  cash:       ['economy','balance','money','coins'],
  earn:       ['economy','money','pay'],
  pay:        ['economy','balance','money'],
  buy:        ['shops','economy'],
  sell:       ['shops','economy'],
  shop:       ['shops'],
  store:      ['shops'],
  ban:        ['moderation','banned','banning'],
  kick:       ['moderation'],
  warn:       ['moderation'],
  mute:       ['moderation'],
  report:     ['moderation'],
  tp:         ['teleportation','tpa'],
  teleport:   ['teleportation','tpa'],
  tpa:        ['teleportation'],
  home:       ['homes'],
  homes:      ['homes'],
  rank:       ['ranks','permissions'],
  ranks:      ['ranks','permissions'],
  perm:       ['permissions','ranks'],
  permission: ['ranks','permissions'],
  warp:       ['warps'],
  warps:      ['warps'],
  kit:        ['kits'],
  kits:       ['kits'],
  claim:      ['land claims','land-claims'],
  protect:    ['land-claims','spawn-protection','spawn protection'],
  spawn:      ['spawn-protection'],
  lag:        ['lag-zapper','lag zapper'],
  stat:       ['player-stats','statistics','stats'],
  stats:      ['player-stats','statistics'],
  afk:        ['afk','away'],
  away:       ['afk'],
  code:       ['redemption-codes','codes'],
  redeem:     ['redemption-codes','codes'],
  hologram:   ['floating-text','floating text'],
  holo:       ['floating-text','floating text'],
  float:      ['floating-text'],
  vanish:     ['vanish','invisible'],
  invisible:  ['vanish'],
  mob:        ['mob-management','mobs'],
  install:    ['installation'],
  setup:      ['first-setup','installation'],
  admin:      ['admin-panel','admin panel'],
  command:    ['commands'],
  cmd:        ['commands'],
  chat:       ['chat'],
  seen:       ['last-seen'],
  lastseen:   ['last-seen'],
  announce:   ['chat','broadcast'],
};

function expandTerms(terms: string[]): string[] {
  const expanded = new Set(terms);
  for (const t of terms) {
    const aliases = ALIASES[t];
    if (aliases) aliases.forEach(a => expanded.add(a));
  }
  return Array.from(expanded);
}

function scoreEntry(entry: SearchEntry, rawTerms: string[], phrase: string): SearchResult | null {
  const titleLower    = entry.title.toLowerCase();
  const descLower     = entry.description.toLowerCase();
  const headingsLower = entry.headings.join(' \n ').toLowerCase();
  const contentLower  = entry.content.toLowerCase();

  const terms = expandTerms(rawTerms);
  let score = 0;
  let matchContext = '';

  // Full phrase match — biggest signal
  if (phrase.length > 2) {
    if (titleLower.includes(phrase))    score += 120;
    if (headingsLower.includes(phrase)) score += 60;
    if (contentLower.includes(phrase))  score += 30;
  }

  // Per-term scoring with prefix fallback
  for (const term of terms) {
    // Exact substring match
    const inTitle    = titleLower.includes(term);
    const inDesc     = descLower.includes(term);
    const inHeadings = headingsLower.includes(term);
    const inContent  = contentLower.includes(term);

    if (inTitle)    score += 20;
    if (inDesc)     score += 8;
    if (inHeadings) score += 6;
    if (inContent)  score += 2;

    // Prefix match (e.g. "tele" → "teleportation") — only if no exact match found
    if (!inTitle && titleLower.split(/\s+/).some(w => w.startsWith(term) && w !== term))    score += 10;
    if (!inHeadings && headingsLower.split(/\s+/).some(w => w.startsWith(term) && w !== term)) score += 4;
    if (!inContent && contentLower.split(/\s+/).some(w => w.startsWith(term) && w !== term))  score += 1;
  }

  // Must have matched something meaningful
  if (score === 0) return null;

  // Require at least one raw term (not just aliases) to match somewhere
  const hasRawMatch = rawTerms.some(t =>
    titleLower.includes(t) || headingsLower.includes(t) || contentLower.includes(t) ||
    titleLower.split(/\s+/).some(w => w.startsWith(t)) ||
    headingsLower.split(/\s+/).some(w => w.startsWith(t)) ||
    contentLower.split(/\s+/).some(w => w.startsWith(t))
  );
  if (!hasRawMatch) return null;

  // Build context snippet
  const searchIn = [
    { text: entry.content, lower: contentLower },
    { text: entry.headings.join(' — '), lower: headingsLower },
  ];

  outer: for (const { text, lower } of searchIn) {
    for (const term of [phrase, ...rawTerms, ...terms]) {
      const idx = lower.indexOf(term);
      if (idx !== -1) {
        const start = Math.max(0, idx - 35);
        const end   = Math.min(text.length, idx + term.length + 90);
        matchContext = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
        break outer;
      }
    }
  }

  return { entry, matchContext, score };
}

function search(query: string): SearchResult[] {
  const phrase = query.toLowerCase().trim();
  const allTerms = phrase.split(/\s+/).filter(t => t.length >= 2);
  const terms = allTerms.filter(t => !STOP_WORDS.has(t));

  // Fall back to all terms if everything was a stop word
  const effectiveTerms = terms.length > 0 ? terms : allTerms.filter(t => t.length >= 2);
  if (effectiveTerms.length === 0) return [];

  const results: SearchResult[] = [];
  for (const entry of searchIndex as SearchEntry[]) {
    const result = scoreEntry(entry, effectiveTerms, phrase);
    if (result) results.push(result);
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 8);
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { setOpen: setMobileNavOpen } = useMobileNav();

  const results = query.trim().length >= 2 ? search(query) : [];

  const openSearch = useCallback(() => {
    setSearchOpen(true);
    setQuery('');
    setSelectedIdx(0);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [openSearch]);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  function handleSelect(href: string) {
    setSearchOpen(false);
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIdx]) {
      handleSelect(results[selectedIdx].entry.href);
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-white/[0.06] bg-bg/80 backdrop-blur-xl flex items-center px-4 sm:px-6 gap-4">

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileNavOpen(true)}
          className="lg:hidden text-text-muted hover:text-text-primary p-1.5 rounded-md transition-colors shrink-0"
          aria-label="Open navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <Link href="/docs/introduction" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Obsidian Essentials"
            width={26}
            height={26}
            className="rounded-md"
          />
          <span className="font-semibold text-text-primary text-sm hidden sm:block tracking-tight">
            Obsidian Essentials
          </span>
        </Link>

        {/* Right links */}
        <div className="hidden sm:flex items-center gap-1 shrink-0 order-last">
          <a
            href="https://oe.deadstudios.xyz/changelog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-text-muted hover:text-text-primary hover:bg-white/[0.05] transition-all duration-150"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </a>
          <a
            href="https://discord.gg/UcjHTY8fAg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-text-muted hover:text-text-primary hover:bg-white/[0.05] transition-all duration-150"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
            </svg>
            Discord
          </a>
        </div>

        {/* Search — centered */}
        <div className="flex-1 flex justify-center px-4">
          <button
            onClick={openSearch}
            className="flex items-center gap-2.5 w-full max-w-sm px-3.5 py-2 rounded-lg border border-white/[0.08] bg-white/[0.04] text-text-muted text-sm hover:bg-white/[0.07] hover:border-white/[0.12] hover:text-text-secondary transition-all duration-150"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="flex-1 text-left hidden sm:block">Search docs...</span>
            <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-xs border border-white/[0.08] rounded bg-white/[0.04] text-text-muted font-sans">
              Ctrl K
            </kbd>
          </button>
        </div>

      </header>

      {/* Search modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[18vh] px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-xl bg-bg-secondary border border-border rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <svg className="w-4 h-4 text-text-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent text-text-primary placeholder-text-muted outline-none"
                style={{ fontSize: '16px' }}
              />
              <kbd
                className="px-1.5 py-0.5 text-xs border border-border rounded bg-bg-tertiary text-text-muted cursor-pointer"
                onClick={() => setSearchOpen(false)}
              >
                Esc
              </kbd>
            </div>

            {/* Results */}
            {query.trim().length >= 2 ? (
              results.length === 0 ? (
                <div className="px-4 py-8 text-center text-text-muted text-sm">
                  No results for <span className="text-text-secondary">&ldquo;{query}&rdquo;</span>
                </div>
              ) : (
                <ul className="max-h-80 overflow-y-auto">
                  {results.map(({ entry, matchContext }, idx) => (
                    <li key={entry.href}>
                      <button
                        className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors ${
                          idx === selectedIdx ? 'bg-purple-subtle' : 'hover:bg-bg-hover'
                        }`}
                        onMouseEnter={() => setSelectedIdx(idx)}
                        onClick={() => handleSelect(entry.href)}
                      >
                        <svg className="w-4 h-4 text-text-muted shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-text-primary">{entry.title}</span>
                            <span className="text-xs text-text-muted truncate">
                              {entry.href.split('/').slice(2, -1).join(' › ')}
                            </span>
                          </div>
                          {matchContext && (
                            <p className="text-xs text-text-secondary mt-0.5 line-clamp-1">{matchContext}</p>
                          )}
                        </div>
                        {idx === selectedIdx && (
                          <kbd className="shrink-0 px-1 py-0.5 text-xs border border-border rounded bg-bg-tertiary text-text-muted">↵</kbd>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <div className="px-4 py-6 text-center text-text-muted text-sm">
                Type at least 2 characters to search
              </div>
            )}

            {/* Footer hint */}
            {results.length > 0 && (
              <div className="flex items-center gap-4 px-4 py-2 border-t border-border bg-bg text-xs text-text-muted">
                <span><kbd className="px-1 border border-border rounded bg-bg-secondary">↑↓</kbd> navigate</span>
                <span><kbd className="px-1 border border-border rounded bg-bg-secondary">↵</kbd> open</span>
                <span><kbd className="px-1 border border-border rounded bg-bg-secondary">Esc</kbd> close</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
