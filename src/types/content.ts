import type { Locale } from '@/config/locales';

export type Localized<T> = Record<Locale, T>;
export type PublicationStatus = 'draft' | 'published';

export interface ContentReference {
  source: `docs/content/${string}.md`;
}
