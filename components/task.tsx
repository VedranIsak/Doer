import TaskModel from "@/models/Task";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import Paragraph from "@/components/paragraph";

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
      marginTop: 5,
      marginBottom: 10,
      width: width - 20,
      backgroundColor: "white"
    },
    checkbox: { borderRadius: 15, height: 30, width: 30, borderWidth: 3, borderColor: "rgba(255, 255, 255, .8)" },
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
          <Paragraph fontSize={18}>
            {task.title}
          </Paragraph>
          <Checkbox
            color={"black"}
            style={styles.checkbox}
            value={task.isCompleted}
            onValueChange={(checked) => handleCheck(task, checked)}
          />
        </View>
        <Paragraph>{task.dueDate}</Paragraph>
        <Paragraph>{task.description}</Paragraph>
      </View>
    </Pressable>
  );
};

export default Task;
