import Image from 'next/image';
import type { Locale } from '@/config/locales';
import { localizedPath } from '@/config/locales';
import { profile, profileCopy } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { ButtonLink } from '@/components/ui/button';
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
  const cities = locale === 'es' ? 'Madrid y Dublín.' : 'Madrid and Dublin.';
  const headlineLead = copy.headline.slice(0, -cities.length);
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
          <p className="home-headline">
            {headlineLead}
            <span className="home-city-pair">{cities}</span>
          </p>
          <p className="home-introduction">{copy.introduction}</p>
          <div className="actions">
            <ButtonLink
              href={
                standalone ? localizedPath(locale, '/projects') : '#projects'
              }
            >
              {ui.projects}
            </ButtonLink>
            <CVAction locale={locale} id="home-cv-status" showNotice={false} />
          </div>
          <Disciplines locale={locale} />
        </div>
        <div className="home-media">
          <Image
            className="home-portrait"
            src="/images/hero/khaled-cutout.png"
            alt={
              locale === 'es'
                ? 'Retrato de Khaled Beno'
                : 'Portrait of Khaled Beno'
            }
            width={1145}
            height={1374}
            sizes="(max-width: 900px) 360px, (max-width: 1100px) 38vw, 44vw"
            preload
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
