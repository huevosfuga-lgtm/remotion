# Fuga — Bloques reutilizables y cómo armar una composición

Todo esto vive en `fuga-reel/src/`. Componé videos con estas piezas en vez de
escribir CSS desde cero.

## Convenciones

- Composición: **1080×1920, 30fps**. Fondo base oscuro por si una escena no cubre.
- Animá con `useCurrentFrame()` + `interpolate()` (nunca CSS `transition`/keyframes:
  no renderizan). Usá los helpers de `src/components/anim.ts`.
- Timing de escenas en **frames** (30 = 1s). Inliná los `durationInFrames` para
  que sean editables en el Studio.

## Helpers de animación (`src/components/anim.ts`)

- `fadeUp(frame, start, distance?, dur?)` → `{opacity, translate}`: aparecer
  subiendo. Spread en el `style`.
- `pop(frame, start, dur?)` → número para `scale` (entrada con rebote). Usar con
  `scale: String(pop(...))`.
- `OUT` → curva bezier suave para easing.

## Componentes de contenido (`src/components/ui.tsx`)

- `<PhotoScene src zoom focus scrimTop scrimBottom />` (`components/PhotoScene.tsx`)
  — foto a pantalla completa con Ken Burns (zoom lento). `zoom="in"|"out"`,
  `focus` = object-position, scrims para legibilidad. `src` es nombre en `public/`.
- `<Headline frame start fontSize color align>` — titular Anton con sombra.
  Envolvé palabras clave en `<Hl>palabra</Hl>` para pintarlas de amarillo/naranja.
- `<Pill frame start bg color fontSize rotate>` — chip redondeado con pop.
- `<Watermark appearAt hideAt />`, `<ProgressBar />` — overlays de tiempo global
  (se ponen a nivel composición, fuera del `TransitionSeries`).

## Componentes de marca (`src/components/brand-ui.tsx`)

- `<Grain opacity? />` — textura de grano (va arriba de fondos verdes).
- `<Badge frame start fontSize>` — sello blanco redondeado ("libres de jaula").
- `<Pillar frame start icon line1 line2 color? />` — pilar (emoji + 2 líneas).
- `<Scrim from height side />` — degradado para leer texto sobre imagen.
- `<ProgressBarC color? />` — barra de progreso con color de marca.

## Datos y textos

- `import { COLORS, DISPLAY, SCRIPT, BODY } from "../brand"`
- `import { FACTS } from "../facts"` (precios, zonas, pilares, CTA)
- `import { COPY } from "../copy"` (frases)
- `import { MEDIA } from "../media"` (nombres de archivos en `public/`)

## Escenas y transiciones

Cada escena es un componente que llena la pantalla (`AbsoluteFill`). Se ensamblan
con `TransitionSeries`:

```tsx
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";

const S1 = 90, S2 = 80, T = 12;
export const MI_TOTAL = S1 + S2 - T; // las transiciones ACORTAN el timeline

export const FugaMiVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={S1} name="Uno"><EscenaUno /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={S2} name="Dos"><EscenaDos /></TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
```

**Total de frames:** sumá las escenas y restá cada transición. Exportá ese `TOTAL`
para usarlo en el registro.

## Registrar la composición (`src/Composition.tsx`)

```tsx
<Composition
  id="FugaMiVideo"
  component={FugaMiVideo}
  durationInFrames={MI_TOTAL}
  fps={30}
  width={1080}
  height={1920}
/>
```

## Patrones de escena que ya funcionan (copiá de acá)

- **Foto + titular abajo** (hook, producto): mirá `scenes/Scene1Hook.tsx` /
  `Scene3Firm.tsx`. `PhotoScene` + `AbsoluteFill` con `justifyContent:"flex-end"`
  + `Headline` + `Pill`.
- **Tarjeta de texto sobre color** (manifiesto, CTA): `manifiesto/FugaManifiesto.tsx`
  (Hero, Felices, Cierre). Fondo `cream`/`green` + `Grain` + Anton grande.
- **Grilla de pilares:** `Pilares` en `FugaManifiesto.tsx` (mapea `FACTS.pillars`).
- **Animar un poster ya diseñado:** `entrega/FugaEntrega.tsx` — `PhotoScene` con
  `scrimTop/Bottom={false}` + intro/outro de marca. Ideal si el usuario ya tiene
  el arte hecho (precios, promos).
- **Cierre / CTA:** logo con `pop`, tagline, `Pill` con `FACTS.mainCTA` y
  `FACTS.web`/`FACTS.handle`.

## Checklist antes de entregar

- [ ] 1080×1920, 30fps, registrada en `Composition.tsx`.
- [ ] Colores/frases/datos importados de `brand.ts`/`copy.ts`/`facts.ts`.
- [ ] Texto dentro del margen seguro y con tamaño legible.
- [ ] CTA = "Te invitamos a probarnos" (pre-lanzamiento). Sin URL: no hay web.
- [ ] Stills revisados, después render entero.
- [ ] Sin música con copyright embebida.
- [ ] Peso del MP4 < 30 MB para poder entregarlo por chat. Los reels con muchas
      fotos pueden pasarse; renderizá con `--crf=26` (baja el peso ~3-4× sin
      pérdida visible). Ej: `npx remotion render FugaCampo out.mp4 --crf=26`.
- [ ] Commit de código + `public/` (sin `node_modules`) y push.
