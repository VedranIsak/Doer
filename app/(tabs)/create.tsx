import ScreenContainer from "@/app/screenContainer";
import Button from "@/components/button";
import Paragraph from "@/components/paragraph";
import Event from "@/models/Task";
import { useState } from "react";
import { Modal, StyleSheet, TextInput, View } from "react-native";

const Create = () => {
    const [newEvent, setNewEvent] = useState<Event>(new Event(
        100, new Date().toISOString().split('T')[0], "13.00", "Go to the store", "Go to the store", true, false
    ));

    const styles = StyleSheet.create({
        container: {  
            flex: 1, flexDirection: "column", justifyContent: "flex-start", alignItems: "center" },
        buttonContainer: { width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-evenly", alignItems: "center" },
        textInput: { 
            width: "90%", marginTop: 5, marginBottom: 10, fontSize: 18, height: "auto", 
            borderWidth: 3, borderRadius: 15, borderColor: "rgba(255, 255, 255, 0.4)",
            padding: 20, color: "white"
        }
    })

    return ( 
        <ScreenContainer title="New Task!" img="create">
        <View style={styles.container}>
            <Paragraph color={"white"} fontSize={18}>Date</Paragraph>
            <TextInput 
            style={styles.textInput} 
            placeholder="Date" 
            keyboardType="default"
            value={newEvent.date}
            onChangeText={text => setNewEvent(previous => ({...previous, date: text}))}
            />
            <Paragraph color={"white"} fontSize={18}>Title</Paragraph>
            <TextInput 
            style={styles.textInput} 
            placeholder="Title" 
            keyboardType="default"
            value={newEvent.title}
            onChangeText={text => setNewEvent(previous => ({...previous, title: text}))}
            />
            <Paragraph color={"white"} fontSize={18}>Description</Paragraph>
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
        </ScreenContainer>
    )
}

export default Create;