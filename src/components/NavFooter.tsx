import Link from 'next/link';
import type { NavItem } from '@/lib/navigation';

interface NavFooterProps {
  prev: NavItem | null;
  next: NavItem | null;
}

export default function NavFooter({ prev, next }: NavFooterProps) {
  if (!prev && !next) return null;

  return (
    <div className="mt-12 pt-6 border-t border-border flex items-center justify-between gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-purple/50 hover:bg-bg-secondary transition-colors max-w-[45%]"
        >
          <svg className="w-4 h-4 text-text-muted group-hover:text-purple-light transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-right">
            <p className="text-xs text-text-muted mb-0.5">Previous</p>
            <p className="text-sm text-text-primary font-medium group-hover:text-purple-light transition-colors truncate">
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-purple/50 hover:bg-bg-secondary transition-colors max-w-[45%] ml-auto"
        >
          <div className="text-left">
            <p className="text-xs text-text-muted mb-0.5">Next</p>
            <p className="text-sm text-text-primary font-medium group-hover:text-purple-light transition-colors truncate">
              {next.title}
            </p>
          </div>
          <svg className="w-4 h-4 text-text-muted group-hover:text-purple-light transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
