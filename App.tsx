import { SplashScreen } from "@components/ui/SplashScreen"
import { Heading, Text } from "@components/ui/typography"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"

const App = () => {
  return (
    <SplashScreen>
      <View style={styles.container}>
        <Heading>Welcome</Heading>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SplashScreen>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
