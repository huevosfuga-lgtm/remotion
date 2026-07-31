import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = {
  src: string;
  // punto de foco para el recorte (object-position)
  focus?: string;
  // dirección del Ken Burns
  zoom?: "in" | "out";
  // oscurecer arriba / abajo para que el texto se lea
  scrimTop?: boolean;
  scrimBottom?: boolean;
};

// Foto a pantalla completa con un leve movimiento (Ken Burns) que le
// da vida, más degradados opcionales para legibilidad del texto.
export const PhotoScene: React.FC<Props> = ({
  src,
  focus = "center",
  zoom = "in",
  scrimTop = true,
  scrimBottom = true,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const from = zoom === "in" ? 1.06 : 1.18;
  const to = zoom === "in" ? 1.18 : 1.06;
  const scale = interpolate(frame, [0, durationInFrames], [from, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#111", overflow: "hidden" }}>
      <Img
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: focus,
          scale: String(scale),
        }}
      />
      {scrimTop && (
        <AbsoluteFill
          style={{
            background:
              "linear-gradient(180deg, rgba(10,8,2,0.55) 0%, rgba(10,8,2,0) 32%)",
          }}
        />
      )}
      {scrimBottom && (
        <AbsoluteFill
          style={{
            background:
              "linear-gradient(0deg, rgba(10,8,2,0.62) 0%, rgba(10,8,2,0) 34%)",
          }}
        />
      )}
    </AbsoluteFill>
  );
};
