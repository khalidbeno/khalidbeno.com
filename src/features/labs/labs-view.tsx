import type { Locale } from '@/config/locales';
import { certifications } from '@/content/certifications';
import { labs } from '@/content/labs';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { Disciplines } from '@/components/sections/disciplines';
import { EmptyState } from '@/components/ui/empty-state';
import { Icon } from '@/components/ui/icon';
import { Tag } from '@/components/ui/tag';
import { CertificationCard } from './certification-card';

const copy = {
  es: {
    title: 'Aprender construyendo.',
    muted: 'Práctica y formación, con contexto.',
    description:
      'Laboratorios a la izquierda. Credenciales y ruta de aprendizaje a la derecha.',
    labs: 'Pequeños entornos para probar y entender.',
    certs: 'Completadas, en preparación y planificadas.',
    scope: 'Los labs son prácticas técnicas, no experiencia profesional.',
    credential:
      'La formación en preparación o planificada no se presenta como obtenida.',
  },
  en: {
    title: 'Learning by building.',
    muted: 'Practice and training, in context.',
    description:
      'Labs on the left. Credentials and a learning path on the right.',
    labs: 'Small environments to test and understand.',
    certs: 'Completed, in preparation and planned.',
    scope: 'Labs are technical practice, not professional experience.',
    credential:
      'Training in preparation or planned is never shown as completed.',
  },
};

export function LabsView({ locale }: { locale: Locale }) {
  const ui = interfaceCopy[locale];
  return (
    <PageFrame locale={locale} active="labs">
      <PageHero
        eyebrow="Labs + Certifications"
        title={copy[locale].title}
        mutedTitle={copy[locale].muted}
        description={copy[locale].description}
      >
        <Disciplines locale={locale} tiles />
      </PageHero>
      <div className="labs-columns">
        <section className="labs-area">
          <div className="area-heading">
            <span className="icon-tile">
              <Icon name="document" />
            </span>
            <div>
              <h2>Labs</h2>
              <p>{copy[locale].labs}</p>
            </div>
          </div>
          {labs.length ? (
            labs.map((lab) => (
              <article className="lab-card glass-card" key={lab.id}>
                <h3>{lab.title[locale]}</h3>
                <p>{lab.description[locale]}</p>
                <div className="tag-list">
                  {lab.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <EmptyState
              title={ui.emptyLabs}
              description={ui.emptyLabsBody}
              icon="code"
            />
          )}
          <p className="area-footnote">
            <Icon name="book" />
            {copy[locale].scope}
          </p>
        </section>
        <section className="certifications-area">
          <div className="area-heading">
            <span className="icon-tile">
              <Icon name="shield" />
            </span>
            <div>
              <h2>{locale === 'es' ? 'Certificaciones' : 'Certifications'}</h2>
              <p>{copy[locale].certs}</p>
            </div>
          </div>
          <div className="certification-list">
            {certifications
              .filter((entry) => entry.status !== 'planned')
              .map((entry) => (
                <CertificationCard
                  key={entry.name}
                  entries={[entry]}
                  locale={locale}
                />
              ))}
            <CertificationCard
              entries={certifications.filter(
                (entry) => entry.status === 'planned',
              )}
              locale={locale}
            />
          </div>
          <p className="area-footnote">
            <Icon name="shield" />
            {copy[locale].credential}
          </p>
        </section>
      </div>
    </PageFrame>
  );
}
