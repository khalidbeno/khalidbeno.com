# Notes — fuente de verdad

No hay artículos aprobados para publicar. Los títulos de la captura son ejemplos visuales, no textos escritos por Khaled.

## Contrato

MDX local de confianza, id/slug estable, idioma, título, descripción, fecha confirmada, tags, estado draft/published y fuente. Reading time derivado del cuerpo real. Traducciones relacionadas por id, no por slug supuesto. Canonical solo con dominio confirmado; JSON-LD desde datos reales y escaping seguro.

## Publicación

Registro tipado en `src/content/notes.ts`, inicialmente vacío. No ejecutar MDX remoto no confiable. Template en `docs/templates/note.mdx.example`, fuera de runtime y marcado draft. Drafts excluidos de listado, sitemap, enlaces y detalle público.

## TODO

Recibir artículo original, tags, fecha y traducción aprobada. Validar headings, enlaces internos, autor y metadata antes de publicarlo. RSS no solicitado.
