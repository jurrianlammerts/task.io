import { theme } from "@config/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  active: {
    height: 64,
    width: 64,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
    borderRadius: 64,
  },
})
