import { ProjectsView } from '@/features/projects/projects-view';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'en',
  'projects',
  'Khaled Beno’s technical cases: a structure for documenting problems, architecture, decisions and outcomes.',
);
export default function Page() {
  return <ProjectsView locale="en" />;
}
