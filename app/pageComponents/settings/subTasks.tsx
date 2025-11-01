import IconButton from "@/app/components/iconButton";
import { UserContext } from "@/app/context/UserContext";
import Settings from "@/app/models/Settings";
import User from "@/app/models/User";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import SettingsDropdown from "./dropdown";
import { saveUser } from "@/app/helpers/dataManager";
import Paragraph from "@/app/components/paragraph";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    minWidth: "100%",
    marginBottom: 10,
    marginTop: 2.5,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    overflow: "hidden",
    padding: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, .3)",
    marginTop: 10,
    boxShadow: ".25px .25px 4px gray",
  },
});

const Subtasks = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <SettingsDropdown
      title="Subtasks"
      modalTitle="Subtasks"
      infoText="Configure how subtasks are dealt with"
    >
      <View style={styles.container}>
        <IconButton
          title={`Subtasks: ${
            user.settings.subTasksActive ? "on" : "off"
          }`}
          buttonPress={() => {
            setUser(
              (prev) =>
                new User(
                  user.tasks,
                  new Settings(
                    user.settings.sound,
                    user.settings.textColor,
                    user.settings.primaryBackColor,
                    user.settings.secondaryBackColor,
                    user.settings.autoRemoveOldTasks,
                    !prev.settings.subTasksActive,
                    user.settings.autoMarkSubTasks,
                    user.settings.autoAssignDateForSubTasks
                  )
                )
            );
          }}
        >
          <Ionicons
            name={`${
              user.settings.subTasksActive
                ? "checkmark-circle-sharp"
                : "close-circle-sharp"
            }`}
            color={"black"}
            size={26}
          />
        </IconButton>
        {user.settings.subTasksActive ? (
          <>
            {" "}
            <View style={styles.contentContainer}>
              <Paragraph
                color={user.settings.textColor as string}
                width={"70%"}
                fontSize={20}
              >
                Mark subtasks as complete when main task is complete
              </Paragraph>
              <IconButton
                buttonPress={() => {
                  setUser(
                    (prev) =>
                      new User(
                        user.tasks,
                        new Settings(
                          user.settings.sound,
                          user.settings.textColor,
                          user.settings.primaryBackColor,
                          user.settings.secondaryBackColor,
                          user.settings.autoRemoveOldTasks,
                          user.settings.subTasksActive,
                          !prev.settings.autoMarkSubTasks,
                          user.settings.autoAssignDateForSubTasks
                        )
                      )
                  );
                  saveUser(user);
                }}
              >
                <Ionicons
                  name={`${
                    user.settings.autoMarkSubTasks
                      ? "checkmark-circle-sharp"
                      : "close-circle-sharp"
                  }`}
                  color={"black"}
                  size={26}
                />
              </IconButton>
            </View>
            <View style={styles.contentContainer}>
              <Paragraph
                color={user.settings.textColor as string}
                width={"70%"}
                fontSize={20}
              >
                Automatically assign subtasks the same due date as the main
                task.
              </Paragraph>
              <IconButton
                buttonPress={() => {
                  setUser(
                    (prev) =>
                      new User(
                        user.tasks,
                        new Settings(
                          user.settings.sound,
                          user.settings.textColor,
                          user.settings.primaryBackColor,
                          user.settings.secondaryBackColor,
                          user.settings.autoRemoveOldTasks,
                          user.settings.subTasksActive,
                          user.settings.autoMarkSubTasks,
                          !prev.settings.autoAssignDateForSubTasks
                        )
                      )
                  );
                  saveUser(user);
                }}
              >
                <Ionicons
                  name={`${
                    user.settings.autoAssignDateForSubTasks
                      ? "checkmark-circle-sharp"
                      : "close-circle-sharp"
                  }`}
                  color={"black"}
                  size={26}
                />
              </IconButton>
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
    </SettingsDropdown>
  );
};

export default Subtasks;
