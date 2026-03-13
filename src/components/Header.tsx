'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import searchIndex from '@/generated/search-index.json';

interface SearchEntry {
  title: string;
  description: string;
  href: string;
  headings: string[];
  content: string;
}

interface SearchResult {
  entry: SearchEntry;
  /** Which field matched and the matched snippet */
  matchContext: string;
  score: number;
}

function scoreEntry(entry: SearchEntry, terms: string[]): SearchResult | null {
  const titleLower = entry.title.toLowerCase();
  const descLower = entry.description.toLowerCase();
  const headingsText = entry.headings.join(' ').toLowerCase();
  const contentLower = entry.content.toLowerCase();

  let score = 0;
  let matchContext = '';

  for (const term of terms) {
    if (titleLower.includes(term)) { score += 10; }
    if (descLower.includes(term)) { score += 5; }
    if (headingsText.includes(term)) { score += 4; }
    if (contentLower.includes(term)) { score += 1; }
  }

  if (score === 0) return null;

  // Build a context snippet: find the first term in content and show surrounding text
  for (const term of terms) {
    const idx = contentLower.indexOf(term);
    if (idx !== -1) {
      const start = Math.max(0, idx - 40);
      const end = Math.min(entry.content.length, idx + term.length + 80);
      matchContext = (start > 0 ? '…' : '') + entry.content.slice(start, end) + (end < entry.content.length ? '…' : '');
      break;
    }
    const hIdx = headingsText.indexOf(term);
    if (hIdx !== -1) {
      // find which heading
      for (const h of entry.headings) {
        if (h.toLowerCase().includes(term)) {
          matchContext = h;
          break;
        }
      }
      break;
    }
  }

  return { entry, matchContext, score };
}

function search(query: string): SearchResult[] {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length >= 2);

  if (terms.length === 0) return [];

  const results: SearchResult[] = [];
  for (const entry of searchIndex as SearchEntry[]) {
    const result = scoreEntry(entry, terms);
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
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border bg-bg/95 backdrop-blur-sm flex items-center px-6 gap-6">
        {/* Logo */}
        <Link href="/docs/introduction" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Obsidian Essentials"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="font-semibold text-text-primary text-sm hidden sm:block">
            Obsidian Essentials
          </span>
        </Link>

        <div className="flex-1" />

        {/* Search trigger */}
        <button
          onClick={openSearch}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-bg-secondary text-text-secondary text-sm hover:border-purple/50 hover:text-text-primary transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="hidden sm:block">Search docs...</span>
          <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-xs border border-border rounded bg-bg-tertiary text-text-muted">
            Ctrl K
          </kbd>
        </button>
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
                className="flex-1 bg-transparent text-text-primary placeholder-text-muted text-sm outline-none"
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
