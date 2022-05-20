import React, { FC } from "react"
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native"
import { styles } from "./styles"
import { Toggle } from "./Toggle"

export type ToggleBoxProps = PressableProps & {
  isActive: boolean
  onToggle?: () => void
  style?: StyleProp<ViewStyle>
  error?: boolean
  errorMessage?: string
}

export const ToggleBox: FC<ToggleBoxProps> = ({
  isActive,
  children,
  error = false,
  errorMessage,
  onToggle,
  style,
  ...rest
}) => {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressed : null,
        error ? styles.error : null,
        style,
      ]}
      onPress={onToggle}
    >
      <View style={styles.content}>{children}</View>

      <Toggle isActive={isActive} />
    </Pressable>
  )
}
