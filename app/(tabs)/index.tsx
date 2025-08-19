import EventContainer from "@/components/eventContainer";
import events from "@/data/mockData";
import Event from "@/models/Event";
import { FlatList, ListRenderItem, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../../components/button';
import RegularText from '../../components/regularText';
import ScreenText from "@/components/screenText";
import { ScreenContainer } from "react-native-screens";

export default function HomeScreen() {

  const styles = StyleSheet.create({
    container: { display: "flex", justifyContent: "flex-start", alignItems: "center", 
      flexDirection: "column", height: "100%", width:"100%", backgroundColor: "#42b1d6"
    },
    statusbar: { backgroundColor: "#1f1f26", width: "100%" }
  });

  const renderItem: ListRenderItem<Event> = ({ item }) => {
    return (
      <EventContainer event={item} />
    );
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} backgroundColor={"black"}></StatusBar>
      <ScreenContainer>
        <ScreenText>Life organiser</ScreenText>
        <FlatList
          data = {events}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id.toString()} 
        />
        <Button>Create new event</Button>
      </ScreenContainer>
    </SafeAreaView>
  );
}
