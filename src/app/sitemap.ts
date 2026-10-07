import type { MetadataRoute } from 'next';
import { site } from '../config/site';
import { indexRoutes } from '../config/sections';
import { localizedPath, locales } from '../config/locales';
import { publishedProjects } from '../content/projects';
import { publishedNotes } from '../content/notes';

export function sitemap(): MetadataRoute.Sitemap {
  if (!site.url || !site.indexable) return [];
  const origin = site.url;
  const entries: MetadataRoute.Sitemap = indexRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: new URL(localizedPath(locale, route.path), origin).href,
      alternates: {
        languages: {
          es: new URL(route.path, origin).href,
          en: new URL(localizedPath('en', route.path), origin).href,
        },
      },
    })),
  );
  for (const locale of locales) {
    for (const project of publishedProjects(locale)) {
      const other = locale === 'es' ? 'en' : 'es';
      const translation = publishedProjects(other).find(
        (entry) => entry.id === project.id,
      );
      entries.push({
        url: new URL(localizedPath(locale, `/projects/${project.slug}`), origin)
          .href,
        ...(translation
          ? {
              alternates: {
                languages: {
                  [locale]: new URL(
                    localizedPath(locale, `/projects/${project.slug}`),
                    origin,
                  ).href,
                  [other]: new URL(
                    localizedPath(other, `/projects/${translation.slug}`),
                    origin,
                  ).href,
                },
              },
            }
          : {}),
      });
    }
    for (const note of publishedNotes(locale)) {
      const other = locale === 'es' ? 'en' : 'es';
      const translation = publishedNotes(other).find(
        (entry) => entry.id === note.id,
      );
      entries.push({
        url: new URL(localizedPath(locale, `/notes/${note.slug}`), origin).href,
        lastModified: note.publishedAt,
        ...(translation
          ? {
              alternates: {
                languages: {
                  [locale]: new URL(
                    localizedPath(locale, `/notes/${note.slug}`),
                    origin,
                  ).href,
                  [other]: new URL(
                    localizedPath(other, `/notes/${translation.slug}`),
                    origin,
                  ).href,
                },
              },
            }
          : {}),
      });
    }
  }
  return entries;
}

export default sitemap;
