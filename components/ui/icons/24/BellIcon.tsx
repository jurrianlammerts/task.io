import React, { FC } from "react"
import { Path } from "react-native-svg"
import { getColors } from "../helpers/get-colors"
import { Icon } from "../Icon"
import { IconProps } from "../types"

export const BellIcon: FC<IconProps> = ({ size = 24, color, style }) => {
  const { colorHex } = getColors({ color })

  return (
    <Icon
      {...{ size, style }}
      stroke={colorHex}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </Icon>
  )
}
