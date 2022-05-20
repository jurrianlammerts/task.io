import React, { FC } from "react"
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native"

import { Text } from "../typography/Text"
import { styles } from "./Button.styles"
import { ButtonIcon, ButtonIconType } from "./ButtonIcon"

export type ButtonProps = PressableProps & {
  icon?: ButtonIconType
  iconPosition?: "left" | "right"
  status?: "loading" | "idle"
  variant?: "primary" | "outline"
  size?: "medium" | "large"
  onPress: () => void
  style?: StyleProp<ViewStyle>
}

export const Button: FC<ButtonProps> = ({
  icon,
  status = "idle",
  iconPosition = "left",
  variant = "primary",
  size = "medium",
  onPress,
  children,
  style,
}) => {
  const innerColorKey = variant === "primary" ? "white" : "black"
  let inner = null

  const text = (
    <Text
      color={innerColorKey}
      weight="medium"
      style={styles[`text-${variant}`]}
    >
      {children}
    </Text>
  )

  if (icon) {
    inner = (
      <>
        {iconPosition === "right" ? (
          <View style={styles.iconRight}>{text}</View>
        ) : null}
        <ButtonIcon type={icon} color={innerColorKey} />
        {iconPosition === "left" ? (
          <View style={styles.iconLeft}>{text}</View>
        ) : null}
      </>
    )
  } else {
    inner = text
  }

  return (
    <Pressable
      disabled={status === "loading"}
      style={({ pressed }) => [
        styles.container,
        styles[`button-${variant}${pressed ? "-pressed" : ""}`],
        style,
      ]}
      {...{ onPress }}
    >
      {inner}
    </Pressable>
  )
}
