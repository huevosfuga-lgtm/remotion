import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BODY, COLORS, DISPLAY, SCRIPT } from "../brand";
import { fadeUp, pop } from "../components/anim";
import { Pill } from "../components/ui";
import { MEDIA } from "../media";

// CIERRE — Logo Fuga + llamado a la acción, sobre fondo crema de marca.
export const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const logoScale = pop(frame, 2, 22);
  const logoRot = interpolate(frame, [2, 26], [-8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tag = fadeUp(frame, 30, 50, 18);
  const cta = fadeUp(frame, 42, 60, 18);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.cream,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 80px",
        gap: 40,
      }}
    >
      {/* puntitos decorativos tipo yema */}
      <AbsoluteFill style={{ overflow: "hidden" }}>
        {[
          [140, 260],
          [900, 360],
          [190, 1520],
          [880, 1580],
          [520, 180],
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

      <Img
        src={staticFile(MEDIA.logo)}
        style={{
          width: 520,
          height: 520,
          borderRadius: 999,
          scale: String(logoScale),
          rotate: `${logoRot}deg`,
          filter: "drop-shadow(0 22px 44px rgba(26,21,8,0.28))",
        }}
      />

      <div
        style={{
          fontFamily: SCRIPT,
          fontSize: 58,
          color: COLORS.orangeDeep,
          textAlign: "center",
          opacity: tag.opacity,
          translate: tag.translate,
        }}
      >
        Huevos de gallinas pastoriles
      </div>

      <div
        style={{
          fontFamily: DISPLAY,
          fontSize: 120,
          lineHeight: 0.98,
          color: COLORS.ink,
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: 1,
          opacity: cta.opacity,
          translate: cta.translate,
        }}
      >
        Probá la
        <br />
        diferencia
      </div>

      <div style={{ marginTop: 10 }}>
        <Pill frame={frame} start={58} bg={COLORS.ink} color={COLORS.yellowBright} fontSize={44}>
          @fuga
        </Pill>
      </div>

      <div
        style={{
          fontFamily: BODY,
          fontWeight: 700,
          fontSize: 30,
          color: COLORS.inkSoft,
          opacity: interpolate(frame, [64, 78], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        fuga.com.ar
      </div>
    </AbsoluteFill>
  );
};
