import { Theme } from "@config/theme"
import { StyleProp, ViewStyle } from "react-native"
import { VectorEffectProps } from "react-native-svg"

export type IconProps = VectorEffectProps & {
  color?: keyof Theme["colors"]
  size?: number
  style?: StyleProp<ViewStyle>
  active?: boolean
}
