import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { RootStackNavigator } from "@screens/root"
import { SplashScreen } from "@components/ui/SplashScreen"

const App = () => {
  return (
    <SplashScreen>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </SplashScreen>
  )
}

export default App
