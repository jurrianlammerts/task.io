import * as Font from "expo-font"

export const fontImports: Record<string, Font.FontSource>[] = [
  { LufgaBold: require("../assets/fonts/Lufga-Bold.ttf") },
  { LufgaMedium: require("../assets/fonts/Lufga-Medium.ttf") },
  { LufgaRegular: require("../assets/fonts/Lufga-Regular.ttf") },
]

export async function loadAssets() {
  const fontAssets = cacheFonts(fontImports)

  await Promise.all([...fontAssets])
}

function cacheFonts(fonts: Record<string, Font.FontSource>[]) {
  return fonts.map((font) => Font.loadAsync(font))
}
