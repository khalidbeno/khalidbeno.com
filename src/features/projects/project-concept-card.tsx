import type { Locale } from '@/config/locales';
import {
  projectsPresentationCopy,
  type ProjectConcept,
} from '@/content/project-concepts';
import { Icon } from '@/components/ui/icon';
import { Tag } from '@/components/ui/tag';
import { ProjectVisual } from './project-visual';

export function ProjectConceptCard({
  concept,
  locale,
  standalone,
}: {
  concept: ProjectConcept;
  locale: Locale;
  standalone: boolean;
}) {
  const ui = projectsPresentationCopy[locale];
  const Heading = standalone ? 'h2' : 'h3';
  return (
    <article className={'project-concept project-concept--' + concept.id}>
      <div className="project-concept-copy">
        <p className="project-label">{concept.label}</p>
        <Heading>{concept.title}</Heading>
        <p className="project-summary">{concept.description[locale]}</p>
        <div className="tag-list">
          {concept.stack.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="project-actions">
          <button
            type="button"
            className="button button--primary"
            disabled
            aria-describedby="projects-unavailable"
          >
            {ui.view}
            <Icon name="arrow" />
          </button>
          <button
            type="button"
            className="project-external"
            disabled
            aria-label={ui.external + ': ' + concept.title}
            aria-describedby="projects-unavailable"
          >
            <Icon name="external" />
          </button>
        </div>
      </div>
      <span className="project-concept-status">{ui.concept}</span>
      <ProjectVisual kind={concept.id} locale={locale} />
    </article>
  );
}
