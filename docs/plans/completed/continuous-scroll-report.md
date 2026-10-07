# Landing continua y navegación lateral — cierre

8 de octubre de 2026. Foundation y contenido aprobado conservados. No se han instalado dependencias, implementado GSAP ni publicado cambios remotos.

## Resultado y decisiones

`/` y `/en` componen, en este orden, HomeSection, AboutSection, ExperienceSection, ProjectsSection, LabsSection, ContactSection y NotesPreviewSection. Cada landing tiene exactamente un SiteHeader, un main, un SiteFooter y un h1. Sections sin PageFrame interno; wrappers independientes reutilizan la presentación existente. About conserva un párrafo y su esquema autorizado. Scaleopts sigue separado de los empleos.

Rail fijo solo en landing sobre 900px: firma KB, números 01–07, dots, labels, línea base y progreso vertical. Espacio reservado mediante --rail-width a nivel global. Navegación horizontal de landing oculta. Arriba quedan idioma y Contactar; en móvil, KB, idioma y menú nativo dentro de header sticky compacto.

Anchors reales, scroll suave nativo y offsets; nada intercepta el desplazamiento. IntersectionObserver detecta la sección de la banda de lectura y aria-current="location" la distingue. Listener pasivo y requestAnimationFrame actualizan --scroll-progress desde scrollY/(documentHeight−viewportHeight); ResizeObserver atiende cambios de altura. Listeners y observers se limpian al desmontar. El cambio de idioma conserva la sección predominante; scroll manual no altera el hash. Los enlaces de sección cierran el menú y llevan el foco al destino.

Con reduced motion, scroll y transiciones inmediatos. Sin JavaScript siguen disponibles contenido, anchors y menú nativo; progreso/estado automático y cierre automático del menú requieren JavaScript. Solo header/navegación son fronteras cliente; las secciones y composición permanecen en servidor.

Referencias técnicas: [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) y [permanentRedirect de Next.js](https://nextjs.org/docs/app/api-reference/functions/permanentRedirect). La instrucción actual sustituye expresamente la navbar de las capturas; sus composiciones y ADN claro permanecen como referencia.

## Rutas

- Mantenidas: `/`, `/en`, índices `/projects`, `/notes` y equivalentes ingleses; detalles de proyecto/nota sin cambios funcionales.
- Redirigidas permanentemente: `/about`, `/experience`, `/labs`, `/contact` → `/#section`; equivalentes ingleses → `/en#section`. Ocho redirects 308 comprobados.
- No se elimina ninguna URL de compatibilidad. Se evita duplicar vistas sin profundidad adicional.
- Sitemap preparado con seis URLs de landing/índices ES/EN más contenido published; excluye redirects y hashes. Por defecto sigue vacío/noindex hasta confirmar dominio e indexación.
- NotesPreview reutiliza NotesContent sin buscador/filtros/proceso y limita entradas a tres cuando existan. Su CTA abre el índice completo, donde la búsqueda GET permanece operativa. Actualmente no existen artículos publicados.

## Archivos creados y modificados

| Área                         | Archivos                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nuevos componentes           | src/components/layout/portfolio-landing.tsx, scroll-rail-navigation.tsx; src/features/notes/notes-preview-section.tsx                                                          |
| Nueva configuración y estilo | src/config/sections.ts; src/styles/landing.css                                                                                                                                 |
| Composición                  | src/app/(es)/page.tsx, src/app/(en)/en/page.tsx; page-frame.tsx, site-header.tsx, site-footer.tsx                                                                              |
| Features reutilizadas        | home/home-view.tsx, about/about-view.tsx, experience/experience-view.tsx, projects/projects-view.tsx, labs/labs-view.tsx, contact/contact-view.tsx, notes/notes-view.tsx       |
| Semántica y CSS              | src/components/sections/page-hero.tsx; src/app/globals.css; src/styles/layout.css, pages.css                                                                                   |
| Compatibilidad               | page.tsx de about/experience/labs/contact bajo los grupos ES/EN                                                                                                                |
| SEO y generado               | src/app/sitemap.ts; next-env.d.ts regenerado por Next al validar build                                                                                                         |
| Pruebas                      | Nuevo tests/landing.spec.ts; tests/pages.spec.ts, navigation.spec.ts, metadata.spec.ts adaptados                                                                               |
| Documentación                | AGENTS.md, ARCHITECTURE.md, README.md; docs/product/routes.md, portfolio-spec.md, seo-strategy.md; docs/design/design-system.md, motion-system.md; plan e informe de esta fase |

README actualizado y retirado un remate con codificación NUL que impedía su diff textual. docs/content, registros personales y package.json/lockfile no se modifican en esta fase.

## Validaciones

Todos correctos en la versión final:

- npm run typecheck.
- npm run lint, cero warnings de código.
- npm run format:check.
- npm run build.
- npm test: **25 pruebas aprobadas**.
- git diff --check y revisión de diff/status.

Playwright comprueba las seis rutas de landing/índice en 320, 375, 768, 900, 901, 1024, 1280, 1440, 1920 y 2560px: 60 combinaciones sin overflow horizontal detectado. Axe en 375/1440px: 12 comprobaciones sin infracciones detectadas de las reglas WCAG seleccionadas; la landing incluye todas sus secciones. Esto no acredita conformidad completa.

Pruebas específicas de rail visible desktop/oculto móvil, orden y landmarks, anchors, estado activo, progreso 0/1, separación rail/contenido, offsets, hash directo, teclado/foco, selector ES/EN conservando sección, cierre móvil, scroll manual/suave, reduced motion, sin JavaScript, ocho redirects, enlaces internos, MDX, contenido y estados, SEO y detalles desconocidos 404. Detalles reales publicados siguen pendientes porque no hay entradas aprobadas.

Capturas por cada sección en escritorio/móvil ES/EN, además de capturas completas de los índices/landing. Revisadas manualmente todas las entradas de sección españolas de escritorio, muestras móviles About/Labs/Contact/Notes y muestras inglesas Home/Experience/Notes. Paleta y jerarquía conservadas, sin rail sobre el contenido. Los artefactos viven en test-results y playwright-report, ignorados por Git. No se ha medido Lighthouse ni añadido motion narrativo.

El runner mantiene el aviso ambiental NO_COLOR/FORCE_COLOR, sin afectar a las pruebas. Los avisos históricos de dependencias de desarrollo del informe nocturno no se vuelven a auditar ni modificar aquí.

## Pendientes y estado

Retrato, fotos originales, referencia About, CV, contacto, fichas reales de proyectos/labs/artículos y dominio siguen pendientes. No se sustituyen por datos de capturas. Layout preparado para contenido real; contacto/CV sin destino autorizado permanecen deshabilitados.

Trabajo guardado en commit local después de validar; sin push ni cambios de remotes. El plan se archiva como continuous-scroll-plan.md. Siguiente fase de storytelling queda a la espera de instrucción, sin GSAP/ScrollTrigger instalado.
