import { LabsView } from '@/features/labs/labs-view';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'en',
  'labs',
  'Google Cybersecurity completed; AWS Solutions Architect Associate and CompTIA Security+ in preparation. Khaled Beno’s labs and learning path.',
);
export default function Page() {
  return <LabsView locale="en" />;
}
