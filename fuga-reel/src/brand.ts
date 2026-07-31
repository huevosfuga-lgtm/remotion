// ────────────────────────────────────────────────────────────────
//  FUGA — Brand tokens
//  Derivados del logo (círculo crema + "Fuga" amarillo con contorno
//  negro) y del color de las yemas pastoriles (naranja intenso).
// ────────────────────────────────────────────────────────────────
import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadPacifico } from "@remotion/google-fonts/Pacifico";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";

// Impacto / titulares
export const { fontFamily: DISPLAY } = loadAnton("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

// Script tipo logo Fuga (acentos)
export const { fontFamily: SCRIPT } = loadPacifico("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

// Texto de apoyo
export const { fontFamily: BODY } = loadMontserrat("normal", {
  weights: ["600", "700", "800"],
  subsets: ["latin"],
});

export const COLORS = {
  cream: "#F7E7B0", // fondo del logo
  creamSoft: "#FBF1CC",
  yellow: "#F2B90E", // amarillo dorado del logo
  yellowBright: "#FFCE1F",
  orange: "#F0891A", // yema pastoril
  orangeDeep: "#E4720B",
  ink: "#1A1508", // negro cálido del contorno
  inkSoft: "#3A3116",
  paper: "#FFFDF5",
};
