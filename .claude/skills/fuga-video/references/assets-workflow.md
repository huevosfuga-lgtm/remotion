# Assets automáticos — sincronizar, entender y proponer

El objetivo: que el usuario **suba archivos y listo**. Vos (Claude) los buscás,
entendés qué son —incluidos **videos**, mirando fotogramas— y mantenés el
catálogo `fuga-reel/ASSETS.md`. Con eso proponés ideas sin que expliquen nada.

## Dónde viven los assets

- **Google Drive**, carpeta **"fuga-reel"** →
  `folderId = 11qFOVWOyLXIfQ_MyRJAXuXDbyq2HySZt` (cuenta huevos.fuga@gmail.com).
- En el proyecto, ya bajados: `fuga-reel/public/`.
- El catálogo con la descripción de cada uno: `fuga-reel/ASSETS.md`.

## Sincronizar (cuando el usuario sube algo o pide ideas)

1. Listá la carpeta con el conector de Drive:
   `search_files` con `parentId = '11qFOVWOyLXIfQ_MyRJAXuXDbyq2HySZt'`.
2. Compará contra `ASSETS.md`: los archivos que no estén catalogados son nuevos.
3. Bajá cada archivo nuevo con `download_file_content`. Los grandes se guardan en
   disco (no entran al contexto); decodificá con:
   `jq -r '.content' <archivo-guardado> | base64 -d > public/<nombre>`
   (mismo patrón que ya usamos para las fotos y el logo).
   - **Límite del conector: 10 MB por archivo.** Los videos suelen superarlo (y el
     proxy bloquea la descarga directa de `drive.google.com`). Si un video pesa más
     de 10 MB, pedile al usuario una versión < 10 MB (recortada/comprimida) — o que
     suba directamente el fragmento que quiere usar. Los HEIC de iPhone sí entran
     (< 10 MB); convertí HEIC→JPG con Pillow + `pillow_heif.register_heif_opener()`.

## Entender un archivo nuevo

- **Imagen** → abrila con Read (la ves) y anotá en `ASSETS.md`: qué muestra,
  izquierda/derecha si es comparación, y su mejor uso.
- **Video** → NO lo mires entero. Corré el script y leé la grilla:
  ```bash
  bash .claude/skills/fuga-video/scripts/analyze-video.sh <video> <outdir> 9
  # luego: Read <outdir>/contact-sheet.png
  ```
  La grilla (9 fotogramas en una imagen) te dice de qué trata gastando muy poco
  contexto. Si un momento amerita, mirá el `frame-XX.jpg` puntual. Anotá en
  `ASSETS.md`: qué pasa en el video, clima/tono, y qué **fragmentos** servirían
  (ej: "0-3s primer plano de la yema", "gallinas en el campo al fondo").

Para embeber un fragmento de video en una composición, usá `<Video>` de
`@remotion/media` con `trimBefore`/`trimAfter` (ver la skill remotion-markup).

## Proponer ideas

Con `ASSETS.md` al día, cruzá **assets disponibles × frases de `copy.ts`** y tirá
3-6 conceptos concretos. Cada idea debe decir: gancho, qué assets usa, y qué
composición existente sirve de base (o si es nueva). Priorizá lo que se puede
hacer **ya** con lo subido; marcá aparte lo que necesitaría material nuevo.

## Mantené el catálogo

Después de analizar, actualizá `fuga-reel/ASSETS.md` (tabla del asset + sección de
ideas) y commiteá. Así la próxima sesión arranca sabiendo todo y el usuario nunca
re-explica un archivo.
