import { AbsoluteFill, useCurrentFrame } from "remotion";
import { PhotoScene } from "../components/PhotoScene";
import { Headline, Hl, Pill } from "../components/ui";
import { COLORS } from "../brand";
import { MEDIA } from "../media";

// HOOK — Los dos bowls. Pattern interrupt: naranja intenso vs pálido.
export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={MEDIA.bowls} focus="center" zoom="in" />

      {/* etiquetas sobre cada bowl */}
      <div style={{ position: "absolute", top: 640, left: 70 }}>
        <Pill frame={frame} start={14} bg={COLORS.orange} color={COLORS.paper} fontSize={34}>
          🟠 PASTORIL
        </Pill>
      </div>
      <div style={{ position: "absolute", top: 700, right: 70 }}>
        <Pill frame={frame} start={22} bg="#6b6862" color={COLORS.paper} fontSize={34}>
          DE GÓNDOLA
        </Pill>
      </div>

      {/* remate inferior */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "0 80px 150px",
          gap: 30,
        }}
      >
        <Headline frame={frame} start={4} align="left" fontSize={98}>
          El de la izquierda
          <br />
          <Hl>no tiene filtro.</Hl>
        </Headline>
        <Pill frame={frame} start={30} fontSize={40}>
          Es 100% pastoril 🐔🌿
        </Pill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
