import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react"
import LottieView from "lottie-react-native"
import { Animated, StyleSheet, View } from "react-native"
import * as ExpoSplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"

import { theme } from "@config/theme"
import { loadAssets } from "@lib/preload-assets"

export const SplashScreen: FC = ({ children }) => {
  const ref = useRef<LottieView>(null)

  const [isAppReady, setAppReady] = useState(false)
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false)

  const animatedValues = useMemo(() => {
    return {
      y: new Animated.Value(50),
      opacity: new Animated.Value(0),
      backgroundOpacity: new Animated.Value(1),
    }
  }, [])

  useEffect(() => {
    setTimeout(() => ref.current?.play())

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.reset()
    }
  }, [])

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
      // load stuff
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
      <StatusBar style={isSplashAnimationComplete ? "dark" : "light"} />
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
          <LottieView
            ref={ref}
            autoPlay
            loop
            source={require("../../assets/animations/loading.json")}
          />
        </Animated.View>
      )}
    </View>
  )
}
