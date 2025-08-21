import Button from "@/components/button";
import EventContainer from "@/components/eventContainer";
import ScreenContainer from "@/components/screenContainer";
import ScreenHeader from "@/components/screenHeader";
import { useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import events from "@/data/mockData";
import CreateEvent from "./createEvent";


const Start = () => {    
    const styles = StyleSheet.create({
        container: { display: "flex", justifyContent: "flex-start", alignItems: "center", 
        flexDirection: "column", padding: 10 }
    });

    return (
        <ScreenContainer>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <ScreenHeader>Life organiser</ScreenHeader>
                {events.map(event => 
                    <EventContainer event={event} key={event.id}/>
                )}
                <CreateEvent />
            </ScrollView>
      </ScreenContainer>
    )
}

export default Start;