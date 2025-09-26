import { View, StyleSheet } from "react-native";
import Paragraph from "./paragraph";
import Checkbox from "expo-checkbox";
import SubTaskModel from "@/models/SubTask";

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255 .1)",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  checkbox: { borderRadius: 10, height: 50, width: 50, borderWidth: 3 },
});

const handleCheck = (task: SubTaskModel, checked: boolean) => {
    
}

const SubTask = (task: SubTaskModel) => (
  <View style={styles.container}>
    <Paragraph>{task.title}</Paragraph>
    <Checkbox
      style={styles.checkbox}
      value={task.isCompleted}
      onValueChange={(checked) => handleCheck(task, checked)}
    />
  </View>
);

export default SubTask;
