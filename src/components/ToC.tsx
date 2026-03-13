'use client';

import { useEffect, useState } from 'react';
import type { TocEntry } from '@/lib/docs';

interface ToCProps {
  entries: TocEntry[];
}

export default function ToC({ entries }: ToCProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (entries.length === 0) return;

    const observer = new IntersectionObserver(
      (obs) => {
        for (const entry of obs) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0% -70% 0%', threshold: 0 }
    );

    for (const entry of entries) {
      const el = document.getElementById(entry.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav className="py-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 px-1">
        On this page
      </p>
      <ul className="space-y-1">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={`
                block text-sm py-0.5 px-1 rounded transition-colors duration-150 border-l-2
                ${entry.level === 3 ? 'pl-4' : ''}
                ${
                  activeId === entry.id
                    ? 'text-purple-light border-purple'
                    : 'text-text-secondary border-transparent hover:text-text-primary hover:border-border-light'
                }
              `}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
