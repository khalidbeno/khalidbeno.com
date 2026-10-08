# Sistema de diseño

## Dirección

Inspiración Apple y diseño editorial tecnológico premium: interpretar principios sin copiar apple.com ni assets. Figma aprobado y `docs/design/reference-images/` son las fuentes visuales principales. Enlaces y frames Figma pendientes; capturas disponibles.

## Prioridad

Claridad > jerarquía > contenido > movimiento > decoración.

## Principios

Mucho espacio negativo, minimalismo, jerarquía tipográfica fuerte y fotografía autorizada. Fondos muy claros, grises y azul sutil, bordes suaves y profundidad ligera. Glass solo cuando ayude a comprender estructura o estado.

## Límites

Evitar apariencia de portfolio estudiantil, template genérico, dashboard SaaS, cyberpunk, neon, gradientes agresivos y efectos gratuitos. No reinterpretar diseños aprobados.

## Tokens pendientes

`src/styles/tokens.css` prepara un conjunto pequeño integrado con Tailwind: fondos claros, texto profundo, azul grisáceo suave, bordes, radios, unidad de espaciado, contenedores, tipografía, sombra y z-index. Valores iniciales de bootstrap, no mediciones de las capturas ni decisiones finales. Fonts mediante stacks de sistema: sin descargas ni assets con licencia desconocida. Calibrar contra la referencia de cada vista antes de construirla.

Mantener entre vistas navegación, containers, tipografía, paleta, backgrounds, radios, botones, chips, sombras, glass, imágenes, iconografía, spacing y motion. No crear un estilo distinto por página. Si una referencia aprobada contradice una regla genérica, señalar el conflicto antes de decidir.

## Estados y aceptación

Documentar hover, focus, active, disabled y estados de contenido cuando correspondan. Validar legibilidad, contraste, orden visual y espacio en móvil antes de motion. No usar fotografía sin permiso ni como sustituto de contenido técnico.

## Sistema compartido implementado

| Elemento   | Regla                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Palette    | Fondo #f6f8fb, superficies blancas, azul grisáceo #e6edf7, texto #10151c y secundario #5c677b. Nada neon.                                  |
| Typography | system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; sin descargar fuentes. Home usa escala display propia.                 |
| Spacing    | Unidad .25rem; gutter fluido 1.25–4.5rem; separación entre áreas 3–6rem.                                                                   |
| Containers | Página hasta 83rem, lectura hasta 42rem; anchos fluidos y márgenes automáticos.                                                            |
| Grid       | Home 2 columnas, Experience ~40/60, Labs dos áreas; móvil en flujo único.                                                                  |
| Radii      | .75/1.25/1.75rem; pills para botones y chips.                                                                                              |
| Borders    | Líneas azul gris discretas y bordes blancos en cards claras.                                                                               |
| Shadows    | Una sombra suave; CTA primaria ligeramente elevada.                                                                                        |
| Buttons    | Primario oscuro, secundario claro; acciones reales con enlaces; controles ausentes deshabilitados y explicados.                            |
| Chips      | Stack en pills pequeñas; disciplinas principales con más peso que Networks/AI.                                                             |
| Cards      | Superficies claras translúcidas, sin blur global pesado; datos ordenados por jerarquía.                                                    |
| Navbar     | Landing: rail lateral fijo >900px; idioma/Contact arriba derecha. Header móvil compacto con details; índices secundarios conservan header. |
| Images     | Proporción reservada; next/image para assets reales. Ausencias como placeholders SVG/CSS neutros, nunca capturas.                          |
| Responsive | Colapsar grid por contenido, no escalar desktop; validar 320–2560px, textos ES/EN y teclado.                                               |

Fondos con curvas decorativas CSS y lavados tonales suaves, coherentes con capturas. No añaden animación ni ocultan texto. Datos ficticios de capturas no se reproducen. Home integra el retrato transparente autorizado por el usuario. About sigue pendiente de su foto/referencia.

## Home — refinamiento editorial

Primera pantalla compuesta aproximadamente como copy 52% / media 48% después del rail. --rail-width, --page-gutter y --content-max coordinan la reserva lateral y el contenedor; no se introducen offsets por sección. H1 desktop 64–110px según ancho, peso 700, leading 1.01 y tracking negativo; body 18–22px, leading 1.5 y tracking neutro; eyebrow de 11px con tracking positivo. En móvil se reduce escala y se conserva copy primero.

El inicio del bloque usa espacio fluido ligado al viewport, sin centrar matemáticamente. Eyebrow→nombre 32–48px; nombre→headline 14px; headline→body 32px; body→acciones 38px; acciones→chips 40px. Valores calibrados visualmente, con ajustes móviles. Headline equilibrado y nombres Madrid/Dublín unidos para evitar cortes incómodos. Copy aprobado sin cambios.

Media con el PNG transparente autorizado en public/images/hero/khaled-cutout.png, renderizado mediante next/image con dimensiones intrínsecas y object-contain. Columna derecha en desktop, alineada a la base; debajo del texto hasta 900px, con ancho máximo de 360px en tablet y 250px hasta 480px. Gap fluido de 16–32px; headline y chips limitados al ancho de su columna para evitar solapamientos. Sin marco, card ni fondo añadido; sombra de silueta muy discreta. El fondo visual del hero se resuelve en la capa decorativa común a todo el viewport, incluyendo el espacio del rail: blanco perla, azul grisáceo suave, iluminación radial y bandas curvas translúcidas CSS. Se recorta únicamente la decoración en esa capa, sin ocultar texto. Sin captura ni asset Figma en producción; el retrato conserva su proporción original. El estado disabled de CV en Home no muestra notas de desarrollo; Contact conserva su explicación.

Top actions transparentes, con material ligero individual en selector de idioma y acciones; sin barra completa. CTAs con feedback de presión scale(.98), transiciones cortas y foco visible. Chips pequeños, discretos y agrupados; Networks/AI mantienen menor peso. Reduced motion evita escala/transiciones; preferencias de contraste/transparencia refuerzan superficies.

Principios aplicados del Apple Design Skill: simplicidad con propósito, jerarquía tipográfica, consistencia espacial, respuesta inmediata, materiales funcionales y craft. Es una referencia de principios; no se copian código, assets, apple.com ni sus animaciones físicas. No se añaden librerías.

## Sidebar y símbolo de marca

Por instrucción vigente, logo y rail están separados. Header transparente ocupa todo el ancho: símbolo arriba izquierda, alineado verticalmente con idioma y Contactar arriba derecha. Reserva lateral 224px desktop, 208px laptop y 184px compacto; main conserva gutters editoriales. Rail fijo transparente desde 100px bajo el header hasta 24px del borde inferior, sin card, borde, sombra ni blur de panel. Lista distribuida en toda la altura disponible, con línea de 1px y dots/números/labels en grid. Fondo aprobado de ondas visible por detrás sin cambios. Pantallas bajas permiten scroll de la navegación.

LogoMark utiliza exclusivamente el símbolo aportado por el usuario en Group 1.png: PNG transparente de 51×58px, copiado sin cambios a public/brand/logo-symbol.png. Sin texto KB, nombre visible, fondo añadido, badge, filtros, crop o redibujo. Tamaño 46px de alto en header desktop, 32px en header móvil y 36px en índices; ancho automático conserva proporción. Enlace con nombre accesible existente, imagen decorativa de alt vacío. src/config/brand.ts centraliza ruta y dimensiones para sustituir por SVG autorizado; favicon usa el mismo PNG original. Rail mantiene spacing, grid, dots y estados.

Hasta 900px se oculta la región y aparece símbolo / ES-EN / Menú. Botón real con aria-expanded y aria-controls, panel desplazable en poca altura, cierre al navegar y Escape; foco visible y destinos nativos. Sin JavaScript se ofrece details/summary. En pantallas bajas la sidebar puede desplazarse verticalmente para no perder destinos.
