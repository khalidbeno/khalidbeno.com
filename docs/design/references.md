# Referencias externas

## Referencias declaradas

| Referencia                                   | Uso autorizado                                           | Estado                                                                  |
| -------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| Apple / diseño editorial tecnológico premium | Espacio, jerarquía, claridad y tratamiento de fotografía | Inspiración indicada por el usuario; no se ha auditado un sitio externo |
| Vistas Figma del portfolio                   | Fuente visual principal y diseños aprobados              | Pendiente enlace, frames y estado de aprobación                         |

## Capturas aprobadas por el usuario

En `docs/design/reference-images/`:

- `01-home.png` → `/` (Home). Normalizado de forma segura desde `01-home.png.png` durante el modo nocturno.
- `03-experience.png` → Experience.
- `04-projects.png` → Projects.
- `05-labs-certifications.png` → Labs + Certifications.
- `06-contact.png` → Contact.
- `07-notes.png` → Notes / Blog.

About se elimina por instrucción del usuario del 8 de octubre de 2026; no se espera una vista final. `03-experience.png` sigue guiando la jerarquía, con una composición nueva autorizada: introducción e ilustración arriba, timeline/cards debajo. La ilustración «Islas flotantes de Irlanda y España.png» se copia sin cambios a `public/images/experience/madrid-dublin.png`; sustituye el CityConnection de Experience. Sus colores propios forman parte del asset aprobado, sin extenderlos a la paleta UI. El fondo común toma el ADN de `01-home.png` y continúa por todo el layout mediante CSS y SVG decorativo original, sin repetir una instancia por sección.

Antes de implementar una vista, identificar y estudiar su estructura, grid, spacing, jerarquía, tamaños, radios, fondos, profundidad, composición y densidad. Construir con HTML, React y CSS/Tailwind reales. Las capturas viven solo como documentación: no se sirven desde `public/`, no se importan en runtime y no se usan de fondo para reproducir la UI. Si hay conflicto con el sistema genérico, señalarlo antes de decidir. Lectura visual y limitaciones registradas en los informes de implementación.

## Regla de uso

Sidebar: Kashmir se usa únicamente como inspiración estructural según la instrucción y esquema del usuario del 8 de octubre de 2026. Su antigua carpeta local no está disponible, por lo que no se afirma una comparación visual directa. No se copian medidas, paleta, código ni assets; la adaptación conserva el portfolio claro/editorial.

Referencias para principios, patrones, jerarquía, interacción y accesibilidad. No copiar componentes, código, textos ni assets. Registrar origen, aspecto relevante y permiso de cualquier asset antes de usarlo.

## Repositorios externos

Si se proporciona un repositorio de design skills, leerlo como referencia. No copiarlo al proyecto, crear repositorios Git anidados ni submódulos sin orden explícita.

## Apple Design Skill — principios

[Apple Design Skill de Emil Kowalski](https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md), leído completo el 8 de octubre de 2026 por instrucción del usuario. Referencia externa de PRINCIPIOS: tipografía de sistema, tracking/leading según tamaño, materiales ligeros, proximidad, feedback inmediato y craft. No es fuente de código ni assets. Sus ejemplos de springs/gestos no se implementan en esta fase; las restricciones del usuario prevalecen. La composición visual sigue guiada por 01-home.png y el rail aprobado.
