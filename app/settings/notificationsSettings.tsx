import IconButton from "@/components/iconButton";
import SettingsDropdown from "./settingsDropdown";
import Button from "@/components/button";
import ModalContainer from "@/components/modalContainer";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    minWidth: "100%",
  },
});

const NotificationsSettings = () => {
  const [showNotificationModal, setShowNotificationModal] =
    useState<boolean>(false);

  const [remindersActive, setRemindersActive] = useState<boolean>(false);

  return (
    <SettingsDropdown title="Daily notifications">
      <View style={styles.container}>
        <IconButton
          marginBottom={10}
          buttonPress={() => {
            setRemindersActive((prev) => !prev);
          }}
          title={`Turn ${remindersActive ? "off" : "on"}`}
        >
          <Ionicons
            name={`notifications-${remindersActive ? "off-" : ""}sharp`}
            color={"black"}
            size={26}
          />
        </IconButton>
        <IconButton
          marginBottom={15}
          buttonPress={() => {
            setShowNotificationModal(true);
          }}
          title="Frequency"
        >
          <Ionicons
            name="alert-circle-sharp"
            color={"black"}
            size={26}
          />
        </IconButton>
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

export default NotificationsSettings;
