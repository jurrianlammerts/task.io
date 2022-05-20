import React, { FC } from "react"
import { theme, Theme } from "@config/theme"
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
  View,
} from "react-native"

type TextProps = RNTextProps & {
  size?: "micro" | "small" | "regular" | "large"
  weight?: "regular" | "bold"
  style?: StyleProp<TextStyle>
  color?: keyof Theme["colors"]
}

const defaultStyles: TextStyle = {
  fontFamily: "KarlaRegular",
  fontStyle: "normal",
}

export const Text: FC<TextProps> = ({
  size = "regular",
  weight = "regular",
  style,
  color,
  children,
  ...rest
}) => {
  const fontFamily = theme.fontFamily[weight]
  const fontSize = theme.fontSize[size]
  const lineHeight = theme.lineHeight[size]
  const textColor = color ? theme.colors[color] : undefined

  return (
    <View style={style}>
      <RNText
        style={[
          defaultStyles,
          { fontFamily, fontSize, lineHeight, color: textColor },
        ]}
        maxFontSizeMultiplier={1.3}
        {...rest}
      >
        {children}
      </RNText>
    </View>
  )
}
