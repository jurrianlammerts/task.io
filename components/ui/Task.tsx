import React, { FC } from "react"
import { StyleSheet, View } from "react-native"
import { theme, Theme } from "@config/theme"
import { Heading, Text } from "@components/ui/typography"
import { getColors } from "./icons/helpers/get-colors"

type TaskProps = {
  title: string
  description?: string
  startTime: string
  endTime: string
  timePeriod: string
  color: keyof Theme["colors"]
}

export const Task: FC<TaskProps> = ({
  title,
  description,
  startTime,
  endTime,
  timePeriod,
  color,
}) => {
  const { colorHex } = getColors({ color })
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Text weight="bold">{startTime}</Text>
        <Text weight="bold">{timePeriod}</Text>
      </View>
      <View
        style={[
          styles.inner,
          {
            backgroundColor: colorHex,
          },
        ]}
      >
        <Heading size="h4">{title}</Heading>
        {description ? (
          <Text size="small" color="darkGrey" style={styles.mt}>
            {description}
          </Text>
        ) : null}
        <Text weight="bold" size="small" style={styles.mt}>
          {startTime} - {endTime} {timePeriod}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginBottom: theme.spacing.lg,
  },
  inner: {
    flex: 1,
    padding: theme.spacing.sm,
    borderRadius: 12,
  },
  time: {
    width: 48,
    alignItems: "center",
    marginRight: theme.spacing.sm,
  },
  mt: {
    marginTop: theme.spacing.xs,
  },
})
