# Logo superior y rail integrado

8 de octubre de 2026. Se sustituye por instrucción del usuario el panel glass anterior por navegación transparente de altura completa. El contenido y fondo aprobado de Home se conservan.

LogoMark aparece únicamente en SiteHeader: esquina superior izquierda, alto 46px en desktop, misma línea central que ES/EN y Contactar. Header ocupa ambas columnas del grid, sin barra visual completa. El símbolo original conserva proporción/transparencia; enlace nativo a #home en la landing. ScrollRailNavigation ya no contiene logo.

Rail fijo desde y=100px (24px bajo header) hasta 24px del borde inferior del viewport. Sin superficie, borde, sombra, blur, radio ni card. Lista distribuida en toda la altura con línea fina, dots, números tabulares y labels; estados activos, progreso e IntersectionObserver intactos. Reserva lateral reducida a 224px desktop, 208px laptop y 184px compacto. Main más próximo al rail, sin perder gutters ni ancho útil. Menú tablet/móvil existente hasta 900px; pantallas bajas permiten scroll del rail.

Archivos: src/components/layout/site-header.tsx, src/components/layout/scroll-rail-navigation.tsx, src/styles/landing.css, tests/sidebar-design.spec.ts, ARCHITECTURE.md y docs/design/design-system.md. La prueba conserva geometría y teclado, ajustando el mínimo de reserva lateral a la nueva composición.

Lint, typecheck, build y formato correctos; git diff --check sin errores. Suite completa: 29 pruebas correctas en aproximadamente 1,2 minutos. Incluye ES/EN, navegación/hash/progreso, teclado, axe y responsive 320–2560px. Capturas ES/EN generadas en seis tamaños, revisadas visualmente en español a 1440×900, 1280×800, 1024×768, 768×1024 y 375×812. Sin clipping, overflow o solapamientos. Solo avisos NO_COLOR/FORCE_COLOR del runner. No Lighthouse.

Pendientes fuera de esta fase: foto autorizada y versión SVG original del símbolo. No se modifican textos, dependencias ni contenido profesional; ninguna captura forma parte del runtime.
