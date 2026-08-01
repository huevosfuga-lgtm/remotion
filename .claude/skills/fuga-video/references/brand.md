# Fuga — Sistema de marca (fuente de verdad)

En el proyecto, esto está tipado en `src/brand.ts`, `src/facts.ts` y
`src/copy.ts`. Importá de ahí; este documento es el resumen legible.

## Paleta (`src/brand.ts` → `COLORS`)

| Rol | Nombre | Hex |
|-----|--------|-----|
| Fondo crema (web/logo) | `cream` | `#F1E7CD` |
| Crema suave | `creamSoft` | `#F7EEDA` |
| Blanco papel | `paper` | `#FFFDF5` |
| Negro cálido | `ink` | `#1A1508` |
| **Verde oliva (central)** | `green` | `#47521F` |
| Verde oscuro (posters) | `greenDeep` | `#2E3417` |
| Verde suave | `greenSoft` | `#5A662A` |
| Amarillo logo | `yellow` | `#F2B90E` |
| Amarillo brillante | `yellowBright` | `#FFCE1F` |
| Ámbar (posters) | `amber` | `#E3A11B` |
| Naranja yema | `orange` | `#F0891A` |
| Naranja profundo | `orangeDeep` | `#E4720B` |
| Rojo ladrillo (acento) | `brick` | `#8A2E1A` |

**Cómo combinarlos:** fondos de marca en `green`/`greenDeep` o `cream`. Titulares
en `ink` (sobre crema) o `cream` (sobre verde), con la palabra clave en `yellow`/
`yellowBright` o `orange`. El naranja se reserva para hablar de la yema. El rojo
es acento puntual ("directo a vos").

## Tipografías (`src/brand.ts`)

- **DISPLAY = Anton** — titulares de impacto, MAYÚSCULAS, condensado tipo poster.
- **SCRIPT = Pacifico** — acentos tipo el logo "Fuga" (usar poco).
- **BODY = Montserrat** (600/700/800) — chips, apoyo, datos.

## Voz de marca

Argentino, informal (**vos**), directo, con humor seco. Reglas:

- **Mostrar, no afirmar.** El argumento es visual: la yema naranja. Evitá
  adjetivos vacíos ("el mejor huevo"); mostrá el color y dejá que hable.
- **La "fuga".** El concepto es la gallina que se escapa de la jaula (mascota con
  rayas de preso). Jugá con escape/libertad.
- **Pre-lanzamiento.** Todavía no venden al público general: el llamado a la
  acción es **"Unite a la lista de espera"** (no "comprá").

## Frases de marca (`src/copy.ts` → `COPY`)

**Titulares:** "Hay huevos. Y hay huevos." · "Este amarillo no es filtro." ·
"No son orgánicos. Son felices." · "Huevos libres de jaula. Literal." · "Más
sabor. Más color." · "Directa. Honesta. Rural."

**Hooks:** "El de la derecha no tiene filtro." · "¿Por qué esta yema es tan
naranja?" · "Mismo precio. Distinto huevo." · "Rompé un huevo y miralo."

**Sellos:** "Gallinas libres de jaula · literal" · "100% pastoril" · "Frescos ·
pastoriles · directo a vos".

**Apoyo:** "El color no miente 👀" · "Yema firme, naranja, real 💪" · "Gallinas
sueltas, al sol, comiendo pasto 🌿" · "Gallinas que se fugaron de la jaula 🐔".

## Datos de negocio (`src/facts.ts` → `FACTS`)

- **Marca:** Fuga · **Instagram:** @huevosfuga · **Web:** fuga.com.ar
- **Estado:** pre-lanzamiento (lista de espera). CTA: "Unite a la lista de espera".
- **Productos:** Maple de 30 = **$14.000** · Docena = **$7.500**.
- **Entrega:** desde **Pilar** → **CABA** (todos los barrios), **Zona Norte**
  (barrios privados), **Bancalari**.
- **Pilares:** ☀️ Libertad para vivir · 🌿 Alimentación natural · 🥰 Gallinas
  felices · 🥚 Más sabor, más color.

> Si un dato cambió (precio, zona nueva), actualizá `src/facts.ts` y listo: todos
> los videos que lo importan se corrigen solos. No tipees el valor suelto en una
> escena.

## Assets de marca

- `public/logo.png` — logo Fuga (círculo crema + script amarillo).
- `public/branding/brand1-4.jpg` — capturas de la web (referencia de estilo).
- `public/precios.png`, `public/donde-vendemos.png` — posters diseñados (se
  animan directamente en FugaEntrega).
- Fotos de producto/yema en `public/img1-4.jpg`.
