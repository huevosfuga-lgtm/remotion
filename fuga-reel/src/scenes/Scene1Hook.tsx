import { AbsoluteFill, useCurrentFrame } from "remotion";
import { PhotoScene } from "../components/PhotoScene";
import { Headline, Hl, Pill } from "../components/ui";
import { Badge } from "../components/brand-ui";
import { COLORS } from "../brand";
import { MEDIA } from "../media";

// HOOK — Los dos bowls. Pattern interrupt: naranja intenso vs pálido.
export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={MEDIA.bowls} focus="center" zoom="in" />

      {/* badge de marca */}
      <div style={{ position: "absolute", top: 150, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Badge frame={frame} start={8} fontSize={28}>
          Gallinas libres de jaula · literal
        </Badge>
      </div>

      {/* etiquetas sobre cada bowl (derecha = pastoril, más naranja) */}
      <div style={{ position: "absolute", top: 600, left: 70 }}>
        <Pill frame={frame} start={22} bg="#6b6862" color={COLORS.paper} fontSize={32}>
          LIBRE DE JAULA
        </Pill>
      </div>
      <div style={{ position: "absolute", top: 600, right: 70 }}>
        <Pill frame={frame} start={14} bg={COLORS.orange} color={COLORS.paper} fontSize={34}>
          🟠 PASTORIL
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
          El de la derecha
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
