import type { NavigatorScreenParams } from "@react-navigation/native"
import type { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
  root: NavigatorScreenParams<RootTabParamList>
}

export type RootTabParamList = {
  calendar: undefined
  home: undefined
  profile: undefined
  inbox: undefined
  notifications: undefined
}

export type OnboardingStackParamList = {
  "onboarding/welcome": undefined
  "onboarding/intro": undefined
  "onboarding/get-started": undefined
}

export type OnboardingWelcomeNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  "onboarding/welcome"
>

export type OnboardingIntroNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  "onboarding/intro"
>

export type OnboardingGetStartedNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  "onboarding/get-started"
>
