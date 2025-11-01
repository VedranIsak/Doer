import IconButton from "@/app/components/iconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { setIsAudioActiveAsync } from "expo-audio";
import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { UserContext } from "../../context/UserContext";
import Settings from "../../models/Settings";
import User from "../../models/User";
import SettingsDropdown from "./dropdown";
import { saveUser } from "@/app/helpers/dataManager";

const styles = StyleSheet.create({
  container: {
    marginTop: 2.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    minWidth: "100%",
  },
});

const Sound = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <SettingsDropdown
      title="Sound"
      modalTitle="Sound"
      infoText="Mure or unmute the application. Please note that OS restrictions may hinder some sounds from being toggled."
    >
      <View style={styles.container}>
        <IconButton
          title={`Sound: ${user.settings.sound ? "on" : "off"}`}
          buttonPress={async () => {
            setUser(
              (prev) =>
                new User(
                  user.tasks,
                  new Settings(
                    prev.settings.sound,
                    user.settings.textColor,
                    user.settings.primaryBackColor,
                    user.settings.secondaryBackColor,
                    user.settings.autoRemoveOldTasks,
                    user.settings.subTasksActive,
                    user.settings.autoMarkSubTasks,
                    user.settings.autoAssignDateForSubTasks
                  )
                )
            );
            saveUser(user);
            await setIsAudioActiveAsync(user.settings.sound);
          }}
        >
          <Ionicons
            name={`volume-${user.settings.sound ? "high" : "mute"}`}
            color={"black"}
            size={26}
          />
        </IconButton>
      </View>
    </SettingsDropdown>
  );
};

export default Sound;
