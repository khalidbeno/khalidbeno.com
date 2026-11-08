import type { Locale } from '@/config/locales';
import type { Experience } from '@/content/experience';
import { Icon } from '@/components/ui/icon';
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
      <span className="experience-visual" aria-hidden="true">
        <Icon
          name={
            experience.id === 'bds'
              ? 'network'
              : experience.id === 'sire'
                ? 'code'
                : 'box'
          }
        />
      </span>
      <div className="experience-card-content">
        <h3>{copy.role}</h3>
        <p className="experience-company">
          {experience.company}
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
