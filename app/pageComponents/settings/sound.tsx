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
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
    minWidth: "100%",
  },
});

const Sound = () => {
  const { user, setUser } = useContext(UserContext);
  const [soundActive, setSoundActive] = useState<boolean>(user.settings.sound);
  return (
    <SettingsDropdown
      title="Sound"
      infoText="Mure or unmute the application. Please note that OS restrictions may hinder some sounds from being toggled."
    >
      <View style={styles.container}>
        <IconButton
          title={`Turn ${soundActive ? "off" : "on"} sound`}
          buttonPress={async () => {
            const next = !soundActive;
            setSoundActive(next);
            setUser((prev) =>
              prev.cloneWith(
                new User(
                  user.tasks,
                  new Settings(
                    next,
                    user.settings.textColor,
                    user.settings.primaryBackColor,
                    user.settings.secondaryBackColor,
                    user.settings.autoRemoveOldTasks,
                  )
                )
              )
            );
            saveUser(user);
            await setIsAudioActiveAsync(soundActive);
          }}
        >
          <Ionicons
            name={`volume-${soundActive ? "mute" : "high"}`}
            color={"black"}
            size={26}
          />
        </IconButton>
      </View>
    </SettingsDropdown>
  );
};

export default Sound;
