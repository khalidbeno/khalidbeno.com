# NETOPS AI — ficha de concepto

**Estado:** fase de diseño, no implementado. **Disciplina:** Redes y automatización.

## En una frase
Laboratorio para observar una red propia, detectar problemas de conectividad y proponer rutas de diagnóstico.

## Problema
Cuando falla un enlace o un dispositivo, las comprobaciones dispersas dificultan el diagnóstico.

## Experiencia propuesta
1. Registrar router, switch y equipos del laboratorio.
2. Consultar disponibilidad y latencia desde comprobaciones autorizadas.
3. Mostrar una topología básica y los últimos cambios observados.
4. Acompañar el diagnóstico con explicaciones contrastables.

## Arquitectura propuesta
`Dispositivos autorizados → comprobaciones → API / almacenamiento → panel → explicación IA`

Diagrama: `public/projects/netops-ai.svg`. **Ilustración conceptual, no un escaneo real**.

## Alcance del primer MVP
- Inventario de equipos de laboratorio.
- Comprobaciones de lectura, conectividad y estado.
- Histórico y panel simple.
- Diagnóstico orientativo con confirmación humana.

## Fuera de alcance inicial
Cambios automáticos de configuración, escaneo de sistemas ajenos y promesas de detección autónoma.

## Evidencia pendiente
Código, entorno de laboratorio, capturas, pruebas, latencias y resultados verificables.

## Prioridad
Comenzar tras estabilizar los MVP de AI Office y SENTINEL.
