import { HomeView } from '@/features/home/home-view';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('es', 'home');

export default function RuntimePage() {
  return <HomeView locale="es" />;
}
