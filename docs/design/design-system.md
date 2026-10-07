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
