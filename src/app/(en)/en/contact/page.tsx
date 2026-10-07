import { ContactView } from '@/features/contact/contact-view';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'en',
  'contact',
  'Khaled Beno, Madrid. Open to opportunities in software, cloud, systems and cybersecurity.',
);
export default function Page() {
  return <ContactView locale="en" />;
}
