import Image from 'next/image';
import type { Locale } from '@/config/locales';
import { localizedPath } from '@/config/locales';
import { experiences } from '@/content/experience';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { Icon } from '@/components/ui/icon';
import { ButtonLink } from '@/components/ui/button';
import { ExperienceCard } from './experience-card';

const copy = {
  es: {
    title: 'Trabajo real.',
    secondLine: 'Problemas reales.',
    description:
      'España e Irlanda · soporte, sistemas, desarrollo y operaciones.',
    intro:
      'Una trayectoria práctica: resolver incidencias, trabajar con sistemas y desarrollar soluciones en entornos profesionales.',
  },
  en: {
    title: 'Real work.',
    secondLine: 'Real problems.',
    description:
      'Spain and Ireland · support, systems, development and operations.',
    intro:
      'A practical background: troubleshooting, working with systems and developing solutions in professional environments.',
  },
};

export function ExperienceSection({
  locale,
  standalone = false,
}: {
  locale: Locale;
  standalone?: boolean;
}) {
  const ui = interfaceCopy[locale];
  return (
    <section
      tabIndex={-1}
      id="experience"
      aria-label={locale === 'es' ? 'Experiencia' : 'Experience'}
      className={`portfolio-section page-experience experience-main`}
    >
      <div className="experience-intro">
        <div className="experience-intro-copy">
          <PageHero
            headingLevel={standalone ? 1 : 2}
            eyebrow={locale === 'es' ? 'Experiencia' : 'Experience'}
            title={copy[locale].title}
            mutedTitle={copy[locale].secondLine}
            description={copy[locale].description}
          />
          <p className="experience-lede">{copy[locale].intro}</p>
        </div>
        <Image
          className="experience-illustration"
          src="/images/experience/madrid-dublin.png"
          alt={
            locale === 'es'
              ? 'Representación visual de la experiencia profesional entre Dublín y Madrid'
              : 'Visual representation of professional experience between Dublin and Madrid'
          }
          width={1254}
          height={1254}
          sizes="(max-width: 700px) 90vw, (max-width: 900px) 40vw, 42vw"
        />
      </div>
      <div className="experience-timeline">
        <ol>
          {experiences.map((item) => (
            <li className="timeline-entry" key={item.id}>
              <span className="timeline-year">{item.year}</span>
              <ExperienceCard experience={item} locale={locale} />
            </li>
          ))}
        </ol>
        <div className="timeline-entry timeline-projects">
          <span className="timeline-year">
            {locale === 'es' ? 'Proyectos' : 'Projects'}
          </span>
          <article className="experience-card glass-card">
            <span className="experience-visual" aria-hidden="true">
              <Icon name="code" />
            </span>
            <div className="experience-card-content">
              <h3>{ui.scaleopts}</h3>
              <p className="experience-description">{ui.scaleoptsBody}</p>
              <ButtonLink
                href={
                  standalone ? localizedPath(locale, '/projects') : '#projects'
                }
                variant="secondary"
              >
                {ui.projects}
              </ButtonLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ExperienceView({ locale }: { locale: Locale }) {
  return (
    <PageFrame locale={locale} active="experience">
      <ExperienceSection locale={locale} standalone />
    </PageFrame>
  );
}
