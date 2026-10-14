# Sistema de motion

## Estado

Landing continua con smooth scroll nativo y transiciones discretas de color/escala en el rail. GSAP + ScrollTrigger autorizados para Experience storytelling, aislados del resto de la aplicación. Experience incorpora microanimaciones nativas autorizadas en el refinamiento: reveal de cards al entrar, floating leve, niebla, punto de recorrido y pulso de ubicación. Storytelling desktop y profundidad de pocos píxeles autorizados en la fase siguiente, descrita abajo.

## Usos con propósito

Scroll storytelling, reveal progresivo, parallax muy suave, cambios de profundidad, progreso de scroll discreto, microinteracciones y transiciones de estado. Cada efecto debe explicar qué mejora para lectura, orientación o feedback.

## Restricciones

Sin movimiento constante, animaciones largas, spring excesivo, scroll hijacking ni efectos que dificulten leer. Contenido comprensible y disponible sin animación. No ocultar permanentemente contenido si JavaScript falla.

## Accesibilidad e integración

Respetar `prefers-reduced-motion`, eliminando desplazamientos no esenciales y mostrando el estado final. Aislar comportamiento de animación, limpiar listeners y timelines al desmontar, evitar saltos de layout. Definir duraciones y easing desde referencias aprobadas cuando llegue esa fase.

## Navegación implementada

Rail fijo >900px, base gris azulada y progreso vertical de arriba abajo: scrollY / (documentHeight - viewportHeight), acotado a 0–1 y expuesto mediante --scroll-progress. Listener pasivo y requestAnimationFrame; ResizeObserver recalcula al cambiar dimensiones. IntersectionObserver identifica la sección en la banda de lectura. El estado activo usa aria-current="location" y no depende solo del color. No se modifica el hash durante scroll manual.

Anchors nativos, scroll-padding-top y scroll-margin-top mantienen títulos bajo el header sticky. Sin scroll snap, bloqueo ni control artificial del scroll. Con reduced motion, desplazamiento inmediato y transiciones desactivadas; progreso continúa instantáneo. Sin JavaScript, anchors/contenido/menu nativo siguen disponibles, pero no hay progreso ni selección automática. Listeners y observers se limpian al desmontar.

## Validación

Comprobar teclado, cambio de ruta, resize, móvil, reduced motion y ausencia de scroll bloqueado antes de aceptar un efecto.

## Experience — refinamiento

ExperienceMotion es una frontera cliente sin contenido: IntersectionObserver activa una sola vez el reveal mediante Web Animations (480ms, 8px, stagger de 70ms por grupo visible). El contenido del servidor nunca parte oculto. Las islas flotan 4px en dos ciclos de 9s; niebla 5px en dos ciclos de 12s; ruta dos ciclos de 8s y pulso tres ciclos de 4s. No hay movimiento infinito. Reduced motion elimina animaciones y desplazamientos de hover; cambios de preferencia cancelan animaciones activas. Observer, listener y animaciones se limpian al desmontar. Sin dependencias nuevas.

## Experience — scroll storytelling

Sticky nativo bajo header de 76px, activo desde 1101px y 650px de alto sin reduced motion. Recorrido virtual: cuatro experiencias × 0.65 viewport + 0.4 viewport para intro/transición = 3 viewports, más el stage (viewport menos header). ScrollTrigger con scrub true traduce posición real en intro, BDS/Dublín, transición de ruta, SIRE/Madrid, SEUR y proyectos. Cards visibles secundarias al 55%, activa al 100%; timeline desplaza su composición sin scrollbar interna. Línea, nodos y fechas indican progreso. Salida final de 12% con desplazamiento de 22px y opacity hasta .82, seguida de liberación natural sticky hacia Projects.

Reversible, sin wheel/touch handlers ni control artificial de scroll. MatchMedia y gsap.context restauran flujo completo al cambiar tamaño/preferencia y al desmontar. Fonts/imagen actualizan ScrollTrigger. Tablet ≤1100px usa una columna; pantallas bajas y reduced motion mantienen flujo sin pin. PNG intacto: floating del conjunto, parallax de 4px y ruta SVG superpuesta a su conexión estática existente; no se separan ni alteran las dos islas del raster.
