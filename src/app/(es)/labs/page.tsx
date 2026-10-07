import { LabsView } from '@/features/labs/labs-view';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'es',
  'labs',
  'Google Cybersecurity completada; AWS Solutions Architect Associate y CompTIA Security+ en preparación. Laboratorios y ruta de aprendizaje de Khaled Beno.',
);
export default function Page() {
  return <LabsView locale="es" />;
}
