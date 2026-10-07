import { localizedPath } from '@/config/locales';
import type { Note } from '@/content/notes';
import { interfaceCopy } from '@/content/interface';
import { ButtonLink } from '@/components/ui/button';
import { Tag } from '@/components/ui/tag';

export function NoteCard({ note }: { note: Note }) {
  return (
    <article
      className={`note-card glass-card${note.featured ? ' note-card--featured' : ''}`}
    >
      <p className="eyebrow">{note.tags.join(' / ')}</p>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      <div className="tag-list">
        {note.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <ButtonLink href={localizedPath(note.locale, `/notes/${note.slug}`)}>
        {interfaceCopy[note.locale].read}
      </ButtonLink>
    </article>
  );
}
