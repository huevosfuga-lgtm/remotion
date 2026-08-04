import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { BODY, COLORS, DISPLAY } from "../brand";
import { fadeUp, pop } from "../components/anim";
import { PhotoScene } from "../components/PhotoScene";
import { Headline, Hl, Pill, Watermark, ProgressBar } from "../components/ui";
import { Badge, FugaLogo, Grain } from "../components/brand-ui";
import { MEDIA } from "../media";
import { FACTS } from "../facts";

// ── Duraciones (frames @30) ──
const S1 = 84, S2 = 72, S3 = 80, S4 = 72, S5 = 74, S6 = 80, S7 = 92;
const T = 12;
export const CAMPO_TOTAL =
  S1 + S2 + S3 + S4 + S5 + S6 + S7 - 6 * T;
const SCENE7_START = S1 + S2 + S3 + S4 + S5 + S6 - 6 * T;

// Escena foto + titular abajo + chip (patrón reutilizable)
const PhotoStatement: React.FC<{
  src: string;
  zoom: "in" | "out";
  focus?: string;
  head: React.ReactNode;
  headSize?: number;
  pill?: React.ReactNode;
  pillBg?: string;
  pillColor?: string;
}> = ({ src, zoom, focus = "center", head, headSize = 96, pill, pillBg = COLORS.yellow, pillColor = COLORS.ink }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={src} zoom={zoom} focus={focus} />
      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "flex-start", padding: "0 80px 155px", gap: 28 }}>
        <Headline frame={frame} start={4} align="left" fontSize={headSize}>
          {head}
        </Headline>
        {pill && (
          <Pill frame={frame} start={24} bg={pillBg} color={pillColor} fontSize={38}>
            {pill}
          </Pill>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Hero con badge arriba
const Hero: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={MEDIA.henPortrait} zoom="in" focus="center" />
      <div style={{ position: "absolute", top: 150, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Badge frame={frame} start={10} fontSize={28}>
          Gallinas libres de jaula · literal
        </Badge>
      </div>
      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "flex-start", padding: "0 80px 155px", gap: 24 }}>
        <Headline frame={frame} start={4} align="left" fontSize={112}>
          Del campo
          <br />
          <Hl>a tu mesa.</Hl>
        </Headline>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Cierre
const Cierre: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 20, 45, 16);
  const b = fadeUp(frame, 32, 40, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.green, justifyContent: "center", alignItems: "center", padding: "0 90px", gap: 30 }}>
      <Grain />
      <FugaLogo size={360} scale={pop(frame, 2, 20)} />
      <div style={{ fontFamily: DISPLAY, fontSize: 92, lineHeight: 0.98, color: COLORS.cream, textTransform: "uppercase", textAlign: "center", opacity: a.opacity, translate: a.translate }}>
        Te invitamos
        <br />
        <span style={{ color: COLORS.yellowBright }}>a probarnos</span>
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 66, color: COLORS.yellowBright, letterSpacing: 1, opacity: b.opacity, translate: b.translate }}>
        {FACTS.handle}
      </div>
      <div style={{ fontFamily: BODY, fontWeight: 800, fontSize: 34, color: COLORS.creamSoft, opacity: b.opacity }}>
        📍 {FACTS.delivery.zonesShort}
      </div>
    </AbsoluteFill>
  );
};

export const FugaCampo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0802" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={S1} name="Hero"><Hero /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        <TransitionSeries.Sequence durationInFrames={S2} name="Sueltas">
          <PhotoStatement src={MEDIA.hensField1} zoom="out" head={<>Viven sueltas,<br /><Hl>al sol.</Hl> ☀️</>} pill="Nada de jaulas" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        <TransitionSeries.Sequence durationInFrames={S3} name="Pasto">
          <PhotoStatement src={MEDIA.hensField2} zoom="in" head={<>Comen pasto<br /><Hl>de verdad.</Hl> 🌿</>} pill="Por eso la yema es naranja" pillBg={COLORS.orange} pillColor={COLORS.paper} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={linearTiming({ durationInFrames: T })} />

        <TransitionSeries.Sequence durationInFrames={S4} name="Refugio">
          <PhotoStatement src={MEDIA.henHouse2} zoom="in" head={<>Así <Hl>viven.</Hl></>} pill="Gallinas felices 🥰" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: "from-left" })} timing={linearTiming({ durationInFrames: T })} />

        <TransitionSeries.Sequence durationInFrames={S5} name="Maples">
          <PhotoStatement src={MEDIA.maples} zoom="out" head={<>Huevos<br /><Hl>recién juntados.</Hl></>} pill="Frescos · pastoriles" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        <TransitionSeries.Sequence durationInFrames={S6} name="Frito">
          <PhotoStatement src={MEDIA.fried} zoom="in" head={<>Y así, en<br /><Hl>tu plato.</Hl> 🍳</>} pill="Naranja de verdad" pillBg={COLORS.orange} pillColor={COLORS.paper} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={springTiming({ config: { damping: 200 }, durationInFrames: T })} />

        <TransitionSeries.Sequence durationInFrames={S7} name="Cierre"><Cierre /></TransitionSeries.Sequence>
      </TransitionSeries>

      <Watermark appearAt={24} hideAt={SCENE7_START} />
      <ProgressBar />
    </AbsoluteFill>
  );
};
