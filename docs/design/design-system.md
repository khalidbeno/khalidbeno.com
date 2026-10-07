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
| Typography | Stack Arial/Helvetica local; H1 fluido 2.4–3.8rem, tracking editorial moderado, Home de mayor escala. Fuentes definitivas pendientes.      |
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

Fondos con curvas decorativas CSS y lavados tonales suaves, coherentes con capturas. No añaden animación ni ocultan texto. Datos ficticios de capturas no se reproducen. La fidelidad fotográfica y About siguen pendientes de assets/referencia.
