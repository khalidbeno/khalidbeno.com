import type { Localized } from '@/types/content';

export interface Lab {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  tags: readonly string[];
  source: 'docs/content/labs.md';
}

// No documented labs — do not copy the examples in the reference image.
export const labs: readonly Lab[] = [];
