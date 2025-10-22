import IconButton from "@/app/components/iconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SettingsDropdown from "./settingsDropdown";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    minWidth: "100%",
  },
});

const OldTasksSettings = () => {
  const [autoRemoveActive, setAutoRemoveActive] = useState<boolean>(false);
  const [sendAlertsActive, setSendAlertsActive] = useState<boolean>(false);
  return (
    <SettingsDropdown title="Old tasks" infoText="Manage how old, uncompleted, tasks are to be dealt with">
      <View style={styles.container}>
        <IconButton
          width={210}
          title={`Autoremove: ${autoRemoveActive ? "on" : "off"}`}
          marginBottom={10}
          buttonPress={() => {
            setAutoRemoveActive((prev) => !prev);
          }}
        >
          <Ionicons
            name={`${
              autoRemoveActive ? "checkmark-circle-sharp" : "close-circle-sharp"
            }`}
            color={"black"}
            size={26}
          />
        </IconButton>
        <IconButton
        width={210}
          marginBottom={15}
          title={`Send alerts: ${sendAlertsActive ? "on" : "off"}`}
          buttonPress={() => setSendAlertsActive((prev) => !prev)}
        >
                    <Ionicons
            name={`${
              sendAlertsActive ? "checkmark-circle-sharp" : "close-circle-sharp"
            }`}
            color={"black"}
            size={26}
          />

        </IconButton>
      </View>
    </SettingsDropdown>
  );
};

export default OldTasksSettings;
