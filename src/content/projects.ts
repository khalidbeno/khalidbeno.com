import type { Locale } from '@/config/locales';
import type { ContentReference, PublicationStatus } from '@/types/content';

export interface Project extends ContentReference {
  id: string;
  slug: string;
  locale: Locale;
  status: PublicationStatus;
  title: string;
  description: string;
  stack: readonly string[];
  image: string | null;
  repositoryUrl?: string;
  sections: readonly { title: string; body: string }[];
}

// docs/content/projects.md has no approved project cases yet.
export const projects: readonly Project[] = [];

export function publishedProjects(locale: Locale): readonly Project[] {
  return projects.filter(
    (project) => project.locale === locale && project.status === 'published',
  );
}

export function findProject(locale: Locale, slug: string): Project | undefined {
  return publishedProjects(locale).find((project) => project.slug === slug);
}
