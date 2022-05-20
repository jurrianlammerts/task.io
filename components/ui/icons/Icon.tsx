import React, { FC } from "react"
import { StyleProp, ViewStyle } from "react-native"
import Svg, { Linecap, Linejoin } from "react-native-svg"

export const Icon: FC<{
  size: number
  style?: StyleProp<ViewStyle>
  viewBox?: string
  fill?: string
  stroke?: string
  strokeWidth?: string
  strokeLinecap?: Linecap
  strokeLinejoin?: Linejoin
}> = ({
  size,
  fill,
  children,
  style,
  viewBox = "0 0 24 24",
  stroke = "currentColor",
  strokeWidth = "2",
  strokeLinecap = "round",
  strokeLinejoin = "round",
}) => {
  return (
    <Svg
      width={size}
      height={size}
      fill={fill}
      style={style}
      viewBox={viewBox}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
    >
      <>{children}</>
    </Svg>
  )
}
