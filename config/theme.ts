export const theme = {
  colors: {
    black: "#161616",
    white: "#FFF",
    lightGrey: "#e3e1e1",
    darkGrey: "#5E646C",
    lightBlue: "#ccd8fd",
    lightGreen: "#d1f2e9",
    orange: "#ec931e",
  },
  fontFamily: {
    regular: "KarlaRegular",
    bold: "KarlaBold",
  },
  fontSize: {
    micro: 12,
    small: 14,
    regular: 16,
    large: 18,
  },
  lineHeight: {
    micro: 18,
    small: 20,
    regular: 22,
    large: 24,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },
  states: {
    disabled: 0.4,
    pressed: 0.6,
  },
}

export type Theme = typeof theme
