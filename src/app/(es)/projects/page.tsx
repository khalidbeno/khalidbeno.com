import { ProjectsView } from '@/features/projects/projects-view';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'es',
  'projects',
  'Casos técnicos de Khaled Beno: estructura para documentar problemas, arquitectura, decisiones y resultados.',
);
export default function Page() {
  return <ProjectsView locale="es" />;
}
