---
name: fuga-video
description: >-
  Crea y edita videos verticales (Reels de Instagram / TikTok / Shorts) para la
  marca FUGA — huevos de gallinas pastoriles, libres de jaula. Usá esta skill
  SIEMPRE que el pedido tenga que ver con hacer, editar, guionar o renderizar un
  video/reel/short de Fuga o de huevos pastoriles: comparaciones de yema, precios,
  dónde entregan, manifiesto de marca, recetas, testimonios, "un día en el campo",
  etc. Disparala aunque no digan "Remotion" ni "Fuga" explícitamente, si el
  contexto es claramente un video de esta marca de huevos. Garantiza que todo
  salga on-brand (verde oliva, crema, amarillo; voz argentina informal) y listo
  para subir.
---

# Fuga — Fábrica de videos de marca

Esta skill estandariza la creación de videos verticales para **Fuga** (huevos de
gallinas pastoriles). Todo vive en el proyecto **Remotion** `fuga-reel/` en la
raíz del repositorio. La idea: en vez de arrancar de cero, **componés un video
nuevo con bloques y datos que ya existen**, así todo sale consistente.

## Antes de empezar: leé la marca

La identidad de Fuga (colores exactos, tipografías, voz, banco de frases, precios
y zonas) está en **[references/brand.md](references/brand.md)**. Leela siempre
antes de escribir textos o elegir colores — es la fuente de verdad y evita
inventar cosas fuera de marca.

El catálogo de componentes reutilizables y el paso a paso para armar una
composición nueva está en **[references/building-blocks.md](references/building-blocks.md)**.

## Reglas de oro (por qué importan)

1. **Formato Reel: 1080×1920, 30fps.** Es vertical para que ocupe toda la
   pantalla del celular. Toda composición usa estas dimensiones.
2. **Nunca hardcodees datos de marca.** Colores → `src/brand.ts`. Precios, zonas,
   productos, pilares, CTA → `src/facts.ts`. Frases → `src/copy.ts`. Si un dato
   cambia (ej: un precio), se cambia en UN lugar y se actualiza en todos los
   videos. Importá de ahí en vez de tipear el valor.
3. **Reutilizá los bloques.** `PhotoScene`, `Headline`, `Pill`, `Badge`,
   `Pillar`, `Grain`, `Scrim` ya resuelven foto full-bleed, títulos, chips,
   sellos, pilares y texturas. Componé con ellos antes de escribir CSS nuevo.
4. **Voz de marca.** Argentino, informal (vos), directo, con humor. Mostramos la
   diferencia (el color naranja de la yema) en lugar de afirmarla. La marca es la
   "fuga": la gallina que se escapa de la jaula. Están en **pre-lanzamiento**, así
   que el CTA por defecto es **"Te invitamos a probarnos"**, no "comprá ahora".
5. **Seguridad tipográfica.** Texto principal ≥ 84px, apoyo ≥ 44px, y respetá un
   margen de ~80px a los lados. En video se lee distinto que en una web.

## Flujo para crear un video nuevo

1. **Definí el objetivo y el guion.** ¿Qué tiene que sentir/hacer quien lo ve?
   Elegí un ángulo (comparación, precio, receta, manifiesto…). Sacá el hook y las
   frases del banco en `src/copy.ts` (o agregá nuevas ahí si aportan).
2. **Conseguí los assets.** Fotos/logo van en `public/`. Si el usuario los tiene
   en Google Drive, bajalos con el conector de Drive (ver nota de Drive abajo).
   Registralos en `src/media.ts`.
3. **Armá la composición** siguiendo
   [references/building-blocks.md](references/building-blocks.md): creá
   `src/<nombre>/Fuga<Nombre>.tsx`, escenas con `TransitionSeries`, y exportá el
   `TOTAL` de frames.
4. **Registrala** en `src/Composition.tsx` (otro `<Composition id="Fuga<Nombre>"
   ... width={1080} height={1920} fps={30} />`).
5. **Previsualizá y ajustá** con stills antes de renderizar entero:
   ```bash
   npx remotion still Fuga<Nombre> out.png --frame=30 --scale=0.4
   ```
   Miralos, corregí encuadres/timing, repetí.
6. **Renderizá el MP4 final:**
   ```bash
   npx remotion render Fuga<Nombre> <nombre>.mp4
   ```
7. **Entregá y versioná.** Mandá el MP4 al usuario, commiteá el código +
   `public/` (nunca `node_modules`) y pusheá.

## Composiciones que ya existen (usalas de referencia o base)

- **FugaReel** — comparación pastoril vs góndola (el hook del huevo naranja).
- **FugaEntrega** — precios + dónde entregamos (anima los posters de la marca).
- **FugaManifiesto** — identidad: "Hay huevos. Y hay huevos.", pilares, la fuga.

Para un video nuevo, muchas veces lo más rápido es **copiar la composición más
parecida** y cambiarle escenas/textos/fotos.

## Ideas de próximos videos (banco de conceptos)

Receta con la yema naranja de protagonista · "Un día de nuestras gallinas" ·
"Cómo pedir en 3 pasos" · testimonios de primeros clientes · "3 razones para
elegir Fuga" · unboxing del maple · antes/después (góndola vs Fuga).

## Notas del entorno

- **Google Fonts al renderizar:** este entorno usa un proxy con CA propia. Ya está
  resuelto en `remotion.config.ts` con `Config.setChromiumIgnoreCertificateErrors(true)`.
  En una máquina local no hace falta.
- **Bajar assets de Drive:** el proxy bloquea `drive.google.com` por curl, así que
  usá el conector de Google Drive (`download_file_content`). Los archivos grandes
  se guardan en disco; decodificá el base64 con `jq -r '.content' <file> | base64 -d`
  sin cargarlo al contexto.
- **Audio/música:** no embebas temas con copyright (Instagram los mutea). El video
  se entrega sin música para que el usuario le sume **audio de tendencia dentro de
  Instagram** (gratis, legal, más alcance).
