import React, { FC } from "react"
import { StyleProp, ViewStyle } from "react-native"
import { Theme } from "@config/theme"
import { Icon } from "@components/ui/icons/Icon"
import { ArrowRightIcon } from "@components/ui/icons/24/ArrowRightIcon"

export type ButtonIconType = "arrow-right"

type ButtonIconProps = {
  type: ButtonIconType
  color: keyof Theme["colors"]
  style?: StyleProp<ViewStyle>
}

export const ButtonIcon: FC<ButtonIconProps> = ({ type, color, style }) => {
  if (type === "arrow-right") {
    return (
      <Icon size={16} style={style}>
        <ArrowRightIcon color={color} />
      </Icon>
    )
  }

  return null
}
