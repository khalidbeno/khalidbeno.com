# Projects — referencia aprobada

14 de octubre de 2026. Adaptación de docs/design/reference-images/04-projects.png al ancho disponible junto al rail existente. Sin commits ni push.

## Composición

Titular negro y segunda línea gris azulada; subtítulo y detalle editorial discreto. Una card horizontal de Inventory, dos cards inferiores de Cloud y Security, banda de siete pasos. Fondos translúcidos, bordes finos, chips compactos y CTA oscuras. Dashboard propio en HTML/CSS; infraestructura y seguridad en SVG propio. No se incorporan capturas de referencia ni assets externos. Las ilustraciones son estilizadas: no se afirma equivalencia pixel a pixel.

Desde 1101px las cards inferiores comparten fila; hasta 1100px se apilan. Hasta 900px se apila el dashboard bajo el texto; en móvil las ilustraciones inferiores pasan al flujo. Hover suave solo con puntero preciso; reduced motion elimina desplazamientos.

Rail, logo, header, navegación, Home y Experience conservan su implementación. Import CSS añadido y reglas nuevas acotadas a Projects. El componente de proceso solo ajusta las dos descripciones solicitadas.

## Contenido pendiente

La fuente documental no confirma estos tres casos como proyectos personales realizados. Se muestran con etiqueta Concepto visual y CTA deshabilitadas. No se inventan fichas, URLs, clientes, fechas, resultados o métricas. Se omite reales del microcopy hasta confirmar autoría. El registro published permanece vacío. Pendientes: confirmación de los casos, documentación y destinos de enlaces.

## Archivos de esta fase

- src/features/projects/projects-view.tsx
- src/features/projects/project-concept-card.tsx (nuevo)
- src/features/projects/project-visual.tsx (nuevo)
- src/content/project-concepts.ts (nuevo)
- src/styles/projects.css (nuevo)
- src/app/globals.css
- src/components/sections/project-process.tsx
- docs/content/projects.md
- docs/design/design-system.md
- ARCHITECTURE.md
- tests/projects-design.spec.ts (nuevo)
- Este informe.

Los cambios previos de Experience permanecen en el árbol de trabajo; no son parte de esta fase.

## Validación

Typecheck, lint y build correctos. Matriz nueva de Projects: 2 pruebas aprobadas, 24 combinaciones de idioma/ruta/resolución. Landing y /projects en ES/EN: 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024 y 375×812. Verificadas composición, ausencia de overflow, semántica, acciones pendientes y ausencia de errores cliente. Axe en 1440 y 375 para ambas rutas/idiomas. Revisión manual de capturas ES en los seis tamaños y banda inferior a 1920.

Se corrigió un contraste insuficiente detectado por axe en el dashboard. Un primer runner temporal estaba dentro de test-results y Playwright lo eliminó; se trasladó fuera de su directorio de salida. Estos fallos se corrigieron antes de la ejecución aprobada. No se afirma auditoría completa de accesibilidad ni Lighthouse.

Regresiones seleccionadas: 18 pruebas aprobadas en una ejecución (3.0m): contenido/MDX, Home, navegación continua, redirects, scroll nativo, storytelling de Experience ES/EN y páginas Home/Projects/Notes. Sumadas a las dos nuevas pruebas: 20 pruebas aprobadas. No se ejecutó la suite completa. format:check y git diff --check correctos. Servidor del build final: http://localhost:3195/#projects. Capturas conservadas en test-results/projects-reference; configuración temporal retirada al finalizar.
