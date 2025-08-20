import Event from "@/models/Event";
import { Pressable, StyleSheet, View } from "react-native";
import Checkbox from 'expo-checkbox';
import HeaderText from "./text/headerText";
import RegularText from "./text/regularText";
import { useState } from "react";

interface EventProps {
    event: Event
}

const EventContainer = ({event}: EventProps) => {

    const [activeEvent, setActiveEvent] = useState<Event>(event);
    
    const styles = StyleSheet.create({
        container: { borderRadius: 25, backgroundColor: "#FBFBFD", padding: 20, 
            marginTop: 7.5, marginBottom: 7.5, boxShadow: "2px 2px 6px gray", },
        checkbox: { borderRadius: 50, height: 40, width: 40 },
        topContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between" }
    })

    return (
        <Pressable>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <HeaderText>{event.title}</HeaderText>
                    <Checkbox style={styles.checkbox} value={activeEvent.isCompleted} 
                    onValueChange={(checked) => { setActiveEvent((prev) => ({...prev, isCompleted: checked})) }}
                    />
                </View>
                <RegularText>{event.date.toDateString()}</RegularText>
                <RegularText>{event.description}</RegularText>
            </View>
        </Pressable>
    )
}

export default EventContainer;