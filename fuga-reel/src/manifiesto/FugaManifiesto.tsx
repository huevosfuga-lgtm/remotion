import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { COLORS, DISPLAY } from "../brand";
import { fadeUp, pop } from "../components/anim";
import { Headline, Hl, Pill } from "../components/ui";
import { PhotoScene } from "../components/PhotoScene";
import { Grain, Pillar, FugaLogo } from "../components/brand-ui";
import { MEDIA } from "../media";
import { FACTS } from "../facts";

const S1 = 78, S2 = 78, S3 = 96, S4 = 80, S5 = 84, T = 12;
export const MANIFIESTO_TOTAL = S1 + S2 + S3 + S4 + S5 - 4 * T;

// 1 — "Hay huevos. Y hay huevos."
const Hero: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 4, 60, 18);
  const b = fadeUp(frame, 20, 60, 18);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream, justifyContent: "center", alignItems: "flex-start", padding: "0 90px", gap: 4 }}>
      <Grain opacity={0.06} />
      <div style={{ fontFamily: DISPLAY, fontSize: 140, lineHeight: 0.96, color: COLORS.ink, textTransform: "uppercase", opacity: a.opacity, translate: a.translate }}>
        Hay huevos.
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 140, lineHeight: 0.96, textTransform: "uppercase", opacity: b.opacity, translate: b.translate }}>
        <span style={{ color: COLORS.green }}>Y hay </span>
        <span style={{ color: COLORS.yellow }}>huevos.</span>
      </div>
    </AbsoluteFill>
  );
};

// 2 — "Este amarillo no es filtro" sobre foto
const Amarillo: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={MEDIA.threeEggs} zoom="in" scrimBottom scrimTop={false} />
      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", padding: "0 80px 170px" }}>
        <Headline frame={frame} start={4} fontSize={104}>
          Este amarillo
          <br />
          <Hl>no es filtro.</Hl>
        </Headline>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// 3 — Pilares
const Pilares: React.FC = () => {
  const frame = useCurrentFrame();
  const t = fadeUp(frame, 2, 40, 14);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.green, justifyContent: "center", alignItems: "center", gap: 70 }}>
      <Grain />
      <div style={{ fontFamily: DISPLAY, fontSize: 56, color: COLORS.cream, textTransform: "uppercase", opacity: t.opacity, translate: t.translate }}>
        Lo que nos hace <span style={{ color: COLORS.yellowBright }}>Fuga</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "70px 60px", maxWidth: 560 }}>
        {FACTS.pillars.map((p, i) => (
          <Pillar key={i} frame={frame} start={14 + i * 8} icon={p.icon} line1={p.line1} line2={p.line2} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

// 4 — "No son orgánicos. Son felices." + fuga
const Felices: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 4, 60, 16);
  const b = fadeUp(frame, 18, 60, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep, justifyContent: "center", alignItems: "flex-start", padding: "0 90px", gap: 10 }}>
      <Grain />
      <div style={{ fontFamily: DISPLAY, fontSize: 96, lineHeight: 1.0, color: COLORS.cream, textTransform: "uppercase", opacity: a.opacity, translate: a.translate }}>
        No son de jaula.
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 128, lineHeight: 1.0, color: COLORS.yellowBright, textTransform: "uppercase", opacity: b.opacity, translate: b.translate }}>
        Son felices.
      </div>
      <div style={{ marginTop: 40 }}>
        <Pill frame={frame} start={34} bg={COLORS.amber} color={COLORS.ink} fontSize={40}>
          🐔 Gallinas que se fugaron de la jaula
        </Pill>
      </div>
    </AbsoluteFill>
  );
};

// 5 — Cierre CTA
const Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 22, 50, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream, justifyContent: "center", alignItems: "center", padding: "0 90px", gap: 30 }}>
      <Grain opacity={0.06} />
      <FugaLogo size={380} scale={pop(frame, 2, 20)} />
      <div style={{ fontFamily: DISPLAY, fontSize: 96, color: COLORS.ink, textTransform: "uppercase", letterSpacing: 1, textAlign: "center", opacity: a.opacity, translate: a.translate }}>
        Huevos <span style={{ color: COLORS.orange }}>de verdad.</span>
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 68, color: COLORS.green, letterSpacing: 1, opacity: a.opacity, translate: a.translate }}>
        {FACTS.handle}
      </div>
    </AbsoluteFill>
  );
};

export const FugaManifiesto: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={S1} name="Hero"><Hero /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={S2} name="Amarillo"><Amarillo /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={S3} name="Pilares"><Pilares /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={linearTiming({ durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={S4} name="Felices"><Felices /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={springTiming({ config: { damping: 200 }, durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={S5} name="Cierre"><Cierre /></TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
