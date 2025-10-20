import TaskModel from "@/models/Task";
import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import SubTask from "../../components/subTask";
import CreateSubTaskModal from "./createSubTaskModal";
import IconButton from "@/components/iconButton";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeContext } from "@/context/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CreateSubTaskViewProps {
  newTask: TaskModel;
  setNewTask: React.Dispatch<React.SetStateAction<TaskModel>>;
}

const styles = StyleSheet.create({
  subTaskContainer: {
    backgroundColor: "rgba(255, 255, 255, .3)",
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 15,
  },
});

const CreateSubTaskView = ({ newTask, setNewTask }: CreateSubTaskViewProps) => {
  const [showCreateSubTaskModal, setShowCreateSubTaskModal] =
    useState<boolean>(false);
  const themeContext = useContext(ThemeContext);
  const { primaryBackColor, secondaryBackColor } = themeContext;

  return (
    <View style={styles.subTaskContainer}>
      <Paragraph color="white" fontSize={22}>
        Sub Tasks:{" "}
      </Paragraph>
      {newTask.subTasks.length > 0 ? (
        newTask.subTasks.map((subTask) => <SubTask task={subTask} />)
      ) : (
        <></>
      )}
      <IconButton
        buttonPress={() => {
          setShowCreateSubTaskModal(true);
        }}
        title={"Add Subtask"}
        marginTop={7.5}
        marginBottom={5}
      >
        <Ionicons name="add-circle-sharp" color={"black"} size={26} />
      </IconButton>
      <CreateSubTaskModal
        showCreateSubTaskModal={showCreateSubTaskModal}
        setShowCreateSubTaskModal={setShowCreateSubTaskModal}
        newTask={newTask}
        setNewTask={setNewTask}
      />
    </View>
  );
};

export default CreateSubTaskView;
