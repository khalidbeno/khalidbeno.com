# Símbolo autorizado del portfolio

El usuario autoriza Group 1.png como único logo gráfico. PNG original transparente de 51×58px, 688 bytes; copias idénticas verificadas por SHA-256 en public/brand/logo-symbol.png y src/app/icon.png. Se retira el favicon SVG KB anterior. No se recorta, filtra, recolorea, redibuja ni añade texto o fondo.

LogoMark usa next/image con unoptimized para servir el pequeño original sin conversión. Alto 46px en rail, 32px en móvil y 36px en headers secundarios; ancho automático conserva proporción. Enlaces de inicio conservan nombre accesible y la imagen tiene alt vacío para evitar duplicación. src/config/brand.ts centraliza ruta y dimensiones: al recibir SVG autorizado se sustituye allí el asset y se actualiza el favicon de App Router.

Revisadas capturas desktop/móvil y carga del original (naturalWidth 51, naturalHeight 58), texto visible del enlace de logo vacío y favicon PNG activo. Typecheck, lint, formato y build correctos. Suite completa ES/EN: 29 pruebas correctas en aproximadamente 1,2 minutos. Contenido, hero, rail y navegación conservados.
