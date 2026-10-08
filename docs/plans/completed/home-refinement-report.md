# Home — cierre de refinamiento visual

8 de octubre de 2026. Alcance: primera sección de la landing continua, en español e inglés.

## Problema y resultado

La composición anterior tenía reglas de Home superpuestas, una silueta literal, saltos poco naturales en el titular, un cuerpo demasiado ancho y chips y mensajes de desarrollo con demasiado protagonismo.

Home ahora tiene una distribución editorial aproximada 44/56, nombre dominante, cuerpo acotado y un ritmo definido entre eyebrow, nombre, titular, texto, acciones y chips. Madrid y Dublín se mantienen juntos; en móvil forman una línea semántica propia. Se retiró la silueta y se preparó un área abstracta clara para la futura fotografía autorizada. Los controles superiores son ligeros y el rail continúa funcionando.

El CV permanece deshabilitado sin un aviso de desarrollo dentro de Home. La explicación de Contact conserva su comportamiento. Las acciones tienen respuesta breve al pulsar y respetan reduced motion. No se cambiaron hechos profesionales, dependencias ni diseños de las demás secciones. La familia tipográfica global pasa al stack de sistema solicitado.

## Archivos

- `src/features/home/home-view.tsx`: composición semántica, ciudades y área media.
- `src/styles/home.css`: presentación de Home y sus variantes responsive y de accesibilidad.
- `src/styles/tokens.css`: fuente de sistema.
- `src/styles/landing.css`: variables de layout y retirada de reglas antiguas de Home.
- `src/styles/pages.css`: retirada de estilos antiguos de Home.
- `src/app/globals.css`: importación de estilos.
- `src/components/layout/site-header.tsx`: identificación de la sección para el tratamiento superior de Home.
- `src/components/sections/cv-action.tsx` y `src/components/ui/button.tsx`: aviso opcional y descripción accesible del control deshabilitado.
- `tests/home-design.spec.ts`: composición ES/EN, cinco tamaños, overflow, CV, media y teclado.
- `docs/design/design-system.md` y `docs/design/references.md`: decisiones visuales y referencia externa.
- `docs/plans/completed/home-refinement-plan.md`: plan archivado.

Los cambios generados previamente en AGENTS.md se conservaron.

## Principios aplicados

Se leyó completo el [Apple Design Skill solicitado](https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md). Se aplicaron jerarquía tipográfica, proximidad, espacio, respuesta inmediata al pulsar y transparencia discreta con alternativas accesibles. La referencia orienta decisiones; no se copió su código ni se añadieron librerías de motion.

## Comprobación

Se generaron capturas de producción ES/EN en 1440×900, 1920×1080, 1280×800, 768×1024 y 375×812. Se revisaron visualmente los cinco tamaños en español y escritorio/móvil en inglés frente a la referencia aprobada. El nombre, las acciones y los chips quedan visibles en la primera pantalla; las ciudades no se separan y no hay desbordamiento horizontal.

Capturas y resultados permanecen en `test-results/`, excluido de Git. Las pruebas automatizadas cubren ambas traducciones en los cinco tamaños y regresiones de rutas, navegación, accesibilidad y contenido.

- `npm run typecheck`: correcto.
- `npm run lint`: correcto.
- `npm run format:check`: correcto.
- `npm run build`: correcto.
- `npm test`: 27 pruebas correctas, aproximadamente 1,1 minutos.

Solo aparecieron avisos del runner sobre NO_COLOR/FORCE_COLOR; no errores de aplicación. No se ejecutó Lighthouse.

## Pendiente autorizado para otra fase

La fotografía real y el fondo definitivo de Figma siguen pendientes. El área media actual es una base ligera, no una reproducción final de esos recursos. El archivo descargable del CV también sigue pendiente; no se inventó un documento. No se implementaron otras páginas ni se incorporaron las capturas al bundle.
