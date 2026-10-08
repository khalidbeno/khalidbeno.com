# Profundidad de Home y glass del rail

8 de octubre de 2026. Ajuste visual sobre el hero existente; sin cambios de textos, contenido, secciones, fotografía, dependencias ni comportamiento de navegación.

La versión anterior tenía blur aplicado, pero demasiado blanco tanto en la superficie como detrás de ella. Se refuerza la separación tonal perla/azul grisáceo del fondo común, con luz central para lectura y ondas con volumen suave. Las capas pasan detrás de la sidebar, permitiendo percibir la refracción difuminada del fondo en el panel. Todo se dibuja con CSS y pseudoelementos, sin capturas en producción.

Panel 16px más estrecho, separado 24px de cada borde de su reserva; transparencia variable 18–38% frente al anterior blanco 56%. Backdrop blur 24px, borde blanco tenue, highlight interior y sombra de elevación suave. No se modifica el espacio del main. Filas de 44px separadas 8px, logo de 44px y espacio de 40px antes de la lista. Grid mantiene dots/números/labels alineados. Inactivos #526278 y progreso graphite refuerzan la orientación sin pills. KB usa tracking -.055em para distinguir mejor K/B conservando una marca compacta.

Archivos: src/styles/home.css, src/styles/landing.css, docs/design/design-system.md y tests/landing.spec.ts. La prueba de idioma espera la actualización del enlace tras navegar con teclado antes de activarlo: la primera pasada detectó esa carrera asíncrona, sin cambios de runtime para resolverla.

Typecheck, lint, format:check y build correctos. Pasada final completa: 29 pruebas correctas en aproximadamente 1,3 minutos. Capturas de producción ES/EN en seis tamaños; revisión visual de 1440×900, 1280×800, 1024×768, 768×1024 y 375×812: ondas perceptibles, material translúcido, separación por sombra y sin clipping/overflow. Suite incluye axe, teclado, reduced motion, fallback sin JavaScript, progreso y regresiones responsive 320–2560px. Solo avisos NO_COLOR/FORCE_COLOR del runner.

El fondo CSS interpreta el ADN de la referencia; no es una reproducción exacta del asset Figma. Foto autorizada pendiente. Capturas en test-results, ignorado por Git. Sin Lighthouse; axe complementa revisión visual y no acredita conformidad completa.
