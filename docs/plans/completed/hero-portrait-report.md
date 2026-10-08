# Hero — retrato autorizado

8 de octubre de 2026. Integración limitada al hero de / y /en, conservando textos, fondo, header y rail.

## Cambios

- Copia exacta del PNG del usuario a `public/images/hero/khaled-cutout.png`. SHA-256 coincide con el original; transparencia y dimensiones 1145 × 1374px conservadas.
- `HomeSection`: next/image con alt ES/EN, dimensiones intrínsecas, sizes y preload. Sin nueva frontera cliente ni dependencias.
- Grid desktop 52% texto / 48% retrato, gap fluido 16–32px. Headline y chips dejan de desbordar su columna. Retrato a la base, object-contain y sombra discreta de silueta; sin marco ni superficie añadida.
- Hasta 900px, orden texto → CTAs/chips → foto centrada. Máximo 360px de ancho en tablet y 250px hasta 480px, sin prolongar innecesariamente la imagen en móvil.
- Fuente de contenido y design system actualizados para registrar el asset autorizado. About conserva su foto pendiente.

## Validación

- `npm run typecheck`, `npm run lint`, `npm run build`: correctos.
- `npm test`: 29 pruebas correctas, incluida carga efectiva del retrato ES/EN. Cobertura existente de anchors, rail/progreso, teclado, menú móvil, sin JavaScript, reduced motion, semántica, axe y overflow entre 320–2560px.
- Capturas inspeccionadas: ES 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024 y 375×812; EN 1440×900 y 375×812. Revisión adicional del hero móvil completo en servidor dev para ver cara y torso por debajo del viewport. Fotos sin solapamientos con texto/CTAs, proporción conservada y navegación intacta.
- Capturas e informes en `test-results/` y `playwright-report/`, ignorados por Git.
- Aviso del runner sobre NO_COLOR/FORCE_COLOR; sin errores de aplicación. Axe no sustituye una auditoría completa de accesibilidad; no se midió Lighthouse.

No se ha publicado ni enviado a un remoto. La foto solicitada ya está integrada; no se retocó el PNG.
