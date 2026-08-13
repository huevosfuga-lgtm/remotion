import { AbsoluteFill, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Audio, Video } from "@remotion/media";
import { BODY, COLORS, DISPLAY } from "../brand";
import { fadeUp, pop } from "../components/anim";
import { Pill } from "../components/ui";
import { FugaLogo, Grain, Scrim } from "../components/brand-ui";
import { MEDIA } from "../media";
import { FACTS } from "../facts";

// Largos (frames @30). El total = largo del audio (voz en off ~33.77s).
// Las gallinas ocupan el segundo 12 → 27 del reel (hueco de 15s); los dos
// clips de los extremos (romper huevo y yemas) se acortan para mantener el
// largo total.
const INTRO = 36; // 1.2s
const BREAK = 324; // ~10.8s (acortado) — termina en el seg 12
const HENS = 450; // 15s — segundo 12 → 27 del reel
const HENS_TRIM = 108; // el clip de gallinas arranca en su seg 3.6 (usa 3.6→18.6)
const YOLKS = 68; // ~2.3s (acortado)
const AUDIO_FRAMES = Math.round(33.77 * 30); // 1013
const OUTRO = AUDIO_FRAMES - INTRO - BREAK - HENS - YOLKS; // 135
export const VOZ_TOTAL = AUDIO_FRAMES;

// Marca de agua (logo arriba-izquierda) para los clips
const Mark: React.FC = () => (
  <div style={{ position: "absolute", top: 60, left: 56 }}>
    <FugaLogo size={92} shadow={false} />
  </div>
);

// Escena de clip a pantalla completa + caption abajo
const ClipScene: React.FC<{
  src: string;
  len: number;
  caption: React.ReactNode;
  capBg?: string;
  capColor?: string;
  trimBefore?: number;
}> = ({ src, len, caption, capBg = COLORS.orange, capColor = COLORS.paper, trimBefore = 0 }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep }}>
      <Video src={staticFile(src)} volume={0} trimBefore={trimBefore} durationInFrames={len} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <Scrim from="rgba(10,8,2,0.6)" height="34%" side="bottom" />
      <Mark />
      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", padding: "0 70px 150px" }}>
        <Pill frame={frame} start={10} bg={capBg} color={capColor} fontSize={42}>
          {caption}
        </Pill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 8, 40, 14);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep, justifyContent: "center", alignItems: "center", gap: 26 }}>
      <Grain />
      <FugaLogo size={240} scale={pop(frame, 0, 18)} />
      <div style={{ fontFamily: DISPLAY, fontSize: 84, color: COLORS.cream, textTransform: "uppercase", opacity: a.opacity, translate: a.translate }}>
        Mirá <span style={{ color: COLORS.yellowBright }}>esto.</span>
      </div>
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const a = fadeUp(frame, 14, 45, 16);
  const b = fadeUp(frame, 26, 40, 16);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.green, justifyContent: "center", alignItems: "center", padding: "0 90px", gap: 28 }}>
      <Grain />
      <FugaLogo size={330} scale={pop(frame, 2, 18)} />
      <div style={{ fontFamily: DISPLAY, fontSize: 90, lineHeight: 0.98, color: COLORS.cream, textTransform: "uppercase", textAlign: "center", opacity: a.opacity, translate: a.translate }}>
        Te invitamos
        <br />
        <span style={{ color: COLORS.yellowBright }}>a probarnos</span>
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 62, color: COLORS.yellowBright, letterSpacing: 1, opacity: b.opacity, translate: b.translate }}>
        {FACTS.handle}
      </div>
      <div style={{ fontFamily: BODY, fontWeight: 800, fontSize: 34, color: COLORS.creamSoft, opacity: b.opacity }}>
        📍 {FACTS.delivery.zonesShort}
      </div>
    </AbsoluteFill>
  );
};

export const FugaVoz: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.greenDeep }}>
      {/* Voz en off sobre todo el video */}
      <Audio src={staticFile(MEDIA.audio)} />

      <Sequence from={0} durationInFrames={INTRO} name="Intro">
        <Intro />
      </Sequence>
      <Sequence from={INTRO} durationInFrames={BREAK} name="Romper">
        <ClipScene src={MEDIA.clipBreak} len={BREAK} caption="🥚 Recién del campo" capBg={COLORS.green} capColor={COLORS.cream} />
      </Sequence>
      <Sequence from={INTRO + BREAK} durationInFrames={HENS} name="Gallinas">
        <ClipScene src={MEDIA.clipHens} len={HENS} trimBefore={HENS_TRIM} caption="🌿 Gallinas sueltas, felices" capBg={COLORS.green} capColor={COLORS.cream} />
      </Sequence>
      <Sequence from={INTRO + BREAK + HENS} durationInFrames={YOLKS} name="Yemas">
        <ClipScene src={MEDIA.clipYolks} len={YOLKS} caption="🧡 Puras yemas naranjas" />
      </Sequence>
      <Sequence from={INTRO + BREAK + HENS + YOLKS} durationInFrames={OUTRO} name="Cierre">
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
