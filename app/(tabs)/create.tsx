import CreatePrioModal from "@/app/create/createPrioModal";
import CreateSubTaskView from "@/app/create/createSubTaskView";
import ScreenContainer from "@/app/screenContainer";
import IconButton from "@/components/iconButton";
import Paragraph from "@/components/paragraph";
import formatDate from "@/helpers/formatDate";
import SubTaskModel from "@/models/SubTask";
import TaskModel from "@/models/Task";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import ErrorModal from "../../components/errorModal";

const Create = () => {
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
    subContainer: {
      backgroundColor: "rgba(255, 255, 255, .3)",
      width: "100%",
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
    },
    buttonContainer: {
      padding: 10,
    },
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

  return (
    <ScreenContainer title="New task" img="create">
      <ErrorModal
        errorMessage={errorMessage}
        setShowErrorModal={setShowErrorModal}
        showErrorModal={showErrorModal}
      />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Paragraph color={"white"} fontSize={22} marginTop={10}>
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
          <Paragraph color={"white"} fontSize={22}>
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
        </View>
        <CreateSubTaskView newTask={newTask} setNewTask={setNewTask} />
        <View style={[styles.subContainer, styles.buttonContainer]}>
          <IconButton
            marginTop={5}
            marginBottom={5}
            buttonPress={() => {
              setShowCreatePrioModal(true);
            }}
            width={"50%"}
            title={`Priority level: ${newTask.priorityLevel.toString()}`}
          >
            <Ionicons name="flag-sharp" color={"black"} size={26} />
          </IconButton>
          <IconButton
            buttonPress={() => {
              () => setShowDate(true);
            }}
            title={`${newTask.dueDate}`}
            marginTop={7.5}
            marginBottom={5}
            width={"50%"}
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
            buttonPress={() => {}}
            title={"Create task"}
            marginTop={5}
            marginBottom={5}
            width={"50%"}
          >
            <Ionicons name="add-circle-sharp" color={"black"} size={26} />
          </IconButton>
        </View>
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
