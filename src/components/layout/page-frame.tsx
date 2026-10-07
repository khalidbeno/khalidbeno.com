import type { ReactNode } from 'react';
import type { Locale } from '@/config/locales';
import type { RouteKey } from '@/config/routes';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { interfaceCopy } from '@/content/interface';
export function PageFrame({
  locale,
  active,
  children,
  className = '',
  alternatePath,
  landing = false,
}: {
  locale: Locale;
  active: RouteKey;
  children: ReactNode;
  className?: string;
  alternatePath?: string;
  landing?: boolean;
}) {
  return (
    <div
      className={`site-page page-${active}${landing ? ' portfolio-landing' : ''}`}
    >
      <div className="site-backdrop" aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        {interfaceCopy[locale].skip}
      </a>
      <SiteHeader
        locale={locale}
        active={active}
        alternatePath={alternatePath}
        landing={landing}
      />
      <main
        id="main-content"
        tabIndex={-1}
        className={`container page-main ${landing ? 'landing-main' : ''} ${className}`}
      >
        {children}
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
