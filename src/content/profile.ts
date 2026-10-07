import type { Localized } from '@/types/content';

// Source: docs/content/profile.md — user-approved facts and positioning.
export const profile = {
  name: 'Khaled Beno',
  location: 'Madrid',
  source: 'docs/content/profile.md',
  portrait: null as string | null,
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
  about: string;
  aboutTitle: string;
}> = {
  es: {
    headline: 'Experiencia real entre Madrid y Dublín.',
    introduction:
      'Soporte, sistemas y desarrollo. Experiencia profesional en España e Irlanda, proyectos técnicos y una evolución hacia cloud y ciberseguridad.',
    aboutTitle: 'Dos ciudades. Una forma de trabajar.',
    about:
      'Khaled Beno es un profesional IT afincado en Madrid con experiencia trabajando en España e Irlanda. Su trayectoria combina soporte, sistemas y desarrollo. La experiencia profesional en Dublín aportó autonomía, resolución de incidencias en entornos reales y comunicación profesional en inglés. Desde entonces continúa construyendo proyectos técnicos y profundizando en software, cloud y ciberseguridad.',
  },
  en: {
    headline: 'Real experience between Madrid and Dublin.',
    introduction:
      'Support, systems and development. Professional experience in Spain and Ireland, technical projects and a path towards cloud and cybersecurity.',
    aboutTitle: 'Two cities. One way of working.',
    about:
      'Khaled Beno is an IT professional based in Madrid with experience working in Spain and Ireland. His background combines support, systems and development. His professional experience in Dublin brought autonomy, troubleshooting in real environments and professional communication in English. He continues to build technical projects and deepen his knowledge of software, cloud and cybersecurity.',
  },
};
