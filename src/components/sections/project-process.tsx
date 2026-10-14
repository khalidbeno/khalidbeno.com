import type { Locale } from '@/config/locales';
import { Icon, type IconName } from '@/components/ui/icon';

const steps: { icon: IconName; es: [string, string]; en: [string, string] }[] =
  [
    {
      icon: 'search',
      es: ['Problema', 'Contexto y objetivos'],
      en: ['Problem', 'Context and objectives'],
    },
    {
      icon: 'network',
      es: ['Arquitectura', 'Diseño y componentes'],
      en: ['Architecture', 'Design and components'],
    },
    {
      icon: 'box',
      es: ['Stack', 'Tecnologías utilizadas'],
      en: ['Stack', 'Technologies used'],
    },
    {
      icon: 'code',
      es: ['Decisiones', 'Trade-offs y alternativas'],
      en: ['Decisions', 'Trade-offs and alternatives'],
    },
    {
      icon: 'shield',
      es: ['Dificultad', 'Retos y aprendizajes'],
      en: ['Challenges', 'Obstacles and lessons'],
    },
    {
      icon: 'check',
      es: ['Solución', 'Implementación'],
      en: ['Solution', 'Implementation'],
    },
    {
      icon: 'document',
      es: ['Resultado', 'Impacto y métricas'],
      en: ['Outcome', 'Impact and metrics'],
    },
  ];

export function ProjectProcess({ locale }: { locale: Locale }) {
  return (
    <section className="process-section">
      <h2 className="eyebrow">
        {locale === 'es'
          ? 'Proceso de cada proyecto'
          : 'The process behind each project'}
      </h2>
      <ol className="process-steps">
        {steps.map((step) => (
          <li key={step.icon}>
            <span className="icon-tile">
              <Icon name={step.icon} />
            </span>
            <div>
              <strong>{step[locale][0]}</strong>
              <p>{step[locale][1]}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
