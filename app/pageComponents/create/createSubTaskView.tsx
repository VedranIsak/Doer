import IconButton from "@/app/components/iconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useState } from "react";
import Container from "../../components/container";
import Paragraph from "../../components/paragraph";
import SubTask from "../../components/subTask";
import { UserContext } from "../../context/UserContext";
import TaskModel from "../../models/Task";
import CreateSubTaskModal from "./createSubTaskModal";

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
        Subtasks
      </Paragraph>
      {newTask.subTasks.length > 0 ? (
        newTask.subTasks.map((subTask) => (
          <SubTask
            key={subTask.id}
            marginTop={7.5}
            marginBottom={7.5}
            width={"50%"}
            showCheck={false}
            task={subTask}
          />
        ))
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
