import Paragraph from "./paragraph";
import TaskModel from "../models/Task";
import Checkbox from "expo-checkbox";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";

interface TaskProps {
  task: TaskModel;
  tasks: TaskModel[];
  setTasks: (tasks: TaskModel[]) => void;
}

const Task = ({ task, tasks, setTasks }: TaskProps) => {
  const { width } = Dimensions.get("screen");

  const handleCheck = (task: TaskModel, checked: boolean) => {
    task.isCompleted = checked;

    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const styles = StyleSheet.create({
    taskContainer: {
      borderRadius: 15,
      padding: 25,
      overflow: "hidden",
      marginTop: .5,
      marginBottom: 7.5,
      width: width - 50,
      backgroundColor: "rgba(240, 240, 240, .35)",
    },
    checkbox: {
      borderRadius: 30,
      height: 40,
      width: 40,
      borderWidth: 4,
      borderColor: "white",
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
          <Paragraph color="white" fontSize={18}>
            {task.title}
          </Paragraph>
          <Checkbox
            style={styles.checkbox}
            value={task.isCompleted}
            onValueChange={(checked) => handleCheck(task, checked)}
          />
        </View>
        <Paragraph color="white">{task.dueDate}</Paragraph>
        <Paragraph color="white">{task.description}</Paragraph>
      </View>
    </Pressable>
  );
};

export default Task;
