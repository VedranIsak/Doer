import Event from "@/models/Event";
import { View, StyleSheet, Pressable } from "react-native";
import RegularText from "./regularText";
import HeaderText from "./headerText";

interface EventProps {
    event: Event
}

const EventContainer = ({event}: EventProps) => {
    
    const styles = StyleSheet.create({
        container: { width: "90%", borderRadius: 25, backgroundColor: "#ffffff", padding: 20, 
            margin: 10, marginLeft: "5%", marginRight: "5%" }
    })

    return (
        <Pressable>
            <View style={styles.container}>
                <HeaderText>{event.title}</HeaderText>
                <RegularText>{event.date.toDateString()}</RegularText>
                <RegularText>{event.description}</RegularText>
            </View>
        </Pressable>
    )
}

export default EventContainer;