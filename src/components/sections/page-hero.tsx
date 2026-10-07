import type { ReactNode } from 'react';
export function PageHero({
  eyebrow,
  title,
  mutedTitle,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  mutedTitle?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title}
          {mutedTitle ? (
            <span className="heading-muted">{mutedTitle}</span>
          ) : null}
        </h1>
        {description ? <p className="hero-description">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
