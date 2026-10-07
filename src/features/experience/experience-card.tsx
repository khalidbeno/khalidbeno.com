import type { Locale } from '@/config/locales';
import type { Experience } from '@/content/experience';
import { Asset } from '@/components/ui/asset';
import { Tag } from '@/components/ui/tag';

export function ExperienceCard({
  experience,
  locale,
}: {
  experience: Experience;
  locale: Locale;
}) {
  const copy = experience.copy[locale];
  return (
    <article className="experience-card glass-card">
      <Asset
        alt=""
        label={locale === 'es' ? 'Visual pendiente' : 'Visual pending'}
        icon={
          experience.id === 'bds'
            ? 'network'
            : experience.id === 'sire'
              ? 'code'
              : 'box'
        }
      />
      <div className="experience-card-content">
        <h2>{experience.company}</h2>
        <p className="experience-role">
          {copy.role}
          {copy.location ? ` · ${copy.location}` : ''}
        </p>
        <p className="experience-period">
          <time dateTime={experience.start}>{copy.period}</time>
        </p>
        <p className="experience-description">{copy.description}</p>
        {copy.note ? <p className="experience-note">{copy.note}</p> : null}
        <div className="tag-list">
          {experience.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
