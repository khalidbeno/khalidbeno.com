import type { Locale } from '@/config/locales';
import { technicalFocus } from '@/content/technical-focus';
import { Icon } from '@/components/ui/icon';

export function SkillsMap({ locale }: { locale: Locale }) {
  const labels =
    locale === 'es'
      ? {
          used: 'Experiencia documentada',
          learning: 'En preparación',
          pending: 'Por documentar',
        }
      : {
          used: 'Documented experience',
          learning: 'In preparation',
          pending: 'To be documented',
        };
  return (
    <div className="skills-map">
      {technicalFocus.map((area, index) => (
        <article className="skill-row" key={area.title}>
          <span className="skill-index">0{index + 1}</span>
          <Icon name={area.icon} />
          <h3>{area.title}</h3>
          <div>
            <span className={`skill-status skill-status--${area.status}`}>
              {labels[area.status]}
            </span>
            <p>{area.detail[locale]}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
