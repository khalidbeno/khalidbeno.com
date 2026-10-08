# Sidebar y LogoMark

Alcance: navegación lateral y mobile, identidad tipográfica KB y reserva global del main. Sin cambios de contenido profesional, fotografía, fondo final, librerías o composición interna de Home.

Auditoría: documentación obligatoria y CSS de Next leídos; Home aprobado estudiado. Sidebar anterior de 168–192px dentro de main; logo sin tratamiento propio y menú details. Git inicial: next-env.d.ts generado por desarrollo. Kashmir no disponible en su antigua ruta local; estructura basada en el esquema explícito del usuario, sin copiar código o assets. Apple Design Skill leído como referencia de principios.

Implementación: sidebar como región hermana de main, columnas reales; 224px compacto, 256px laptop y 280–320px desktop. Main usa el ancho restante con gutters editoriales. LogoMark compartido tipográfico, alineado con labels. Rail conserva observers/progreso y anchors; filas en grid. Mobile con botón real, panel no modal, cierre al navegar/Escape y retorno de foco al pulsador con Escape.

Validar ES/EN: 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024, 375×812; capturas, teclado, contraste, ancho y regresiones. Typecheck, lint, formato, build y npm test completos.
