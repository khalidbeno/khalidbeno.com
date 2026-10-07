import type { MetadataRoute } from 'next';
import { site } from '../config/site';

export function robots(): MetadataRoute.Robots {
  return {
    rules: site.indexable
      ? { userAgent: '*', allow: '/' }
      : { userAgent: '*', disallow: '/' },
    ...(site.url && site.indexable
      ? { sitemap: new URL('/sitemap.xml', site.url).href }
      : {}),
  };
}

export default robots;
