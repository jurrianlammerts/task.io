import React from "react"
import { theme } from "@config/theme"
import { StyleSheet, View } from "react-native"

export const Badge = () => (
  <View style={styles.container}>
    <View style={styles.badge} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  badge: {
    width: theme.spacing.sm,
    height: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.colors.orange,
    position: "absolute",
    top: -25,
    right: 3,
    zIndex: 1,
  },
})
