import type { ComponentType } from 'react';
import type { Locale } from '@/config/locales';
import type { ContentReference, PublicationStatus } from '@/types/content';

export interface Note extends ContentReference {
  id: string;
  slug: string;
  locale: Locale;
  status: PublicationStatus;
  title: string;
  description: string;
  publishedAt: string;
  tags: readonly string[];
  featured?: boolean;
  // Relative to src/content/articles; local trusted MDX only.
  sourceFile: `${string}.mdx`;
  load: () => Promise<{ default: ComponentType }>;
}

export const notes: readonly Note[] = [];

export function publishedNotes(locale: Locale): readonly Note[] {
  return notes.filter(
    (note) => note.locale === locale && note.status === 'published',
  );
}

export function findNote(locale: Locale, slug: string): Note | undefined {
  return publishedNotes(locale).find((note) => note.slug === slug);
}
