# Rutas e idiomas

## Mapa lógico previsto

| Vista                 | Ruta lógica        |
| --------------------- | ------------------ |
| Home                  | `/`                |
| About                 | `/about`           |
| Experience            | `/experience`      |
| Projects              | `/projects`        |
| Proyecto              | `/projects/[slug]` |
| Labs + Certifications | `/labs`            |
| Contact               | `/contact`         |
| Notes / Blog          | `/notes`           |
| Artículo              | `/notes/[slug]`    |

Solo `/` y `/en` existen como pantallas temporales, además de `/robots.txt` y `/sitemap.xml`. Las demás rutas quedan documentadas: sin placeholders vacíos ni páginas completas. Labs reúne laboratorios y certificaciones.

## ES/EN

Español principal sin prefijo: `/`, `/projects`, `/projects/[slug]`, `/labs`, `/notes`, `/notes/[slug]`. Inglés con prefijo: `/en`, `/en/projects`, `/en/projects/[slug]`, `/en/labs`, `/en/notes`, `/en/notes/[slug]`; mismo patrón para las demás vistas. No redirigir `/` a un prefijo. `localizedPath` centraliza el patrón. Al implementar las vistas, crear sus segmentos bajo `(es)` y `(en)/en`. El selector conservará equivalencia real y nunca enlazará artículos inexistentes.

## Artículos

Slug único por idioma, validación de metadata, 404 para contenido desconocido o no publicable. Registrar correspondencias de traducciones para enlaces alternativos. No publicar traducciones ficticias ni rutas vacías.
