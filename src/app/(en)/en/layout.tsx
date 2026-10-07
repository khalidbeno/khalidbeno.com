import type { ReactNode } from 'react';
import { baseMetadata } from '@/lib/metadata';
import '@/app/globals.css';

export const metadata = baseMetadata('en');

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
