import Button from "@/app/components/button";
import IconButton from "@/app/components/iconButton";
import ModalContainer from "@/app/components/modalContainer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SettingsDropdown from "./dropdown";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    minWidth: "100%",
  },
});

const Notifications = () => {
  const [showNotificationModal, setShowNotificationModal] =
    useState<boolean>(false);

  const [remindersActive, setRemindersActive] = useState<boolean>(false);

  return (
    <SettingsDropdown
      title="Daily notifications"
      infoText="Manage how often you receive daily notifications regarding tasks to be done"
    >
      <View style={styles.container}>
        <IconButton
          width={170}
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
          width={170}
          marginBottom={15}
          buttonPress={() => {
            setShowNotificationModal(true);
          }}
          title="Frequency"
        >
          <Ionicons name="alert-circle-sharp" color={"black"} size={26} />
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

export default Notifications;
