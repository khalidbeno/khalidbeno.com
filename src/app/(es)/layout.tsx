import type { ReactNode } from 'react';
import { baseMetadata } from '@/lib/metadata';
import '@/app/globals.css';

export const metadata = baseMetadata('es');

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
