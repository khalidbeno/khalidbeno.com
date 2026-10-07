import type { Locale } from '@/config/locales';
import { localizedPath } from '@/config/locales';
import { profile, profileCopy } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { ButtonLink } from '@/components/ui/button';
import { Asset } from '@/components/ui/asset';
import { Disciplines } from '@/components/sections/disciplines';
import { CVAction } from '@/components/sections/cv-action';

export function HomeView({ locale }: { locale: Locale }) {
  const copy = profileCopy[locale];
  const ui = interfaceCopy[locale];
  return (
    <PageFrame locale={locale} active="home" className="home-main">
      <section className="home-hero">
        <div className="home-copy">
          <p className="eyebrow">{profile.name} · Madrid / Dublin</p>
          <h1>{profile.name}</h1>
          <p className="home-headline">{copy.headline}</p>
          <p className="home-introduction">{copy.introduction}</p>
          <div className="actions">
            <ButtonLink href={localizedPath(locale, '/projects')}>
              {ui.projects}
            </ButtonLink>
            <CVAction locale={locale} />
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
    </PageFrame>
  );
}
