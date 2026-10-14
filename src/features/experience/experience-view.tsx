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
import { ExperienceMotion } from './experience-motion';

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
      className="portfolio-section page-experience experience-story"
    >
      <ExperienceMotion />
      <div className="experience-main experience-stage">
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
          <figure className="experience-islands">
            <div className="islands-atmosphere" aria-hidden="true" />
            <div className="islands-float">
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
                sizes="(max-width: 700px) 90vw, (max-width: 900px) 480px, (max-width: 1440px) 36vw, 592px"
              />
              <svg
                className="islands-route"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <path
                  className="islands-story-path"
                  d="M55 28 C70 31 75 40 78 54"
                  pathLength="1"
                />
                <circle className="islands-traveller" r="0.65" cx="0" cy="0" />
              </svg>
            </div>
            <figcaption>
              <span className="island-label island-label-dublin">
                <i aria-hidden="true" />
                <span>
                  <strong>{locale === 'es' ? 'Dublín' : 'Dublin'}</strong>
                  <small>{locale === 'es' ? 'Irlanda' : 'Ireland'}</small>
                </span>
              </span>
              <span className="island-label island-label-madrid">
                <i aria-hidden="true" />
                <span>
                  <strong>Madrid</strong>
                  <small>{locale === 'es' ? 'España' : 'Spain'}</small>
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="experience-timeline-window">
          <div className="experience-timeline">
            <span className="experience-timeline-fill" aria-hidden="true" />
            <ol>
              {experiences.map((item) => (
                <li
                  className={`timeline-entry timeline-${item.id}`}
                  key={item.id}
                >
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
                      standalone
                        ? localizedPath(locale, '/projects')
                        : '#projects'
                    }
                    variant="secondary"
                  >
                    {ui.projects}
                  </ButtonLink>
                </div>
              </article>
            </div>
          </div>
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
