# Hero común y sidebar flotante

8 de octubre de 2026. Ajuste visual autorizado que sustituye la columna sólida gris de la fase anterior. Sin cambios de texto, estructura de secciones, fotografía, componentes de comportamiento o arquitectura.

## Implementación

`src/styles/home.css`: la capa decorativa existente site-backdrop ocupa el primer viewport completo, desde el borde izquierdo hasta el derecho. Fondo perla/azul grisáceo mediante iluminación radial tenue y dos bandas curvas translúcidas con pseudoelementos CSS. La decoración se recorta en su propia capa, sin afectar contenido. Se elimina el fondo particular de Home y las curvas del área media para evitar universos separados. No se usan capturas, imágenes de referencia como assets ni dependencias.

`src/styles/landing.css`: rail fijo como panel flotante centrado verticalmente, separado 16px del lateral, con ancho de la reserva menos 32px. Altura determinada por contenido y limitada al viewport; blanco al 56%, backdrop blur 18px, borde sutil, radio 22px y sombra suave. Logo 40px, separación de 32px antes de navegación y filas de 44px con gap 4px. Alineación grid conservada, sin halo alrededor de dots. Fallback sólido para reduced transparency/contrast y scroll interno para pantallas bajas.

Main conserva su reserva lateral, composición, ancho, textos, CTA y espacio para futura foto. Progreso, IntersectionObserver, enlaces directos, selección activa y menú móvil no cambian. En tablet/móvil el rail continúa oculto, con fondo común y menú compacto.

`tests/sidebar-design.spec.ts`: se actualiza la comprobación de la geometría: panel flotante dentro del viewport, sin solapamiento con main, en lugar de altura sólida de 100svh. Resto de cobertura conservada.

`docs/design/design-system.md`: se registra la nueva dirección del fondo y panel, sustituyendo la regla anterior de columna sólida.

## Verificación

- Typecheck, lint, format:check y build correctos.
- Suite completa: 29 pruebas correctas en 50,2 segundos. Incluye ES/EN, teclado, navegación sin JavaScript, reduced motion, progreso, hashes, axe y regresiones responsive.
- Capturas generadas ES/EN en 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024 y 375×812. Revisión visual de los cinco tamaños solicitados en español: fondo común, panel flotante, jerarquía y ausencia de clipping/overflow. Capturas ignoradas en test-results.
- Pruebas generales cubren además anchos 320–2560px.
- Avisos del runner NO_COLOR/FORCE_COLOR, sin errores de aplicación. No se ejecutó Lighthouse; axe no acredita por sí solo conformidad completa.

La foto final autorizada sigue pendiente. El fondo actual reproduce el ADN visual mediante CSS; no constituye importación ni reproducción exacta de un asset final de Figma.
