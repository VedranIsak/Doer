import SettingsDropdown from "./settingsDropdown";
import Button from "@/components/button";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    minWidth: "100%",
  },
});

const OldTasksSettings = () => {
  return (
    <SettingsDropdown title="Old tasks">
      <View style={styles.container}>
        <Button width={"90%"} marginBottom={10} buttonPress={() => {}}>
          Autoremove
        </Button>
        <Button width={"90%"} marginBottom={15}>
          Send reminders
        </Button>
      </View>
    </SettingsDropdown>
  );
};

export default OldTasksSettings;
