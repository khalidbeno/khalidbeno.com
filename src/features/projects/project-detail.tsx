import { localizedPath, type Locale } from '@/config/locales';
import { notFound } from 'next/navigation';
import { findProject, publishedProjects } from '@/content/projects';
import { profile } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { Asset } from '@/components/ui/asset';
import { ButtonLink } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { ProjectProcess } from '@/components/sections/project-process';
import { contentMetadata } from '@/lib/metadata';
import { serializeStructuredData } from '@/lib/structured-data';
import { site } from '@/config/site';

function getProject(locale: Locale, slug: string) {
  const project = findProject(locale, slug);
  if (!project) notFound();
  return project;
}

export function projectMetadata(locale: Locale, slug: string) {
  const project = getProject(locale, slug);
  const other = locale === 'es' ? 'en' : 'es';
  const translation = publishedProjects(other).find(
    (entry) => entry.id === project.id,
  );
  return contentMetadata(
    locale,
    `/projects/${project.slug}`,
    project.title,
    project.description,
    translation ? `/projects/${translation.slug}` : undefined,
  );
}

export function ProjectDetail({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const project = getProject(locale, slug);
  const other = locale === 'es' ? 'en' : 'es';
  const translation = publishedProjects(other).find(
    (entry) => entry.id === project.id,
  );
  return (
    <PageFrame
      locale={locale}
      active="projects"
      alternatePath={localizedPath(
        other,
        translation ? `/projects/${translation.slug}` : '/projects',
      )}
    >
      <PageHero
        eyebrow={locale === 'es' ? 'Proyecto técnico' : 'Technical project'}
        title={project.title}
        description={project.description}
      />
      <div className="tag-list detail-tags">
        {project.stack.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      {project.image ? (
        <div className="project-detail-image">
          <Asset src={project.image} alt={project.title} label="" />
        </div>
      ) : null}
      <article className="detail-body">
        {project.sections.map((section, index) => (
          <section key={section.title} id={`section-${index + 1}`}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </article>
      <ProjectProcess locale={locale} />
      <div className="detail-actions">
        <ButtonLink
          href={localizedPath(locale, '/projects')}
          variant="secondary"
        >
          {interfaceCopy[locale].backProjects}
        </ButtonLink>
        {project.repositoryUrl ? (
          <ButtonLink href={project.repositoryUrl} icon="external">
            {locale === 'es' ? 'Ver repositorio' : 'View repository'}
          </ButtonLink>
        ) : null}
      </div>
      {site.url ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeStructuredData({
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              name: project.title,
              description: project.description,
              url: new URL(
                localizedPath(locale, `/projects/${project.slug}`),
                site.url,
              ).href,
              author: { '@type': 'Person', name: profile.name },
            }),
          }}
        />
      ) : null}
    </PageFrame>
  );
}
