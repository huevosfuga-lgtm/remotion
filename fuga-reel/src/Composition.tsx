import { Composition } from "remotion";
import { FugaReel, TOTAL } from "./FugaReel";
import { FugaEntrega, ENTREGA_TOTAL } from "./entrega/FugaEntrega";
import { FugaManifiesto, MANIFIESTO_TOTAL } from "./manifiesto/FugaManifiesto";
import { FugaCampo, CAMPO_TOTAL } from "./campo/FugaCampo";
import { FugaMaples, MAPLES_TOTAL } from "./maples/FugaMaples";
import { FugaAudio, AUDIO_TOTAL } from "./audio/FugaAudio";

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
      <Composition
        id="FugaCampo"
        component={FugaCampo}
        durationInFrames={CAMPO_TOTAL}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="FugaMaples"
        component={FugaMaples}
        durationInFrames={MAPLES_TOTAL}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="FugaAudio"
        component={FugaAudio}
        durationInFrames={AUDIO_TOTAL}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
