// ────────────────────────────────────────────────────────────────
//  FUGA — Datos de negocio (fuente única de verdad)
//  Cambiá acá y se actualiza en todos los videos que los usen.
// ────────────────────────────────────────────────────────────────

export const FACTS = {
  brandName: "Fuga",
  handle: "@huevosfuga",
  web: "fuga.com.ar",

  // Estado: pre-lanzamiento con lista de espera
  status: "pre-launch",
  mainCTA: "Unite a la lista de espera",

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
    origin: "Pilar",
    zones: ["CABA (todos los barrios)", "Zona Norte (barrios privados)", "Bancalari"],
    zonesShort: "CABA · Zona Norte · Bancalari",
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
