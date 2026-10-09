import { test, expect } from '@playwright/test';

test('configured canonical, translations and sitemap use each page path without publishing drafts', async () => {
  const previousUrl = process.env.SITE_URL;
  const previousIndexable = process.env.SITE_INDEXABLE;
  // Reserved example origin is used only in this isolated test process, never written to .env.
  process.env.SITE_URL = 'https://portfolio.example';
  process.env.SITE_INDEXABLE = 'true';
  try {
    const { pageMetadata, contentMetadata } =
      await import('../src/lib/metadata');
    const { sitemap } = await import('../src/app/sitemap');
    const { robots } = await import('../src/app/robots');
    const es = pageMetadata('es', 'experience');
    const en = pageMetadata('en', 'experience');
    expect(es.alternates?.canonical).toBe(
      'https://portfolio.example/experience',
    );
    expect(en.alternates?.canonical).toBe(
      'https://portfolio.example/en/experience',
    );
    expect(en.alternates?.languages).toEqual({
      en: 'https://portfolio.example/en/experience',
      es: 'https://portfolio.example/experience',
      'x-default': 'https://portfolio.example/experience',
    });
    const untranslated = contentMetadata(
      'es',
      '/notes/example-only-in-test',
      'Example',
      'Description',
    );
    expect(untranslated.alternates?.languages).toBeUndefined();
    const entries = sitemap();
    expect(entries).toHaveLength(6);
    expect(new Set(entries.map((entry) => entry.url)).size).toBe(6);
    expect(entries.some((entry) => entry.url.includes('draft'))).toBe(false);
    expect(entries.some((entry) => entry.url.includes('/about'))).toBe(false);
    expect(robots().rules).toEqual({ userAgent: '*', allow: '/' });
  } finally {
    if (previousUrl === undefined) delete process.env.SITE_URL;
    else process.env.SITE_URL = previousUrl;
    if (previousIndexable === undefined) delete process.env.SITE_INDEXABLE;
    else process.env.SITE_INDEXABLE = previousIndexable;
  }
});
