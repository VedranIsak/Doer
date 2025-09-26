import ScreenContainer from "@/app/screenContainer";
import Button from "@/components/button";
import Paragraph from "@/components/paragraph";
import SubTask from "@/components/subTask";
import formatDate from "@/helpers/formatDate";
import SubTaskModel from "@/models/SubTask";
import TaskModel from "@/models/Task";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Modal, Platform, StyleSheet, TextInput, View } from "react-native";

const Create = () => {
  const [newTask, setNewTask] = useState<TaskModel>(
    new TaskModel(
      100,
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
  const [showPrioModal, setShowPrioModal] = useState<boolean>(false);
  const [showSubTaskModal, setShowSubTaskModal] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [errorMessage, setShowErrorMessage] = useState<string>("");
  const [subTaskTitle, setSubTaskTitle] = useState<string>("....");

  const ErrorModal = () => (
    <Modal
      backdropColor={"rgba(0, 0, 0, .5)"}
      visible={showErrorModal}
      animationType="fade"
    >
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <LinearGradient
            colors={["rgba(255, 255, 255, 0.2)", "rgba(173, 61, 111, 0.6)"]}
            style={StyleSheet.absoluteFillObject}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
          <Paragraph color={"white"} fontSize={22}>
            Error!
          </Paragraph>
          <Paragraph color="white" fontSize={18}>
            {errorMessage}
          </Paragraph>
          <Button
            marginTop={10}
            buttonPress={() => {
              setShowErrorModal(false);
            }}
          >
            Ok
          </Button>
        </View>
      </View>
    </Modal>
  );

  const changePriorityLevel = (newLevel: number) => {
    setNewTask((previous) => previous.cloneWith({ priorityLevel: newLevel }));
    setShowPrioModal(false);
  };

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
    subTaskContainer: {
      width: "90%",
      borderRadius: 10,
      borderColor: "white",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      marginBottom: 5,
      backgroundColor: "rgba(255, 255, 255, .1)"
    },
    modalBackdrop: { flex: 1, justifyContent: "center", alignItems: "center" },
    modalContainer: {
      height: "auto",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#470047",
      width: "90%",
      borderRadius: 15,
      padding: 15,
      overflow: "hidden",
    },
  });

  return (
    <ScreenContainer title="New Task!" img="create">
      <ErrorModal />
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
        <View style={styles.subTaskContainer}>
          <Paragraph color="white" fontSize={22}>
            Sub Tasks:{" "}
          </Paragraph>
          {newTask.subTasks.length > 0 ? 
          newTask.subTasks.map((subTask) => (
            <SubTask title={subTask.title} />
          ))
          :
          <></>
          }
          <Button
            marginTop={20}
            marginBottom={5}
            width={200}
            buttonPress={() => {
              setShowSubTaskModal(true);
            }}
          >
            + Add Sub Task
          </Button>
          <Modal
            backdropColor={"rgba(0, 0, 0, .5)"}
            animationType="fade"
            visible={showSubTaskModal}
          >
            <View style={styles.modalBackdrop}>
              <View style={styles.modalContainer}>
                <LinearGradient
                  colors={[
                    "rgba(255, 255, 255, 0.2)",
                    "rgba(173, 61, 111, 0.6)",
                  ]}
                  style={StyleSheet.absoluteFillObject}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
                <Paragraph fontSize={22} color="white">
                  Title
                </Paragraph>
                <TextInput 
                  style={styles.textInput}
                  value={subTaskTitle}
                 />
                <Button
                  width={200}
                  marginBottom={5}
                  buttonPress={() => {
                    setNewTask((previous) => {
                      const subTasks = newTask.subTasks;
                      subTasks.push(new SubTaskModel(subTaskTitle, false, newTask.dueDate))
                      return previous.cloneWith( { subTasks: subTasks } );
                    });
                  }}
                >
                  Add
                </Button>
                <Button
                  buttonPress={() => {
                    setShowSubTaskModal(false);
                  }}
                >
                  Close
                </Button>
              </View>
            </View>
          </Modal>
        </View>
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
            setShowPrioModal(true);
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
        <Modal
          backdropColor={"rgba(0, 0, 0, .5)"}
          visible={showPrioModal}
          animationType="fade"
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContainer}>
              <LinearGradient
                colors={["rgba(255, 255, 255, 0.2)", "rgba(173, 61, 111, 0.6)"]}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
              <Paragraph color={"white"} fontSize={22}>
                Priority level
              </Paragraph>
              <Button
                marginTop={10}
                width={200}
                buttonPress={() => {
                  changePriorityLevel(1);
                }}
              >
                1
              </Button>
              <Button
                marginTop={10}
                width={200}
                buttonPress={() => {
                  changePriorityLevel(2);
                }}
              >
                2
              </Button>
              <Button
                marginTop={10}
                width={200}
                buttonPress={() => {
                  changePriorityLevel(3);
                }}
              >
                3
              </Button>
              <Button
                marginTop={10}
                width={200}
                buttonPress={() => {
                  changePriorityLevel(4);
                }}
              >
                4
              </Button>
              <Button
                marginTop={10}
                buttonPress={() => {
                  setShowPrioModal(false);
                }}
              >
                Close
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </ScreenContainer>
  );
};

export default Create;
