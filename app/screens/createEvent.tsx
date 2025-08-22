import Button from "@/components/pressable/button";
import RegularText from "@/components/text/regularText";
import Event from "@/models/Event";
import { useState } from "react";
import { Modal, StyleSheet, TextInput, View } from "react-native";

const CreateEvent = () => {
    const [newEvent, setNewEvent] = useState<Event>(new Event(
        100, new Date().toISOString().split('T')[0], "13.00", "Go to the store", "Go to the store", true, false
    ));

    const styles = StyleSheet.create({
        container: { backgroundColor: "#FBFBFD", flex: 1, display: "flex", 
            flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" },
        buttonContainer: { width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-evenly", alignItems: "center" },
        textInput: { width: "90%", marginLeft: 5, fontSize: 20, height: "auto", borderWidth: 5, borderRadius: 50, borderColor: "#007AFF", padding: 20 }
    })

    return ( 
        <View style={styles.container}>
            <RegularText>Date</RegularText>
            <TextInput 
            style={styles.textInput} 
            placeholder="Date" 
            keyboardType="default"
            value={newEvent.date}
            onChangeText={text => setNewEvent(previous => ({...previous, date: text}))}
            />
            <RegularText>Title</RegularText>
            <TextInput 
            style={styles.textInput} 
            placeholder="Title" 
            keyboardType="default"
            value={newEvent.title}
            onChangeText={text => setNewEvent(previous => ({...previous, title: text}))}
            />
            <RegularText>Description</RegularText>
            <TextInput 
            style={styles.textInput} 
            multiline={true}
            numberOfLines={4}
            value={newEvent.description}
            onChangeText={text => setNewEvent(previous => ({...previous, description: text}))}
            />
            <Button buttonPress={() => { console.log("priority"); }} width={200}>Priority</Button>
            <Modal visible={false}>
                <View>
                    <Button buttonPress={() => {}} width={50}>1</Button>
                    <Button buttonPress={() => {}} width={50}>2</Button>
                    <Button buttonPress={() => {}} width={50}>3</Button>
                    <Button buttonPress={() => {}} width={50}>4</Button>
                </View>
            </Modal>
            <View style={styles.buttonContainer}>
                <Button buttonPress={() => { console.log("creating new event"); }} width={"45%"}>Create event</Button>
                <Button buttonPress={() => { }} width={"45%"}>Cancel</Button>
            </View>
        </View>
    )
}

export default CreateEvent;