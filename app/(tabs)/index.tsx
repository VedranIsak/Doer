import ScreenContainer from "@/app/screenContainer";
import Paragraph from "@/components/paragraph";
import Task from "@/components/task";
import ThemeProvider from "@/context/ThemeContext";
import importedTasks from "@/data/mockData";
import formatDate from "@/helpers/formatDate";
import TaskModel from "@/models/Task";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, .3)",
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

const HomeScreen = () => {
  const todayDate = formatDate(new Date());
  const [allTasks, setAllTasks] = useState<TaskModel[]>(importedTasks);
  const [todayTasks, setTodayTasks] = useState<TaskModel[]>(
    (importedTasks ?? []).filter((task) => task.dueDate === todayDate)
  );
  const completedTasks = todayTasks.filter((task) => task.isCompleted);
  const notCompletedTasks = todayTasks.filter((task) => !task.isCompleted);
  const unfinishedTasks = allTasks.filter((task) => task.hasPassed());
  console.log("todays tasks length", notCompletedTasks.length);
  return (
    <ThemeProvider>
      <ScreenContainer title="Today's tasks" img="index">
        {notCompletedTasks.length === 0 ? (
          <Paragraph
            marginBottom={10}
            marginTop={5}
            width={"90%"}
            color="white"
            fontSize={22}
            textAlign="center"
          >
            Nicely done! You've completed everything for today!
          </Paragraph>
        ) : (
          <View style={styles.container}>
            <Paragraph
              marginBottom={10}
              marginTop={5}
              width={"90%"}
              color="white"
              fontSize={22}
              textAlign="center"
            >
              {`Todays tasks (${formatDate(new Date())})`}
            </Paragraph>
            {notCompletedTasks.map((task) => (
              <Task task={task} tasks={todayTasks} setTasks={setTodayTasks} />
            ))}
          </View>
        )}
        {completedTasks.length > 0 ? (
          <View style={styles.container}>
            <Paragraph
              marginBottom={10}
              marginTop={5}
              width={"90%"}
              color="white"
              fontSize={22}
              textAlign="center"
            >
              Today's completed tasks:
            </Paragraph>
            {completedTasks.map((task) => (
              <Task task={task} tasks={todayTasks} setTasks={setTodayTasks} />
            ))}
          </View>
        ) : (
          <></>
        )}
        {unfinishedTasks.length > 0 ? (
          <View style={styles.container}>
            <Paragraph
              marginBottom={10}
              marginTop={5}
              width={"90%"}
              color="white"
              fontSize={22}
              textAlign="center"
            >
              Old, unfinished tasks:
            </Paragraph>
            {unfinishedTasks.map((task) => (
              <Task
                task={task}
                tasks={unfinishedTasks}
                setTasks={setAllTasks}
              />
            ))}
          </View>
        ) : (
          <></>
        )}
      </ScreenContainer>
    </ThemeProvider>
  );
};

export default HomeScreen;
