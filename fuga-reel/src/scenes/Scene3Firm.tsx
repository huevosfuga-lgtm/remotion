import { AbsoluteFill, useCurrentFrame } from "remotion";
import { PhotoScene } from "../components/PhotoScene";
import { Headline, Hl, Pill } from "../components/ui";
import { COLORS } from "../brand";
import { MEDIA } from "../media";

// PRUEBA DE CALIDAD — La yema firme y naranja en la mano.
export const Scene3Firm: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={MEDIA.yolkHand} focus="center" zoom="in" />

      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "0 80px 150px",
          gap: 30,
        }}
      >
        <Headline frame={frame} start={4} align="left" fontSize={100}>
          Yema que se
          <br />
          <Hl>planta parada.</Hl> 💪
        </Headline>
        <Pill frame={frame} start={28} bg={COLORS.orange} color={COLORS.paper} fontSize={40}>
          Firme · Naranja · Real
        </Pill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
