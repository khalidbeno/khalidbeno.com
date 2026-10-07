# Sistema de motion

## Estado

Landing continua con smooth scroll nativo y transiciones discretas de color/escala en el rail. GSAP + ScrollTrigger se reservan para otra fase. No hay storytelling animado, parallax ni reveal del contenido.

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
