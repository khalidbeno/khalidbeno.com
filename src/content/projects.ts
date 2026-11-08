import type { Locale } from '@/config/locales';
import type { ContentReference, PublicationStatus } from '@/types/content';

export interface Project extends ContentReference {
  id: string;
  slug: string;
  locale: Locale;
  status: PublicationStatus;
  phase: string;
  title: string;
  description: string;
  stack: readonly string[];
  image: string | null;
  repositoryUrl?: string;
  sections: readonly { title: string; body: string }[];
}

// Editorial documentation for personal projects. "Published" means the
// documentation page is visible, not that the software is production-ready.
// Implementation claims must be updated only when supported by evidence.
export const projects: readonly Project[] = [
  {
    id: 'ai-office', slug: 'ai-office', locale: 'es', status: 'published',
    phase: 'En desarrollo · Software + agentes de IA',
    source: 'docs/content/projects.md',
    title: 'AI Office',
    description: 'Una oficina virtual donde agentes especializados reciben tareas, trabajan y presentan sus resultados para revisión humana.',
    stack: ['Agentes de IA', 'Automatización', 'APIs', 'Interfaz web'],
    image: '/projects/ai-office.svg',
    sections: [
      { title: 'El problema', body: 'Las tareas repetitivas de investigación, contenido y gestión suelen dispersarse entre herramientas. AI Office explora cómo reunirlas en un espacio donde una persona coordina a varios agentes.' },
      { title: 'La idea en 3 pasos', body: '1. Creas una tarea y eliges al agente responsable. 2. El agente procesa la petición y prepara una propuesta. 3. Revisas el resultado, solicitas cambios o lo apruebas antes de utilizarlo.' },
      { title: 'Arquitectura planteada', body: 'Interfaz de oficina y bandeja de tareas → orquestador de agentes → herramientas y APIs autorizadas → resultados pendientes de revisión. El diagrama muestra una arquitectura conceptual, no una captura de la aplicación terminada.' },
      { title: 'Qué está en desarrollo', body: 'El proyecto ya está iniciado. Las prioridades actuales son representar visualmente a los agentes, asignarles tareas y centralizar los resultados pendientes. No se afirma autonomía permanente ni integraciones que aún no estén verificadas.' },
      { title: 'Siguiente hito', body: 'Completar un recorrido demostrable: crear una tarea, asignarla a un agente, obtener una propuesta y aprobarla desde la interfaz. Después se documentarán capturas reales y decisiones técnicas.' },
    ],
  },
  {
    id: 'sentinel', slug: 'sentinel-blue-team', locale: 'es', status: 'published',
    phase: 'En desarrollo · Blue Team + IA',
    source: 'docs/content/projects.md',
    title: 'SENTINEL Blue Team',
    description: 'Plataforma de detección defensiva que recibe eventos de seguridad, aplica reglas y ayuda a investigar alertas.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Detección por reglas'],
    image: '/projects/sentinel.svg',
    sections: [
      { title: 'El problema', body: 'Los registros de un servidor pueden revelar intentos de acceso sospechosos, pero leerlos uno por uno es lento. SENTINEL plantea convertirlos en alertas comprensibles y rastreables.' },
      { title: 'Cómo debería funcionar', body: '1. Un servidor o aplicación envía eventos. 2. Una API los valida y guarda. 3. Un motor de reglas detecta patrones, como varios intentos de login fallidos. 4. Un analista consulta la alerta y su evidencia.' },
      { title: 'Arquitectura del MVP', body: 'Fuentes de eventos → FastAPI → PostgreSQL → motor de reglas → alertas. Se ha definido un proyecto inicial de backend con Docker y pruebas locales; el despliegue integrado y el uso con logs reales deben verificarse antes de presentarlos como resultados.' },
      { title: 'Seguridad y alcance', body: 'El objetivo es un laboratorio defensivo autorizado. La ingesta y las consultas requieren controles de acceso; el procesamiento de logs deberá limitar datos sensibles. Las detecciones se basarán primero en reglas reproducibles.' },
      { title: 'Siguientes pasos', body: 'Demostrar una alerta de fuerza bruta con datos de prueba, integrar una fuente Linux, añadir dashboard y después un asistente IA que explique incidentes sin sustituir la decisión humana.' },
    ],
  },
  {
    id: 'netops-ai', slug: 'netops-ai', locale: 'es', status: 'published',
    phase: 'En diseño · Redes + automatización',
    source: 'docs/content/projects.md',
    title: 'NETOPS AI',
    description: 'Propuesta de laboratorio para visualizar una red, detectar incidencias de conectividad y documentar diagnósticos.',
    stack: ['Python', 'Networking', 'Linux', 'Monitorización', 'IA (prevista)'],
    image: '/projects/netops-ai.svg',
    sections: [
      { title: 'El problema', body: 'Identificar por qué un equipo pierde conectividad obliga a revisar estado, enlaces, direcciones IP y cambios recientes. NETOPS AI plantea reunir estas comprobaciones en un panel fácil de interpretar.' },
      { title: 'Experiencia prevista', body: '1. Registras dispositivos de tu laboratorio. 2. Ejecutas comprobaciones autorizadas de conectividad. 3. Ves el estado y el historial. 4. Obtienes una guía de diagnóstico que puedes verificar paso a paso.' },
      { title: 'Arquitectura propuesta', body: 'Equipos del laboratorio → comprobaciones de red → API y almacenamiento → panel de estado → asistente de diagnóstico. Es un diseño de producto, no una red ya monitorizada.' },
      { title: 'Decisiones de alcance', body: 'El MVP se limitará a equipos propios o con permiso y operaciones de lectura: inventario, disponibilidad y latencia. La automatización de cambios de configuración queda fuera de la primera versión.' },
      { title: 'Estado actual', body: 'Proyecto aún no implementado. Se empezará después de estabilizar AI Office y SENTINEL. Los diagramas son ilustrativos; las métricas y capturas reales se incorporarán cuando existan.' },
    ],
  },
  {
    id: 'ai-office', slug: 'ai-office', locale: 'en', status: 'published',
    phase: 'In development · Software + AI agents',
    source: 'docs/content/projects.md',
    title: 'AI Office',
    description: 'A virtual workplace where specialist agents receive tasks and submit their work for human review.',
    stack: ['AI agents', 'Automation', 'APIs', 'Web interface'],
    image: '/projects/ai-office.svg',
    sections: [
      { title: 'The problem', body: 'Recurring research, content and management tasks are spread across tools. AI Office explores a single workspace where people coordinate specialist agents.' },
      { title: 'The idea in 3 steps', body: '1. Create a task and choose an agent. 2. The agent prepares a proposed result. 3. Review, request changes or approve it before use.' },
      { title: 'Proposed architecture', body: 'Virtual office and task inbox → agent orchestrator → approved tools and APIs → results awaiting review. This diagram is conceptual, not a screenshot of a completed app.' },
      { title: 'Work in progress', body: 'Development has started. Priorities include representing agents visually, assigning tasks and organizing approvals. Always-on execution or unverified integrations are not claimed.' },
      { title: 'Next milestone', body: 'Demonstrate an end-to-end flow from task creation to agent result and human approval, then add real screenshots and implementation notes.' },
    ],
  },
  {
    id: 'sentinel', slug: 'sentinel-blue-team', locale: 'en', status: 'published',
    phase: 'In development · Blue Team + AI',
    source: 'docs/content/projects.md',
    title: 'SENTINEL Blue Team',
    description: 'A defensive monitoring platform that receives security events, applies detection rules and supports alert investigation.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Rule-based detection'],
    image: '/projects/sentinel.svg',
    sections: [
      { title: 'The problem', body: 'Server logs can reveal suspicious access attempts, but reviewing them manually is slow. SENTINEL aims to turn log patterns into explainable, traceable alerts.' },
      { title: 'Proposed workflow', body: '1. A source sends events. 2. An API validates and stores them. 3. Rules detect patterns such as repeated failed logins. 4. An analyst examines the alert and supporting evidence.' },
      { title: 'MVP architecture', body: 'Event sources → FastAPI → PostgreSQL → detection rules → alerts. An initial Docker-based backend and local tests have been outlined; integrated deployment and real log collection still require verification.' },
      { title: 'Security and scope', body: 'This is an authorized defensive lab. Ingestion and investigation require access controls; sensitive log data must be handled carefully. The first detections use reproducible rules.' },
      { title: 'Next steps', body: 'Demonstrate a brute-force alert with synthetic events, integrate a Linux log source, add a dashboard, and only then explore an AI incident explainer with human review.' },
    ],
  },
  {
    id: 'netops-ai', slug: 'netops-ai', locale: 'en', status: 'published',
    phase: 'Design phase · Networking + automation',
    source: 'docs/content/projects.md',
    title: 'NETOPS AI',
    description: 'A planned networking lab for visualizing devices, detecting connectivity issues and documenting diagnostics.',
    stack: ['Python', 'Networking', 'Linux', 'Monitoring', 'AI (planned)'],
    image: '/projects/netops-ai.svg',
    sections: [
      { title: 'The problem', body: 'Troubleshooting lost connectivity means checking devices, links, addresses and recent changes. NETOPS AI proposes to organize those checks into an understandable view.' },
      { title: 'Proposed experience', body: '1. Register authorized lab devices. 2. Run connectivity checks. 3. View availability and history. 4. Follow a diagnosis guide and verify each step.' },
      { title: 'Proposed architecture', body: 'Lab devices → network checks → API and storage → health dashboard → diagnostic assistant. This is a product concept, not an already-running monitoring system.' },
      { title: 'MVP boundaries', body: 'Only owned or authorized devices and read-only operations: inventory, uptime and latency. Configuration changes are deliberately outside the first version.' },
      { title: 'Current status', body: 'Not yet implemented. Work will start once AI Office and SENTINEL are stable. The diagrams are illustrations; real screenshots and metrics will be added after implementation.' },
    ],
  },
];

export function publishedProjects(locale: Locale): readonly Project[] {
  return projects.filter((project) => project.locale === locale && project.status === 'published');
}

export function findProject(locale: Locale, slug: string): Project | undefined {
  return publishedProjects(locale).find((project) => project.slug === slug);
}
