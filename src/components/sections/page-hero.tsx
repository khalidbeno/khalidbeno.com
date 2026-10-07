import type { ReactNode } from 'react';
export function PageHero({
  eyebrow,
  title,
  mutedTitle,
  description,
  children,
  headingLevel = 1,
}: {
  eyebrow: string;
  title: string;
  mutedTitle?: string;
  description?: string;
  children?: ReactNode;
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? 'h1' : 'h2';
  return (
    <section className="page-hero">
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <Heading className="hero-heading">
          {title}
          {mutedTitle ? (
            <>
              {' '}
              <span className="heading-muted">{mutedTitle}</span>
            </>
          ) : null}
        </Heading>
        {description ? <p className="hero-description">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
