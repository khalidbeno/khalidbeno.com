# Estrategia SEO

## Base

Metadata de App Router centralizada en `src/lib/metadata.ts`: título, descripción temporal ES/EN, Open Graph base y noindex. `SITE_URL` es opcional, validada en `src/config/site.ts`. No hay dominio predeterminado ni imágenes OG ficticias.

Con dominio confirmado se generan canonical y hreflang `es`, `en` y `x-default` para `/` y `/en`. Sin dominio se omiten esas URLs. Las rutas futuras deben definir metadata propia con su canonical y equivalencias existentes; no heredar el canonical de la raíz.

Foundation siempre noindex: `robots.txt` bloquea crawling y sitemap devuelve una lista vacía. Al aprobar páginas públicas, implementar la activación de `SITE_INDEXABLE` junto con dominio confirmado, allow en robots y un registro de rutas publicadas para sitemap. La variable está documentada pero todavía no activa indexación por sí sola.

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
