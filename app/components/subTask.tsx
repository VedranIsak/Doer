import SubTaskModel from "@/app/models/SubTask";
import Checkbox from "expo-checkbox";
import { StyleSheet, View } from "react-native";
import Paragraph from "./paragraph";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

interface SubTaskProps {
  task: SubTaskModel;
}

const handleCheck = (task: SubTaskModel, checked: boolean) => {};

const SubTask = ({ task }: SubTaskProps) => {
  const { user } = useContext(UserContext);

  const styles = StyleSheet.create({
    container: {
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      width: "60%",
      height: 80,
      margin: 7.5,
      overflow: "hidden",
      marginTop: 2.5,
      marginBottom: 5,
      backgroundColor: "rgba(255, 255, 255, .3)",
      borderWidth: 7,
      borderColor: "rgba(255, 255, 255, .5)",
    },
    checkbox: {
      position: "absolute",
      top: 10,
      right: 10,
      borderRadius: 25,
      height: 30,
      width: 30,
      borderWidth: 4,
      borderColor: user.settings.textColor as string
    },
  });
  return (
    <View style={styles.container}>
      <Paragraph
        color={user.settings.textColor as string}
        textAlign="center"
        width={"70%"}
      >
        {task.title}
      </Paragraph>
      <Checkbox
        style={styles.checkbox}
        value={task.isCompleted}
        onValueChange={(checked) => handleCheck(task, checked)}
      />
    </View>
  );
};

export default SubTask;
