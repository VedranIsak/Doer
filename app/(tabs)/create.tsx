import Container from "@/app/components/container";
import IconButton from "@/app/components/iconButton";
import Paragraph from "@/app/components/paragraph";
import ScreenContainer from "@/app/components/screenContainer";
import CreatePrioModal from "@/app/pageComponents/create/createPrioModal";
import CreateSubTaskView from "@/app/pageComponents/create/createSubTaskView";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useContext, useState } from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import ErrorModal from "../components/errorModal";
import { UserContext } from "../context/UserContext";
import formatDate from "../helpers/formatDate";
import SubTaskModel from "../models/SubTask";
import TaskModel from "../models/Task";
import { saveUser } from "../helpers/dataManager";
import User from "../models/User";

const Create = () => {
  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;

  const [newTask, setNewTask] = useState<TaskModel>(
    new TaskModel(
      formatDate(new Date()),
      "13.00",
      ".....",
      ".....",
      false,
      1,
      new Array<SubTaskModel>()
    )
  );
  const [showDate, setShowDate] = useState<boolean>(false);
  const [showCreatePrioModal, setShowCreatePrioModal] =
    useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [errorMessage, setShowErrorMessage] = useState<string>("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
    },
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

  return (
    <ScreenContainer title="New task" img="create">
      <ErrorModal
        errorMessage={errorMessage}
        setShowErrorModal={setShowErrorModal}
        showErrorModal={showErrorModal}
      />
      <View style={styles.container}>
        <Container padding={10}>
          <Paragraph color={user.settings.textColor as string} fontSize={22}>
            Title
          </Paragraph>
          <TextInput
            style={styles.textInput}
            keyboardType="default"
            value={newTask.title}
            placeholder="....."
            onChangeText={(text) =>
              setNewTask((previous) => previous.cloneWith({ title: text }))
            }
          />
          <Paragraph color={user.settings.textColor as string} fontSize={22}>
            Description
          </Paragraph>
          <TextInput
            style={[styles.textInput]}
            multiline={true}
            value={newTask.description}
            placeholder="....."
            onChangeText={(text) =>
              setNewTask((previous) =>
                previous.cloneWith({ description: text })
              )
            }
          />
        </Container>
        <CreateSubTaskView newTask={newTask} setNewTask={setNewTask} />
        <Container padding={10}>
          <IconButton
            marginTop={5}
            marginBottom={5}
            buttonPress={() => {
              setShowCreatePrioModal(true);
            }}
            width={"55%"}
            title={`Priority level: ${newTask.priorityLevel.toString()}`}
          >
            <Ionicons
              name="flag-sharp"
              color={
                newTask.priorityLevel == 1
                  ? "red"
                  : newTask.priorityLevel == 2
                  ? "yellow"
                  : "green"
              }
              size={26}
            />
          </IconButton>
          <IconButton
            buttonPress={() => {
              () => setShowDate(true);
            }}
            title={`${newTask.dueDate}`}
            marginTop={7.5}
            marginBottom={5}
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
                    setNewTask((previous) =>
                      previous.cloneWith({
                        dueDate: formatDate(selectedDate),
                      })
                    );
                  } else {
                    setShowErrorMessage(
                      "Date has to be today or in the future"
                    );
                    setShowErrorModal(true);
                  }
                }
              }}
            />
          )}
          <IconButton
            buttonPress={() => {
              setUser(new User([...user.tasks, newTask], user.settings));
              saveUser(user);
            }}
            title={"Create task"}
            marginTop={5}
            marginBottom={5}
            width={"55%"}
          >
            <Ionicons name="add-circle-sharp" color={"black"} size={26} />
          </IconButton>
        </Container>
        <CreatePrioModal
          showCreatePrioModal={showCreatePrioModal}
          setShowCreatePrioModal={setShowCreatePrioModal}
          setNewTask={setNewTask}
        />
      </View>
    </ScreenContainer>
  );
};

export default Create;
