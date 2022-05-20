import React, { FC } from "react"
import { theme, Theme } from "@config/theme"
import { StyleProp, Text, TextProps, TextStyle } from "react-native"
import { styles } from "./Heading.styles"

type HeadingProps = TextProps & {
  color?: keyof Theme["colors"]
  style?: StyleProp<TextStyle>
  size?: keyof typeof styles
}

export const Heading: FC<HeadingProps> = ({
  children,
  size = "h1",
  color = "black",
  style,
  ...rest
}) => {
  return (
    <Text
      style={[{ color: theme.colors[color] }, styles[size], style]}
      maxFontSizeMultiplier={1.2}
      {...rest}
    >
      {children}
    </Text>
  )
}
