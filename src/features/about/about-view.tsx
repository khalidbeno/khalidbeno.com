import type { Locale } from '@/config/locales';
import { localizedPath } from '@/config/locales';
import { profile, profileCopy } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { CityConnection } from '@/components/sections/city-connection';
import { Asset } from '@/components/ui/asset';
import { ButtonLink } from '@/components/ui/button';

export function AboutSection({
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
      id="about"
      aria-label={'About'}
      className={`portfolio-section page-about `}
    >
      <PageHero
        headingLevel={standalone ? 1 : 2}
        eyebrow="About"
        title={profileCopy[locale].aboutTitle}
      />
      <section className="about-composition">
        <div className="about-portrait">
          <Asset
            src={profile.portrait}
            alt={profile.name}
            label={ui.portraitPending}
            portrait
          />
        </div>
        <div className="about-content">
          <p className="about-paragraph">{profileCopy[locale].about}</p>
          <CityConnection locale={locale} compact />
          <ButtonLink
            href={
              standalone ? localizedPath(locale, '/experience') : '#experience'
            }
          >
            {ui.experience}
          </ButtonLink>
        </div>
      </section>
    </section>
  );
}

export function AboutView({ locale }: { locale: Locale }) {
  return (
    <PageFrame locale={locale} active="about">
      <AboutSection locale={locale} standalone />
    </PageFrame>
  );
}
