import { theme } from "@config/theme"
import { loadAssets } from "@lib/preload-assets"
import * as ExpoSplashScreen from "expo-splash-screen"
import { FC, useCallback, useEffect, useMemo, useState } from "react"
import { Animated, StyleSheet, View } from "react-native"
import { Heading } from "./typography"

export const SplashScreen: FC = ({ children }) => {
  const animatedValues = useMemo(() => {
    return {
      y: new Animated.Value(50),
      opacity: new Animated.Value(0),
      backgroundOpacity: new Animated.Value(1),
    }
  }, [])
  const [isAppReady, setAppReady] = useState(false)
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    onLoad()

    if (isAppReady) {
      Animated.parallel([
        Animated.timing(animatedValues.opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValues.y, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValues.backgroundOpacity, {
          toValue: 0,
          duration: 300,
          delay: 2000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setAnimationComplete(true)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAppReady])

  const onLoad = useCallback(async () => {
    try {
      await ExpoSplashScreen.preventAutoHideAsync()
      // Load stuff
      await Promise.all([loadAssets()])
    } catch (e) {
      // handle errors
    } finally {
      await ExpoSplashScreen.hideAsync()

      setAppReady(true)
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              justifyContent: "center",
              alignItems: "center",
              opacity: animatedValues.backgroundOpacity,
              backgroundColor: theme.colors.black,
            },
          ]}
        >
          <Heading color="white">Welcome</Heading>
        </Animated.View>
      )}
    </View>
  )
}
