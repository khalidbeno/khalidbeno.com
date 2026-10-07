# Reglas de componentes

## Composición

Page → Section → Feature component → UI primitives. La página compone; la sección organiza contenido; la feature contiene comportamiento específico; la primitiva ofrece un contrato reutilizable.

## Separación

Separar contenido, layout, comportamiento, animación, datos y configuración cuando tengan responsabilidades distintas. Evitar GOD COMPONENTS y componentes casi idénticos. Extraer por responsabilidad o reutilización real, no por número arbitrario de líneas.

## Contratos

Props pequeñas y específicas. Componentes intercambiables conservan semántica, accesibilidad y contratos. Preferir composición frente a interfaces gigantes llenas de flags. No crear abstracciones que aún no tengan consumidores.

## Servidor y cliente

Server Components por defecto. `use client` solo en fronteras que requieran estado, eventos o APIs de navegador. No trasladar secciones completas al cliente por una microinteracción. Aislar y limpiar efectos cuando se incorpore motion.
