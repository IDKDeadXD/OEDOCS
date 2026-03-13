import { execSync } from 'child_process';
import { readdirSync, statSync, writeFileSync, mkdirSync } from 'fs';
import { join, relative, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const docsDir = resolve(__dirname, '../docs');
const outputDir = resolve(__dirname, '../src/generated');
const outputFile = join(outputDir, 'last-updated.json');

function getAllMdFiles(dir, base = dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllMdFiles(fullPath, base));
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function getLastUpdated(filePath) {
  try {
    const output = execSync(`git log -1 --format=%ci -- "${filePath}"`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();
    if (output) return output;
  } catch {
    // git not available or file not tracked
  }
  // fallback to file mtime
  return new Date(statSync(filePath).mtime).toISOString();
}

const files = getAllMdFiles(docsDir);
const result = {};

for (const filePath of files) {
  const key = relative(docsDir, filePath).replace(/\\/g, '/');
  result[key] = getLastUpdated(filePath);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, JSON.stringify(result, null, 2));
console.log(`Generated last-updated.json with ${Object.keys(result).length} entries.`);
