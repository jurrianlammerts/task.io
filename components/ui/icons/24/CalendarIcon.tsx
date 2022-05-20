import React, { FC } from "react"
import { View } from "react-native"
import { Line, Rect } from "react-native-svg"
import { getColors } from "../helpers/get-colors"
import { Icon } from "../Icon"
import { IconProps } from "../types"
import { styles } from "../Icon.styles"

export const CalendarIcon: FC<IconProps> = ({
  size = 24,
  color,
  style,
  active,
}) => {
  const { colorHex } = getColors({ color })

  return (
    <View style={active && styles.active}>
      <Icon
        {...{ size, style }}
        stroke={colorHex}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <Line x1="16" y1="2" x2="16" y2="6" />
        <Line x1="8" y1="2" x2="8" y2="6" />
        <Line x1="3" y1="10" x2="21" y2="10" />
      </Icon>
    </View>
  )
}
