# Estrategia SEO

## Base

Metadata centralizada en `src/lib/metadata.ts`: títulos y descripciones por vista e idioma, Open Graph, Twitter summary y noindex por defecto. `SITE_URL` es opcional y validada. localhost solo como metadataBase de desarrollo; no se emiten canonical ni hreflang públicos sin dominio confirmado. Sin imágenes OG ficticias.

Con dominio confirmado se generan canonical y hreflang es/en/x-default por cada vista. Root layouts no fijan canonical de Home para sus descendientes. Detalles usan id compartido para equivalencias; sin traducción published no declaran su hreflang. Queries de búsqueda canonicalizan al índice Notes.

Estado actual: sin dominio confirmado y SITE_INDEXABLE=false, robots bloquea crawling y sitemap vacío. Para un lanzamiento expresamente autorizado, configurar origen confirmado y SITE_INDEXABLE=true y reconstruir. Entonces robots permite crawling y sitemap genera URLs de landing, Projects y Notes por idioma (seis URLs de índice) más proyectos/notas published, excluyendo drafts. No inventar lastModified para páginas. Notas usan fecha aportada.

Templates incluyen JSON-LD CreativeWork/Article con datos reales, autor aprobado, idioma y fecha cuando corresponda. Escape de `<` para evitar cierre de script. No emitir credenciales, empresas relacionadas, métricas ni estudios no aportados.

## Contrato de Notes

Cada artículo debe soportar `title`, `description`, `slug`, idioma, canonical, Open Graph y metadata estructurada. Fechas de publicación/modificación, autor y assets se incorporan únicamente cuando estén confirmados. Preparar headings semánticos, enlaces internos y relaciones entre traducciones.

## Publicación

- Generar canonical absoluto desde el dominio confirmado y la ruta publicada.
- Open Graph coherente con título, descripción e imagen autorizada.
- JSON-LD de artículo con datos reales, sin credenciales ni fechas inventadas.
- Sitemap con URLs públicas publicadas; excluir borradores.
- Robots según entorno: impedir indexación del entorno de pruebas y permitir producción cuando se apruebe su publicación. Robots no sustituye controles de acceso.
- Alternativas ES/EN únicamente cuando ambas versiones existan.
- RSS se decidirá posteriormente; no incorporarlo en esta fase.

## Validación futura

Inspeccionar metadata renderizada, canonical, alternates, sitemap, robots, estado 404 y enlaces internos antes de publicar. No prometer ranking, tráfico o resultados SEO.

## Landing continua

Los anchors no son URLs independientes en sitemap. About, Experience, Labs y Contact son redirects hacia /#section o /en#section y quedan excluidos. Canonical de la landing sin hash; los índices y detalles conservan canonical propio.
