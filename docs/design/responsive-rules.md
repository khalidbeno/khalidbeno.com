# Reglas responsive

## Rango y método

Responsive-first desde aproximadamente 320px hasta 1920px y superiores. Empezar por contenido y flujo móvil, ampliar cuando la composición lo necesite. No construir desktop y parchear móvil después.

## Layout

Usar contenedores fluidos, grid/flex y límites de lectura coherentes. Evitar anchos rígidos arbitrarios y dependencia del viewport exacto. Posicionamiento absoluto solo para elementos puramente visuales que lo requieran. Imágenes con proporción reservada y texto capaz de envolver sin truncar información esencial.

## Contenido bilingüe

Landing: sidebar completa desde 901px con variante compacta hasta 1100px; hasta 900px, menú móvil con botón y panel. El main ocupa todo el ancho restante y sus gutters no cambian el ancho de la columna. No heredar el max-width de la utilidad container de Tailwind para esa región. En móvil --page-gutter sigue --gutter para que los fondos de Home no generen overflow.

Probar ES y EN: la longitud de textos no debe romper navegación, botones o tarjetas. No reducir tipografía para compensar contenido excesivo. Mantener orden semántico de lectura.

## Matriz de verificación futura

Comprobar 320, 375, 768, 1024, 1440 y 1920px, además de ancho superior, orientación horizontal y zoom. Estos puntos son pruebas, no breakpoints obligatorios. Validar sin overflow horizontal, controles accesibles, lectura cómoda y navegación completa. Registrar las comprobaciones realizadas, no presumirlas.
