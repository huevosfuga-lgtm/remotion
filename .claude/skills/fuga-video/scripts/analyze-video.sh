#!/usr/bin/env bash
# ────────────────────────────────────────────────────────────────
#  analyze-video.sh — "leer" un video sin mirarlo entero.
#  Extrae N fotogramas repartidos + una grilla de contacto (una sola
#  imagen que resume el video) para que Claude entienda de qué trata
#  gastando poquísimo contexto. Ideal cuando el usuario sube un video
#  crudo al Drive y quiere ideas a partir de él.
#
#  Uso:  analyze-video.sh <video> [outdir] [n_frames]   (default 9)
#  Después: Read <outdir>/contact-sheet.png
# ────────────────────────────────────────────────────────────────
set -euo pipefail

VIDEO="${1:?Uso: analyze-video.sh <video> [outdir] [n_frames]}"
OUT="${2:-$(dirname "$VIDEO")/frames-$(basename "${VIDEO%.*}")}"
N="${3:-9}"
COLS=3

# Proyecto Remotion (trae ffmpeg/ffprobe mínimos vía `npx remotion`).
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJ="${FUGA_PROJ:-$SCRIPT_DIR/../../../../fuga-reel}"
if [ ! -f "$PROJ/package.json" ]; then
  for c in "$PWD/fuga-reel" "$PWD"; do
    [ -f "$c/package.json" ] && PROJ="$c" && break
  done
fi
if command -v ffmpeg >/dev/null 2>&1; then
  run_ff()    { ffmpeg "$@"; }
  run_probe() { ffprobe "$@"; }
else
  run_ff()    { (cd "$PROJ" && npx --yes remotion ffmpeg "$@"); }
  run_probe() { (cd "$PROJ" && npx --yes remotion ffprobe "$@"); }
fi

mkdir -p "$OUT"
DUR="$(run_probe -v error -show_entries format=duration -of csv=p=0 "$VIDEO" 2>/dev/null | tr -d '[:space:]' || true)"
if [ -z "${DUR:-}" ] || [ "$DUR" = "N/A" ]; then DUR=10; fi
echo "Video: $VIDEO  ·  ${DUR}s  ·  $N fotogramas"

# Fotogramas por búsqueda (-ss): rápido y no necesita filtros fps/tile.
i=0
while [ "$i" -lt "$N" ]; do
  T="$(awk -v i="$i" -v n="$N" -v d="$DUR" 'BEGIN{ printf "%.3f", d*(i+0.5)/n }')"
  F="$(printf '%s/frame-%02d.jpg' "$OUT" "$i")"
  run_ff -y -ss "$T" -i "$VIDEO" -frames:v 1 -vf "scale=480:-1" "$F" >/dev/null 2>&1 || true
  i=$((i+1))
done

# Grilla de contacto con Pillow (se instala si falta; pypi está permitido).
python3 -c "import PIL" 2>/dev/null || \
  python3 -m pip install --quiet --disable-pip-version-check pillow >/dev/null 2>&1 || true
python3 - "$OUT" "$COLS" <<'PY' || echo "(sin grilla; mirá los frame-*.jpg sueltos)"
import sys, glob, os
from PIL import Image
outdir, cols = sys.argv[1], int(sys.argv[2])
files = sorted(glob.glob(os.path.join(outdir, "frame-*.jpg")))
if not files:
    sys.exit(1)
imgs = [Image.open(f).convert("RGB") for f in files]
w = min(im.width for im in imgs)
scaled = [im.resize((w, round(im.height * w / im.width))) for im in imgs]
h = max(im.height for im in scaled)
rows = (len(scaled) + cols - 1) // cols
pad = 8
sheet = Image.new("RGB", (cols * w + pad * (cols + 1), rows * h + pad * (rows + 1)), (26, 21, 8))
for idx, im in enumerate(scaled):
    r, c = divmod(idx, cols)
    sheet.paste(im, (pad + c * (w + pad), pad + r * (h + pad)))
p = os.path.join(outdir, "contact-sheet.png")
sheet.save(p)
print("Grilla lista →", p)
PY

echo "Listo. Read $OUT/contact-sheet.png para entender el video de un vistazo."
