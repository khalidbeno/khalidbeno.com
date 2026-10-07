# Khaled Beno — portfolio

Portfolio ES/EN para recruiters y responsables técnicos. Leer primero [AGENTS.md](AGENTS.md) y su orden obligatorio de documentación.

## Desarrollo

Requiere Node.js >=20.9 y npm.

```sh
npm install
npm run dev
```

Español en `/`, inglés en `/en`. Vistas: Home, About, Experience, Projects, Labs + Certifications, Contact y Notes. Projects, Labs y Notes conservan estados vacíos hasta disponer de fichas reales. Retrato, CV y canales de contacto pendientes, sin datos inventados.

## Validación

```sh
npm run typecheck
npm run lint
npm run format:check
npm run build
npm test
npm run start
```

Pruebas Playwright/axe requieren Edge instalado y build previo; arrancan su propio servidor en 3187 y guardan screenshots/informe en directorios ignorados. No afectan al runtime de producción.

Copiar `.env.example` a `.env.local` solo si se necesita configuración local. `SITE_URL` vacío hasta confirmar origen. Noindex por defecto y sitemap vacío. SITE_INDEXABLE=true solo tras aprobación de lanzamiento y con dominio confirmado; reconstruir después de cambiar estas variables.

MDX local de confianza, sin artículos ficticios. Template fuera de runtime en docs/templates/note.mdx.example. Proyectos y notas draft no crean URLs. Capturas solo como documentación, fuera de public y del bundle. Ver [arquitectura](ARCHITECTURE.md) e [informe nocturno](docs/plans/completed/overnight-build-report.md).
