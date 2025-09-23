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
      borderRadius: 25,
      padding: 20,
      overflow: "hidden",
      marginTop: 5,
      marginBottom: 10,
      width: width - 20,
      borderWidth: 3,
      borderColor: "rgba(255, 255, 255, .5)",
    },
    checkbox: { borderRadius: 15, height: 50, width: 50, borderWidth: 3 },
    taskTopContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  return (
    <Pressable key={task.id.toString()}>
      <View style={styles.taskContainer}>
        <LinearGradient
          colors={["rgba(255, 255, 255, 0.2)", "rgba(173, 61, 111, 0.6)"]}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
        <View style={styles.taskTopContainer}>
          <Paragraph color={"white"} fontSize={18}>
            {task.title}
          </Paragraph>
          <Checkbox
            color={"rgba(255, 255, 255, 0.8)"}
            style={styles.checkbox}
            value={task.isCompleted}
            onValueChange={(checked) => handleCheck(task, checked)}
          />
        </View>
        <Paragraph color={"white"}>{task.dueDate}</Paragraph>
        <Paragraph color={"white"}>{task.description}</Paragraph>
      </View>
    </Pressable>
  );
};

export default Task;
