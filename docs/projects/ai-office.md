# AI Office — ficha de trabajo

**Estado:** desarrollo iniciado. **Disciplina:** Software + agentes de IA.

## En una frase
Una oficina virtual donde una persona asigna tareas a agentes especializados y revisa sus propuestas.

## Problema
La investigación, redacción y coordinación de acciones se reparten entre varias herramientas. AI Office busca centralizar el trabajo y mantener control humano.

## Flujo deseado
1. El usuario crea una tarea con contexto y criterio de aceptación.
2. Un orquestador la asigna a uno de los agentes.
3. El agente procesa la solicitud utilizando herramientas permitidas.
4. El trabajo vuelve a una bandeja de revisión.
5. El usuario aprueba, rechaza o solicita cambios.

## Arquitectura de referencia
`UI → gestión de tareas → orquestador → agentes / herramientas → resultados → aprobación`

Diagrama: `public/projects/ai-office.svg`. **Es conceptual**, no una captura de la aplicación en ejecución.

## MVP demostrable
- Tres agentes visibles, con nombre y responsabilidad.
- Bandeja de tareas con estados.
- Asignación y seguimiento de una tarea.
- Resultado visible con paso de aprobación humana.

## Evidencia pendiente
Repositorio específico, capturas de la interfaz real, herramientas conectadas, arquitectura implementada y pruebas.

## Objetivo de portfolio
Demostrar diseño de software, integración de APIs y decisiones sobre automatización segura; no anunciar ejecución continua sin medición real.
