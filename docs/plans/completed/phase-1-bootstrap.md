# Fase 1 — Bootstrap técnico

## Alcance completado

Runtime Next.js en la raíz, TypeScript strict, Tailwind, ESLint, Prettier, MDX y pantallas temporales ES/EN. Sin Home final, artículos ficticios, librerías UI ni motion. Foundation y capturas conservadas.

## Decisiones

- `/` ES y `/en` EN con root layouts por idioma y CSS compartido.
- Tokens pequeños iniciales y fuentes de sistema, pendientes de calibración visual.
- Dominio opcional mediante `SITE_URL`; sin dominio no se emiten canonical ni hreflang absolutos.
- Pantallas temporales siempre noindex; robots bloquea crawling y sitemap vacío.
- Sin datos estructurados de perfil, salvo nombre aprobado referenciado desde configuración.

## Validación

Typecheck, lint sin warnings, formato y build completados. Smoke HTTP de `/` y `/en`: 200, idioma, texto localizado, noindex y Open Graph. Sin canonical inventado. Robots bloquea `/`, sitemap sin URLs, rutas inexistentes y referencia en public devuelven 404. Revisados Git status y diff; el diff está vacío porque todavía no hay archivos versionados ni commits. No se ha realizado QA visual en navegador de responsive ni teclado. No existen páginas finales en esta fase.

## Avisos de dependencias

ESLint 9.39.5 marca deprecación; ESLint 10 todavía queda fuera del contrato peer de plugins React, import y jsx-a11y incluidos por eslint-config-next 16.4.0. Se mantiene 9 para un árbol compatible.

`npm audit` detecta cinco avisos high en la cadena dev `eslint-config-next` → plugin Next → fast-glob → micromatch → braces. Registro consultado: braces 3.0.3 es la última versión publicada y está afectada por GHSA-vfj7-8cjw-p6xm. No aplicar `audit fix --force`, que propone bajar la configuración a Next 14. Auditoría `--omit=dev`: cero vulnerabilidades. Revalidar cuando haya actualización compatible.

## Pendientes de siguiente fase

Contenido aprobado, dominio, Figma, referencia final de About, fuentes definitivas y vistas. Home permanece fuera de alcance. La captura Home tiene nombre real `01-home.png.png` y no se renombra sin necesidad.
