import React, { FC } from "react"
import { Path } from "react-native-svg"
import { getColors } from "../helpers/get-colors"
import { Icon } from "../Icon"
import { IconProps } from "../types"

export const ArrowRightIcon: FC<IconProps> = ({ size = 24, color, style }) => {
  const { colorHex } = getColors({ color })

  return (
    <Icon {...{ size, style }} viewBox="0 0 17 17">
      <Path
        d="M4.08398 8.27832H13.4173"
        stroke={colorHex}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.75 3.61133L13.4167 8.27799L8.75 12.9447"
        stroke={colorHex}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}
