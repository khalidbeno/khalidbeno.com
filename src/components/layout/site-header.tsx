'use client';
import { useEffect, useState } from 'react';
import { sections } from '@/config/sections';
import { localizedPath, type Locale } from '@/config/locales';
import { routes, routePath, type RouteKey } from '@/config/routes';
import { interfaceCopy } from '@/content/interface';
import { profile } from '@/content/profile';
function NavigationLinks({
  locale,
  active,
  landing = false,
}: {
  locale: Locale;
  active: RouteKey;
  landing?: boolean;
}) {
  return (
    <>
      {(landing
        ? sections
        : routes.filter((route) => route.key !== 'contact')
      ).map((route) => (
        <a
          key={route.key}
          href={landing ? `#${route.key}` : localizedPath(locale, route.path)}
          aria-current={
            active === route.key ? (landing ? 'location' : 'page') : undefined
          }
        >
          {route.labels[locale]}
        </a>
      ))}
    </>
  );
}
export function SiteHeader({
  locale,
  active,
  alternatePath,
  landing = false,
}: {
  locale: Locale;
  active: RouteKey;
  alternatePath?: string;
  landing?: boolean;
}) {
  const other = locale === 'es' ? 'en' : 'es';
  const [section, setSection] = useState<RouteKey>('home');
  useEffect(() => {
    if (!landing) return;
    const update = (event: Event) =>
      setSection((event as CustomEvent<RouteKey>).detail);
    document.addEventListener('portfolio-section', update);
    const hash = location.hash.slice(1);
    const frame = requestAnimationFrame(() => {
      if (sections.some((entry) => entry.key === hash))
        setSection(hash as RouteKey);
    });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('portfolio-section', update);
    };
  }, [landing]);
  return (
    <header
      className={`site-header container${landing ? ' landing-header' : ''}`}
    >
      <a
        className="wordmark"
        href={localizedPath(locale)}
        aria-label={`${profile.name} — ${locale === 'es' ? 'Inicio' : 'Home'}`}
      >
        KB
      </a>
      <nav
        className="desktop-nav"
        aria-label={locale === 'es' ? 'Principal' : 'Main'}
      >
        <NavigationLinks
          locale={locale}
          active={landing ? section : active}
          landing={landing}
        />
      </nav>
      <div className="header-actions">
        <nav
          className="language-switcher"
          aria-label={locale === 'es' ? 'Idioma' : 'Language'}
        >
          <span aria-current="true">{locale.toUpperCase()}</span>
          <a
            href={
              landing
                ? `${localizedPath(other)}#${section}`
                : (alternatePath ?? localizedPath(other, routePath(active)))
            }
            lang={other}
            hrefLang={other}
            aria-label={
              other === 'es' ? 'Cambiar a español' : 'Switch to English'
            }
          >
            {other.toUpperCase()}
          </a>
        </nav>
        <a
          className="header-contact"
          href={landing ? '#contact' : `${localizedPath(locale)}#contact`}
          aria-current={active === 'contact' ? 'page' : undefined}
        >
          {interfaceCopy[locale].contact}
        </a>
      </div>
      <details className="mobile-navigation">
        <summary>
          {interfaceCopy[locale].menu}
          <span aria-hidden="true">＋</span>
        </summary>
        <nav aria-label={locale === 'es' ? 'Principal móvil' : 'Mobile main'}>
          <NavigationLinks
            locale={locale}
            active={landing ? section : active}
            landing={landing}
          />
          {!landing ? (
            <a
              href={`${localizedPath(locale)}#contact`}
              aria-current={active === 'contact' ? 'page' : undefined}
            >
              {interfaceCopy[locale].contact}
            </a>
          ) : null}
        </nav>
      </details>
    </header>
  );
}
