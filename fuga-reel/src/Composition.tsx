import { Composition } from "remotion";
import { FugaReel, TOTAL } from "./FugaReel";
import { FugaEntrega, ENTREGA_TOTAL } from "./entrega/FugaEntrega";
import { FugaManifiesto, MANIFIESTO_TOTAL } from "./manifiesto/FugaManifiesto";

// Todos los Reels: vertical 1080x1920 (9:16), 30fps.
export const MyComposition = () => {
  return (
    <>
      <Composition
        id="FugaReel"
        component={FugaReel}
        durationInFrames={TOTAL}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="FugaEntrega"
        component={FugaEntrega}
        durationInFrames={ENTREGA_TOTAL}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="FugaManifiesto"
        component={FugaManifiesto}
        durationInFrames={MANIFIESTO_TOTAL}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
