import { localizedPath, type Locale } from '@/config/locales';

const messages = {
  es: {
    title: 'Sitio en preparación',
    description:
      'La base técnica está preparada. El contenido y las vistas se incorporarán en una fase posterior.',
    language: 'English',
    target: 'en',
  },
  en: {
    title: 'Site in preparation',
    description:
      'The technical foundation is ready. Content and views will be added in a later phase.',
    language: 'Español',
    target: 'es',
  },
} as const;

export function RuntimeScreen({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  return (
    <main className="mx-auto max-w-reading px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">{copy.title}</h1>
      <p className="mt-4 text-muted">{copy.description}</p>
      <a
        className="mt-6 inline-block underline underline-offset-4"
        href={localizedPath(copy.target)}
        hrefLang={copy.target}
        lang={copy.target}
      >
        {copy.language}
      </a>
    </main>
  );
}
