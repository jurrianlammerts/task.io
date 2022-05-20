import React from "react"
import { TouchableOpacity } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

import { RootStackParamList, RootTabParamList } from "@navigation/types"
import { CalendarIcon } from "@components/ui/icons/24/CalendarIcon"
import { CalendarScreen } from "./calendar"
import { HomeScreen } from "./home"
import { InboxScreen } from "./inbox"
import { InboxIcon } from "@components/ui/icons/24/InboxIcon"
import { HomeIcon } from "@components/ui/icons/24/HomeIcon"
import { BellIcon } from "@components/ui/icons/24/BellIcon"
import { theme } from "@config/theme"
import { AvatarIcon } from "@components/ui/icons/24/AvatarIcon"
import { Badge } from "@components/ui/Badge"

const Tab = createBottomTabNavigator<RootTabParamList>()
const Stack = createStackNavigator<RootStackParamList>()

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="root"
        component={RootTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export const RootTabNavigator = () => {
  const headerStyle = {
    headerTitle: "",
    tabBarShowLabel: false,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    tabBarStyle: {
      borderTopWidth: 0,
    },
    headerLeft: () => (
      <TouchableOpacity
        style={{
          padding: theme.spacing.lg,
        }}
      >
        <AvatarIcon />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{
          padding: theme.spacing.lg,
        }}
      >
        <BellIcon />
        <Badge />
      </TouchableOpacity>
    ),
  }

  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="calendar"
        component={CalendarScreen}
        options={{
          ...headerStyle,
          tabBarIcon: ({ focused }) => (
            <CalendarIcon
              active={focused}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          ...headerStyle,
          tabBarIcon: ({ focused }) => (
            <HomeIcon active={focused} color={focused ? "white" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name="inbox"
        component={InboxScreen}
        options={{
          ...headerStyle,
          tabBarIcon: ({ focused }) => (
            <InboxIcon active={focused} color={focused ? "white" : "black"} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
