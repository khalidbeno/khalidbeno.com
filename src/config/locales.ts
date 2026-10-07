export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export function localizedPath(locale: Locale, path = '/'): string {
  return locale === 'es' ? path : path === '/' ? '/en' : `/en${path}`;
}
