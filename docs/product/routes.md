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

Las siete vistas existen en ES y EN. `/projects/[slug]` y `/notes/[slug]`, con equivalentes ingleses, implementan templates: solo generan URLs para contenido published. Actualmente sus registros están vacíos y todos los slugs devuelven 404. Existen también `/robots.txt`, `/sitemap.xml` y `/icon.svg`. Labs reúne prácticas y certificaciones, separando sus estados.

## ES/EN

Español sin prefijo e inglés bajo `/en`; no redirigir `/`. `localizedPath` centraliza el patrón. Segmentos bajo `(es)` y `(en)/en`, root layouts con lang correcto. Selector conserva vista; en detalle enlaza traducción published con mismo id o el índice del otro idioma si no existe. Metadata nunca declara traducción inexistente.

## Artículos

Slug único por idioma, validación de metadata, 404 para contenido desconocido o no publicable. Registrar correspondencias de traducciones para enlaces alternativos. No publicar traducciones ficticias ni rutas vacías.
