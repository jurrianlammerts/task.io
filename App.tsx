import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import useOnboardingStore from "@lib/stores/useOnboarding"
import { RootStackNavigator } from "@screens/root"
import { OnboardingStackNavigator } from "@navigation/onboarding"
import { SplashScreen } from "@components/ui/SplashScreen"
import { getColors } from "@components/ui/icons/helpers/get-colors"
import { Theme } from "@config/theme"

const App = () => {
  const { state: onBoardingState } = useOnboardingStore()

  let navigator = <RootStackNavigator />
  let bgColor: keyof Theme["colors"] = "white"

  if (!onBoardingState.finished) {
    bgColor = "black"
    navigator = <OnboardingStackNavigator />
  }

  const { colorHex } = getColors({ color: bgColor })

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colorHex,
    },
  }

  return (
    <SplashScreen>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>{navigator}</NavigationContainer>
      </SafeAreaProvider>
    </SplashScreen>
  )
}

export default App
