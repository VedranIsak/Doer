import ScreenContainer from "@/app/screenContainer";
import Button from "@/components/button";
import Paragraph from "@/components/paragraph";
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
      new Date().toISOString().split("T")[0],
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

  const changePriorityLevel = (newLevel: number) => {
    setNewTask((previous) => (previous.cloneWith({ priorityLevel: newLevel })));
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
      borderWidth: 3,
      borderRadius: 15,
      borderColor: "rgba(255, 255, 255, .5)",
      padding: 20,
      color: "white",
      textAlign: "left",
    },
    subTaskContainer: {
      width: "90%",
      borderWidth: 3,
      borderRadius: 15,
      borderColor: "rgba(255, 255, 255, .5)",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      marginBottom: 5,
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
            setNewTask((previous) => (previous.cloneWith({ title: text })))
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
            setNewTask((previous) => (previous.cloneWith({ description: text })))
          }
        />
        <View style={styles.subTaskContainer}>
          <Paragraph color="white" fontSize={22}>
            Sub Tasks:{" "}
          </Paragraph>
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
                <TextInput placeholder="...." style={styles.textInput} />
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
            value={new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedDate) => {
              setShowDate(false);
              if (selectedDate)
            setNewTask((previous) => (previous.cloneWith({ dueDate: selectedDate.toISOString().split("T")[0] })))
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
          width={"90%"}
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
