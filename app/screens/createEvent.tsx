import { View, StyleSheet, Modal, TextInput } from "react-native";
import Button from "@/components/button";
import { useState } from "react";
import RegularText from "@/components/text/regularText";
import Event from "@/models/Event";

const CreateEvent = () => {
    const [showEventModal, setShowEventModal] = useState<boolean>(false);
    const [newEvent, setNewEvent] = useState<Event>(new Event(
        100, new Date(), "13.00", "Go to the store", "Go to the store", true, false
    ));

    const styles = StyleSheet.create({
        container: { backgroundColor: "#FBFBFD", flex: 1, display: "flex", 
            flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" },
        buttonContainer: { width: "100%", flexDirection: "row", display: "flex", justifyContent: "center", alignItems: "stretch" },
        textInput: { width: "90%", marginLeft: 5, fontSize: 20, height: "auto", borderWidth: 1.5, borderRadius: 50, borderColor: "grey", padding: 20 }
    })

    return (
        <View>
            <Button buttonPress={() => { setShowEventModal(true); }}>Create new event</Button>
            <Modal visible={showEventModal} animationType="slide">
                <View style={styles.container}>
                    <RegularText>Date</RegularText>
                    <TextInput 
                    style={styles.textInput} 
                    placeholder="Date" 
                    keyboardType="default"
                    value={newEvent.date.toDateString()}
                    onChangeText={text => setNewEvent(previous => ({...previous, date: new Date(text)}))}
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
                    <View style={styles.buttonContainer}>
                        <Button>Create event</Button>
                        <Button buttonPress={() => { setShowEventModal(false); }}>Cancel</Button>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CreateEvent;