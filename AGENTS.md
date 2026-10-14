# Reglas operativas

## Lectura obligatoria antes de modificar

1. Este `AGENTS.md`.
2. `docs/product/portfolio-spec.md`.
3. `docs/design/design-system.md`.
4. Todos los archivos de `docs/content/`.
5. `ARCHITECTURE.md`.
6. `docs/plans/active/*` cuando exista un plan activo.

Consultar también las reglas de ingeniería, responsive, motion y SEO relevantes para la tarea.

## Límites

- Fase completada: landing continua ES/EN con rail lateral y progreso de scroll. Consultar `docs/plans/completed/continuous-scroll-report.md`; el informe nocturno conserva el histórico de implementación. GSAP/ScrollTrigger autorizados exclusivamente para Experience storytelling; sin push ni cambios de remotes. Commits locales solo tras validar.
- `docs/content/` es la única fuente de verdad personal. No inventar experiencia, empresas, tecnologías, certificaciones, proyectos, fechas, cargos, resultados ni métricas. Marcar ausencias como pendientes.
- Figma aprobado y `docs/design/reference-images/` son las fuentes visuales principales. Antes de implementar una página, estudiar su captura, grid, spacing, tipografía y composición. No reinterpretar radicalmente el diseño. Si existe conflicto con una regla genérica, señalarlo antes de decidir.
- Capturas solo como documentación: no copiarlas a `public/`, incluirlas en el bundle ni utilizarlas como fondo para reproducir la UI.
- Cambios mínimos dentro del alcance; sin refactors ajenos, repositorios anidados ni submódulos no solicitados.
- No copiar código, componentes, textos ni assets de referencias externas.

## Flujo por feature

Leer documentación → auditar sin modificar → comprobar `git status` → identificar archivos afectados → explicar implementación → implementar el mínimo cambio coherente → verificar responsive y accesibilidad → typecheck → lint → build → revisar errores, `git diff` y `git status` → informar cambios y límites de validación.

Si no existen herramientas de validación, indicar que no se ejecutaron y por qué. No ocultar errores ni afirmar comprobaciones no realizadas. Motion solo después de validar layout y responsive.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
