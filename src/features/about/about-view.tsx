import type { Locale } from '@/config/locales';
import { localizedPath } from '@/config/locales';
import { profile, profileCopy } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { CityConnection } from '@/components/sections/city-connection';
import { Asset } from '@/components/ui/asset';
import { ButtonLink } from '@/components/ui/button';

export function AboutView({ locale }: { locale: Locale }) {
  const ui = interfaceCopy[locale];
  return (
    <PageFrame locale={locale} active="about">
      <PageHero eyebrow="About" title={profileCopy[locale].aboutTitle} />
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
          <ButtonLink href={localizedPath(locale, '/experience')}>
            {ui.experience}
          </ButtonLink>
        </div>
      </section>
    </PageFrame>
  );
}
