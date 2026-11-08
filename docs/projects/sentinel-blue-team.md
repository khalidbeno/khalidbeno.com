# SENTINEL Blue Team — ficha técnica

**Estado:** desarrollo inicial del MVP. **Disciplina:** Ciberseguridad defensiva / backend.

## En una frase
Plataforma de investigación de eventos que transforma logs en alertas trazables mediante reglas reproducibles.

## Problema
Los eventos de seguridad son ruidosos. Sin normalización ni correlación resulta difícil identificar patrones.

## Recorrido esperado
1. Una fuente de prueba o Linux envía eventos.
2. Una API FastAPI los valida y almacena.
3. Un motor de detección aplica reglas documentadas.
4. La plataforma abre una alerta con evidencias y severidad.
5. Un analista comprueba el evento y documenta su decisión.

## Arquitectura de referencia
`Fuente → API de ingesta → PostgreSQL → reglas → alerta → revisión`

Diagrama: `public/projects/sentinel.svg`. **No es una captura real de un SIEM en producción**.

## MVP
- API autenticada para ingesta.
- Eventos normalizados y persistentes.
- Regla de 5 fallos de login de una IP en 5 minutos.
- Alertas consultables y actualizables.
- Docker y pruebas del comportamiento principal.

## Seguridad
Usar únicamente equipos y logs propios o autorizados. Evitar secretos y datos personales innecesarios; aplicar control de acceso a ingesta, alertas y administración.

## Evidencia pendiente
Ejecución integrada validada en el equipo del usuario, pruebas con una fuente Linux real, despliegue, dashboard e integración IA.

## Próximos hitos
Validar pruebas sintéticas → incorporar fuente Linux → dashboard → asistente de investigación.
