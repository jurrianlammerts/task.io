import { theme } from "@config/theme"
import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface StyleSheetProps {
  [key: string]: TextStyle | ViewStyle
}

export const styles = StyleSheet.create<StyleSheetProps>({
  container: {
    overflow: "hidden",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  "button-primary": {
    backgroundColor: theme.colors.white,
  },
  "button-primary-pressed": {
    backgroundColor: theme.colors.lightGrey,
  },
  "button-outline": {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.black,
  },
  "button-outline-pressed": {
    backgroundColor: theme.colors.lightGrey,
    borderWidth: 1,
    borderColor: theme.colors.black,
  },
  iconLeft: {
    marginLeft: 8,
  },
  iconRight: {
    marginRight: 8,
  },
})
