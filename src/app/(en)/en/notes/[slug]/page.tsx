import { publishedNotes } from '@/content/notes';
import { NoteDetail, noteMetadata } from '@/features/notes/note-detail';
export const dynamicParams = false;
export function generateStaticParams() {
  return publishedNotes('en').map((note) => ({ slug: note.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return noteMetadata('en', (await params).slug);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <NoteDetail locale="en" slug={(await params).slug} />;
}
