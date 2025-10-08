import formatDate from "@/helpers/formatDate";
import SubTaskModel from "@/models/SubTask";
import TaskModel from "@/models/Task";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import Button from "../../components/button";
import ModalContainer from "../../components/modalContainer";
import Paragraph from "../../components/paragraph";

interface CreateSubTaskModalProps {
  showCreateSubTaskModal: boolean;
  setShowCreateSubTaskModal: React.Dispatch<boolean>;
  newTask: TaskModel;
  setNewTask: React.Dispatch<React.SetStateAction<TaskModel>>;
}

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    marginTop: 5,
    marginBottom: 25,
    fontSize: 18,
    height: "auto",
    borderRadius: 10,
    padding: 20,
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
  const [subTask, setSubTask] = useState<SubTaskModel>(
    new SubTaskModel("", false, formatDate(new Date()))
  );

  return (
    <ModalContainer
      showModalContainer={showCreateSubTaskModal}
      setShowModalContainer={setShowCreateSubTaskModal}
    >
      <Paragraph fontSize={22} color="white">
        Title
      </Paragraph>
      <TextInput
        style={styles.textInput}
        value={subTask.title}
        onChangeText={(text) => {
          setSubTask((previous) =>
            previous.cloneWith({ title: text })
          );
        }}
      />
      <Button
        width={200}
        marginBottom={5}
        buttonPress={() => {
          setNewTask((previous) => {
            const subTasks = newTask.subTasks;
            subTasks.push(subTask);
            return previous.cloneWith({ subTasks: subTasks });
          });
          setShowCreateSubTaskModal(false);
        }}
      >
        Add
      </Button>
    </ModalContainer>
  );
};

export default CreateSubTaskModal;
