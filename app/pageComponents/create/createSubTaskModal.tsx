import IconButton from "@/app/components/iconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useState } from "react";
import { Platform, StyleSheet, TextInput } from "react-native";
import ModalContainer from "../../components/modalContainer";
import Paragraph from "../../components/paragraph";
import { UserContext } from "../../context/UserContext";
import SubTaskModel from "../../models/SubTask";
import TaskModel from "../../models/Task";
import formatDate from "@/app/helpers/formatDate";
import ErrorModal from "@/app/components/errorModal";
import DateTimePicker from "@react-native-community/datetimepicker";

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
    marginBottom: 10,
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

  const [showDate, setShowDate] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [subTask, setSubTask] = useState<SubTaskModel>(
    new SubTaskModel("Title", false, newTask.dueDate)
  );

  return (
    <ModalContainer
    title="Subtask"
      showModalContainer={showCreateSubTaskModal}
      setShowModalContainer={setShowCreateSubTaskModal}
    >
      <ErrorModal
        errorMessage={errorMessage}
        setShowErrorModal={setShowErrorModal}
        showErrorModal={showErrorModal}
      />
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
      {user.settings.autoAssignDateForSubTasks ? (
        <></>
      ) : (
        <>
          <IconButton
            buttonPress={() => {
              setShowDate(true);
            }}
            title={`${subTask.dueDate}`}
            marginBottom={10}
            width={"55%"}
          >
            <Ionicons name="calendar-clear-sharp" color={"black"} size={26} />
          </IconButton>
          {showDate && (
            <DateTimePicker
              value={new Date(formatDate(new Date()))}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(event, selectedDate) => {
                setShowDate(false);

                if (selectedDate) {
                  if (formatDate(selectedDate) >= formatDate(new Date())) {
                    setSubTask((previous) =>
                      previous.cloneWith({
                        dueDate: formatDate(selectedDate),
                      })
                    );
                  } else {
                    setErrorMessage("Date has to be today or in the future");
                    setShowErrorModal(true);
                  }
                }
              }}
            />
          )}
        </>
      )}

      <IconButton
        marginBottom={5}
        title="Add"
        buttonPress={() => {
          setNewTask((previous) => {
            const subTasks = newTask.subTasks;
            subTasks.push(subTask);
            return previous.cloneWith({ subTasks: subTasks });
          });
          setSubTask(new SubTaskModel("Title", false, newTask.dueDate));
          setShowCreateSubTaskModal(false);
        }}
      >
        <Ionicons name="add-circle-sharp" color={"black"} size={26} />
      </IconButton>
    </ModalContainer>
  );
};

export default CreateSubTaskModal;
