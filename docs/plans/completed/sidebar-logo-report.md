# Sidebar + KB — cierre

8 de octubre de 2026. Alcance limitado a navegación, identidad tipográfica y relación sidebar/main. Contenido profesional, Home interno, fotografía y fondo final conservan su estado anterior.

## Cambios

La sidebar deja de estar dentro del main: PageFrame recibe navegación como región hermana y la landing reserva dos columnas reales. Anchos: 224px compacto, 256px laptop, 280–320px escritorio. Main ocupa el ancho restante, sin max-width externo de Tailwind; conserva gutters y límites editoriales interiores. Sidebar fija de 100svh con fondo hielo y división tonal mínima, sin apariencia de card.

Rail con filas grid dot/número/label y cifras tabulares. Base fina, progreso gris azulado, activo con mayor dot/peso/contraste y secundarios accesibles. Observers, progreso rAF, hashes, idioma y anchors permanecen. No se añadieron listeners de scroll ni dependencias.

LogoMark compartido exclusivamente tipográfico: peso 800, leading compacto, tracking negativo y ajuste K/B. Alineado al inicio de labels, con separación acotada antes de la lista. Enlace de inicio sin tratamiento de botón, iconos o efectos.

Hasta 900px: KB, idioma y botón Menú. Panel no modal con siete destinos, aria-expanded/aria-controls, cierre al navegar y Escape con retorno de foco. Altura limitada y scroll interno en pantallas bajas. Alternativa details en noscript mantiene navegación sin JavaScript. Top actions desktop permanecen arriba derecha, sin barra completa.

Se aplicaron jerarquía, proximidad, tipografía y materiales discretos del [Apple Design Skill](https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md), como principios sin copiar código. Kashmir no está disponible en su antigua carpeta local: inspiración estructural basada en el esquema explícito del usuario, sin afirmar comparación visual directa.

## Archivos

- `src/components/layout/page-frame.tsx`, `portfolio-landing.tsx`: región lateral y composición.
- `src/components/layout/scroll-rail-navigation.tsx`: LogoMark y label del rail.
- `src/components/layout/site-header.tsx`: logo compartido, menú móvil y fallback nativo.
- `src/components/ui/logo-mark.tsx`: marca tipográfica.
- `src/styles/landing.css`: geometría, sidebar, rail, estados y responsive.
- `tests/sidebar-design.spec.ts`: anchos reservados y teclado ES/EN, capturas.
- `tests/landing.spec.ts`, `tests/navigation.spec.ts`: pruebas adaptadas al botón y sus estados accesibles.
- `ARCHITECTURE.md`, `docs/design/design-system.md`, `responsive-rules.md`, `references.md`: decisiones vigentes.
- `docs/plans/completed/sidebar-logo-plan.md`: plan archivado.

## Validación

Typecheck, lint, format:check y build correctos. `npm test`: 29 pruebas correctas en aproximadamente 1,1 minutos. Incluye axe, navegación ES/EN, teclado, reduced motion, sin JavaScript, enlaces directos, progreso y regresiones responsive de rutas existentes. `git diff --check` correcto.

Capturas de producción ES/EN en 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024 y 375×812. Revisión visual de los seis tamaños ES, escritorio/móvil EN y panel móvil abierto: rail alineado, logo asociado, sin clipping, solapamientos ni overflow. Tests adicionales verifican 320–2560px. Capturas en test-results, ignorado por Git.

Se corrigieron durante QA el gutter móvil (4px de overflow), el max-width heredado de Tailwind y el contraste inicial de inactivos (4,23:1); la pasada final no tiene esos fallos. Solo avisos NO_COLOR/FORCE_COLOR del runner. Axe complementa la inspección; no acredita por sí solo conformidad completa. No se ejecutó Lighthouse.

## Pendientes

Fotografía autorizada, fondo final Figma y CV siguen pendientes y fuera de esta fase. No hay nueva dependencia ni publicación remota. El cambio previo de next-env.d.ts es generado por Next y alterna entre tipos dev/build; no se fuerza manualmente.
