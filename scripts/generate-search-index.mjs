import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, relative, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const docsDir = resolve(__dirname, '../docs');
const outputDir = resolve(__dirname, '../src/generated');
const outputFile = join(outputDir, 'search-index.json');

function getAllMdFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllMdFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function parseFrontmatter(content) {
  if (!content.startsWith('---')) return { data: {}, body: content };
  const end = content.indexOf('---', 3);
  if (end === -1) return { data: {}, body: content };
  const fm = content.slice(3, end).trim();
  const body = content.slice(end + 3).trim();
  const data = {};
  for (const line of fm.split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
    data[key] = value;
  }
  return { data, body };
}

function stripMarkdown(text) {
  return text
    .replace(/```[\s\S]*?```/g, '') // code blocks
    .replace(/`[^`]*`/g, '')        // inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links → text
    .replace(/^#{1,6}\s+/gm, '')    // headings
    .replace(/[*_~]{1,3}([^*_~]+)[*_~]{1,3}/g, '$1') // bold/italic
    .replace(/^\s*[-*+>|]\s*/gm, '') // list/blockquote/table markers
    .replace(/\|/g, ' ')            // table pipes
    .replace(/---+/g, '')           // hr
    .replace(/\s+/g, ' ')
    .trim();
}

function extractHeadings(markdown) {
  const headings = [];
  for (const line of markdown.split('\n')) {
    const m = line.match(/^#{1,3}\s+(.+)/);
    if (m) headings.push(m[1].trim());
  }
  return headings;
}

function fileToSlug(filePath) {
  const rel = relative(docsDir, filePath).replace(/\\/g, '/').replace(/\.md$/, '');
  return '/docs/' + rel;
}

const files = getAllMdFiles(docsDir);
const index = [];

for (const filePath of files) {
  const raw = readFileSync(filePath, 'utf-8');
  const { data, body } = parseFrontmatter(raw);
  const plainText = stripMarkdown(body);
  const headings = extractHeadings(body);
  const href = fileToSlug(filePath);

  index.push({
    title: data.title || href.split('/').pop() || '',
    description: data.description || '',
    href,
    headings,
    // Keep a reasonable excerpt for relevance — first 500 chars
    content: plainText.slice(0, 1000),
  });
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, JSON.stringify(index, null, 2));
console.log(`Generated search-index.json with ${index.length} entries.`);
