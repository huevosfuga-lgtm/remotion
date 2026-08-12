import { AbsoluteFill, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import { BODY, COLORS, DISPLAY } from "../brand";
import { pop } from "../components/anim";
import { FugaLogo, Grain } from "../components/brand-ui";
import { MEDIA } from "../media";
import { FACTS } from "../facts";

// Duración = largo del audio (~33.77s @30fps).
export const AUDIO_TOTAL = Math.round(33.77 * 30);

// Ecualizador decorativo (barras animadas con senos desfasados)
const BARS = 28;
const Equalizer: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 10, height: 260 }}>
      {Array.from({ length: BARS }).map((_, i) => {
        const t = frame * 0.22 + i * 0.55;
        const wave = 0.5 + 0.5 * Math.sin(t);
        const wave2 = 0.5 + 0.5 * Math.sin(t * 1.7 + 1.3);
        const h = 26 + (0.6 * wave + 0.4 * wave2) * 230;
        const mid = Math.abs(i - (BARS - 1) / 2) / ((BARS - 1) / 2); // 0 centro → 1 bordes
        const color = mid < 0.33 ? COLORS.yellowBright : mid < 0.66 ? COLORS.amber : COLORS.orange;
        return (
          <div
            key={i}
            style={{ width: 18, height: h, borderRadius: 10, backgroundColor: color, opacity: 0.92 }}
          />
        );
      })}
    </div>
  );
};

export const FugaAudio: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const logoPulse = 1 + 0.035 * Math.sin(frame * 0.16);
  const fadeIn = interpolate(frame, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 14, durationInFrames - 1], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep, justifyContent: "center", alignItems: "center", gap: 60, opacity: Math.min(fadeIn, fadeOut) }}>
      <Grain />

      {/* sello arriba */}
      <div style={{ position: "absolute", top: 150, display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ fontFamily: BODY, fontWeight: 800, fontSize: 34, color: COLORS.greenDeep, backgroundColor: COLORS.yellowBright, padding: "14px 36px", borderRadius: 999, transform: `scale(${pop(frame, 6)})` }}>
          🔊 Audio original
        </div>
      </div>

      <FugaLogo size={420} scale={logoPulse} />

      <Equalizer />

      <div style={{ fontFamily: DISPLAY, fontSize: 78, color: COLORS.cream, letterSpacing: 1, textTransform: "uppercase" }}>
        {FACTS.handle}
      </div>

      <Audio src={staticFile(MEDIA.audio)} />
    </AbsoluteFill>
  );
};
