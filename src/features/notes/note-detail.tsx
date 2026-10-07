import { localizedPath, type Locale } from '@/config/locales';
import { notFound } from 'next/navigation';
import { findNote, publishedNotes } from '@/content/notes';
import { profile } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { site } from '@/config/site';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { ButtonLink } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';
import { contentMetadata } from '@/lib/metadata';
import { serializeStructuredData } from '@/lib/structured-data';
import { noteReadingMinutes } from './note-body';

function getNote(locale: Locale, slug: string) {
  const note = findNote(locale, slug);
  if (!note) notFound();
  return note;
}

export function noteMetadata(locale: Locale, slug: string) {
  const note = getNote(locale, slug);
  const other = locale === 'es' ? 'en' : 'es';
  const translation = publishedNotes(other).find(
    (entry) => entry.id === note.id,
  );
  const metadata = contentMetadata(
    locale,
    `/notes/${note.slug}`,
    note.title,
    note.description,
    translation ? `/notes/${translation.slug}` : undefined,
  );
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article' as const,
      publishedTime: note.publishedAt,
      authors: [profile.name],
    },
  };
}

export async function NoteDetail({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const note = getNote(locale, slug);
  const other = locale === 'es' ? 'en' : 'es';
  const translation = publishedNotes(other).find(
    (entry) => entry.id === note.id,
  );
  const [{ default: Body }, readingMinutes] = await Promise.all([
    note.load(),
    noteReadingMinutes(note),
  ]);
  return (
    <PageFrame
      locale={locale}
      active="notes"
      alternatePath={localizedPath(
        other,
        translation ? `/notes/${translation.slug}` : '/notes',
      )}
    >
      <PageHero
        eyebrow={locale === 'es' ? 'Nota técnica' : 'Technical note'}
        title={note.title}
        description={note.description}
      />
      <div className="note-byline">
        <span>{profile.name}</span>
        <time dateTime={note.publishedAt}>
          {new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-GB', {
            dateStyle: 'long',
            timeZone: 'UTC',
          }).format(new Date(note.publishedAt))}
        </time>
        <span>
          {readingMinutes} {locale === 'es' ? 'min de lectura' : 'min read'}
        </span>
      </div>
      <div className="tag-list detail-tags">
        {note.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <article className="detail-body prose">
        <Body />
      </article>
      <div className="detail-actions">
        <ButtonLink href={localizedPath(locale, '/notes')} variant="secondary">
          {interfaceCopy[locale].backNotes}
        </ButtonLink>
      </div>
      {site.url ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeStructuredData({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: note.title,
              description: note.description,
              datePublished: note.publishedAt,
              inLanguage: locale,
              url: new URL(
                localizedPath(locale, `/notes/${note.slug}`),
                site.url,
              ).href,
              author: { '@type': 'Person', name: profile.name },
            }),
          }}
        />
      ) : null}
    </PageFrame>
  );
}
