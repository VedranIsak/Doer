import SubTaskModel from "@/app/models/SubTask";
import Checkbox from "expo-checkbox";
import { StyleSheet, View } from "react-native";
import Paragraph from "./paragraph";

interface SubTaskProps {
  task: SubTaskModel;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "rgba(240, 240, 240, .35)",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: 80,
    margin: 7.5,
    overflow: "hidden",
    marginTop: 2.5,
    marginBottom: 5,
  },
  checkbox: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 25,
    height: 30,
    width: 30,
    borderWidth: 4,
    borderColor: "white",
  },
});

const handleCheck = (task: SubTaskModel, checked: boolean) => {};

const SubTask = ({ task }: SubTaskProps) => (
  <View style={styles.container}>
    <Paragraph color="white" textAlign="center" width={"70%"}>
      {task.title}
    </Paragraph>
    <Checkbox
      style={styles.checkbox}
      value={task.isCompleted}
      onValueChange={(checked) => handleCheck(task, checked)}
    />
  </View>
);

export default SubTask;
