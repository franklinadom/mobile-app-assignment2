// Design tokens for the app.
// Palette: warm stone background, ink-charcoal text, a single "signal amber"
// accent for energy/favourites, and a muted coral used only for the calorie
// tag. Flat colours, no gradients, matching the brief's "keep it simple" note.

export const colors = {
  background: "#F7F5F1",
  card: "#FFFFFF",
  ink: "#20222A",
  inkMuted: "#7A7D85",
  border: "#EAE7E0",

  accent: "#FFB100", // amber — favourite / primary actions
  accentInk: "#20222A", // text placed on top of accent
  accentSoft: "#FFF1D1",

  coral: "#FF6452", // calories tag only
  coralSoft: "#FFE3DE",

  success: "#2E7D5B",
  successSoft: "#DFF0E7",

  white: "#FFFFFF",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const radius = {
  sm: 10,
  md: 18,
  lg: 26,
  pill: 999,
};

export const type = {
  display: { fontSize: 28, fontWeight: "800", letterSpacing: -0.4 },
  h1: { fontSize: 22, fontWeight: "800", letterSpacing: -0.2 },
  h2: { fontSize: 17, fontWeight: "700" },
  body: { fontSize: 15, fontWeight: "500" },
  caption: { fontSize: 12, fontWeight: "700", letterSpacing: 0.4 },
};

export const shadow = {
  card: {
    shadowColor: "#20222A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
};
