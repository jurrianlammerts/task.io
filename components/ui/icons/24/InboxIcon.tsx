import React, { FC } from "react"
import { View } from "react-native"
import { Polyline, Path } from "react-native-svg"
import { getColors } from "../helpers/get-colors"
import { Icon } from "../Icon"
import { IconProps } from "../types"
import { styles } from "../Icon.styles"

export const InboxIcon: FC<IconProps> = ({
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
        <Polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <Path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </Icon>
    </View>
  )
}
