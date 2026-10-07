import { ExperienceView } from '@/features/experience/experience-view';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'en',
  'experience',
  'Khaled Beno’s experience at BDS Vending Solutions, SIRE SL and SEUR: support, systems and development in Spain and Ireland.',
);
export default function Page() {
  return <ExperienceView locale="en" />;
}
