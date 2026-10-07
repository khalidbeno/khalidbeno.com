function readSiteUrl(value: string | undefined): URL | undefined {
  if (!value?.trim()) return undefined;
  const url = new URL(value);
  if (
    !['http:', 'https:'].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== '/' ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      'SITE_URL must be an HTTP(S) origin without path, credentials, query or hash.',
    );
  }
  return url;
}

export const site = {
  // Source: docs/content/profile.md — name explicitly approved.
  name: 'Khaled Beno',
  url: readSiteUrl(process.env.SITE_URL),
  // The phase-1 temporary screen must never be indexed.
  indexable: false,
} as const;
