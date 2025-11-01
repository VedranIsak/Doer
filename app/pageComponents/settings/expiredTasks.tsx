import IconButton from "@/app/components/iconButton";
import { UserContext } from "@/app/context/UserContext";
import Settings from "@/app/models/Settings";
import User from "@/app/models/User";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import SettingsDropdown from "./dropdown";
import { saveUser } from "@/app/helpers/dataManager";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    minWidth: "100%",
    marginBottom: 10,
    marginTop: 2.5,
  },
});

const ExpiredTasks = () => {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <SettingsDropdown
      title="Expired tasks"
      modalTitle="Expired tasks"
      infoText="Decide whether or not to automatically remove expired tasks"
    >
      <View style={styles.container}>
        <IconButton
          title={`Autoremove: ${user.settings.autoRemoveOldTasks ? "on" : "off"}`}
          buttonPress={() => {
            const next = !user.settings.autoRemoveOldTasks;
            setUser(
              (prev) =>
              new User(
                user.tasks,
                new Settings(
                  user.settings.sound,
                  user.settings.textColor,
                  user.settings.primaryBackColor,
                  user.settings.secondaryBackColor,
                  prev.settings.autoRemoveOldTasks,
                  user.settings.subTasksActive,
                  user.settings.autoMarkSubTasks,
                  user.settings.autoAssignDateForSubTasks
                )
              )
            );
            saveUser(user);
          }}
        >
          <Ionicons
            name={`${
              user.settings.autoRemoveOldTasks ? "checkmark-circle-sharp" : "close-circle-sharp"
            }`}
            color={"black"}
            size={26}
          />
        </IconButton>
      </View>
    </SettingsDropdown>
  );
};

export default ExpiredTasks;
