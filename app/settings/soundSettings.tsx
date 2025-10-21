import IconButton from "@/components/iconButton";
import { SoundContext } from "@/context/SoundContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
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
  const { soundActive, setSoundActive } = useContext(SoundContext);

  return (
    <SettingsDropdown title="Sound">
      <View style={styles.container}>
        <IconButton
          title={`Turn ${soundActive ? "on" : "off"}`}
          buttonPress={() => {
            setSoundActive((previous) => !previous);
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
