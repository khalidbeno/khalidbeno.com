# Experience — scroll storytelling

13 de octubre de 2026. Composición aprobada 45/55, contenido profesional y PNG conservados. Sin push ni commits.

## Pin y ritmo

Sticky nativo bajo el header (top: 76px). GSAP 3.15.0 + ScrollTrigger con scrub true traduce el scroll del documento en estado reversible. No hay scrollbar interna ni handlers que bloqueen wheel/touch. Frontera cliente aislada en ExperienceMotion; contenido en servidor. gsap.context y matchMedia restauran estilos, triggers y listeners al desmontar o cambiar tamaño/preferencia. Refresh tras imagen, fuentes y resize; overflow-anchor desactivado en el stage para evitar interferencias del navegador.

Cuatro experiencias × 0.65 viewport + 0.4 viewport de intro/transición = tres viewports de recorrido virtual. Altura exterior: ese recorrido más un stage de viewport menos 76px.

| Viewport  | Recorrido | Stage  | Sección |
| --------- | --------- | ------ | ------- |
| 1920×1080 | 3240px    | 1004px | 4244px  |
| 1440×900  | 2700px    | 824px  | 3524px  |
| 1280×800  | 2400px    | 724px  | 3124px  |

## Escenas

Intro → BDS/Dublín → conexión Dublín-Madrid → SIRE/Madrid → SEUR → Proyectos técnicos. La ruta SVG progresa por stroke-dashoffset; la conexión original del raster sigue visible como base. Protagonismo de etiquetas y luz local cambian gradualmente. Floating suave del conjunto y parallax de 4px, con labels prácticamente estables. El raster es único: no se separan las islas ni se implementa flotación independiente entre ambas.

Cards activas a opacity 1/scale 1; secundarias a .55/.98 y 8px de desplazamiento. Conservan contenido y estilo aprobado. La composición del timeline se desplaza por una ventana visual recortada, sin scroll interno: contexto cercano visible y contenido completo en el DOM. No se afirma que las cuatro cards completas quepan simultáneamente en todos los viewports. Línea de progreso, nodos completados/activos y fechas siguen el scroll. Acceso al enlace de proyectos por teclado lleva su card al área visible sin exigir recorrer toda la secuencia.

## Salida y navegación

Último 12%: stage asciende hasta 22px y opacity .82; Projects se anticipa con un desplazamiento moderado que se restaura después de la liberación sticky. Fondo continuo sin cambios de página. Rail global conserva el observer original; la sección exterior mantiene Experience activa durante el pin y cambia a Projects al cruzar su banda de lectura. No se duplica lógica de progreso global.

## Fallbacks

Storytelling solo desde 1101px y 650px de alto sin reduced motion (ajuste posterior documentado abajo). Hasta 1100px: una columna, texto → islas → cards. Pantallas bajas: flujo normal. Reduced motion elimina pin, scrub, floating y desplazamientos. Sin JavaScript: HTML completo, labels y ruta estática del PNG, sin altura virtual ni contenido oculto.

## Validación final

- npm run typecheck: correcto.
- npm run lint: correcto.
- npm run format:check: correcto.
- npm run build: correcto.
- npm test: 34 pruebas aprobadas (2.3m), suite completa.
- git diff --check: correcto.

Runner con configuración temporal ignorada por Git: mismo conjunto de tests, Edge instalado mediante executablePath y servidor del build final en localhost:3192. No se modificó playwright.config.ts. Matriz ES/EN: 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024 y 375×812. Verificados pin, escenas, subida reversible, rail, salida, resize, reduced motion, no JavaScript, anchors, cambio de idioma, teclado, no overflow y axe de la suite existente. Capturas en test-results/story-approved; revisión visual de escenas y fallbacks, además de muestras de salida al 95%, 99.5% y después de liberar. No se midió Lighthouse ni se afirma conformidad completa de accesibilidad.

Se corrigieron una carrera de refresh tras resize y una regresión de idioma provocada por una actualización global del rail demasiado frecuente. La suite final pasó después de ambas correcciones; no se ocultan los fallos previos.

## Archivos

src/features/experience/experience-view.tsx, experience-motion.tsx; src/styles/experience.css; tests/experience-design.spec.ts, experience-story.spec.ts; package.json/lockfile; AGENTS.md, ARCHITECTURE.md, docs/design/design-system.md, motion-system.md y este informe. El rail termina sin cambios respecto al estado anterior.

Referencia técnica: [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [matchMedia](<https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/>), [context](<https://gsap.com/docs/v3/GSAP/gsap.context()/>).

## Ajuste posterior — laptop y zoom al 100%

Breakpoint anterior: min-width 1101px / min-height 800px. Nuevo: min-width 1101px / min-height 650px, siempre con prefers-reduced-motion: no-preference. El zoom modifica el viewport CSS disponible; con menos de 800px verticales el matchMedia anterior no activaba el controlador. No se usa devicePixelRatio, detección de zoom, userAgent, CSS zoom ni scale global.

Hasta 799px de altura se ajustan únicamente padding del stage, separación eyebrow/heading/copy y tamaño de la ilustración para mantener texto e islas dentro del viewport. Se conserva tipografía, grid 45/55, contenido y responsive. Por debajo de 650px o hasta 1100px de ancho se mantiene el flujo normal. Se comprobó también el borde 1101×650: narrativa dentro del viewport.

Matriz de escenas ES/EN ampliada: 1280×650, 1366×650, 1440×700, 1440×750, 1536×720 y 1920×800; más la matriz original y fallback 1440×600. Cards activas y narrativa dentro del viewport, rail, subida/reversión, salida a Projects, reduced motion y overflow.

Zoom nativo de Chrome instalado, en modo headless con perfiles temporales aislados: 90%, 100% y 110%, seis resoluciones × dos idiomas × tres zooms = 36 comprobaciones correctas. Se verificó que el viewport CSS correspondía al zoom, sin emularlo con transform ni pinch zoom. Perfiles de pruebas en test-results; no se modifica el perfil del usuario. Método basado en las [preferencias nativas de zoom de Chromium](https://github.com/chromium/chromium/blob/main/chrome/browser/ui/zoom/chrome_zoom_level_prefs.cc).

Al 100% y 90% se activa el pin en las seis resoluciones. Al 110%, 1280×650 y 1366×650 pasan a 591 CSS px de alto; 1440×700 pasa a 636 CSS px: fallback normal deliberado. 1440×750, 1536×720 y 1920×800 mantienen pin. Sin overflow en las 36 combinaciones. Resultados en test-results/chrome-zoom-results.json; capturas Chrome por zoom/resolución y capturas de todas las escenas ES/EN. El control nativo de ventanas no estuvo disponible; la validación de zoom se realizó con Chrome real headless, no con la UI interactiva del perfil del usuario.

La suite detectó un fallo intermitente de la prueba de idioma: locator.click reposicionaba la caja original de un header sticky, desplazando el scroll antes del click. La prueba usa ahora las coordenadas observadas del enlace visible, sin cambiar la navegación de producción.

Validación del ajuste: typecheck, lint, format:check y build correctos. Suite final: 33 pruebas correctas (3.1m) y Home ES interrumpida por ERR_NETWORK_IO_SUSPENDED durante suspensión del equipo. Repetición específica de Home ES: 1 prueba correcta (10.4s). Las 34 pruebas del estado final han pasado contando esa repetición; no se presenta como una ejecución única sin incidencias. Chrome: 36 comprobaciones de zoom correctas. Servidor final: localhost:3193. Artefactos: test-results/laptop-verified, laptop-home-retry y chrome-zoom-results.json.
