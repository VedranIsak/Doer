import { View, StyleSheet } from "react-native";
import Paragraph from "./paragraph";
import Checkbox from "expo-checkbox";
import SubTaskModel from "@/models/SubTask";
import { LinearGradient } from "expo-linear-gradient";

interface SubTaskProps {
  task: SubTaskModel;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width: "70%",
    height: 70,
    margin: 7.5,
    overflow: "hidden"
  },
  checkbox: {
    position: "absolute",
    top: 7.5,
    right: 7.5,
    borderRadius: 25,
    height: 40,
    width: 40,
    borderWidth: 4,
    borderColor: "black"
  },
});

const handleCheck = (task: SubTaskModel, checked: boolean) => {};

const SubTask = ({ task }: SubTaskProps) => (
  <View style={styles.container}>
    <Paragraph textAlign="center" width={"70%"}>{task.title}</Paragraph>
    <Checkbox
      style={styles.checkbox}
      value={task.isCompleted}
      onValueChange={(checked) => handleCheck(task, checked)}
    />
  </View>
);

export default SubTask;
