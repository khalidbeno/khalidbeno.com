import type { Locale } from '@/config/locales';
import type {
  Certification,
  CertificationStatus,
} from '@/content/certifications';
import { Icon } from '@/components/ui/icon';

const labels: Record<Locale, Record<CertificationStatus, string>> = {
  es: {
    completed: 'Completada',
    preparation: 'En preparación',
    planned: 'Planificadas',
  },
  en: {
    completed: 'Completed',
    preparation: 'In preparation',
    planned: 'Planned',
  },
};

export function CertificationCard({
  entries,
  locale,
}: {
  entries: readonly Certification[];
  locale: Locale;
}) {
  const first = entries[0];
  if (!first) return null;
  return (
    <article className="certification-card glass-card">
      <span className="certification-emblem" aria-hidden="true">
        {entries.length > 1 ? (
          <Icon name="box" />
        ) : first.issuer === 'Google' ? (
          'G'
        ) : first.issuer === 'AWS' ? (
          'aws'
        ) : (
          <Icon name="shield" />
        )}
      </span>
      <div className="certification-content">
        <span className={`status-badge status-badge--${first.status}`}>
          {labels[locale][first.status]}
        </span>
        <h3>{entries.map((entry) => entry.name).join(' · ')}</h3>
        {first.exam ? <p>{first.exam}</p> : null}
        {first.status === 'planned' ? (
          <p>
            {locale === 'es'
              ? 'Próximos objetivos de aprendizaje.'
              : 'Future learning goals.'}
          </p>
        ) : null}
        {first.credentialUrl ? (
          <a className="credential-link" href={first.credentialUrl}>
            {locale === 'es' ? 'Ver credencial' : 'View credential'}
          </a>
        ) : null}
      </div>
    </article>
  );
}
