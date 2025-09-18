import ScreenContainer from "@/app/screenContainer";
import Button from "@/components/button";
import Paragraph from "@/components/paragraph";
import TaskModel from "@/models/Task";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Modal, Platform, StyleSheet, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const Create = () => {
    const [newEvent, setNewEvent] = useState<TaskModel>(new TaskModel(
        100, new Date().toISOString().split('T')[0], "13.00", "Go to the store", 
        "Go to the store", true, false, 1
    ));
    const [showDate, setShowDate] = useState<boolean>(false);
    const [showPrioModal, setShowPrioModal] = useState<boolean>(false);

    const changePriorityLevel = (newLevel: number) => {
        setNewEvent(previous => ({...previous, priorityLevel: newLevel}))
    }

    const styles = StyleSheet.create({
        container: {  
            flex: 1, flexDirection: "column", justifyContent: "flex-start", 
            alignItems: "center", width: "100%" },
        buttonContainer: { 
            width: "100%", flexDirection: "row", display: "flex", 
            justifyContent: "space-evenly", alignItems: "center" 
        },
        textInput: { 
            width: "90%", marginTop: 5, marginBottom: 15, fontSize: 18, 
            height: "auto", borderWidth: 3, borderRadius: 15, 
            borderColor: "rgba(255, 255, 255, .5)", padding: 20, 
            color: "white", textAlign: "center"
        },
        modalBackdrop: { flex: 1, justifyContent: "center", alignItems: "center" },
        modalContainer: { 
            height: "auto", justifyContent: "space-between", alignItems: "center", backgroundColor: "#470047",
            width: "90%", borderRadius: 15, padding: 15, overflow: "hidden"
        }
    })

    return ( 
        <ScreenContainer title="New Task!" img="create">
            <View style={styles.container}>
                <Paragraph color={"white"} fontSize={20}>Title</Paragraph>
                <TextInput 
                style={styles.textInput} 
                keyboardType="default"
                value={newEvent.title}
                onChangeText={text => setNewEvent(previous => ({...previous, title: text}))}
                />
                <Button backgroundColor="transparent" color="white" marginTop={5} 
                marginBottom={5} buttonPress={() => setShowDate(true)} width={"90%"}
                >
                    {newEvent.date}
                </ Button>
                {showDate && (
                    <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={(event, selectedDate) => {
                        setShowDate(false);
                        if (selectedDate) setNewEvent(previous => ({...previous, date: selectedDate.toDateString()}));
                    }}
                    />
                )}
                <Button backgroundColor="transparent" color="white" marginTop={5} 
                marginBottom={5} buttonPress={() => { setShowPrioModal(true) }} width={"90%"}
                >
                    Priority level: {newEvent.priorityLevel.toString()}
                </Button>
                <Paragraph color={"white"} fontSize={20}>Description</Paragraph>
                <TextInput 
                style={[styles.textInput, { height: 250 }]} 
                multiline={true}
                numberOfLines={4}
                value={newEvent.description}
                onChangeText={text => setNewEvent(previous => ({...previous, description: text}))}
                />
                <Button marginTop={5} marginBottom={5} buttonPress={() => { }} width={"90%"}>Create event</Button>
                {/* <Button marginTop={5} marginBottom={5} buttonPress={() => { }} width={"90%"}>Cancel</Button> */}
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
                            <Paragraph color={"white"} fontSize={18}>Priority level</Paragraph>
                            <Button marginTop={10} width={"95%"} buttonPress={() => { changePriorityLevel(1); setShowPrioModal(false); }}>1</Button>
                            <Button marginTop={10} width={"95%"} buttonPress={() => { changePriorityLevel(2); setShowPrioModal(false); }}>2</Button>
                            <Button marginTop={10} width={"95%"} buttonPress={() => { changePriorityLevel(3); setShowPrioModal(false); }}>3</Button>
                            <Button marginTop={10} width={"95%"} buttonPress={() => { changePriorityLevel(4); setShowPrioModal(false); }}>4</Button>
                            <Button marginTop={10} buttonPress={() => { setShowPrioModal(false); }}>Close</Button>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScreenContainer>
    )
}

export default Create;