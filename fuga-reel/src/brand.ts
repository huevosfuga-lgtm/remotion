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
  // Neutros de marca
  cream: "#F1E7CD", // fondo crema de la web / logo
  creamSoft: "#F7EEDA",
  paper: "#FFFDF5",
  ink: "#1A1508", // negro cálido
  inkSoft: "#3A3116",

  // Verde oliva (color central de la marca Fuga)
  green: "#47521F",
  greenDeep: "#2E3417", // fondo oscuro de los posters
  greenSoft: "#5A662A",

  // Amarillos / ámbar
  yellow: "#F2B90E", // amarillo del logo
  yellowBright: "#FFCE1F",
  amber: "#E3A11B", // mostaza de los posters

  // Naranjas (yema)
  orange: "#F0891A",
  orangeDeep: "#E4720B",

  // Acento rojo ladrillo
  brick: "#8A2E1A",
};
