import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { BODY, COLORS, DISPLAY } from "../brand";
import { fadeUp, pop } from "../components/anim";
import { PhotoScene } from "../components/PhotoScene";
import { Headline, Hl, Pill, ProgressBar } from "../components/ui";
import { Badge, FugaLogo, Grain } from "../components/brand-ui";
import { MEDIA } from "../media";
import { FACTS } from "../facts";

const S1 = 56, S2 = 132, S3 = 82, T = 12;
export const MAPLES_TOTAL = S1 + S2 + S3 - 2 * T;

const maple30 = FACTS.products.find((p) => p.id === "maple30")!;
const docena = FACTS.products.find((p) => p.id === "docena")!;

// 1 — Intro
const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 10, 50, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep, justifyContent: "center", alignItems: "center", padding: "0 90px", gap: 30 }}>
      <Grain />
      <FugaLogo size={230} scale={pop(frame, 0, 20)} />
      <div style={{ fontFamily: DISPLAY, fontSize: 128, lineHeight: 0.95, color: COLORS.cream, textTransform: "uppercase", textAlign: "center", opacity: a.opacity, translate: a.translate }}>
        Recién
        <br />
        <span style={{ color: COLORS.yellowBright }}>juntados</span> 🥚
      </div>
    </AbsoluteFill>
  );
};

// 2 — La foto de los maples con callouts en secuencia
const Maples: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={MEDIA.maples} zoom="in" focus="center" />

      <div style={{ position: "absolute", top: 150, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Badge frame={frame} start={8} fontSize={26}>
          Frescos · pastoriles · directo a vos
        </Badge>
      </div>

      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "flex-start", padding: "0 80px 150px", gap: 22 }}>
        <Headline frame={frame} start={4} align="left" fontSize={104}>
          Huevos de
          <br />
          <Hl>gallinas felices.</Hl>
        </Headline>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Pill frame={frame} start={30} bg={COLORS.orange} color={COLORS.paper} fontSize={36}>
            🧡 Yema naranja
          </Pill>
          <Pill frame={frame} start={40} bg={COLORS.green} color={COLORS.cream} fontSize={36}>
            🌿 100% pastoril
          </Pill>
        </div>
        <Pill frame={frame} start={52} bg={COLORS.yellowBright} color={COLORS.ink} fontSize={40}>
          {maple30.name}: {maple30.price} · {docena.name}: {docena.price}
        </Pill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// 3 — Cierre
const Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 18, 45, 16);
  const b = fadeUp(frame, 30, 40, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.green, justifyContent: "center", alignItems: "center", padding: "0 90px", gap: 28 }}>
      <Grain />
      <FugaLogo size={340} scale={pop(frame, 2, 20)} />
      <div style={{ fontFamily: DISPLAY, fontSize: 92, lineHeight: 0.98, color: COLORS.cream, textTransform: "uppercase", textAlign: "center", opacity: a.opacity, translate: a.translate }}>
        Te invitamos
        <br />
        <span style={{ color: COLORS.yellowBright }}>a probarnos</span>
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 64, color: COLORS.yellowBright, letterSpacing: 1, opacity: b.opacity, translate: b.translate }}>
        {FACTS.handle}
      </div>
      <div style={{ fontFamily: BODY, fontWeight: 800, fontSize: 34, color: COLORS.creamSoft, opacity: b.opacity }}>
        📍 {FACTS.delivery.zonesShort}
      </div>
    </AbsoluteFill>
  );
};

export const FugaMaples: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={S1} name="Intro"><Intro /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={S2} name="Maples"><Maples /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={S3} name="Cierre"><Cierre /></TransitionSeries.Sequence>
    </TransitionSeries>
    <ProgressBar />
  </AbsoluteFill>
);
