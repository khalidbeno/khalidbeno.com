import { localizedPath } from '@/config/locales';
import type { Project } from '@/content/projects';
import { interfaceCopy } from '@/content/interface';
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
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.stack.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <ButtonLink
          href={localizedPath(project.locale, `/projects/${project.slug}`)}
        >
          {interfaceCopy[project.locale].view}
        </ButtonLink>
      </div>
      <Asset
        src={project.image}
        alt={project.title}
        label={project.locale === 'es' ? 'Visual pendiente' : 'Visual pending'}
        icon="code"
      />
    </article>
  );
}
