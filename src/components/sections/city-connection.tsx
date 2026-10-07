import type { Locale } from '@/config/locales';
import { interfaceCopy } from '@/content/interface';
export function CityConnection({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const copy = interfaceCopy[locale];
  return (
    <figure
      className={`city-connection${compact ? ' city-connection--compact' : ''}`}
    >
      <svg viewBox="0 0 500 530" fill="none" aria-hidden="true">
        <defs>
          <pattern
            id={compact ? 'map-grid-compact' : 'map-grid'}
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path d="M25 0H0v25" stroke="currentColor" opacity=".07" />
          </pattern>
        </defs>
        <rect
          width="500"
          height="530"
          fill={`url(#${compact ? 'map-grid-compact' : 'map-grid'})`}
        />
        <path
          d="m172 92 40-17 26 28 49-10 22 30 59 30 24 59-38 38 12 43-52 16 4 53-36 17-46-32-41 8-8-46-47-40 17-45-19-33 12-23-14-32 31-39Z"
          fill="currentColor"
          opacity=".04"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="m105 82 24 4 10 36-13 21-27-9-6-26 12-26Z"
          stroke="currentColor"
          opacity=".15"
        />
        <path
          d="M130 144C355 174 82 321 267 409"
          stroke="currentColor"
          strokeDasharray="3 9"
          strokeWidth="2"
          opacity=".4"
        />
        <circle cx="130" cy="144" r="6" fill="currentColor" />
        <circle cx="267" cy="409" r="6" fill="currentColor" />
        <circle cx="130" cy="144" r="19" stroke="currentColor" opacity=".1" />
        <circle cx="267" cy="409" r="19" stroke="currentColor" opacity=".1" />
      </svg>
      <div className="city-label city-label--dublin">
        <strong>{copy.dublin}</strong>
        <span>{copy.ireland}</span>
      </div>
      <div className="city-label city-label--madrid">
        <strong>Madrid</strong>
        <span>{copy.spain}</span>
      </div>
      <figcaption>
        {copy.international} · Madrid ↔ {copy.dublin}
      </figcaption>
    </figure>
  );
}
