import IconButton from "@/app/components/iconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import ModalContainer from "../../components/modalContainer";
import Paragraph from "../../components/paragraph";
import { UserContext } from "../../context/UserContext";
import SubTaskModel from "../../models/SubTask";
import TaskModel from "../../models/Task";

interface CreateSubTaskModalProps {
  showCreateSubTaskModal: boolean;
  setShowCreateSubTaskModal: React.Dispatch<boolean>;
  newTask: TaskModel;
  setNewTask: React.Dispatch<React.SetStateAction<TaskModel>>;
}

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    marginTop: 5,
    marginBottom: 25,
    fontSize: 18,
    height: "auto",
    borderRadius: 10,
    padding: 12.5,
    backgroundColor: "white",
    color: "black",
    textAlign: "left",
  },
});

const CreateSubTaskModal = ({
  setShowCreateSubTaskModal,
  showCreateSubTaskModal,
  setNewTask,
  newTask,
}: CreateSubTaskModalProps) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const [subTask, setSubTask] = useState<SubTaskModel>(
    new SubTaskModel("Title", false, newTask.dueDate)
  );

  return (
    <ModalContainer
      showModalContainer={showCreateSubTaskModal}
      setShowModalContainer={setShowCreateSubTaskModal}
    >
      <Paragraph fontSize={22} color={user.settings.textColor as string}>
        Title
      </Paragraph>
      <TextInput
        style={styles.textInput}
        value={subTask.title}
        onChangeText={(text) => {
          setSubTask((previous) => previous.cloneWith({ title: text }));
        }}
      />
      <IconButton
        marginBottom={5}
        title="Add"
        buttonPress={() => {
          setNewTask((previous) => {
            const subTasks = newTask.subTasks;
            subTasks.push(subTask);
            return previous.cloneWith({ subTasks: subTasks });
          });
          setSubTask(new SubTaskModel("Title", false, newTask.dueDate))
          setShowCreateSubTaskModal(false);
        }}
      >
        <Ionicons name="add-circle-sharp" color={"black"} size={26} />
      </IconButton>
    </ModalContainer>
  );
};

export default CreateSubTaskModal;
