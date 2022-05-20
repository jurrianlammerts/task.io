import { Button } from "@components/ui/buttons/Button"
import { Heading, Text } from "@components/ui/typography"
import { theme } from "@config/theme"
import useOnboardingStore from "@lib/stores/useOnboarding"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const OnboardingGetStartedScreen: FC = () => {
  const { setState: setOnboardingState } = useOnboardingStore()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Heading size="h4" color="white" style={styles.heading}>
          3/3
        </Heading>
        <Heading color="white" style={styles.heading}>
          Plan your tasks every day
        </Heading>
        <Text color="lightGrey">
          Plan, manage and track all your team's tasks in one flexible app
        </Text>
      </View>
      <Button
        variant="secondary"
        onPress={() =>
          setOnboardingState({
            finished: true,
          })
        }
      >
        Get started
      </Button>
      <Button
        variant="ghost"
        onPress={() =>
          setOnboardingState({
            finished: true,
          })
        }
      >
        Skip
      </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.black,
  },
  heading: {
    marginBottom: theme.spacing.md,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
})
