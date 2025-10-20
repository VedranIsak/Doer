import Button from "@/components/button";
import { View, StyleSheet } from "react-native";
import SettingsDropdown from "./settingsDropdown";
import { useContext } from "react";
import { SoundContext } from "@/context/SoundContext";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
    minWidth: "100%"
  },
});

const SoundSettings = () => {
  const { soundActive, setSoundActive } = useContext(SoundContext);

  return (
    <SettingsDropdown title="Sound">
      <View style={styles.container}>
        <Button
          width={"90%"}
          buttonPress={() => {
            setSoundActive((previous) => !previous);
          }}
        >
          {soundActive ? "On" : "Off"}
        </Button>
      </View>
    </SettingsDropdown>
  );
};

export default SoundSettings;
