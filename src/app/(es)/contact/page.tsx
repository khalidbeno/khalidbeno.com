import { ContactView } from '@/features/contact/contact-view';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'es',
  'contact',
  'Khaled Beno, Madrid. Abierto a oportunidades en software, cloud, sistemas y ciberseguridad.',
);
export default function Page() {
  return <ContactView locale="es" />;
}
