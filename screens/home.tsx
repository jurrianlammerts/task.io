import { Heading, Text } from "@components/ui/typography"
import { Task } from "@components/ui/Task"
import { Theme, theme } from "@config/theme"
import React, { FC } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

type DataProps = {
  title: string
  description?: string
  startTime: string
  endTime: string
  timePeriod: string
  color: keyof Theme["colors"]
}[]

const data: DataProps = [
  {
    title: "Daily standup",
    description: "Daily standup with your team",
    startTime: "9:00",
    endTime: "10:00",
    timePeriod: "AM",
    color: "lightBlue",
  },
  {
    title: "New UI Kit for the app",
    description:
      "To collect all assets that contains a set of design elements such as componens.",
    startTime: "10:00",
    endTime: "12:00",
    timePeriod: "AM",
    color: "lightGreen",
  },
  {
    title: "Lunch break",
    startTime: "12:00",
    endTime: "12:45",
    timePeriod: "PM",
    color: "lightBlue",
  },
  {
    title: "Call with client",
    description:
      "Discuss site design for a new project and discuss the cost of development.",
    startTime: "13:00",
    endTime: "15:00",
    timePeriod: "PM",
    color: "lightGreen",
  },
  //
  {
    title: "Walk the dog",
    startTime: "15:00",
    endTime: "15:30",
    timePeriod: "AM",
    color: "lightBlue",
  },
  {
    title: "Do the laundry",
    startTime: "15:30",
    endTime: "16:00",
    timePeriod: "AM",
    color: "lightGreen",
  },
  {
    title: "Meet with client",
    startTime: "16:00",
    endTime: "16:30",
    timePeriod: "PM",
    color: "lightBlue",
  },
  {
    title: "Dinner with client",
    startTime: "16:30",
    endTime: "17:10",
    timePeriod: "PM",
    color: "lightGreen",
  },
]

export const HomeScreen: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Heading size="h2">Hi Jurrian!</Heading>
      <Text color="darkGrey">8 tasks for today Monday</Text>
      <View style={styles.list}>
        {data.map((item) => (
          <Task
            key={item.title}
            title={item.title}
            description={item.description}
            startTime={item.startTime}
            endTime={item.endTime}
            timePeriod={item.timePeriod}
            color={item.color}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.white,
  },
  list: {
    paddingVertical: theme.spacing.lg,
  },
})
