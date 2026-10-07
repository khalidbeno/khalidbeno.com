import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import * as runtime from 'react/jsx-runtime';
import { certifications } from '../src/content/certifications';
import { experiences } from '../src/content/experience';
import { notes, findNote } from '../src/content/notes';
import { projects, findProject } from '../src/content/projects';
import { estimateReadingMinutes } from '../src/features/notes/note-body';
import { serializeStructuredData } from '../src/lib/structured-data';

test('content has documentary traceability and preserves approved dates and credential states', async () => {
  for (const entry of [
    ...experiences,
    ...certifications,
    ...projects,
    ...notes,
  ]) {
    const source = await readFile(entry.source, 'utf8');
    expect(source.length).toBeGreaterThan(0);
  }
  expect(
    experiences.map((entry) => [entry.company, entry.start, entry.end]),
  ).toEqual([
    ['BDS Vending Solutions', '2026-03', '2026-08'],
    ['SIRE SL', '2025-09', '2026-01'],
    ['SEUR', '2025-05', '2026-01'],
  ]);
  expect(
    certifications
      .filter((entry) => entry.status === 'completed')
      .map((entry) => entry.name),
  ).toEqual(['Google Cybersecurity']);
  expect(
    certifications
      .filter((entry) => entry.status === 'preparation')
      .map((entry) => entry.exam),
  ).toEqual(['SAA-C03', 'SY0-701']);
  expect(
    certifications.filter((entry) => entry.status === 'planned'),
  ).toHaveLength(3);
  for (const locale of ['es', 'en'] as const) {
    for (const entry of projects.filter(
      (project) => project.status === 'draft',
    ))
      expect(findProject(locale, entry.slug)).toBeUndefined();
    for (const entry of notes.filter((note) => note.status === 'draft'))
      expect(findNote(locale, entry.slug)).toBeUndefined();
    expect(findNote(locale, 'not-published')).toBeUndefined();
    expect(findProject(locale, 'not-published')).toBeUndefined();
  }
});

test('local MDX draft compiles to semantic HTML without being added to a public registry', async () => {
  const { evaluate } = await import('@mdx-js/mdx');
  const source =
    'export const status = "draft";\n\n## Fixture de prueba\n\nTexto de validación. **No es una publicación.**\n';
  const compiled = await evaluate(source, { ...runtime });
  expect(compiled.status).toBe('draft');
  const html = renderToStaticMarkup(createElement(compiled.default));
  expect(html).toContain('<h2>Fixture de prueba</h2>');
  expect(html).toContain('<strong>No es una publicación.</strong>');
  expect(notes.some((note) => note.slug === 'fixture-de-prueba')).toBe(false);
});

test('reading time uses real body text and JSON-LD cannot close its script tag', () => {
  expect(estimateReadingMinutes('word '.repeat(401))).toBe(3);
  expect(
    estimateReadingMinutes(
      'export const status = "draft";\n\n## Short note\n\n```js\n' +
        'ignored '.repeat(1000) +
        '\n```',
    ),
  ).toBe(1);
  const serialized = serializeStructuredData({
    headline: '</script><script>alert(1)</script>',
  });
  expect(serialized).not.toContain('</script>');
  expect(JSON.parse(serialized).headline).toBe(
    '</script><script>alert(1)</script>',
  );
});
