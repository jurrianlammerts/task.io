import { theme } from "@config/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.md,
    padding: theme.spacing.md,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.darkGrey,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: { flex: 1, marginRight: theme.spacing.md },
  switch: {
    borderRadius: 26,
    height: 32,
    width: 52,
  },
  switchContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    width: 56,
  },
  circle: {
    backgroundColor: theme.colors.white,
    borderRadius: 14,
    height: 28,
    width: 28,
  },
  pressed: {
    backgroundColor: theme.colors.lightGrey,
  },
})
