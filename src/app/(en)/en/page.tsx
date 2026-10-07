import { PortfolioLanding } from '@/components/layout/portfolio-landing';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('en', 'home');

export default function RuntimePage() {
  return <PortfolioLanding locale="en" />;
}
