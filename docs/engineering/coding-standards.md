# Estándares de código

## Base prevista

Next.js App Router, React, TypeScript strict y Tailwind CSS. Scripts de typecheck/lint/build/formato/test disponibles; versiones fijadas y lockfile presente. El código de aplicación usa Server Components. Pruebas de navegador solo como devDependencies. No incluir informes generados en lint, formato ni Git.

## Reglas

Tipos explícitos en contratos públicos; evitar `any` y supresiones sin causa documentada. Nombres descriptivos, módulos pequeños, importaciones coherentes y alias cuando se configure. Validar datos externos en su frontera. No incrustar hechos personales ni textos bilingües en componentes.

## SOLID pragmático

Responsabilidad única; extensión por props/configuración cuando sea útil; contratos consistentes entre componentes intercambiables; interfaces específicas; contenido y configuración separados de presentación cuando aporte claridad. Sin abstracciones especulativas ni sobrearquitectura.

## Flujo

Aplicar el flujo de `AGENTS.md`. Pruebas proporcionales a lógica y riesgos; no escribir tests que solo reflejen detalles de implementación. Nunca ocultar errores. Revisar diff y estado Git después de validar. Sin refactors no relacionados.
