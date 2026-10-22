import type { Locale } from '@/config/locales';

/** Original conceptual systems illustration, not a deployed project. */
export function TechnicalDiagram({ locale }: { locale: Locale }) {
  return (
    <figure className="technical-diagram">
      <svg viewBox="0 0 600 480" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1">
          <ellipse
            cx="300"
            cy="240"
            rx="238"
            ry="99"
            transform="rotate(-30 300 240)"
          />
          <ellipse
            cx="300"
            cy="240"
            rx="238"
            ry="99"
            transform="rotate(30 300 240)"
          />
          <ellipse cx="300" cy="240" rx="99" ry="220" />
          <path d="M300 20v440M40 240h520" strokeDasharray="2 10" />
          <path d="m300 155 80 45v90l-80 45-80-45v-90l80-45Z" />
          <path d="m220 200 80 45 80-45M300 245v90M220 245l80 45 80-45" />
          <circle cx="300" cy="240" r="168" strokeDasharray="2 8" />
        </g>
        <g className="diagram-signals">
          <circle cx="300" cy="20" r="4" />
          <circle cx="97" cy="130" r="4" />
          <circle cx="503" cy="350" r="4" />
          <circle cx="300" cy="335" r="4" />
        </g>
        <g className="diagram-labels" fill="currentColor">
          <text x="320" y="44">
            01 / SOFTWARE
          </text>
          <text x="28" y="370">
            02 / SYSTEMS
          </text>
          <text x="414" y="118">
            03 / SECURITY
          </text>
          <text x="269" y="405">
            &lt; / &gt;
          </text>
        </g>
      </svg>
      <figcaption>
        <span>
          {locale === 'es' ? 'Sistemas conectados' : 'Connected systems'}
        </span>
        <span>
          {locale === 'es' ? 'Estudio conceptual / 01' : 'Concept study / 01'}
        </span>
      </figcaption>
    </figure>
  );
}
