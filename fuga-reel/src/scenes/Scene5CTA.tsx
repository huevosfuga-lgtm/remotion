import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BODY, COLORS, DISPLAY } from "../brand";
import { fadeUp, pop } from "../components/anim";
import { FugaLogo } from "../components/brand-ui";
import { FACTS } from "../facts";

// CIERRE — Termina en el logo con el Instagram debajo.
export const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const logoRot = interpolate(frame, [2, 26], [-8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const top = fadeUp(frame, 4, 40, 16);
  const handle = fadeUp(frame, 34, 40, 16);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.cream,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 80px",
        gap: 44,
      }}
    >
      {/* puntitos decorativos tipo yema */}
      <AbsoluteFill style={{ overflow: "hidden" }}>
        {[
          [140, 300],
          [900, 380],
          [190, 1560],
          [880, 1600],
          [520, 210],
        ].map(([x, y], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 26,
              height: 26,
              borderRadius: 999,
              backgroundColor: COLORS.orange,
              opacity: 0.5,
            }}
          />
        ))}
      </AbsoluteFill>

      <div
        style={{
          fontFamily: DISPLAY,
          fontSize: 96,
          lineHeight: 0.98,
          color: COLORS.ink,
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: 1,
          opacity: top.opacity,
          translate: top.translate,
        }}
      >
        Probá la <span style={{ color: COLORS.orange }}>diferencia</span>
      </div>

      <FugaLogo size={480} scale={pop(frame, 2, 22)} rotate={logoRot} />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: handle.opacity, translate: handle.translate }}>
        <div style={{ fontFamily: DISPLAY, fontSize: 72, color: COLORS.green, letterSpacing: 1 }}>
          {FACTS.handle}
        </div>
        <div style={{ fontFamily: BODY, fontWeight: 700, fontSize: 32, color: COLORS.inkSoft, textAlign: "center" }}>
          {FACTS.mainCTA} · {FACTS.web}
        </div>
      </div>
    </AbsoluteFill>
  );
};
