# Rendimiento

## Prioridad

Minimizar JS cliente y usar Server Components por defecto. No añadir dependencias grandes sin necesidad y justificación. Sin GSAP, ScrollTrigger ni otros paquetes de motion en esta fase.

## Assets

Optimizar imágenes y usar `next/image` cuando corresponda; definir tamaños y proporciones para evitar layout shift. Lazy loading para imágenes fuera del primer viewport. Priorizar solo assets críticos reales. Verificar licencias y permisos.

## Implementación futura

Evitar solicitudes redundantes, hidratación innecesaria, fuentes excesivas y trabajo pesado durante scroll. Separar bundles por feature cuando resulte útil. Ajustar carga y caché a datos reales, sin infraestructura especulativa.

## Validación

Ejecutar build e inspeccionar bundles, imágenes y estabilidad del layout; medir en móvil y conexión limitada cuando haya aplicación. No inventar scores ni fijar resultados medidos antes de tener páginas. Presupuestos concretos se definirán con la primera implementación.
