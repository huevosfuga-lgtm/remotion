# 🍳 Fuga — Mini-campaña de Reels (huevos pastoriles)

Reels verticales para Instagram (**1080×1920, 9:16, 30fps**) hechos con
[Remotion](https://remotion.dev), con el branding real de **Fuga** (verde
oliva, crema, amarillo dorado, naranja yema, tipografías retro).

## 🎬 Composiciones (elegí en el Studio / al renderizar)

| ID | Qué es | Duración |
|----|--------|----------|
| **FugaReel** | Comparación pastoril vs góndola (el hook del huevo naranja) | ~13s |
| **FugaEntrega** | Precios ($14.000 maple / $7.500 docena) + dónde entregamos (CABA, Zona Norte, Bancalari), animando los posters | ~8s |
| **FugaManifiesto** | Manifiesto de marca: "Hay huevos. Y hay huevos.", pilares, "No son orgánicos. Son felices." | ~12s |

```bash
npx remotion render FugaReel        1-comparacion.mp4
npx remotion render FugaEntrega     2-precios-entrega.mp4
npx remotion render FugaManifiesto  3-manifiesto.mp4
```

---

## 🔁 Cómo poner TUS fotos reales (lo único que falta)

El video usa **placeholders** con el branding para que se pueda ver el
concepto. Para dejarlo con tus fotos reales:

1. Copiá tus archivos dentro de la carpeta **`public/`**:
   - Las **4 fotos** de los huevos
   - El **logo** de Fuga
2. Abrí **`src/media.ts`** y cambiá los nombres por los de tus archivos.
   Ejemplo:
   ```ts
   export const MEDIA = {
     bowls:     "img1.jpg",   // Foto 1 — los dos bowls (naranja vs pálido)
     yolkHand:  "img2.jpg",   // Foto 2 — la mano con la yema firme
     yolkBowl:  "img3.jpg",   // Foto 3 — la yema en la mano sobre el bowl
     threeEggs: "img4.jpg",   // Foto 4 — los 3 huevos abiertos
     logo:      "logo.png",   // Logo Fuga
   };
   ```
3. Renderizá de nuevo (ver abajo). ¡Listo!

> Las fotos se recortan a pantalla completa (object-fit: cover). Si querés
> ajustar el encuadre de alguna, cambiá el `focus` de esa escena (ej:
> `focus="center"` → `"50% 30%"`) en el archivo de la escena correspondiente.

---

## ▶️ Comandos

```bash
npm run dev                             # Remotion Studio (previsualizar/editar)
npx remotion render FugaReel fuga-reel.mp4   # Renderizar el MP4
```

El MP4 sale en formato H.264, compatible con Instagram Reels.

---

## 🎬 Guion / Storyboard

| # | Escena | Foto | Texto en pantalla |
|---|--------|------|-------------------|
| 1 | **Hook** | Los 2 bowls | "El de la derecha **no tiene filtro.**" · chip "Es 100% pastoril 🐔🌿" · etiquetas DE GÓNDOLA (izq.) / PASTORIL (der., más naranja) |
| 2 | **Comparación** | 3 huevos abiertos | "Mismo plato. **Otra historia.**" · callouts "PASTORIL x2" (yemas naranjas) y "COMERCIAL" (yema pálida) · chip "El color no miente 👀" |
| 3 | **Prueba** | Yema en la mano | "Yema que se **planta parada.** 💪" · chip "Firme · Naranja · Real" |
| 4 | **El porqué** | Yema / mano | "Gallinas sueltas, al sol, **comiendo pasto.** 🌿" · chip "Así sabe la comida de verdad 🍳" |
| 5 | **Cierre / CTA** | Logo | "Huevos de gallinas pastoriles" · "**PROBÁ LA DIFERENCIA**" · @fuga · fuga.com.ar |

**Transiciones:** slide → wipe → slide → fade. **Extras:** Ken Burns (zoom
lento) en cada foto, watermark del logo, barra de progreso, chips animados.

---

## 🎨 Branding

Definido en `src/brand.ts`:

- **Crema** `#F7E7B0` · **Amarillo** `#F2B90E` / `#FFCE1F` · **Naranja yema**
  `#F0891A` / `#E4720B` · **Negro cálido** `#1A1508`
- Tipografías: **Anton** (impacto), **Pacifico** (script tipo logo),
  **Montserrat** (apoyo)

## 🎵 Audio

El Reel está pensado para agregarle **audio de tendencia directamente en
Instagram** (mejora el alcance). Por eso el MP4 va sin música. Si querés
música embebida, se puede sumar con `@remotion/media`.

## 🧩 Estructura

```
src/
  Composition.tsx      Registro de la composición (1080x1920)
  FugaReel.tsx         Timeline con TransitionSeries + overlays
  brand.ts             Colores y fuentes
  media.ts             👈 Nombres de tus imágenes (cambiar acá)
  components/          PhotoScene (Ken Burns), chips, watermark, barra
  scenes/              Una escena por archivo (Scene1..Scene5)
public/                Imágenes (placeholders .svg → tus fotos)
```
