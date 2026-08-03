import { AbsoluteFill, useCurrentFrame } from "remotion";
import { PhotoScene } from "../components/PhotoScene";
import { Headline, Hl, Pill } from "../components/ui";
import { COLORS } from "../brand";
import { MEDIA } from "../media";

// COMPARACIÓN — Dos huevos fritos, mismo plato. Izquierda comercial
// (yema pálida) · derecha pastoril (yema naranja).
export const Scene2Compare: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={MEDIA.fried} focus="center" zoom="in" />

      {/* titular arriba */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "180px 80px 0",
        }}
      >
        <Headline frame={frame} start={4} fontSize={92}>
          Mismo plato.
          <br />
          <Hl color={COLORS.orange}>Otra historia.</Hl>
        </Headline>
      </AbsoluteFill>

      {/* callouts: izquierda comercial · derecha pastoril */}
      <div style={{ position: "absolute", top: 640, left: 60 }}>
        <Pill frame={frame} start={34} bg="#6b6862" color={COLORS.paper} fontSize={32} rotate={-4}>
          COMERCIAL
        </Pill>
      </div>
      <div style={{ position: "absolute", top: 640, right: 60 }}>
        <Pill frame={frame} start={40} bg={COLORS.orange} color={COLORS.paper} fontSize={32} rotate={4}>
          🟠 PASTORIL
        </Pill>
      </div>

      {/* remate inferior */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0 80px 170px",
        }}
      >
        <Pill frame={frame} start={26} fontSize={42} bg={COLORS.paper}>
          El color no miente 👀
        </Pill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
