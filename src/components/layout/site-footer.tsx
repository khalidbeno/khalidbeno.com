import { localizedPath, type Locale } from '@/config/locales';
import { interfaceCopy } from '@/content/interface';
import { profile } from '@/content/profile';
export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer container">
      <div>
        <strong>{profile.name}</strong>
        <p>{interfaceCopy[locale].footer}</p>
      </div>
      <div className="footer-links">
        <span>Madrid ↔ {interfaceCopy[locale].dublin}</span>
        <a href={localizedPath(locale, '/contact')}>
          {interfaceCopy[locale].contact}
        </a>
      </div>
    </footer>
  );
}
