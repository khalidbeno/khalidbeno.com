import type { Metadata } from 'next';
import { localizedPath, type Locale } from '../config/locales';
import { site } from '../config/site';
import { routePath, routeLabel, type RouteKey } from '../config/routes';

export function baseMetadata(locale: Locale): Metadata {
  const description =
    locale === 'es'
      ? 'Portfolio profesional de Khaled Beno. Experiencia en España e Irlanda: soporte, sistemas y desarrollo.'
      : 'Professional portfolio of Khaled Beno. Experience in Spain and Ireland: support, systems and development.';

  return {
    title: { default: site.name, template: `%s | ${site.name}` },
    description,
    metadataBase: site.url ?? site.developmentOrigin,
    robots: { index: site.indexable, follow: site.indexable },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: site.name,
      description,
      locale: locale === 'es' ? 'es_ES' : 'en_GB',
      alternateLocale: locale === 'es' ? 'en_GB' : 'es_ES',
    },
    twitter: { card: 'summary', title: site.name, description },
  };
}

export function pageMetadata(
  locale: Locale,
  route: RouteKey,
  description?: string,
): Metadata {
  return contentMetadata(
    locale,
    routePath(route),
    route === 'home' ? site.name : routeLabel(route, locale),
    description ?? (baseMetadata(locale).description as string),
    routePath(route),
  );
}

export function contentMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  alternatePath?: string,
): Metadata {
  const absolutePath = localizedPath(locale, path);
  const other = locale === 'es' ? 'en' : 'es';
  return {
    title: path === '/' ? { absolute: site.name } : title,
    description,
    ...(site.url
      ? {
          alternates: {
            canonical: new URL(absolutePath, site.url).href,
            ...(alternatePath
              ? {
                  languages: {
                    [locale]: new URL(absolutePath, site.url).href,
                    [other]: new URL(
                      localizedPath(other, alternatePath),
                      site.url,
                    ).href,
                    'x-default': new URL(
                      localizedPath(
                        'es',
                        locale === 'es' ? path : alternatePath,
                      ),
                      site.url,
                    ).href,
                  },
                }
              : {}),
          },
        }
      : {}),
    robots: { index: site.indexable, follow: site.indexable },
    openGraph: {
      type: 'website',
      title,
      description,
      siteName: site.name,
      locale: locale === 'es' ? 'es_ES' : 'en_GB',
      ...(alternatePath
        ? { alternateLocale: locale === 'es' ? 'en_GB' : 'es_ES' }
        : {}),
      ...(site.url ? { url: new URL(absolutePath, site.url).href } : {}),
    },
    twitter: { card: 'summary', title, description },
  };
}
