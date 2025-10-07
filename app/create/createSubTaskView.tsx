import TaskModel from "@/models/Task";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import SubTask from "../../components/subTask";
import CreateSubTaskModal from "./createSubTaskModal";

interface CreateSubTaskViewProps {
  newTask: TaskModel;
  setNewTask: React.Dispatch<React.SetStateAction<TaskModel>>;
}

const styles = StyleSheet.create({
  subTaskContainer: {
    width: "95%",
    borderRadius: 10,
    borderColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    marginBottom: 5,
    overflow: "hidden",
  },
});

const CreateSubTaskView = ({ newTask, setNewTask }: CreateSubTaskViewProps) => {
  const [showCreateSubTaskModal, setShowCreateSubTaskModal] =
    useState<boolean>(false);

  return (
    <View style={styles.subTaskContainer}>
      <LinearGradient
        colors={["rgba(255, 255, 255, 0.2)", "rgba(173, 61, 111, 0.6)"]}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      <Paragraph color="white" fontSize={22}>
        Sub Tasks:{" "}
      </Paragraph>
      {newTask.subTasks.length > 0 ? (
        newTask.subTasks.map((subTask) => <SubTask task={subTask} />)
      ) : (
        <></>
      )}
      <Button
        marginTop={20}
        marginBottom={5}
        width={200}
        buttonPress={() => {
          setShowCreateSubTaskModal(true);
        }}
      >
        + Add Sub Task
      </Button>
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
