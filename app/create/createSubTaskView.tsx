import IconButton from "@/app/components/iconButton";
import Container from "@/app/models/Tasknts/container";
import TaskModel from "@/models/Task";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Paragraph from "../components/paragraph";
import SubTask from "../components/subTask";
import CreateSubTaskModal from "./createSubTaskModal";

interface CreateSubTaskViewProps {
  newTask: TaskModel;
  setNewTask: React.Dispatch<React.SetStateAction<TaskModel>>;
}

const CreateSubTaskView = ({ newTask, setNewTask }: CreateSubTaskViewProps) => {
  const [showCreateSubTaskModal, setShowCreateSubTaskModal] =
    useState<boolean>(false);

  return (
    <Container padding={10}>
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
        width={"50%"}
      >
        <Ionicons name="add-circle-sharp" color={"black"} size={26} />
      </IconButton>
      <CreateSubTaskModal
        showCreateSubTaskModal={showCreateSubTaskModal}
        setShowCreateSubTaskModal={setShowCreateSubTaskModal}
        newTask={newTask}
        setNewTask={setNewTask}
      />
    </Container>
  );
};

export default CreateSubTaskView;
