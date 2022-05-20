import { theme } from "@config/theme"
import React, { FC, useEffect, useRef } from "react"
import { Animated, PressableProps } from "react-native"
import { styles } from "./styles"

type ToggleProps = PressableProps & {
  isActive: boolean
}

export const Toggle: FC<ToggleProps> = ({ isActive }) => {
  const value = useRef(new Animated.Value(isActive ? 1 : 0)).current

  useEffect(() => {
    Animated.timing(value, {
      toValue: isActive ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive])

  const backgroundColor = value.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.lightBlue, theme.colors.darkGrey],
  })
  const translateX = value.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  })

  return (
    <Animated.View
      style={[
        styles.switch,
        {
          backgroundColor,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.switchContainer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <Animated.View style={styles.circle} />
      </Animated.View>
    </Animated.View>
  )
}
