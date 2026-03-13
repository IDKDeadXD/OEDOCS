import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDocBySlug, getAllDocSlugs } from '@/lib/docs';
import { getAdjacentPages } from '@/lib/navigation';
import ToC from '@/components/ToC';
import NavFooter from '@/components/NavFooter';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: slugParam } = await params;
  const slug = slugParam ?? ['introduction'];
  const doc = await getDocBySlug(slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug: slugParam } = await params;
  const slug = slugParam ?? ['introduction'];
  const doc = await getDocBySlug(slug);
  if (!doc) notFound();

  const { prev, next } = getAdjacentPages(slug);

  return (
    <div className="flex">
      {/* Doc content */}
      <article className="flex-1 min-w-0 px-6 lg:px-10 xl:px-16 py-10 max-w-4xl">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">{doc.title}</h1>
          {doc.description && (
            <p className="text-lg text-text-secondary">{doc.description}</p>
          )}
          {doc.lastUpdated && (
            <p className="mt-3 text-xs text-text-muted flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last updated {doc.lastUpdated}
            </p>
          )}
        </div>

        {/* Markdown content */}
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: doc.contentHtml }}
        />

        <NavFooter prev={prev} next={next} />
      </article>

      {/* Right ToC */}
      <aside className="hidden xl:block w-56 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-4">
        <ToC entries={doc.toc} />
      </aside>
    </div>
  );
}
