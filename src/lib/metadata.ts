import type { Metadata } from 'next';
import { localizedPath, type Locale } from '@/config/locales';
import { site } from '@/config/site';

export function baseMetadata(locale: Locale): Metadata {
  const path = localizedPath(locale);
  const description =
    locale === 'es'
      ? 'Portfolio profesional de Khaled Beno. Sitio en preparación.'
      : 'Professional portfolio of Khaled Beno. Site in preparation.';

  return {
    title: { default: site.name, template: `%s | ${site.name}` },
    description,
    ...(site.url
      ? {
          metadataBase: site.url,
          alternates: {
            canonical: path,
            languages: { es: '/', en: '/en', 'x-default': '/' },
          },
        }
      : {}),
    robots: { index: site.indexable, follow: site.indexable },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: site.name,
      description,
      locale: locale === 'es' ? 'es_ES' : 'en_GB',
      alternateLocale: locale === 'es' ? 'en_GB' : 'es_ES',
      ...(site.url ? { url: new URL(path, site.url).href } : {}),
    },
  };
}
