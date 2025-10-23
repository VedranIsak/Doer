import IconButton from "@/app/components/iconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Container from "../components/container";
import Paragraph from "../components/paragraph";
import SubTask from "../components/subTask";
import TaskModel from "../models/Task";
import CreateSubTaskModal from "./createSubTaskModal";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

interface CreateSubTaskViewProps {
  newTask: TaskModel;
  setNewTask: React.Dispatch<React.SetStateAction<TaskModel>>;
}

const CreateSubTaskView = ({ newTask, setNewTask }: CreateSubTaskViewProps) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const [showCreateSubTaskModal, setShowCreateSubTaskModal] =
    useState<boolean>(false);

  return (
    <Container padding={10}>
      <Paragraph color={user.settings.textColor as string} fontSize={22}>
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
