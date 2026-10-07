# Sistema de motion

## Estado

Sin motion implementado. GSAP + ScrollTrigger se reservan para una fase posterior a la validación de layout y responsive.

## Usos con propósito

Scroll storytelling, reveal progresivo, parallax muy suave, cambios de profundidad, progreso de scroll discreto, microinteracciones y transiciones de estado. Cada efecto debe explicar qué mejora para lectura, orientación o feedback.

## Restricciones

Sin movimiento constante, animaciones largas, spring excesivo, scroll hijacking ni efectos que dificulten leer. Contenido comprensible y disponible sin animación. No ocultar permanentemente contenido si JavaScript falla.

## Accesibilidad e integración

Respetar `prefers-reduced-motion`, eliminando desplazamientos no esenciales y mostrando el estado final. Aislar comportamiento de animación, limpiar listeners y timelines al desmontar, evitar saltos de layout. Definir duraciones y easing desde referencias aprobadas cuando llegue esa fase.

## Validación futura

Comprobar teclado, cambio de ruta, resize, móvil, reduced motion y ausencia de scroll bloqueado antes de aceptar un efecto.
