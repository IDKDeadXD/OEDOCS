import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-purple-subtle border border-purple/30 flex items-center justify-center mb-6">
        <span className="text-2xl text-purple-light">404</span>
      </div>
      <h1 className="text-2xl font-bold text-text-primary mb-2">Page not found</h1>
      <p className="text-text-secondary mb-8 max-w-md">
        This page does not exist or may have been moved.
      </p>
      <Link
        href="/docs/introduction"
        className="px-4 py-2 rounded-lg bg-purple hover:bg-purple/90 text-white text-sm font-medium transition-colors"
      >
        Back to docs
      </Link>
    </div>
  );
}
