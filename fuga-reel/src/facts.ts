// ────────────────────────────────────────────────────────────────
//  FUGA — Datos de negocio (fuente única de verdad)
//  Cambiá acá y se actualiza en todos los videos que los usen.
// ────────────────────────────────────────────────────────────────

export const FACTS = {
  brandName: "Fuga",
  handle: "@huevosfuga",
  // (sin web pública por ahora)

  // Estado: pre-lanzamiento
  status: "pre-launch",
  mainCTA: "Unite a nuestro club",

  // Productos
  products: [
    {
      id: "maple30",
      name: "Maple de 30",
      price: "$14.000",
      blurb: "Perfecto para familias. 30 huevos frescos de gallinas pastoriles.",
    },
    {
      id: "docena",
      name: "Docena",
      price: "$7.500",
      blurb: "Ideal para probar la calidad Fuga. 12 huevos premium.",
    },
  ],

  // Entrega
  delivery: {
    zones: ["CABA (todos los barrios)", "Zona Norte (Bancalari, Pilar)"],
    zonesShort: "CABA · Zona Norte",
    tagline: "Llevamos lo mejor del campo, hasta tu casa.",
  },

  // Pilares de marca (icono + 2 líneas)
  pillars: [
    { icon: "☀️", line1: "Libertad", line2: "para vivir" },
    { icon: "🌿", line1: "Alimentación", line2: "natural" },
    { icon: "🥰", line1: "Gallinas", line2: "felices" },
    { icon: "🥚", line1: "Más sabor.", line2: "Más color." },
  ],
} as const;
