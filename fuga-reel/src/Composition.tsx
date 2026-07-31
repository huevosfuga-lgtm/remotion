import { Composition } from "remotion";
import { FugaReel, TOTAL } from "./FugaReel";

// Reel de Instagram: vertical 1080x1920 (9:16), 30fps.
export const MyComposition = () => {
  return (
    <Composition
      id="FugaReel"
      component={FugaReel}
      durationInFrames={TOTAL}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
