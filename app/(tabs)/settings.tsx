import { View, StyleSheet } from "react-native";
import ScreenContainer from "@/app/screenContainer";
import NotificationsSettings from "../settings/notificationsSettings";
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
  }
});

const Settings = () => {
  return (
    <ScreenContainer title="Settings" img="settings">
      <View style={styles.container}>
        <ThemeSettings />
        <SoundSettings />
        <NotificationsSettings />
        <OldTasksSettings />
      </View>
    </ScreenContainer>
  );
};

export default Settings;
