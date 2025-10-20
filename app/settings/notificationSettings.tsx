import SettingsDropdown from "./settingsDropdown";
import Button from "@/components/button";
import ModalContainer from "@/components/modalContainer";
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

const NotificationSettings = () => {
  const [showNotificationModal, setShowNotificationModal] =
    useState<boolean>(false);
  return (
    <SettingsDropdown title="Daily reminders">
      <View style={styles.container}>
        <Button width={"90%"} marginBottom={10} buttonPress={() => {}}>
          Mute
        </Button>
        <Button
          width={"90%"}
          marginBottom={15}
          buttonPress={() => {
            setShowNotificationModal(true);
          }}
        >
          Reminder frequency
        </Button>
        <ModalContainer
          showModalContainer={showNotificationModal}
          setShowModalContainer={setShowNotificationModal}
        >
          <Button>Morning alert: </Button>
          <Button>Afternoon alert:</Button>
          <Button>Evening alert:</Button>
        </ModalContainer>
      </View>
    </SettingsDropdown>
  );
};

export default NotificationSettings;
