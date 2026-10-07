# Khaled Beno — portfolio

Bootstrap técnico ES/EN. Leer primero [AGENTS.md](AGENTS.md) y su orden obligatorio de documentación.

## Desarrollo

Requiere Node.js >=20.9 y npm.

```sh
npm install
npm run dev
```

`/` muestra la pantalla temporal en español y `/en` en inglés. No son el diseño final de Home.

## Validación

```sh
npm run typecheck
npm run lint
npm run format:check
npm run build
npm run start
```

Copiar `.env.example` a `.env.local` solo si se necesita configuración local. `SITE_URL` permanece vacío hasta confirmar el origen público. Las pantallas temporales no permiten indexación; sitemap vacío. MDX configurado sin artículos ficticios. Referencias visuales solo en documentación, fuera de `public/`.
