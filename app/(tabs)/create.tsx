import CreatePrioModal from "@/app/create/createPrioModal";
import CreateSubTaskView from "@/app/create/createSubTaskView";
import ScreenContainer from "@/app/screenContainer";
import Button from "@/components/button";
import Paragraph from "@/components/paragraph";
import formatDate from "@/helpers/formatDate";
import SubTaskModel from "@/models/SubTask";
import TaskModel from "@/models/Task";
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
    buttonContainer: {
      width: "100%",
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
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

  return (
    <ScreenContainer title="New Task!" img="create">
      <ErrorModal
        errorMessage={errorMessage}
        setShowErrorModal={setShowErrorModal}
        showErrorModal={showErrorModal}
      />
      <View style={styles.container}>
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
            setNewTask((previous) => previous.cloneWith({ description: text }))
          }
        />
        <CreateSubTaskView
          newTask={newTask}
          setNewTask={setNewTask}
        />
        <Button
          marginTop={5}
          marginBottom={5}
          buttonPress={() => setShowDate(true)}
          width={200}
        >
          {newTask.dueDate}
        </Button>
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
                  setShowErrorMessage("Date has to be today or in the future");
                  setShowErrorModal(true);
                }
              }
            }}
          />
        )}
        <Button
          marginTop={5}
          marginBottom={5}
          buttonPress={() => {
            setShowCreatePrioModal(true);
          }}
          width={200}
        >
          Priority level: {newTask.priorityLevel.toString()}
        </Button>
        <Button
          marginTop={5}
          marginBottom={5}
          buttonPress={() => {}}
          width={250}
        >
          Create
        </Button>
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
