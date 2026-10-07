import { NotesView } from '@/features/notes/notes-view';
import { parseNotesSearch } from '@/features/notes/note-search';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'en',
  'notes',
  'Khaled Beno’s technical notes on development, cloud, systems and security. Documentation space awaiting its first publication.',
);
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { query, category } = parseNotesSearch(await searchParams);
  return <NotesView locale="en" query={query} category={category} />;
}
