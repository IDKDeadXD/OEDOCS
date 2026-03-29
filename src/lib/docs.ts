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

const ICON_WARNING = `<svg class="doc-callout-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;

const ICON_DISCLAIMER = `<svg class="doc-callout-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

function processCallouts(html: string): string {
  // [!WARNING] → yellow callout
  let out = html.replace(
    /<blockquote>\n<p>\[!WARNING\]([\s\S]*?)<\/blockquote>/g,
    (_, inner) =>
      `<div class="doc-callout doc-callout-warning"><span class="doc-callout-icon">${ICON_WARNING}</span><div class="doc-callout-content"><p>${inner.trimStart()}</div></div>`
  );
  // [!DISCLAIMER] → dark callout
  out = out.replace(
    /<blockquote>\n<p>\[!DISCLAIMER\]([\s\S]*?)<\/blockquote>/g,
    (_, inner) =>
      `<div class="doc-callout doc-callout-disclaimer"><span class="doc-callout-icon">${ICON_DISCLAIMER}</span><div class="doc-callout-content"><p>${inner.trimStart()}</div></div>`
  );
  return out;
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
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    return d.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
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

  const contentHtml = processCallouts(String(result));
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
