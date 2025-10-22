import IconButton from "@/app/components/iconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { UserContext } from "../context/UserContext";
import Settings from "../models/Settings";
import User from "../models/User";
import SettingsDropdown from "./settingsDropdown";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
    minWidth: "100%",
  },
});

const SoundSettings = () => {
  const { user, setUser } = useContext(UserContext);
  const soundActive = user.settings.sound;

  return (
    <SettingsDropdown
      title="Sound"
      infoText="Manage whether or not the application should have sound or not"
    >
      <View style={styles.container}>
        <IconButton
          title={`Turn ${soundActive ? "on" : "off"}`}
          buttonPress={() => {
            setUser(
              new User(
                user.tasks,
                new Settings(
                  soundActive,
                  user.settings.primaryBackColor,
                  user.settings.secondaryBackColor,
                  user.settings.autoRemoveOldTasks,
                  user.settings.sendAlertsOldTasks,
                  user.settings.muteDailyNotifications,
                  user.settings.dailyNotifications
                )
              )
            );
          }}
        >
          <Ionicons
            name={`volume-${soundActive ? "high" : "mute"}`}
            color={"black"}
            size={26}
          />
        </IconButton>
      </View>
    </SettingsDropdown>
  );
};

export default SoundSettings;
