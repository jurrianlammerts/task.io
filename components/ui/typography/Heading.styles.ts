import { TextStyle, StyleSheet } from "react-native"

const defaultStyles: TextStyle = {
  fontFamily: "LufgaBold",
  fontStyle: "normal",
  fontWeight: "900",
}

type StyleTypes = {
  h1: TextStyle
  h2: TextStyle
  h3: TextStyle
  h4: TextStyle
  h5: TextStyle
  h6: TextStyle
}

export const styles = StyleSheet.create<StyleTypes>({
  h1: {
    ...defaultStyles,
    fontSize: 40,
    lineHeight: 48,
  },
  h2: {
    ...defaultStyles,
    fontSize: 32,
    lineHeight: 38,
  },
  h3: {
    ...defaultStyles,
    fontSize: 24,
    lineHeight: 28,
  },
  h4: {
    ...defaultStyles,
    fontSize: 20,
    lineHeight: 25,
  },
  h5: {
    ...defaultStyles,
    fontFamily: "LufgaMedium",
    fontSize: 18,
    lineHeight: 24,
  },
  h6: {
    ...defaultStyles,
    fontFamily: "LufgaMedium",
    fontSize: 16,
    lineHeight: 21,
  },
})
