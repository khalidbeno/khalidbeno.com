import type { Note } from '@/content/notes';

export const noteCategories = [
  'Development',
  'Cloud',
  'Security',
  'Systems',
  'AI',
] as const;

export function filterNotes(
  entries: readonly Note[],
  query: string,
  category: string,
): readonly Note[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return entries.filter(
    (note) =>
      (!category ||
        note.tags.some(
          (tag) => tag.toLowerCase() === category.toLowerCase(),
        )) &&
      (!normalizedQuery ||
        `${note.title} ${note.description} ${note.tags.join(' ')}`
          .toLocaleLowerCase()
          .includes(normalizedQuery)),
  );
}

export function parseNotesSearch(
  params: Record<string, string | string[] | undefined>,
): { query: string; category: string } {
  const query = typeof params.q === 'string' ? params.q.slice(0, 200) : '';
  const category =
    typeof params.tag === 'string' &&
    noteCategories.some((tag) => tag === params.tag)
      ? params.tag
      : '';
  return { query, category };
}
