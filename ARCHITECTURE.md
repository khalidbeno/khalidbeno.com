# Arquitectura

## Estado tras la implementación nocturna

Foundation conservada. Runtime Next.js en la raíz, siete vistas ES/EN y templates de detalle de proyectos y notas. Las vistas usan datos aprobados y placeholders donde faltan assets; Projects, Labs y Notes no publican fichas inexistentes. About pendiente de su referencia final. Sin motion ni librerías UI externas.

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

`src/config/site.ts` valida `SITE_URL` y controla indexación con `SITE_INDEXABLE`. `src/lib/metadata.ts` centraliza metadata por ruta, canonical, hreflang, Open Graph y Twitter cards. Sin dominio confirmado se omiten URLs públicas; localhost es solo base de desarrollo. Noindex por defecto. Cambios de entorno requieren reconstruir el build estático. Sitemap incluye vistas existentes y contenido publicado únicamente cuando URL e indexación estén activadas.

Las páginas comparten `PageFrame` (header, skip link, main y footer). Header recibe ruta/idioma explícitos, evitando convertirlo en Client Component. Menú móvil mediante details/summary; búsqueda y filtros Notes mediante GET en servidor. No hay `use client` en el código propio. Los fondos SVG/CSS y placeholders son originales; ninguna captura se importa ni se copia a public.

## Contenido y detalles

Perfil, experiencia, contacto y certificaciones tipados con fuentes `docs/content/`. Registros de proyectos, labs y notas vacíos hasta recibir datos reales. Proyectos y notas tienen estados draft/published; solo published genera slugs estáticos, listados y sitemap. `dynamicParams = false` y guardas de contenido impiden servir drafts o slugs desconocidos.

MDX local de confianza registrado con `load` y `sourceFile` bajo `src/content/articles`. Template de autoría fuera de runtime en `docs/templates/note.mdx.example`. El tiempo de lectura es una estimación del cuerpo fuente, excluyendo imports/exports y bloques de código. Traducciones de detalles por id compartido; no crear hreflang a una traducción ausente. JSON-LD escapa `<` antes de insertar datos.

## Comandos

`npm install`, `npm run dev`, `npm run typecheck`, `npm run lint`, `npm run build`, `npm run start`, `npm run format:check`, `npm test`. Typecheck genera primero tipos de rutas. Versiones fijadas en package.json/lockfile. Pruebas en Edge headless vía Playwright; axe complementa revisión visual y teclado. `npm test` necesita build previo y Edge instalado; `playwright.config.ts` inicia/cierra su propio servidor en 3187. Informes y screenshots en test-results/playwright-report, ignorados por Git, lint y formato.

## Decisiones pendientes

Dominio, fuentes definitivas/licencias, retrato y fotos originales, referencia About/Figma, CV y canales de contacto, fichas de proyectos/labs/artículos, enlaces de credenciales. Avisos dev de lint documentados; no aplicar downgrade automático. Detalles todavía sin instancias públicas por falta de contenido aprobado. Ver informe nocturno para resultados exactos de validación.
