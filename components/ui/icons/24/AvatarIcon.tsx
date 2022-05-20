import React, { FC } from "react"
import { Circle, Path } from "react-native-svg"
import { getColors } from "../helpers/get-colors"
import { Icon } from "../Icon"
import { IconProps } from "../types"

export const AvatarIcon: FC<IconProps> = ({ size = 24, color, style }) => {
  const { colorHex } = getColors({ color })

  return (
    <Icon
      {...{ size, style }}
      stroke={colorHex}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></Path>
      <Circle cx="12" cy="7" r="4"></Circle>
    </Icon>
  )
}
