import { Heading, Text } from "@components/ui/typography"
import { theme } from "@config/theme"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"

type HomeScreenProps = {}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Heading size="h2">Hi Jurrian!</Heading>
      <Text color="darkGrey">8 tasks for today Monday</Text>
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
