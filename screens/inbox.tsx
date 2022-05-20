import { Heading } from "@components/ui/typography"
import { theme } from "@config/theme"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"

type InboxScreenProps = {}

export const InboxScreen: FC<InboxScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Heading size="h2">Your inbox</Heading>
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
