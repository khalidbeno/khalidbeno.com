# Plan autónomo nocturno

Autorización: instrucción del usuario «MODO AUTÓNOMO NOCTURNO — PORTFOLIO KHALED BENO», recibida el 7 de octubre de 2026. Sustituye el límite anterior de no construir Home. Sin push ni modificación de remotes.

## Auditoría
Runtime Next.js 16.4 / React 19.3, TypeScript strict, Tailwind 4, ESLint 9, Prettier, MDX. Dos pantallas temporales y SEO noindex. Seis capturas aprobadas; About ausente. Sin assets de producción ni datos de contacto autorizados. No había commits. Bootstrap revalidado con typecheck, lint y build antes de implementar.

## Fases
1. Registrar nuevos hechos personales en docs/content y normalizar Home a `01-home.png` sin sobrescribir archivos.
2. Sistema compartido: tokens, navegación, footer, botones, chips, containers y composición editorial. Conservar root layouts por idioma.
3. Capa de contenido tipada con trazabilidad y traducción fiel ES/EN.
4. Implementar y validar, en orden: Home, About, Experience, Projects, Labs + Certifications, Contact, Notes.
5. Templates de detalle de proyecto y artículo MDX; solo entradas reales aprobadas pueden publicarse. Slugs desconocidos y drafts devuelven 404.
6. Pruebas por ruta/idioma, responsive 320/375/768/1024/1280/1440/1920/2560, teclado, axe y metadata; revisión de screenshots, typecheck, lint, formato, build.
7. Informe, commits locales de fases validadas y estado Git limpio.

## Bloqueos y tratamiento
- About sin captura: componer vista sencilla según estructura textual autorizada y sistema compartido; fidelidad a About pendiente de referencia.
- Retrato, fotos de empleadores y visuales de proyectos ausentes: placeholders neutros construidos en SVG/CSS, sin recortar capturas ni simular fotografías reales.
- CV y contacto: controles deshabilitados/estados honestos; no usar datos de la captura ni configuración Git como autorización de publicación.
- Proyectos, labs y artículos sin fichas reales: estados vacíos y templates, sin copiar casos de ejemplo de capturas como trabajo realizado.
- Scaleopts: solo contexto neutral, sin tecnologías, fechas ni clientes no confirmados.
- Dominio pendiente: noindex por defecto y URLs públicas solo con SITE_URL confirmado. Fallback localhost para desarrollo documentado, no dominio de producción supuesto.
- Avisos de dependencias de lint ya registrados en phase-1-bootstrap.md; no forzar downgrade ni instalar UI/motion.

## Lectura visual
Home: hero amplio a dos columnas, nombre de gran escala, subtítulo fuerte, dos CTAs pill, chips bajos, fotografía ocupando la derecha. Header fino con KB, navegación central y lenguaje a la derecha.
Experience: intro y conexión Madrid–Dublín a la izquierda (~40%), timeline y cards horizontales a la derecha; bordes finos, superficie translúcida, imágenes cuadradas y chips discretos.
Projects: hero superior, gran card destacada seguida de dos cards menores y proceso horizontal. Sin datos reales se preservan composición y proceso mediante estado vacío, no casos ficticios.
Labs: hero y disciplinas, dos áreas de igual estructura separadas por línea; credenciales con estado claramente diferenciado. Labs vacío hasta recibir evidencia.
Contact: hero editorial, gran panel dividido entre canales e intereses, conexión internacional a la derecha y disponibilidad inferior. Datos de la captura no son fuente de verdad.
Notes: hero con visual de documento, búsqueda/filtros, destacado y tres cards, proceso de artículo inferior. Sin artículos aprobados se muestra estado vacío sin cards ficticias.

## Conflictos menores identificados
Las capturas incluyen acentos más saturados, fondos ondulados y glass que la regla genérica limita. Se siguen sus superficies claras y curvas muy suaves, manteniendo acentos legibles y glass solo en panels. No se añaden glow ni efectos constantes. Las capturas incluyen datos/casos ilustrativos; las reglas de veracidad prevalecen sobre su texto.
