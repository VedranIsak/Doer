import ScreenContainer from "@/app/screens/screenContainer";
import EventContainer from "@/components/eventContainer";
import ScreenHeader from "@/components/screenHeader";
import HeaderText from "@/components/text/headerText";
import events from "@/data/mockData";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import CreateEvent from "./createEvent";
import Button from "@/components/pressable/button";


const Start = () => {    
    const todayDate = new Intl.DateTimeFormat("en-CA").format(new Date());
    const tomorrowDate = new Intl.DateTimeFormat("en-CA").format(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    const todayEvents = events.filter((event) => event.date === todayDate);
    const tomorrowEvents = events.filter((event) => event.date === tomorrowDate);

    const {height, width} = Dimensions.get("screen");

    const styles = StyleSheet.create({
        container: { height: height, width: width },
        content: { minHeight: height, width: width, alignItems: "center", justifyContent: "flex-start",
             flexDirection: "column", padding: 15 },
        buttonContainer: { flex: 1, justifyContent: "flex-end", padding: 50 }
    });

    return (
        <ScreenContainer>
            <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <ScreenHeader>Life organiser</ScreenHeader>
                <HeaderText color="white">Today - {todayDate}</HeaderText>
                {todayEvents.map(event => 
                    <EventContainer event={event} key={event.id}/>
                )}
                <HeaderText color="white">Tomorrow - {tomorrowDate}</HeaderText>
                {tomorrowEvents.map(event => 
                    <EventContainer event={event} key={event.id}/>
                )}
                <View style={styles.buttonContainer}>
                    <Button buttonPress={() => { }}>
                        Create new event
                    </Button>
                </View>
            </ScrollView>
      </ScreenContainer>
    )
}

export default Start;