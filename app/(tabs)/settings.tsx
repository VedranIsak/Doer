import { View, StyleSheet } from "react-native";
import ScreenContainer from "@/app/screenContainer";
import NotificationSettings from "../settings/notificationSettings";
import ThemeSettings from "../settings/themeSettings";
import SoundSettings from "../settings/soundSettings";
import React from "react";
import OldTasksSettings from "../settings/oldTasksSettings";

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
        <ThemeSettings />
        <SoundSettings />
        <NotificationSettings />
        <OldTasksSettings />
      </View>
    </ScreenContainer>
  );
};

export default Settings;
