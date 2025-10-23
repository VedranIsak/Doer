import Paragraph from "./paragraph";
import TaskModel from "../models/Task";
import Checkbox from "expo-checkbox";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

interface TaskProps {
  task: TaskModel;
  tasks: TaskModel[];
  setTasks: (tasks: TaskModel[]) => void;
}

const Task = ({ task, tasks, setTasks }: TaskProps) => {
  const { width } = Dimensions.get("screen");
  const { user } = useContext(UserContext);

  const handleCheck = (task: TaskModel, checked: boolean) => {
    task.isCompleted = checked;

    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const styles = StyleSheet.create({
    taskContainer: {
      borderRadius: 25,
      padding: 25,
      overflow: "hidden",
      marginTop: 0.5,
      marginBottom: 7.5,
      width: width - 50,
      backgroundColor: "rgba(255, 255, 255, .3)",
      borderWidth: 10,
      borderColor: "rgba(255, 255, 255, .5)",
    },
    checkbox: {
      borderRadius: 30,
      height: 40,
      width: 40,
      borderWidth: 4,
      borderColor: user.settings.textColor as string,
    },
    taskTopContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  return (
    <Pressable key={task.id.toString()}>
      <View style={styles.taskContainer}>
        <View style={styles.taskTopContainer}>
          <Paragraph color={user.settings.textColor as string} fontSize={18}>
            {task.title}
          </Paragraph>
          <Checkbox
            style={styles.checkbox}
            value={task.isCompleted}
            onValueChange={(checked) => handleCheck(task, checked)}
          />
        </View>
        <Paragraph color={user.settings.textColor as string}>
          {task.dueDate}
        </Paragraph>
        <Paragraph color={user.settings.textColor as string}>
          {task.description}
        </Paragraph>
      </View>
    </Pressable>
  );
};

export default Task;
