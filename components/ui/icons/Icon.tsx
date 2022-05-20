import React, { FC } from "react"
import { StyleProp, ViewStyle } from "react-native"
import Svg from "react-native-svg"

export const Icon: FC<{
  size: number
  style?: StyleProp<ViewStyle>
  viewBox?: string
}> = ({ size, children, style, viewBox = "0 0 24 24" }) => {
  return (
    <Svg width={size} height={size} fill="none" style={style} viewBox={viewBox}>
      <>{children}</>
    </Svg>
  )
}
