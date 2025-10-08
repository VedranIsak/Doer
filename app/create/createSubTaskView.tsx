import TaskModel from "@/models/Task";
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    marginBottom: 5,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "rgba(255, 255, 255, .8)",
  },
});

const CreateSubTaskView = ({ newTask, setNewTask }: CreateSubTaskViewProps) => {
  const [showCreateSubTaskModal, setShowCreateSubTaskModal] =
    useState<boolean>(false);

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
