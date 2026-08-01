import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { BODY, COLORS, DISPLAY } from "../brand";
import { fadeUp, pop } from "../components/anim";
import { Grain, FugaLogo } from "../components/brand-ui";
import { FACTS } from "../facts";

// ── Duraciones ──
const INTRO = 60;
const PRECIOS = 104;
const DONDE = 100;
const OUTRO = 86;
const T = 12;
export const ENTREGA_TOTAL = INTRO + PRECIOS + DONDE + OUTRO - 3 * T;

// 1 — Hook
const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 4, 60, 16);
  const b = fadeUp(frame, 20, 60, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep, justifyContent: "center", alignItems: "center", padding: "0 90px", gap: 12 }}>
      <Grain />
      <div style={{ fontFamily: DISPLAY, fontSize: 150, lineHeight: 0.95, color: COLORS.cream, textTransform: "uppercase", opacity: a.opacity, translate: a.translate }}>
        ¿Cuánto?
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 150, lineHeight: 0.95, color: COLORS.yellowBright, textTransform: "uppercase", opacity: b.opacity, translate: b.translate }}>
        ¿Y dónde?
      </div>
      <div style={{ fontFamily: BODY, fontWeight: 800, fontSize: 40, color: COLORS.cream, marginTop: 24, opacity: interpolate(frame, [34, 46], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Te contamos 👇
      </div>
    </AbsoluteFill>
  );
};

// Fila de precio
const PriceRow: React.FC<{ frame: number; start: number; name: string; price: string }> = ({ frame, start, name, price }) => {
  const a = fadeUp(frame, start, 50, 14);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 24, opacity: a.opacity, translate: a.translate }}>
      <div style={{ fontFamily: DISPLAY, fontSize: 72, color: COLORS.ink, textTransform: "uppercase" }}>{name}</div>
      <div style={{ fontFamily: DISPLAY, fontSize: 78, color: COLORS.green, backgroundColor: COLORS.yellowBright, padding: "6px 34px", borderRadius: 22, whiteSpace: "nowrap" }}>{price}</div>
    </div>
  );
};

// 2 — Precios
const Precios: React.FC = () => {
  const frame = useCurrentFrame();
  const t = fadeUp(frame, 2, 40, 14);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream, justifyContent: "center", alignItems: "flex-start", padding: "0 90px", gap: 54 }}>
      <Grain opacity={0.06} />
      <div style={{ fontFamily: DISPLAY, fontSize: 110, color: COLORS.green, textTransform: "uppercase", opacity: t.opacity, translate: t.translate }}>
        Precios
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: 44 }}>
        {FACTS.products.map((p, i) => (
          <PriceRow key={p.id} frame={frame} start={18 + i * 12} name={p.name} price={p.price} />
        ))}
      </div>
      <div style={{ fontFamily: BODY, fontWeight: 800, fontSize: 36, color: COLORS.orangeDeep, opacity: interpolate(frame, [48, 62], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        Frescos · pastoriles · directo a vos
      </div>
    </AbsoluteFill>
  );
};

// Fila de zona
const ZoneRow: React.FC<{ frame: number; start: number; icon: string; text: string }> = ({ frame, start, icon, text }) => {
  const a = fadeUp(frame, start, 45, 14);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 26, opacity: a.opacity, translate: a.translate }}>
      <div style={{ fontSize: 60, lineHeight: 1 }}>{icon}</div>
      <div style={{ fontFamily: DISPLAY, fontSize: 62, color: COLORS.cream, textTransform: "uppercase", letterSpacing: 0.5 }}>{text}</div>
    </div>
  );
};

// 3 — Dónde entregamos
const Donde: React.FC = () => {
  const frame = useCurrentFrame();
  const t = fadeUp(frame, 2, 40, 14);
  const s = fadeUp(frame, 12, 40, 14);
  const icons = ["🚚", "📍", "📍"];
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.green, justifyContent: "center", alignItems: "flex-start", padding: "0 90px", gap: 20 }}>
      <Grain />
      <div style={{ fontFamily: DISPLAY, fontSize: 96, lineHeight: 0.98, color: COLORS.cream, textTransform: "uppercase", opacity: t.opacity, translate: t.translate }}>
        ¿Dónde <span style={{ color: COLORS.yellowBright }}>entregamos?</span>
      </div>
      <div style={{ fontFamily: BODY, fontWeight: 800, fontSize: 40, color: COLORS.creamSoft, marginBottom: 30, opacity: s.opacity, translate: s.translate }}>
        {FACTS.delivery.tagline}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {FACTS.delivery.zones.map((z, i) => (
          <ZoneRow key={i} frame={frame} start={26 + i * 12} icon={icons[i] ?? "📍"} text={z} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

// 4 — Cierre / CTA
const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 20, 45, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep, justifyContent: "center", alignItems: "center", padding: "0 90px", gap: 34 }}>
      <Grain />
      <FugaLogo size={340} scale={pop(frame, 2, 20)} />
      <div style={{ fontFamily: DISPLAY, fontSize: 92, lineHeight: 0.98, color: COLORS.cream, textTransform: "uppercase", textAlign: "center", opacity: a.opacity, translate: a.translate }}>
        Te invitamos
        <br />
        <span style={{ color: COLORS.yellowBright }}>a probarnos</span>
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 68, color: COLORS.yellowBright, letterSpacing: 1, opacity: interpolate(frame, [32, 44], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        {FACTS.handle}
      </div>
      <div style={{ fontFamily: BODY, fontWeight: 800, fontSize: 34, color: COLORS.creamSoft, opacity: interpolate(frame, [40, 52], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        📍 {FACTS.delivery.zonesShort}
      </div>
    </AbsoluteFill>
  );
};

export const FugaEntrega: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={INTRO} name="Intro"><Intro /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />
        <TransitionSeries.Sequence durationInFrames={PRECIOS} name="Precios"><Precios /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />
        <TransitionSeries.Sequence durationInFrames={DONDE} name="Donde"><Donde /></TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={springTiming({ config: { damping: 200 }, durationInFrames: T })} />
        <TransitionSeries.Sequence durationInFrames={OUTRO} name="Cierre"><Outro /></TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
