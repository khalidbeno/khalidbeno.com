import type { Locale } from '@/config/locales';
import { publishedProjects } from '@/content/projects';
import {
  projectConcepts,
  projectsPresentationCopy,
} from '@/content/project-concepts';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { ProjectProcess } from '@/components/sections/project-process';
import { ProjectCard } from './project-card';
import { ProjectConceptCard } from './project-concept-card';

export function ProjectsSection({
  locale,
  standalone = false,
}: {
  locale: Locale;
  standalone?: boolean;
}) {
  const entries = publishedProjects(locale);
  const ui = projectsPresentationCopy[locale];
  return (
    <section
      tabIndex={-1}
      id="projects"
      aria-label={locale === 'es' ? 'Proyectos' : 'Projects'}
      className="portfolio-section page-projects"
    >
      <div className="projects-heading">
        <PageHero
          headingLevel={standalone ? 1 : 2}
          eyebrow={locale === 'es' ? 'Proyectos' : 'Projects'}
          title={ui.title}
          mutedTitle={ui.muted}
          description={ui.description}
        />
        <div className="projects-editorial-note">
          <span aria-hidden="true" className="projects-cross" />
          <p>{ui.aside}</p>
          <span aria-hidden="true" className="projects-rule" />
        </div>
      </div>
      {entries.length ? (
        <div className="projects-grid">
          {entries.map((entry, index) => (
            <ProjectCard
              key={entry.id}
              project={entry}
              featured={index === 0}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="projects-showcase">
            {projectConcepts.map((concept) => (
              <ProjectConceptCard
                key={concept.id}
                concept={concept}
                locale={locale}
                standalone={standalone}
              />
            ))}
          </div>
          <p id="projects-unavailable" className="projects-availability">
            {ui.unavailable}
          </p>
        </>
      )}
      <ProjectProcess locale={locale} />
    </section>
  );
}
export function ProjectsView({ locale }: { locale: Locale }) {
  return (
    <PageFrame locale={locale} active="projects">
      <ProjectsSection locale={locale} standalone />
    </PageFrame>
  );
}
