import { theme } from "@config/theme"
import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface StyleSheetProps {
  [key: string]: TextStyle | ViewStyle
}

export const styles = StyleSheet.create<StyleSheetProps>({
  container: {
    overflow: "hidden",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.md,
  },
  "button-primary": {
    backgroundColor: theme.colors.black,
  },
  "button-primary-pressed": {
    backgroundColor: theme.colors.lightBlack,
  },
  "button-secondary": {
    backgroundColor: theme.colors.white,
  },
  "button-secondary-pressed": {
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
  "button-ghost": {
    backgroundColor: "transparent",
  },
  "button-ghost-pressed": {
    opacity: 0.6,
  },
  iconLeft: {
    marginLeft: 8,
  },
  iconRight: {
    marginRight: 8,
  },
})
