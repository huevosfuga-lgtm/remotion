import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";

import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Compare } from "./scenes/Scene2Compare";
import { Scene3Firm } from "./scenes/Scene3Firm";
import { Scene4Life } from "./scenes/Scene4Life";
import { Scene5CTA } from "./scenes/Scene5CTA";
import { ProgressBar, Watermark } from "./components/ui";

// ── Duraciones (frames @ 30fps) ─────────────────────────────
export const S1 = 95;
export const S2 = 85;
export const S3 = 80;
export const S4 = 80;
export const S5 = 110;

export const T1 = 14; // slide
export const T2 = 14; // wipe
export const T3 = 14; // slide
export const T4 = 16; // fade → logo

// Largo total de la composición (las transiciones acortan el timeline)
export const TOTAL = S1 + S2 + S3 + S4 + S5 - (T1 + T2 + T3 + T4);

// Inicio global de la escena del logo (para ocultar el watermark)
const SCENE5_START = S1 + S2 + S3 + S4 - (T1 + T2 + T3 + T4);

export const FugaReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0802" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={S1} name="Hook">
          <Scene1Hook />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T1 })}
        />

        <TransitionSeries.Sequence durationInFrames={S2} name="Comparacion">
          <Scene2Compare />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: T2 })}
        />

        <TransitionSeries.Sequence durationInFrames={S3} name="YemaFirme">
          <Scene3Firm />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: T3 })}
        />

        <TransitionSeries.Sequence durationInFrames={S4} name="EstiloDeVida">
          <Scene4Life />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T4 })}
        />

        <TransitionSeries.Sequence durationInFrames={S5} name="Cierre">
          <Scene5CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Overlays de marca (tiempo global) */}
      <Watermark appearAt={88} hideAt={SCENE5_START} />
      <ProgressBar />
    </AbsoluteFill>
  );
};
