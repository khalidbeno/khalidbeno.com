import { localizedPath, type Locale } from '@/config/locales';
import { NotesContent } from './notes-view';
import { ButtonLink } from '@/components/ui/button';
export function NotesPreviewSection({ locale }: { locale: Locale }) {
  return (
    <section
      tabIndex={-1}
      id="notes"
      aria-label={locale === 'es' ? 'Notas' : 'Notes'}
      className="portfolio-section page-notes"
    >
      <NotesContent locale={locale} preview />
      <div className="actions notes-preview-actions">
        <ButtonLink href={localizedPath(locale, '/notes')} variant="secondary">
          {locale === 'es' ? 'Ver todas las notas' : 'View all notes'}
        </ButtonLink>
      </div>
    </section>
  );
}
