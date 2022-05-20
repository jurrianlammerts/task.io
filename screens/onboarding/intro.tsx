import { Button } from "@components/ui/buttons/Button"
import { Heading, Text } from "@components/ui/typography"
import { theme } from "@config/theme"
import { OnboardingIntroNavigationProp } from "@navigation/types"
import { useNavigation } from "@react-navigation/native"
import React, { FC } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View } from "react-native"
import useOnboardingStore from "@lib/stores/useOnboarding"

export const OnboardingIntroScreen: FC = () => {
  const { navigate } = useNavigation<OnboardingIntroNavigationProp>()
  const { setState: setOnboardingState } = useOnboardingStore()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Heading size="h4" color="white" style={styles.heading}>
          2/3
        </Heading>
        <Heading color="white" style={styles.heading}>
          Introduction
        </Heading>
        <Text color="lightGrey">
          In our hectic lives, we often forget to take care of our tasks.
        </Text>
      </View>
      <Button
        variant="secondary"
        onPress={() => navigate("onboarding/get-started")}
      >
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
