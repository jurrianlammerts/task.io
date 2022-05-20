import { Button } from "@components/ui/buttons/Button"
import { Heading, Text } from "@components/ui/typography"
import { theme } from "@config/theme"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { OnboardingWelcomeNavigationProp } from "@navigation/types"
import { SafeAreaView } from "react-native-safe-area-context"
import useOnboardingStore from "@lib/stores/useOnboarding"

export const OnboardingWelcomeScreen: FC = () => {
  const { navigate } = useNavigation<OnboardingWelcomeNavigationProp>()
  const { setState: setOnboardingState } = useOnboardingStore()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Heading size="h4" color="white" style={styles.heading}>
          1/3
        </Heading>
        <Heading color="white" style={styles.heading}>
          Welcome to Task.io
        </Heading>
        <Text color="lightGrey">
          Thank you for choosing the app. This is a quick walkthrough to get you
          started.
        </Text>
      </View>
      <Button variant="secondary" onPress={() => navigate("onboarding/intro")}>
        Next
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
