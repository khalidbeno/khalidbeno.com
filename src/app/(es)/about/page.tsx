import { AboutView } from '@/features/about/about-view';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('es', 'about');
export default function Page() {
  return <AboutView locale="es" />;
}
