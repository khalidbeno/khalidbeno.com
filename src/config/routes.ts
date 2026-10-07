import type { Locale } from '@/config/locales';

export const routes = [
  { key: 'home', path: '/', labels: { es: 'Inicio', en: 'Home' } },
  { key: 'about', path: '/about', labels: { es: 'About', en: 'About' } },
  {
    key: 'experience',
    path: '/experience',
    labels: { es: 'Experiencia', en: 'Experience' },
  },
  {
    key: 'projects',
    path: '/projects',
    labels: { es: 'Proyectos', en: 'Projects' },
  },
  { key: 'labs', path: '/labs', labels: { es: 'Labs', en: 'Labs' } },
  { key: 'notes', path: '/notes', labels: { es: 'Notas', en: 'Notes' } },
  {
    key: 'contact',
    path: '/contact',
    labels: { es: 'Contacto', en: 'Contact' },
  },
] as const;

export type RouteKey = (typeof routes)[number]['key'];

export function routePath(key: RouteKey): string {
  return routes.find((route) => route.key === key)!.path;
}

export function routeLabel(key: RouteKey, locale: Locale): string {
  return routes.find((route) => route.key === key)!.labels[locale];
}
