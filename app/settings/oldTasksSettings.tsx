import SettingsDropdown from "./settingsDropdown";
import Button from "@/components/button";
import IconButton from "@/components/iconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
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
  const [autoRemoveActive, setAutoRemoveActive] = useState<boolean>(false);
  const [sendAlertsActive, setSendAlertsActive] = useState<boolean>(false);
  return (
    <SettingsDropdown title="Old tasks">
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
