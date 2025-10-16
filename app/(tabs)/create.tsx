import CreatePrioModal from "@/app/create/createPrioModal";
import CreateSubTaskView from "@/app/create/createSubTaskView";
import ScreenContainer from "@/app/screenContainer";
import Button from "@/components/button";
import Paragraph from "@/components/paragraph";
import formatDate from "@/helpers/formatDate";
import SubTaskModel from "@/models/SubTask";
import TaskModel from "@/models/Task";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useContext, useState } from "react";
import { ColorValue, Platform, StyleSheet, TextInput, View } from "react-native";
import ErrorModal from "../../components/errorModal";
import { ThemeContext } from '@/context/ThemeContext';

const Create = () => {
  const themeContext = useContext(ThemeContext);
  const primaryBackColor = themeContext?.primaryBackColor as ColorValue;
  const secondaryBackColor = themeContext?.secondaryBackColor as ColorValue;

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
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: 10
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
            setNewTask((previous) => previous.cloneWith({ description: text }))
          }
        />
        </View>
        <CreateSubTaskView newTask={newTask} setNewTask={setNewTask} />
        <View style={[styles.subContainer, styles.buttonContainer]}>
          <Button
            marginTop={5}
            marginBottom={5}
            buttonPress={() => setShowDate(true)}
            width={"45%"}
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
                    setShowErrorMessage(
                      "Date has to be today or in the future"
                    );
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
            width={"45%"}
          >
            Priority level: {newTask.priorityLevel.toString()}
          </Button>
        </View>
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
