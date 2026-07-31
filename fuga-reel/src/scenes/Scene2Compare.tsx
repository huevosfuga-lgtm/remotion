import { AbsoluteFill, useCurrentFrame } from "remotion";
import { PhotoScene } from "../components/PhotoScene";
import { Headline, Hl, Pill } from "../components/ui";
import { COLORS } from "../brand";
import { MEDIA } from "../media";

// COMPARACIÓN — 3 huevos abiertos. El color delata cómo vivió la gallina.
export const Scene2Compare: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <PhotoScene src={MEDIA.threeEggs} focus="center" zoom="out" />

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

      {/* callouts señalando cada yema: 2 pastoriles (naranja) + 1 comercial */}
      <div style={{ position: "absolute", top: 560, left: 60 }}>
        <Pill frame={frame} start={34} bg={COLORS.orange} color={COLORS.paper} fontSize={32} rotate={-4}>
          🟠 PASTORIL x2
        </Pill>
      </div>
      <div style={{ position: "absolute", top: 900, right: 60 }}>
        <Pill frame={frame} start={44} bg="#6b6862" color={COLORS.paper} fontSize={32} rotate={4}>
          COMERCIAL
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
