import type { Localized } from '@/types/content';

// Source: docs/content/profile.md — user-approved facts and positioning.
export const profile = {
  name: 'Khaled Beno',
  location: 'Madrid',
  source: 'docs/content/profile.md',
  cv: null as string | null,
  disciplines: [
    { label: 'Development', icon: 'code', primary: true },
    { label: 'Cloud', icon: 'cloud', primary: true },
    { label: 'Cybersecurity', icon: 'shield', primary: true },
    { label: 'Networks', icon: 'network', primary: false },
    { label: 'AI', icon: 'spark', primary: false },
  ],
} as const;

export const profileCopy: Localized<{
  headline: string;
  introduction: string;
}> = {
  es: {
    headline: 'Experiencia real entre Madrid y Dublín.',
    introduction:
      'Soporte, sistemas y desarrollo. Experiencia profesional en España e Irlanda, proyectos técnicos y una evolución hacia cloud y ciberseguridad.',
  },
  en: {
    headline: 'Real experience between Madrid and Dublin.',
    introduction:
      'Support, systems and development. Professional experience in Spain and Ireland, technical projects and a path towards cloud and cybersecurity.',
  },
};
