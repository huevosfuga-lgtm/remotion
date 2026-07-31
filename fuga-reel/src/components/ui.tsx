import { Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BODY, COLORS, DISPLAY } from "../brand";
import { fadeUp, pop } from "./anim";
import { MEDIA } from "../media";

// Pill / chip redondeado con branding
export const Pill: React.FC<{
  frame: number;
  start: number;
  bg?: string;
  color?: string;
  children: React.ReactNode;
  fontSize?: number;
  rotate?: number;
}> = ({ frame, start, bg = COLORS.yellow, color = COLORS.ink, children, fontSize = 40, rotate = 0 }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      backgroundColor: bg,
      color,
      fontFamily: BODY,
      fontWeight: 800,
      fontSize,
      letterSpacing: 0.5,
      padding: `${fontSize * 0.42}px ${fontSize * 0.85}px`,
      borderRadius: 999,
      boxShadow: "0 12px 34px rgba(10,8,2,0.35)",
      scale: String(pop(frame, start)),
      rotate: `${rotate}deg`,
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </div>
);

// Titular de impacto (Anton) con contorno suave para leerse sobre fotos
export const Headline: React.FC<{
  frame: number;
  start: number;
  fontSize?: number;
  color?: string;
  children: React.ReactNode;
  align?: "center" | "left";
}> = ({ frame, start, fontSize = 96, color = COLORS.paper, children, align = "center" }) => {
  const a = fadeUp(frame, start, 70, 20);
  return (
    <div
      style={{
        fontFamily: DISPLAY,
        fontSize,
        lineHeight: 1.02,
        color,
        textAlign: align,
        textTransform: "uppercase",
        letterSpacing: 1,
        textShadow: "0 6px 30px rgba(10,8,2,0.55)",
        opacity: a.opacity,
        translate: a.translate,
      }}
    >
      {children}
    </div>
  );
};

// Palabra acento amarilla resaltada
export const Hl: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = COLORS.yellowBright,
}) => <span style={{ color }}>{children}</span>;

// ── Overlays persistentes (viven a nivel composición, tiempo global) ──

// Logo watermark arriba a la izquierda (aparece luego del hook, se
// oculta al llegar a la escena del logo)
export const Watermark: React.FC<{ appearAt: number; hideAt: number }> = ({ appearAt, hideAt }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [appearAt, appearAt + 14, hideAt - 10, hideAt],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return (
    <div
      style={{
        position: "absolute",
        top: 70,
        left: 60,
        opacity,
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Img src={staticFile(MEDIA.logo)} style={{ width: 96, height: 96, borderRadius: 999 }} />
    </div>
  );
};

// Barra de progreso fina (tiempo global de la composición)
export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const w = interpolate(frame, [0, durationInFrames - 1], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: 10,
        backgroundColor: "rgba(255,255,255,0.18)",
      }}
    >
      <div style={{ width: `${w}%`, height: "100%", backgroundColor: COLORS.yellowBright }} />
    </div>
  );
};
