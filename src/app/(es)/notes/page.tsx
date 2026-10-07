import { NotesView } from '@/features/notes/notes-view';
import { parseNotesSearch } from '@/features/notes/note-search';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'es',
  'notes',
  'Notas técnicas de Khaled Beno sobre desarrollo, cloud, sistemas y seguridad. Espacio de documentación pendiente de su primera publicación.',
);
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { query, category } = parseNotesSearch(await searchParams);
  return <NotesView locale="es" query={query} category={category} />;
}
