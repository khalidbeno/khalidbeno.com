import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Note } from '@/content/notes';

export function estimateReadingMinutes(source: string): number {
  const text = source
    .replace(/^---[\s\S]*?---/u, '')
    .replace(/^\s*(?:import|export)\s.*$/gmu, '')
    .replace(/```[\s\S]*?```/gu, '')
    .replace(/<[^>]*>/gu, '')
    .replace(/\[[^\]]*\]\([^)]*\)/gu, (match) =>
      match.slice(1, match.indexOf(']')),
    );
  const words = text.match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
  return Math.max(1, Math.ceil(words / 200));
}

export async function noteReadingMinutes(note: Note): Promise<number> {
  if (!/^[a-z0-9-]+(?:\/[a-z0-9-]+)*\.mdx$/u.test(note.sourceFile)) {
    throw new Error(
      'Note sourceFile must be a local MDX path within src/content/articles.',
    );
  }
  const source = await readFile(
    path.join(process.cwd(), 'src/content/articles', note.sourceFile),
    'utf8',
  );
  return estimateReadingMinutes(source);
}
