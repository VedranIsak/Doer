import ScreenContainer from "@/app/screenContainer";
import React from "react";
import { StyleSheet, View } from "react-native";
import NotificationsSettings from "../settings/notificationsSettings";
import OldTasksSettings from "../settings/oldTasksSettings";
import SoundSettings from "../settings/soundSettings";
import ThemeSettings from "../settings/themeSettings";

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
