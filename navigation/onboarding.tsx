import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { OnboardingStackParamList } from "@navigation/types"
import { OnboardingWelcomeScreen } from "@screens/onboarding/welcome"
import { OnboardingIntroScreen } from "@screens/onboarding/intro"
import { OnboardingGetStartedScreen } from "@screens/onboarding/get-started"

const Stack = createStackNavigator<OnboardingStackParamList>()

const headerStyle = {
  headerTitle: "",
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerShown: false,
}

export const OnboardingStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="onboarding/welcome">
      <Stack.Screen
        name="onboarding/welcome"
        component={OnboardingWelcomeScreen}
        options={headerStyle}
      />
      <Stack.Screen
        name="onboarding/intro"
        component={OnboardingIntroScreen}
        options={headerStyle}
      />
      <Stack.Screen
        name="onboarding/get-started"
        component={OnboardingGetStartedScreen}
        options={headerStyle}
      />
    </Stack.Navigator>
  )
}
