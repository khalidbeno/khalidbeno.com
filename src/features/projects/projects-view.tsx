import type { Locale } from '@/config/locales';
import { publishedProjects } from '@/content/projects';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { ProjectProcess } from '@/components/sections/project-process';
import { EmptyState } from '@/components/ui/empty-state';
import { Icon } from '@/components/ui/icon';
import { ProjectCard } from './project-card';

const copy = {
  es: {
    title: 'Capacidad demostrada,',
    muted: 'no solo listada.',
    description:
      'Problema, arquitectura, stack, decisiones y resultado. El contexto detrás de cada solución.',
    concept: 'De la idea a la evidencia',
    upcoming: 'Casos técnicos pendientes de documentación',
  },
  en: {
    title: 'Demonstrated ability,',
    muted: 'not just a list.',
    description:
      'Problem, architecture, stack, decisions and outcome. The context behind each solution.',
    concept: 'From idea to evidence',
    upcoming: 'Technical cases awaiting documentation',
  },
};

export function ProjectsSection({
  locale,
  standalone = false,
}: {
  locale: Locale;
  standalone?: boolean;
}) {
  const entries = publishedProjects(locale);
  const ui = interfaceCopy[locale];
  return (
    <section
      tabIndex={-1}
      id="projects"
      aria-label={locale === 'es' ? 'Proyectos' : 'Projects'}
      className={`portfolio-section page-projects `}
    >
      <PageHero
        headingLevel={standalone ? 1 : 2}
        eyebrow={locale === 'es' ? 'Proyectos' : 'Projects'}
        title={copy[locale].title}
        mutedTitle={copy[locale].muted}
        description={copy[locale].description}
      />
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
        <div className="project-pending-layout">
          <EmptyState
            title={ui.emptyProjects}
            description={ui.emptyProjectsBody}
            icon="code"
          />
          <div className="blueprint-visual" aria-hidden="true">
            <div className="blueprint-grid">
              <span className="blueprint-node">
                <Icon name="code" />
              </span>
              <span className="blueprint-connector" />
              <span className="blueprint-node blueprint-node--large">
                <Icon name="network" />
              </span>
              <span className="blueprint-connector" />
              <span className="blueprint-node">
                <Icon name="document" />
              </span>
            </div>
            <strong>{copy[locale].concept}</strong>
            <span>{copy[locale].upcoming}</span>
          </div>
        </div>
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
