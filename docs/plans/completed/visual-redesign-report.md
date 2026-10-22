# Rediseño visual — 22 octubre 2026

Rediseño implementado sobre la arquitectura existente. Vista local de producción verificada en http://localhost:3195 y http://localhost:3195/en. Sin push, publicación, cambios de remotes ni commit.

## Resultado

Dirección de `DESIGN (1).md`: tinta #222f30, hueso, blanco y lima en señales pequeñas. Inter Tight 400 y Roboto Mono 400 locales, con licencias OFL y preload. WOFF2: 22.016 + 12.680 bytes, frente a 765.288 bytes de los TTF descargados inicialmente y retirados. Sin dependencia adicional ni peticiones de fuentes externas durante runtime/build.

- Home: nombre de gran formato, CTAs de proyectos/contacto, gráfico SVG original de sistemas conectados y retrato autorizado intacto. CV pendiente en el pie del hero.
- My story permanece integrada en Experience para conservar los seis destinos. Timeline, datos e ilustración originales; nuevas superficies planas y borde de escena activa. GSAP conserva recorrido, reversibilidad, resize y fallback.
- Projects: protagonista horizontal y dos estudios verticales, mockups conceptuales identificados, tecnologías, acciones deshabilitadas y espacio para capturas auténticas. Media en flujo normal para evitar solapamientos.
- Labs: cinco áreas con evidencia contextual, preparación y aspectos por documentar. Credenciales y estados originales; sin inventar laboratorios.
- Notes: composición editorial y estado vacío; índice con búsqueda GET conservado.
- Contact oscuro y footer negro; sin canales, formularios o enlaces ficticios.
- Rail, progreso, menú móvil, hashes, rutas ES/EN, redirects, SEO y noindex conservados.

## Componentes y sistema

Reutilizados PageHero, ButtonLink, Tag, ExperienceCard, ProjectConceptCard, ProjectVisual, CertificationCard y EmptyState. Nuevos TechnicalDiagram (servidor), SkillsMap (servidor) y RevealOnScroll (frontera cliente sin contenido). Proyección técnica en technical-focus.ts con fuentes en docs/content. Tokens en tokens.css; acabado común en redesign.css sobre la geometría funcional existente.

Reveal por desplazamiento de 16px/600ms y feedback de flechas. HTML inicial visible; observer y animaciones con cleanup y reduced motion. Se retiraron los fades de texto del reveal y de Experience al detectar pérdida de contraste durante movimiento. La escena activa se expresa mediante borde/nodos/escala/desplazamiento. El gráfico técnico del hero es conceptual, no una arquitectura desplegada.

## Validación

- `npm.cmd run typecheck`: correcto.
- `npm.cmd run lint`: correcto, cero warnings de código.
- `npm.cmd run build`: correcto; 19 páginas generadas, sin cambios de rutas publicadas.
- Suite completa: **36 tests aprobados** tras integrar fuentes WOFF2 y corregir contraste.
- Tras el último ajuste exclusivamente CSS de stacking y media de proyectos: build correcto y **10 tests aprobados** de home-design, projects-design y pages.
- Prettier sobre archivos nuevos/modificados de implementación: correcto. `git diff --check`: correcto.

El primer `npm test` completó los casos pero quedó esperando al cierre de su servidor hijo en Windows; se interrumpió ese proceso propio. Las ejecuciones posteriores usaron los mismos tests contra el servidor de producción 3195, mediante configuración temporal en `test-results/qa.config.ts`, sin alterar el runner habitual. Comandos: `npm.cmd test -- --config=test-results/qa.config.ts` y después el mismo comando con `tests/home-design.spec.ts tests/projects-design.spec.ts tests/pages.spec.ts`. El test sin JS ahora utiliza baseURL en lugar de un puerto fijo. Los avisos NO_COLOR/FORCE_COLOR son ambientales.

La suite cubre navegación, teclado, anchors, cambio de idioma conservando sección, menú, redirects, contenido, SEO, 404, reduced motion, sin JS, overflow y axe. Las comprobaciones automáticas no acreditan conformidad completa de accesibilidad.

Capturas y medición adicional con `node scripts/visual-redesign.mjs`: ES/EN en 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024, 375×812 y 320×740. **14 combinaciones sin overflow horizontal del documento ni elementos de main fuera del viewport**. Capturas con fuentes e imágenes decodificadas; entradas y secciones completas a 1440/375. Artefactos en `test-results/redesign/`, ignorados por Git.

Revisión manual: Home desktop/móvil y compacto; Experience, Projects, Labs, Contact y Notes en ES/EN mediante capturas de entrada y muestras completas. Revisados particularmente Projects completo desktop ES/móvil EN, Labs completo móvil ES/desktop EN y Contact completo móvil EN. Escenas activas de Experience revisadas a 1440×900 en ES/EN, con muestras de BDS y SIRE. Corregidos tamaño del diagrama, contraste del símbolo, caption, stacking del retrato, clipping de mockups y posición de media en cards pequeñas. Sin problemas P0/P1/P2 observados en las muestras finales. No se ha medido Lighthouse, Core Web Vitals en campo, Safari/Firefox ni dispositivo físico.

## Pendientes reales

1. Fichas de proyectos con problema, contribución, tecnologías usadas y resultados documentados; capturas originales y URLs autorizadas. Bendis y Kashmir todavía no tienen evidencia en docs/content. Scaleopts mantiene su contexto neutral.
2. Laboratorios propios reproducibles y sus artefactos. Docker, Git, Linux, PostgreSQL, FastAPI y JWT no se presentan como experiencia acreditada sin evidencia.
3. Artículos originales, fechas y traducciones aprobadas.
4. Email, LinkedIn, GitHub, teléfono y CV autorizados.
5. Fecha/enlace de la credencial Google Cybersecurity y confirmación de dominio/indexación para un lanzamiento posterior.

Refero devolvió NO_SUBSCRIPTION en tres búsquedas; no se afirma investigación visual remota completada. Se trabajó con el documento aportado, capturas locales y su jerarquía. No se copiaron componentes, imágenes ni código de las referencias externas; las fuentes OFL incluyen sus licencias. Los cambios previos de package.json/package-lock.json y el archivo DESIGN aportado se preservaron. next-env.d.ts se regeneró al validar Next.
