const path = require("path")
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".ts",
            ".tsx",
            ".json",
            ".png",
            ".otf",
            ".woff2",
          ],
          alias: {
            "@assets": path.resolve(__dirname, "./assets"),
            "@components": path.resolve(__dirname, "./components"),
            "@screens": path.resolve(__dirname, "./screens"),
            "@navigation": path.resolve(__dirname, "./navigation"),
            "@lib": path.resolve(__dirname, "./lib"),
            "@config": path.resolve(__dirname, "./config"),
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  }
}
