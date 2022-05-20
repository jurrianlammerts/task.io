import type { NavigatorScreenParams } from "@react-navigation/native"

export type RootStackParamList = {
  root: NavigatorScreenParams<RootTabParamList>
}

export type RootTabParamList = {
  calendar: undefined
  home: undefined
  profile: undefined
  inbox: undefined
  notifications: undefined
}
