import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { BODY, COLORS, DISPLAY } from "../brand";
import { fadeUp, pop } from "./anim";

// Textura de grano sutil (para fondos verdes tipo poster)
export const Grain: React.FC<{ opacity?: number }> = ({ opacity = 0.12 }) => (
  <AbsoluteFill style={{ opacity, mixBlendMode: "overlay", pointerEvents: "none" }}>
    <svg width="100%" height="100%">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  </AbsoluteFill>
);

// Badge blanco redondeado tipo "GALLINAS LIBRES DE JAULA · LITERAL"
export const Badge: React.FC<{
  frame: number;
  start: number;
  children: React.ReactNode;
  fontSize?: number;
}> = ({ frame, start, children, fontSize = 26 }) => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: COLORS.paper,
      color: COLORS.green,
      fontFamily: BODY,
      fontWeight: 800,
      fontSize,
      lineHeight: 1.15,
      letterSpacing: 1,
      textAlign: "center",
      padding: `${fontSize * 0.55}px ${fontSize * 0.9}px`,
      borderRadius: 28,
      boxShadow: "0 10px 30px rgba(10,8,2,0.28)",
      scale: String(pop(frame, start)),
      textTransform: "uppercase",
    }}
  >
    {children}
  </div>
);

// Pilar de marca: icono + dos líneas (Libertad para vivir, etc.)
export const Pillar: React.FC<{
  frame: number;
  start: number;
  icon: string;
  line1: string;
  line2: string;
  color?: string;
}> = ({ frame, start, icon, line1, line2, color = COLORS.cream }) => {
  const a = fadeUp(frame, start, 40, 16);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        opacity: a.opacity,
        translate: a.translate,
        width: 240,
      }}
    >
      <div style={{ fontSize: 84, lineHeight: 1 }}>{icon}</div>
      <div
        style={{
          fontFamily: DISPLAY,
          fontSize: 34,
          color,
          textAlign: "center",
          textTransform: "uppercase",
          lineHeight: 1.05,
          letterSpacing: 0.5,
        }}
      >
        {line1}
        <br />
        {line2}
      </div>
    </div>
  );
};

// Franja de degradado inferior (scrim) para leer texto sobre imágenes
export const Scrim: React.FC<{ from?: string; height?: string; side?: "top" | "bottom" }> = ({
  from = "rgba(10,8,2,0.62)",
  height = "40%",
  side = "bottom",
}) => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(${side === "bottom" ? "0deg" : "180deg"}, ${from} 0%, rgba(10,8,2,0) ${height})`,
    }}
  />
);

// Barra de progreso fina (tiempo global) con color de marca
export const ProgressBarC: React.FC<{ color?: string }> = ({ color = COLORS.yellowBright }) => {
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
      <div style={{ width: `${w}%`, height: "100%", backgroundColor: color }} />
    </div>
  );
};
