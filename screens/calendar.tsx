import { Heading } from "@components/ui/typography"
import { theme } from "@config/theme"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"

type CalendarScreenProps = {}

export const CalendarScreen: FC<CalendarScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Heading size="h2">Your calendar</Heading>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.white,
  },
})

