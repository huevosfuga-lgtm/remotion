import { AbsoluteFill, useCurrentFrame } from "remotion";
import { PhotoScene } from "../components/PhotoScene";
import { Headline, Hl, Pill } from "../components/ui";
import { MEDIA } from "../media";

// EL PORQUÉ — El estilo de vida de la gallina explica el color.
export const Scene4Life: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={MEDIA.yolkBowl} focus="center" zoom="in" />

      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "0 80px 150px",
          gap: 30,
        }}
      >
        <Headline frame={frame} start={4} align="left" fontSize={92}>
          Gallinas sueltas,
          <br />
          al sol, <Hl>comiendo pasto.</Hl> 🌿
        </Headline>
        <Pill frame={frame} start={28} fontSize={40}>
          Así sabe la comida de verdad 🍳
        </Pill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
