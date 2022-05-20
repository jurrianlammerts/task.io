import * as Font from "expo-font"

export const fontImports: Record<string, Font.FontSource>[] = [
  { LatoRegular: require("../assets/fonts/Lato-Regular.ttf") },
  { LatoBold: require("../assets/fonts/Lato-Bold.ttf") },
  { LatoBlack: require("../assets/fonts/Lato-Black.ttf") },
  { KarlaRegular: require("../assets/fonts/Karla-Regular.ttf") },
  { KarlaBold: require("../assets/fonts/Karla-Bold.ttf") },
]

export async function loadAssets() {
  const fontAssets = cacheFonts(fontImports)

  await Promise.all([...fontAssets])
}

function cacheFonts(fonts: Record<string, Font.FontSource>[]) {
  return fonts.map((font) => Font.loadAsync(font))
}
