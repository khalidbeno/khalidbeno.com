import { localizedPath, type Locale } from '@/config/locales';
import { publishedNotes } from '@/content/notes';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { EmptyState } from '@/components/ui/empty-state';
import { Icon } from '@/components/ui/icon';
import { NoteCard } from './note-card';
import { filterNotes, noteCategories } from './note-search';

const copy = {
  es: {
    title: 'Lo que aprendo,',
    muted: 'lo documento.',
    description: 'Artículos técnicos pensados para personas y buscadores.',
    intro:
      'Un espacio para explicar desarrollo, cloud, sistemas y seguridad. Desde la práctica, para la práctica.',
    search: 'Buscar artículos',
    all: 'Todos',
    noResults: 'No hay artículos para esta búsqueda.',
    noResultsBody: 'Prueba otra palabra o selecciona otra categoría.',
    reset: 'Limpiar filtros',
    structure: 'Estructura de un artículo',
    steps: ['Introducción', 'Desarrollo', 'Conclusión', 'Recursos'],
    captions: [
      'Contexto y objetivos',
      'Pasos y explicaciones',
      'Lecciones y límites',
      'Fuentes y enlaces',
    ],
  },
  en: {
    title: 'What I learn,',
    muted: 'I document.',
    description: 'Technical articles written for people and search engines.',
    intro:
      'A space to explain development, cloud, systems and security. From practice, for practice.',
    search: 'Search articles',
    all: 'All',
    noResults: 'No articles match this search.',
    noResultsBody: 'Try another word or choose another category.',
    reset: 'Clear filters',
    structure: 'The structure of an article',
    steps: ['Introduction', 'Development', 'Conclusion', 'Resources'],
    captions: [
      'Context and objectives',
      'Steps and explanations',
      'Lessons and limitations',
      'Sources and links',
    ],
  },
};

export function NotesContent({
  locale,
  query = '',
  category = '',
  preview = false,
}: {
  locale: Locale;
  query?: string;
  category?: string;
  preview?: boolean;
}) {
  const ui = interfaceCopy[locale];
  const text = copy[locale];
  const entries = publishedNotes(locale);
  const filtered = preview
    ? entries.slice(0, 3)
    : filterNotes(entries, query, category);
  const path = localizedPath(locale, '/notes');
  return (
    <>
      <PageHero
        headingLevel={preview ? 2 : 1}
        eyebrow={locale === 'es' ? 'Notas' : 'Notes'}
        title={text.title}
        mutedTitle={text.muted}
        description={text.description}
      >
        <div className="notes-document-visual" aria-hidden="true">
          <Icon name="document" />
          <div>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </PageHero>
      <p className="notes-introduction">{text.intro}</p>
      {!preview ? (
        <div className="notes-controls">
          <form action={path} method="get" role="search">
            <label className="sr-only" htmlFor="notes-search">
              {text.search}
            </label>
            <div className="search-field">
              <Icon name="search" />
              <input
                id="notes-search"
                type="search"
                name="q"
                placeholder={`${text.search}…`}
                defaultValue={query}
                maxLength={200}
              />
              {category ? (
                <input type="hidden" name="tag" value={category} />
              ) : null}
              <button type="submit" aria-label={text.search}>
                <Icon name="arrow" />
              </button>
            </div>
          </form>
          <nav
            className="note-filters"
            aria-label={
              locale === 'es' ? 'Categorías de artículos' : 'Article categories'
            }
          >
            {['', ...noteCategories].map((tag) => {
              const params = new URLSearchParams();
              if (query) params.set('q', query);
              if (tag) params.set('tag', tag);
              return (
                <a
                  key={tag}
                  className={`filter-pill${category === tag ? ' filter-pill--active' : ''}`}
                  href={params.size ? `${path}?${params}` : path}
                  aria-current={category === tag ? 'true' : undefined}
                >
                  {tag || text.all}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
      {filtered.length ? (
        <div className="notes-grid">
          {filtered.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <EmptyState
          title={entries.length ? text.noResults : ui.emptyNotes}
          description={entries.length ? text.noResultsBody : ui.emptyNotesBody}
          icon="book"
        />
      )}
      {query || category ? (
        <a className="reset-filters" href={path}>
          {text.reset}
        </a>
      ) : null}
      {!preview ? (
        <section className="process-section">
          <h2 className="eyebrow">{text.structure}</h2>
          <ol className="process-steps note-steps">
            {text.steps.map((step, index) => (
              <li key={step}>
                <span className="icon-tile">
                  <Icon
                    name={
                      index === 0
                        ? 'document'
                        : index === 1
                          ? 'book'
                          : index === 2
                            ? 'check'
                            : 'link'
                    }
                  />
                </span>
                <div>
                  <strong>{step}</strong>
                  <p>{text.captions[index]}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </>
  );
}

export function NotesView(props: {
  locale: Locale;
  query?: string;
  category?: string;
}) {
  return (
    <PageFrame locale={props.locale} active="notes">
      <NotesContent {...props} />
    </PageFrame>
  );
}
