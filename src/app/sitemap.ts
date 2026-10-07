import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // No approved public pages yet. Add only real, indexable pages after launch approval.
  return [];
}
