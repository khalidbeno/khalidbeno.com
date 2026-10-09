# Experience, retirada de About y fondo global

Implementación iniciada el 8 de octubre de 2026; cierre el 9 de octubre. Sin push ni publicación remota.

## Resultado

- Landing ES/EN: Home → Experience → Projects → Labs → Contact → Notes. Rail y menú de seis destinos, numeración 01–06, anchors y observers derivados de la misma configuración.
- About eliminado del runtime, navegación y contenido proyectado. /about y /en/about conservan redirects permanentes 308 a /#experience y /en#experience. Sin metadata propia ni entradas en sitemap. La biografía aprobada permanece como histórico documental.
- Ilustración exacta del usuario en `public/images/experience/madrid-dublin.png`, 1254×1254, transparencia conservada. SHA-256 idéntico al original: `6DB16BB860743007DC8BA76F28B1B0E71923BF73015AC0524BA2D6E58DAB23BC`. Next/image, sizes, lazy loading y alt ES/EN; no marco, crop ni etiquetas rasterizadas.
- Experience: texto e ilustración arriba; timeline debajo. Cards con padding 24–32px, separación 24px, descripción de 16px/1.7, empresa h3, rol/periodo secundarios y tags discretos. Iconos neutrales propios sustituyen visuales pendientes; sin inventar fotos de empresas. Hechos, fechas y formulación neutral de Scaleopts conservados.
- SiteBackdrop único por PageFrame: CSS radial, curvas iniciales y SVG decorativo original que continúa por todo el layout. Bandas distintas, sin repetición por sección. Capa estática, aria-hidden, sin interacción ni JS para scroll. Home conserva foto, copy, CTAs y layout; las otras secciones heredan el fondo sin rediseño.
- Hasta 700px, Experience fluye texto → ilustración → cards; timeline lateral simplificado. Hasta 900px sigue el menú móvil existente.

## Archivos

- Layout: `src/components/layout/site-backdrop.tsx`, `page-frame.tsx`, `portfolio-landing.tsx`.
- Rutas/config: `src/config/routes.ts`, `sections.ts`, redirects en `src/app/(es)/about/page.tsx` y `src/app/(en)/en/about/page.tsx`, `src/app/globals.css`.
- Features: `src/features/experience/experience-view.tsx`, `experience-card.tsx`; eliminado `src/features/about/about-view.tsx`.
- Limpieza: `src/components/ui/asset.tsx`, `src/content/profile.ts`, `interface.ts`. CityConnection se conserva porque Contact lo utiliza.
- Estilos: nuevos `src/styles/backdrop.css`, `experience.css`; actualizados `home.css`, `landing.css`, `layout.css`, `pages.css`, `components.css`.
- Tests: nuevo `tests/experience-design.spec.ts`; actualizados `landing.spec.ts`, `sidebar-design.spec.ts`, `metadata.spec.ts`.
- Asset: `public/images/experience/madrid-dublin.png`.
- Documentación: `ARCHITECTURE.md`, `docs/content/experience.md`, `profile.md`, `docs/product/portfolio-spec.md`, `routes.md`, `docs/design/design-system.md`, `references.md` y este informe.

## Validación

Typecheck, lint, format:check y build correctos tras limpiar tipos exclusivos de About. Primera ejecución completa: 31 pruebas correctas. Ejecución sobre el build final: 29 correctas; Notes ES sufrió ERR_NETWORK_IO_SUSPENDED y Notes EN timeout al capturar durante suspensión del navegador. Repetición específica de Notes ES/EN: 2 correctas. Regeneración final de Home/Experience ES/EN: 4 correctas, capturas en test-results/visual-final. Todas las pruebas del estado final han pasado, con esta incidencia de ejecución registrada; no se atribuye a un error de aplicación sin evidencia.

Capturas de Experience generadas en ES/EN a 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024 y 375×812, incluyendo la sección completa. Revisión manual de la matriz ES, mobile EN, cards completas y continuidad en Projects, Labs, Contact y Notes. Corregida separación entre SEUR y Scaleopts. Sin solapamientos ni desbordes observados. Pruebas existentes conservan axe, teclado, anchors, progreso, idioma, no-JavaScript y responsive de 320–2560px. No se midió Lighthouse ni se afirma auditoría completa de accesibilidad.

Aviso del runner NO_COLOR/FORCE_COLOR sin impacto funcional. Sin dependencias ni motion avanzado añadidos. Fotos de empresas, canales de contacto, CV, dominio y fichas publicables siguen pendientes; ningún dato se inventa.
