import React, { FC } from "react"
import { View } from "react-native"
import { Path, Polyline } from "react-native-svg"
import { getColors } from "../helpers/get-colors"
import { Icon } from "../Icon"
import { IconProps } from "../types"
import { styles } from "../Icon.styles"

export const HomeIcon: FC<IconProps> = ({
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
        <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Polyline points="9 22 9 12 15 12 15 22" />
      </Icon>
    </View>
  )
}
