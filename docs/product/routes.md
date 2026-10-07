# Rutas e idiomas

## Experiencia principal

`/` y `/en` son landings continuas con un header, main y footer. Orden: `#home`, `#about`, `#experience`, `#projects`, `#labs`, `#contact`, `#notes`. Rail lateral desktop y menú móvil apuntan a anchors reales. Notes muestra una preview; su índice completo continúa en /notes.

## Rutas secundarias y compatibilidad

| Vista                 | Ruta lógica                    |
| --------------------- | ------------------------------ |
| Home                  | `/`                            |
| About (redirect)      | `/about` → `/#about`           |
| Experience (redirect) | `/experience` → `/#experience` |
| Projects              | `/projects`                    |
| Proyecto              | `/projects/[slug]`             |
| Labs (redirect)       | `/labs` → `/#labs`             |
| Contact (redirect)    | `/contact` → `/#contact`       |
| Notes / Blog          | `/notes`                       |
| Artículo              | `/notes/[slug]`                |

Todas tienen equivalentes ingleses; sus redirects apuntan a `/en#section`. Redirecciones permanentes 308 mediante permanentRedirect, porque no hay profundidad funcional ni motivo SEO para duplicar About/Experience/Labs/Contact. No se eliminan URLs de compatibilidad. `/projects` se conserva como índice futuro; `/notes` mantiene búsqueda y filtros GET. Templates `/projects/[slug]` y `/notes/[slug]` solo generan URLs published; registros actualmente vacíos, slugs desconocidos devuelven 404. También `/robots.txt`, `/sitemap.xml` y `/icon.svg`. Sitemap excluye redirects y hashes.

## ES/EN

Español sin prefijo e inglés bajo `/en`; no redirigir `/`. `localizedPath` centraliza el patrón. Root layouts con lang correcto. En la landing el selector conserva la sección predominante, incluyendo enlaces directos con hash; sin JavaScript conserva el destino inicial Home. En índices conserva vista y en detalle enlaza traducción published con mismo id o índice del otro idioma si no existe. Metadata nunca declara traducción inexistente.

## Artículos

Slug único por idioma, validación de metadata, 404 para contenido desconocido o no publicable. Registrar correspondencias de traducciones para enlaces alternativos. No publicar traducciones ficticias ni rutas vacías.
