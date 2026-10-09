import { routes } from './routes';
export const sectionKeys = [
  'home',
  'experience',
  'projects',
  'labs',
  'contact',
  'notes',
] as const;
export type SectionKey = (typeof sectionKeys)[number];
export const sections = sectionKeys.map((key) =>
  routes.find((route) => route.key === key)!,
);
export const indexRoutes = routes.filter((route) =>
  ['home', 'projects', 'notes'].includes(route.key),
);
