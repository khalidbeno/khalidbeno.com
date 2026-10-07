# Landing continua y navegación lateral

Autorización: instrucciones FASE 2 y CAMBIO DE DIRECCIÓN, 8 de octubre de 2026. La segunda sustituye la navbar horizontal de escritorio por un rail lateral. Sin GSAP, scroll hijacking, dependencias nuevas, contenido ficticio ni publicación remota.

## Auditoría

Estado inicial Git limpio. Foundation válida, siete features con PageFrame propio, dos root layouts ES/EN, registros de proyectos/labs/notas vacíos. Seis referencias estudiadas; About y assets siguen pendientes. Se conservan las composiciones y datos aprobados.

## Implementación

1. Extraer sections sin header/main/footer y componerlas en orden home, about, experience, projects, labs, contact, notes.
2. Mantener índices Projects/Notes y detalles. Redirigir About/Experience/Labs/Contact a su anchor, sin duplicar vistas.
3. Rail fijo desktop >900px con anchors, números, dots, estado IntersectionObserver y progreso real mediante CSS custom property y requestAnimationFrame.
4. Header móvil sticky y acciones superiores ligeras; conservar sección al cambiar idioma. Smooth scroll nativo y reduced motion inmediato.
5. Revisar spacing, semántica, responsive, teclado, hashes y SEO/sitemap. Ejecutar typecheck, lint, formato, build y Playwright antes del cierre.

## Referencias y alcance visual

Las capturas conservan prioridad para composición, paleta y jerarquía; la instrucción actual cambia expresamente su navegación horizontal. No se replica la estética de Kashmir ni se leen/copían sus assets. About conserva un párrafo, retrato pendiente, conexión Madrid–Dublín y CTA.
