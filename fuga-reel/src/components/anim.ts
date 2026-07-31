import { Easing, interpolate } from "remotion";

// Easing "suave con overshoot" para entradas premium
export const OUT = Easing.bezier(0.16, 1, 0.3, 1);

// Aparecer subiendo: devuelve opacity + translate para el style
export const fadeUp = (
  frame: number,
  start: number,
  distance = 60,
  dur = 18,
) => ({
  opacity: interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: OUT,
  }),
  translate: `0px ${interpolate(frame, [start, start + dur], [distance, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: OUT,
  })}px`,
});

// Pop con escala (chips, sellos)
export const pop = (frame: number, start: number, dur = 16) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    output: "perceptual-scale",
  });
