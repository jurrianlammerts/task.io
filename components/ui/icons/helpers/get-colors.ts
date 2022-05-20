import { Theme, theme } from "@config/theme"

export const getColors = ({
  color,
  bgColor,
}: {
  color?: keyof Theme["colors"]
  bgColor?: keyof Theme["colors"]
} = {}): { colorHex: string; bgColorHex: string } => ({
  colorHex: color ? theme.colors[color] : theme.colors.black,
  bgColorHex: bgColor ? theme.colors[bgColor] : theme.colors.white,
})
