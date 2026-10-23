/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#F2EDDF",
      "foreground": "#10271D",
      "border": "#CFC5AE",
      "card": "#FAF6EC",
      "cardForeground": "#10271D",
      "popover": "#FAF6EC",
      "popoverForeground": "#10271D",
      "primary": "#092219",
      "primaryForeground": "#F4EAD5",
      "secondary": "#E7DFCB",
      "secondaryForeground": "#10271D",
      "muted": "#EEE7D7",
      "mutedForeground": "#45564A",
      "accent": "#D39A3F",
      "accentForeground": "#10271D",
      "destructive": "#913F34",
      "destructiveForeground": "#FFFFFF",
      "input": "#B9AA8B",
      "ring": "#8A662E",
      "chart1": "#092219",
      "chart2": "#D39A3F",
      "chart3": "#A65C44",
      "chart4": "#647B52",
      "chart5": "#577B7E",
      "sidebar": "#EAE2D1",
      "sidebarForeground": "#10271D",
      "sidebarBorder": "#CFC5AE",
      "sidebarPrimary": "#092219",
      "sidebarPrimaryForeground": "#F4EAD5",
      "sidebarAccent": "#E2D8C1",
      "sidebarAccentForeground": "#10271D",
      "sidebarRing": "#8A662E"
    },
    "dark": {
      "background": "#06180F",
      "foreground": "#F4EAD5",
      "border": "#385343",
      "card": "#0D2B1D",
      "cardForeground": "#F4EAD5",
      "popover": "#0D2B1D",
      "popoverForeground": "#F4EAD5",
      "primary": "#D39A3F",
      "primaryForeground": "#10271D",
      "secondary": "#173C2C",
      "secondaryForeground": "#F4EAD5",
      "muted": "#142F23",
      "mutedForeground": "#C5CDBF",
      "accent": "#E1B25D",
      "accentForeground": "#10271D",
      "destructive": "#D77B67",
      "destructiveForeground": "#1A100F",
      "input": "#53695B",
      "ring": "#E1B25D",
      "chart1": "#D39A3F",
      "chart2": "#8FA87A",
      "chart3": "#D48765",
      "chart4": "#8DB1A8",
      "chart5": "#E1D0AD",
      "sidebar": "#06180F",
      "sidebarForeground": "#F4EAD5",
      "sidebarBorder": "#385343",
      "sidebarPrimary": "#D39A3F",
      "sidebarPrimaryForeground": "#10271D",
      "sidebarAccent": "#173C2C",
      "sidebarAccentForeground": "#F4EAD5",
      "sidebarRing": "#E1B25D"
    }
  },
  "fontFamily": {
    "sans": [
      "DM Sans",
      "sans-serif"
    ],
    "serif": [
      "Fraunces",
      "Georgia",
      "serif"
    ],
    "mono": [
      "Menlo",
      "monospace"
    ]
  },
  "radius": "0.5rem",
  "spacing": "0.25rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
