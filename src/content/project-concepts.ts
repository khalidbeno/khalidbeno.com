import type { ContentReference, Localized } from '@/types/content';

export interface ProjectConcept extends ContentReference {
  id: 'inventory' | 'cloud' | 'security';
  title: string;
  label: string;
  description: Localized<string>;
  stack: readonly string[];
}

// Visual concepts requested by the user; these are not published project cases.
export const projectConcepts: readonly ProjectConcept[] = [
  {
    id: 'inventory',
    source: 'docs/content/projects.md',
    label: '01 · SOFTWARE / BACKEND',
    title: 'Inventory & Integrations Platform',
    description: {
      es: 'Sistema interno para inventario y sincronización de datos con servicios externos. Arquitectura desacoplada, validación, logging y control de errores.',
      en: 'An internal system for inventory and data synchronization with external services. Decoupled architecture, validation, logging and error handling.',
    },
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'APIs', 'Docker'],
  },
  {
    id: 'cloud',
    source: 'docs/content/projects.md',
    label: '02 · CLOUD',
    title: 'AWS Infrastructure Lab',
    description: {
      es: 'Entorno en AWS para prácticas de infraestructura, networking, security groups, despliegue y operativa básica.',
      en: 'An AWS environment for practicing infrastructure, networking, security groups, deployment and basic operations.',
    },
    stack: ['AWS', 'Linux', 'Docker', 'VPC', 'EC2', 'S3'],
  },
  {
    id: 'security',
    source: 'docs/content/projects.md',
    label: '03 · SECURITY / NETWORKS',
    title: 'Network Security Environment',
    description: {
      es: 'Segmentación, routing, análisis de tráfico y documentación de arquitectura.',
      en: 'Segmentation, routing, traffic analysis and architecture documentation.',
    },
    stack: ['Cisco', 'Linux', 'Wireshark', 'Firewalls', 'VLAN'],
  },
];

export const projectsPresentationCopy = {
  es: {
    title: 'Capacidad demostrada,',
    muted: 'no solo listada.',
    description:
      'Cada proyecto explica problema, arquitectura, stack, decisiones y resultado.',
    aside: 'Soluciones en software, cloud y automatización.',
    concept: 'Concepto visual',
    view: 'Ver proyecto',
    external: 'Abrir proyecto',
    unavailable: 'Fichas y enlaces pendientes de confirmar.',
  },
  en: {
    title: 'Demonstrated ability,',
    muted: 'not just a list.',
    description:
      'Each project explains the problem, architecture, stack, decisions and outcome.',
    aside: 'Solutions in software, cloud and automation.',
    concept: 'Visual concept',
    view: 'View project',
    external: 'Open project',
    unavailable: 'Project details and links awaiting confirmation.',
  },
};
