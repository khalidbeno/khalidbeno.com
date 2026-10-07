# Accesibilidad

## Requisitos

HTML semántico, landmarks claros y headings jerárquicos. Navegación completa con teclado, focus visible, contraste suficiente y alt significativo para imágenes informativas; alt vacío para decorativas. ARIA solo cuando la semántica nativa no resuelva la necesidad.

## Interacción

Usar enlaces para navegación y botones para acciones. Controles con nombre accesible. En menús/dialogs gestionar foco, cierre y retorno cuando corresponda. No depender de hover, color o animación para comprender contenido.

## Motion y responsive

Respetar `prefers-reduced-motion`. Validar zoom, reflow, lectura en móvil, objetivos táctiles y orden del DOM. Texto ES/EN con `lang` correcto; cambios de idioma claros.

## Validación por feature

Inspección semántica, recorrido de teclado, contraste, reduced motion y comprobación responsive; herramientas automáticas complementan la revisión manual. Registrar errores y alcance real. Fase 0 no contiene UI, por lo que no se afirma conformidad visual ni accesibilidad de páginas inexistentes.
