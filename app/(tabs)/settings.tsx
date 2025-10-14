import Paragraph from "@/components/paragraph";
import { View, StyleSheet, Pressable } from "react-native";
import ScreenContainer from "@/app/screenContainer";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingsDropdown from "../settings/settingsDropdown";
import Button from "@/components/button";
import IconButton from "@/components/iconButton";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  pressableContainer: {
    backgroundColor: "rgba(255, 255, 255, .3)",
    width: "90%",
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    padding: 15,
    flexDirection: "row",
  },
  buttonIcon: {
    overflow: "hidden",
    height: 50,
    width: 50,
    borderRadius: 15,
    borderColor: "white",
  },
});
const Settings = () => {
  return (
    <ScreenContainer title="Settings" img="settings">
      <View style={styles.container}>
        <SettingsDropdown title="Themes">
          <IconButton title="Dreamy" borderRadius={15} marginBottom={12.5} width={"90%"}>
            <View style={styles.buttonIcon}>
              <LinearGradient
                colors={["#6a1a74", "#b3206c"]}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
          </IconButton>
          <IconButton title="Oceanic" borderRadius={15} marginBottom={12.5}>
            <View style={styles.buttonIcon}>
              <LinearGradient
                colors={["#1a1e74ff", "#2089b3ff"]}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
          </IconButton>
          <IconButton title="Dim" borderRadius={15} marginBottom={12.5}>
            <View style={styles.buttonIcon}>
              <LinearGradient
                colors={["#130415ff", "#545454ff"]}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
          </IconButton>
          <IconButton title="Fiery" borderRadius={15} marginBottom={12.5}>
            <View style={styles.buttonIcon}>
              <LinearGradient
                colors={["#ecc30cff", "#ec860aff"]}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
          </IconButton>
        </SettingsDropdown>
        <SettingsDropdown title="Sound"></SettingsDropdown>
        <SettingsDropdown title="Old tasks"></SettingsDropdown>
        <SettingsDropdown title="Notifications"></SettingsDropdown>
      </View>
    </ScreenContainer>
  );
};

export default Settings;
