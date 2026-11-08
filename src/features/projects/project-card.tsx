import { localizedPath } from '@/config/locales';
import type { Project } from '@/content/projects';
import { Asset } from '@/components/ui/asset';
import { ButtonLink } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`project-card glass-card${featured ? ' project-card--featured' : ''}`}
    >
      <div>
        <p className="project-card-phase">{project.phase}</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.stack.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="project-card-actions">
          <ButtonLink
            href={localizedPath(project.locale, `/projects/${project.slug}`)}
          >
            {project.locale === 'es' ? 'Ver documentación' : 'View documentation'}
          </ButtonLink>
        </div>
      </div>
      <Asset
        src={project.image}
        alt={project.title}
        label={
          project.locale === 'es' ? 'Diagrama conceptual' : 'Conceptual diagram'
        }
        icon="code"
      />
    </article>
  );
}
