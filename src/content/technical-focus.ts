import type { IconName } from '@/components/ui/icon';
import type { Locale } from '@/config/locales';

// Evidence: docs/content/experience.md, certifications.md and projects.md.
export const technicalFocus: {
  title: string;
  icon: IconName;
  status: 'used' | 'learning' | 'pending';
  detail: Record<Locale, string>;
}[] = [
  {
    title: 'Backend Development',
    icon: 'code',
    status: 'used',
    detail: {
      es: 'PHP / Python · migración Drupal 7 → 11 en SIRE.',
      en: 'PHP / Python · Drupal 7 → 11 migration at SIRE.',
    },
  },
  {
    title: 'Cloud & Infrastructure',
    icon: 'cloud',
    status: 'learning',
    detail: {
      es: 'AWS Solutions Architect Associate · en preparación.',
      en: 'AWS Solutions Architect Associate · in preparation.',
    },
  },
  {
    title: 'Cybersecurity',
    icon: 'shield',
    status: 'used',
    detail: {
      es: 'Trabajo relacionado con controles ISO 27001. Google Cybersecurity completada; Security+ en preparación.',
      en: 'Work related to ISO 27001 controls. Google Cybersecurity completed; Security+ in preparation.',
    },
  },
  {
    title: 'Databases',
    icon: 'box',
    status: 'used',
    detail: {
      es: 'IBM iSeries / AS400 · validación de datos e informes en SEUR. PostgreSQL: evidencia pendiente.',
      en: 'IBM iSeries / AS400 · data validation and reporting at SEUR. PostgreSQL: evidence pending.',
    },
  },
  {
    title: 'DevOps & Automation',
    icon: 'network',
    status: 'pending',
    detail: {
      es: 'Docker, Git, Linux y automatización: prácticas por documentar. Terraform Associate planificada.',
      en: 'Docker, Git, Linux and automation: practice to be documented. Terraform Associate planned.',
    },
  },
];
