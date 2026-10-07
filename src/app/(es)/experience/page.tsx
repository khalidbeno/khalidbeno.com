import { ExperienceView } from '@/features/experience/experience-view';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'es',
  'experience',
  'Experiencia de Khaled Beno en BDS Vending Solutions, SIRE SL y SEUR: soporte, sistemas y desarrollo en España e Irlanda.',
);
export default function Page() {
  return <ExperienceView locale="es" />;
}
