import type { Locale } from '@/config/locales';
import { localizedPath } from '@/config/locales';
import { profile, profileCopy } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { ButtonLink } from '@/components/ui/button';
import { Asset } from '@/components/ui/asset';
import { Disciplines } from '@/components/sections/disciplines';
import { CVAction } from '@/components/sections/cv-action';

export function HomeSection({
  locale,
  standalone = false,
}: {
  locale: Locale;
  standalone?: boolean;
}) {
  const copy = profileCopy[locale];
  const ui = interfaceCopy[locale];
  return (
    <section
      tabIndex={-1}
      id="home"
      aria-label={locale === 'es' ? 'Inicio' : 'Home'}
      className={`portfolio-section page-home home-main`}
    >
      <section className="home-hero">
        <div className="home-copy">
          <p className="eyebrow">{profile.name} · Madrid / Dublin</p>
          <h1>{profile.name}</h1>
          <p className="home-headline">{copy.headline}</p>
          <p className="home-introduction">{copy.introduction}</p>
          <div className="actions">
            <ButtonLink
              href={
                standalone ? localizedPath(locale, '/projects') : '#projects'
              }
            >
              {ui.projects}
            </ButtonLink>
            <CVAction locale={locale} id="home-cv-status" />
          </div>
          <Disciplines locale={locale} />
        </div>
        <div className="home-portrait">
          <Asset
            src={profile.portrait}
            alt={profile.name}
            label={ui.portraitPending}
            portrait
            priority
          />
        </div>
      </section>
    </section>
  );
}

export function HomeView({ locale }: { locale: Locale }) {
  return (
    <PageFrame locale={locale} active="home">
      <HomeSection locale={locale} standalone />
    </PageFrame>
  );
}
