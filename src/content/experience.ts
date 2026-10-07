import type { Localized, ContentReference } from '@/types/content';

export interface Experience extends ContentReference {
  id: string;
  company: string;
  start: string;
  end: string;
  year: string;
  tags: readonly string[];
  copy: Localized<{
    role: string;
    location: string;
    period: string;
    description: string;
    note?: string;
  }>;
}

// All facts: docs/content/experience.md. Roles for SIRE/SEUR describe scope, not contractual titles.
export const experiences: readonly Experience[] = [
  {
    id: 'bds',
    company: 'BDS Vending Solutions',
    start: '2026-03',
    end: '2026-08',
    year: '2026',
    source: 'docs/content/experience.md',
    tags: ['Troubleshooting', 'Ticketing', 'Logs', 'English', 'Field Support'],
    copy: {
      es: {
        role: 'Field IT Support',
        location: 'Dublín, Irlanda',
        period: 'Marzo — agosto 2026',
        description:
          'Diagnóstico mediante logs y códigos de error, ticketing, escalado y pruebas funcionales. Atención técnica en un entorno profesional en inglés.',
      },
      en: {
        role: 'Field IT Support',
        location: 'Dublin, Ireland',
        period: 'March — August 2026',
        description:
          'Troubleshooting using logs and error codes, ticketing, escalation and functional testing. Technical support in a professional English-speaking environment.',
      },
    },
  },
  {
    id: 'sire',
    company: 'SIRE SL',
    start: '2025-09',
    end: '2026-01',
    year: '2025 — 2026',
    source: 'docs/content/experience.md',
    tags: [
      'Drupal 7 → 11',
      'PHP',
      'Python',
      'Testing',
      'Networks',
      'ISO 27001',
    ],
    copy: {
      es: {
        role: 'Desarrollo y soporte de sistemas',
        location: '',
        period: 'Septiembre 2025 — enero 2026',
        description:
          'Migración Drupal 7 → 11, soporte, testing y documentación. Trabajo con PHP/Python, redes y tareas relacionadas con controles ISO 27001.',
        note: 'Fin de proyecto · Aproximadamente 30 h/semana',
      },
      en: {
        role: 'Development and systems support',
        location: '',
        period: 'September 2025 — January 2026',
        description:
          'Drupal 7 → 11 migration, support, testing and documentation. Work with PHP/Python, networks and tasks related to ISO 27001 controls.',
        note: 'Project completed · Approximately 30 hours/week',
      },
    },
  },
  {
    id: 'seur',
    company: 'SEUR',
    start: '2025-05',
    end: '2026-01',
    year: '2025 — 2026',
    source: 'docs/content/experience.md',
    tags: ['IBM iSeries / AS400', 'Operations', 'Data Validation'],
    copy: {
      es: {
        role: 'Soporte IT y operaciones',
        location: 'Getafe, Madrid',
        period: 'Mayo 2025 — enero 2026',
        description:
          'Seguimiento de incidencias, validación de datos e informes con IBM iSeries / AS400. Trabajo nocturno orientado a la continuidad operativa.',
      },
      en: {
        role: 'IT support and operations',
        location: 'Getafe, Madrid',
        period: 'May 2025 — January 2026',
        description:
          'Incident follow-up, data validation and reporting with IBM iSeries / AS400. Night work focused on operational continuity.',
      },
    },
  },
];
