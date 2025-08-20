import EventContainer from "@/components/eventContainer";
import ScreenContainer from "@/components/screenContainer";
import ScreenText from "@/components/text/screenText";
import events from "@/data/mockData";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Button from '../../components/button';
import ScreenHeader from "@/components/screenHeader";

export default function HomeScreen() {

  const [listheight, setListHeight] = useState<number>(0);

  useEffect(() => {
    console.log(listheight);
  }, [listheight])

  const styles = StyleSheet.create({
    container: { display: "flex", justifyContent: "flex-start", alignItems: "stretch", 
      flexDirection: "column", padding: 10 },
  });

  return (
      <ScreenContainer>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <ScreenHeader>Life organiser</ScreenHeader>
          {events.map(event => 
            <EventContainer event={event} key={event.id}/>
          )}
          <Button>Create new event</Button>
        </ScrollView>
      </ScreenContainer>
  );
}
