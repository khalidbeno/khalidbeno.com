import { localizedPath, type Locale } from '@/config/locales';
import { routes, routePath, type RouteKey } from '@/config/routes';
import { interfaceCopy } from '@/content/interface';
import { profile } from '@/content/profile';
function NavigationLinks({
  locale,
  active,
}: {
  locale: Locale;
  active: RouteKey;
}) {
  return (
    <>
      {routes
        .filter((route) => route.key !== 'contact')
        .map((route) => (
          <a
            key={route.key}
            href={localizedPath(locale, route.path)}
            aria-current={active === route.key ? 'page' : undefined}
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
}: {
  locale: Locale;
  active: RouteKey;
  alternatePath?: string;
}) {
  const other = locale === 'es' ? 'en' : 'es';
  return (
    <header className="site-header container">
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
        <NavigationLinks locale={locale} active={active} />
      </nav>
      <div className="header-actions">
        <nav
          className="language-switcher"
          aria-label={locale === 'es' ? 'Idioma' : 'Language'}
        >
          <span aria-current="true">{locale.toUpperCase()}</span>
          <a
            href={alternatePath ?? localizedPath(other, routePath(active))}
            lang={other}
            hrefLang={other}
            aria-label={
              other === 'es' ? 'Cambiar a español' : 'Switch to English'
            }
          >
            {other.toUpperCase()}
          </a>
        </nav>
        <a className="header-contact" href={localizedPath(locale, '/contact')}>
          {interfaceCopy[locale].contact}
        </a>
      </div>
      <details className="mobile-navigation">
        <summary>
          {interfaceCopy[locale].menu}
          <span aria-hidden="true">＋</span>
        </summary>
        <nav aria-label={locale === 'es' ? 'Principal móvil' : 'Mobile main'}>
          <NavigationLinks locale={locale} active={active} />
          <a
            href={localizedPath(locale, '/contact')}
            aria-current={active === 'contact' ? 'page' : undefined}
          >
            {interfaceCopy[locale].contact}
          </a>
        </nav>
      </details>
    </header>
  );
}
