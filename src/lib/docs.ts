import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const docsDir = path.join(process.cwd(), 'docs');

export interface TocEntry {
  id: string;
  text: string;
  level: number;
}

export interface DocData {
  title: string;
  description?: string;
  contentHtml: string;
  toc: TocEntry[];
  lastUpdated: string | null;
}

function slugToFilePath(slug: string[]): string | null {
  const direct = path.join(docsDir, ...slug) + '.md';
  if (fs.existsSync(direct)) return direct;

  const index = path.join(docsDir, ...slug, 'index.md');
  if (fs.existsSync(index)) return index;

  return null;
}

function extractToc(html: string): TocEntry[] {
  const entries: TocEntry[] = [];
  const headingRegex = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi;
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const id = match[2];
    const text = match[3].replace(/<[^>]+>/g, '').trim();
    if (id && text) {
      entries.push({ id, text, level });
    }
  }
  return entries;
}

function formatDate(raw: string): string | null {
  try {
    return new Date(raw).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return raw;
  }
}

export async function getDocBySlug(slug: string[]): Promise<DocData | null> {
  const filePath = slugToFilePath(slug);
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = String(result);
  const toc = extractToc(contentHtml);

  // Read lastUpdated from frontmatter (source of truth — works on Vercel)
  const lastUpdated = data.lastUpdated ? formatDate(String(data.lastUpdated)) : null;

  return {
    title: data.title || slug[slug.length - 1],
    description: data.description,
    contentHtml,
    toc,
    lastUpdated,
  };
}

export function getAllDocSlugs(): string[][] {
  const slugs: string[][] = [];

  function walk(dir: string, parts: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...parts, entry.name]);
      } else if (entry.name.endsWith('.md')) {
        const name = entry.name.replace(/\.md$/, '');
        if (name === 'index') {
          slugs.push(parts);
        } else {
          slugs.push([...parts, name]);
        }
      }
    }
  }

  walk(docsDir, []);
  return slugs;
}
