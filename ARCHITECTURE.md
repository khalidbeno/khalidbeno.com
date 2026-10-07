# Arquitectura

## Estado de fase 1

Foundation documental conservada. Runtime Next.js en la raíz con TypeScript strict, Tailwind, ESLint, Prettier y MDX. Pantallas temporales en `/` y `/en`; sin Home final ni otras vistas completas.

## Stack previsto

Next.js App Router, React, TypeScript strict y Tailwind CSS. Server Components por defecto; componentes cliente únicamente para comportamiento que lo requiera. MDX mediante `@next/mdx`, con `src/mdx-components.tsx`. Sin artículos ficticios. GSAP y ScrollTrigger no se instalan todavía.

## Responsabilidades

| Directorio                 | Responsabilidad                                                  |
| -------------------------- | ---------------------------------------------------------------- |
| `src/app/`                 | Rutas, layouts, metadata y composición de páginas                |
| `src/components/ui/`       | Primitivas reutilizables                                         |
| `src/components/layout/`   | Estructura compartida y navegación                               |
| `src/components/sections/` | Secciones de páginas                                             |
| `src/features/`            | Funcionalidad específica, por ejemplo Notes                      |
| `src/hooks/`               | Hooks de comportamiento reutilizable cuando existan consumidores |
| `src/lib/`                 | Utilidades y adaptadores sin presentación                        |
| `src/config/`              | Configuración de rutas, idiomas y sitio                          |
| `src/content/`             | Proyecciones estructuradas de contenido aprobado y artículos     |
| `src/styles/`              | Estilos globales y tokens aprobados                              |
| `src/types/`               | Contratos compartidos pequeños                                   |
| `public/images/`           | Fotografías e imágenes autorizadas                               |
| `public/projects/`         | Assets autorizados de proyectos                                  |
| `public/icons/`            | Iconos autorizados                                               |

## Flujo de contenido

`docs/content/` → datos aprobados y traducciones revisadas en `src/content/` → Server Components → presentación. Los datos personales nunca se editan únicamente en código: actualizar primero su fuente documental. Las proyecciones deben mantener trazabilidad; no constituyen una segunda fuente de verdad. Los artículos deberán validar su metadata antes de publicarse.

## Composición y dependencias

Page → Section → Feature component → UI primitives. Presentación recibe datos mediante contratos específicos. No crear capas, hooks, interfaces o componentes sin necesidad concreta. Configuración y lógica de contenido permanecen separadas del layout cuando aporte claridad.

## Runtime e idiomas

`src/app/(es)/layout.tsx` y `src/app/(en)/en/layout.tsx` son root layouts independientes con `html lang` correcto y CSS compartido. No hay layout superior con idioma fijo. Cambiar de idioma usa un enlace nativo y recarga el documento; no requiere librería i18n ni JS cliente propio.

`src/config/site.ts` valida el origen de `SITE_URL`; `src/lib/metadata.ts` centraliza metadata. No se generan canonical ni hreflang absolutos sin dominio confirmado. Los placeholders no son indexables. `.env.example` documenta la configuración; los cambios de entorno requieren reconstruir el build estático.

## Comandos

`npm install`, `npm run dev`, `npm run typecheck`, `npm run lint`, `npm run build`, `npm run start`, `npm run format:check`. Typecheck genera primero tipos de rutas. Versiones efectivas en `package.json` y lockfile tras instalación.

## Decisiones pendientes

Dominio, fuentes definitivas/licencias, calibración de tokens contra Figma y capturas, datos profesionales y vistas finales. `src/content/` permanece sin datos personales estructurados: los documentos solo permiten confirmar el nombre, que se referencia desde configuración con trazabilidad.
