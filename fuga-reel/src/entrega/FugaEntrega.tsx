import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { BODY, COLORS, DISPLAY } from "../brand";
import { fadeUp, pop } from "../components/anim";
import { PhotoScene } from "../components/PhotoScene";
import { Grain } from "../components/brand-ui";
import { MEDIA } from "../media";
import { FACTS } from "../facts";

// ── Duraciones ──
const INTRO = 26;
const PRECIOS = 82;
const DONDE = 94;
const OUTRO = 84;
const T = 12;
export const ENTREGA_TOTAL = INTRO + PRECIOS + DONDE + OUTRO - 3 * T;

// Tarjeta de intro sobre verde oliva
const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const t = fadeUp(frame, 8, 50, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep, justifyContent: "center", alignItems: "center", gap: 34 }}>
      <Grain />
      <Img
        src={staticFile(MEDIA.logo)}
        style={{ width: 320, height: 320, borderRadius: 999, scale: String(pop(frame, 0, 20)), filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.4))" }}
      />
      <div style={{ fontFamily: DISPLAY, fontSize: 92, color: COLORS.cream, textTransform: "uppercase", letterSpacing: 1, textAlign: "center", opacity: t.opacity, translate: t.translate }}>
        Precios <span style={{ color: COLORS.amber }}>y entrega</span>
      </div>
    </AbsoluteFill>
  );
};

// Tarjeta de cierre / CTA
const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 12, 50, 16);
  const b = fadeUp(frame, 24, 50, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.green, justifyContent: "center", alignItems: "center", padding: "0 90px", gap: 30 }}>
      <Grain />
      <Img src={staticFile(MEDIA.logo)} style={{ width: 260, height: 260, borderRadius: 999, scale: String(pop(frame, 0, 18)), filter: "drop-shadow(0 16px 36px rgba(0,0,0,0.4))" }} />
      <div style={{ fontFamily: DISPLAY, fontSize: 96, lineHeight: 0.98, color: COLORS.cream, textTransform: "uppercase", textAlign: "center", letterSpacing: 1, opacity: a.opacity, translate: a.translate }}>
        Unite a la
        <br />
        <span style={{ color: COLORS.yellowBright }}>lista de espera</span>
      </div>
      <div style={{ fontFamily: BODY, fontWeight: 800, fontSize: 38, color: COLORS.cream, textAlign: "center", opacity: b.opacity, translate: b.translate }}>
        📍 {FACTS.delivery.zonesShort}
      </div>
      <div
        style={{
          fontFamily: BODY,
          fontWeight: 800,
          fontSize: 40,
          color: COLORS.green,
          backgroundColor: COLORS.yellowBright,
          padding: "16px 40px",
          borderRadius: 999,
          opacity: interpolate(frame, [34, 48], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        {FACTS.web} · {FACTS.handle}
      </div>
    </AbsoluteFill>
  );
};

export const FugaEntrega: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={INTRO} name="Intro">
          <Intro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        <TransitionSeries.Sequence durationInFrames={PRECIOS} name="Precios">
          <PhotoScene src="precios.png" zoom="in" scrimTop={false} scrimBottom={false} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        <TransitionSeries.Sequence durationInFrames={DONDE} name="Donde">
          <PhotoScene src="donde-vendemos.png" zoom="out" scrimTop={false} scrimBottom={false} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        <TransitionSeries.Sequence durationInFrames={OUTRO} name="Cierre">
          <Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
