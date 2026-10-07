import { profile } from '../content/profile';

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

const url = readSiteUrl(process.env.SITE_URL);
export const site = {
  name: profile.name,
  url,
  developmentOrigin: new URL('http://localhost:3000'),
  indexable: Boolean(url && process.env.SITE_INDEXABLE === 'true'),
} as const;
