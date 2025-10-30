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
  const [autoRemoveActive, setAutoRemoveActive] = useState<boolean>(
    user.settings.autoRemoveOldTasks
  );
  return (
    <SettingsDropdown
      title="Subtasks"
      infoText="Configure how subtasks are dealt with"
    >
      <View style={styles.container}>
        <IconButton
          title={`Toggle subtasks ${autoRemoveActive ? "on" : "off"}`}
          buttonPress={() => {
            setAutoRemoveActive((prev) => !prev);
          }}
        >
          <Ionicons
            name={`${
              autoRemoveActive ? "close-circle-sharp" : "checkmark-circle-sharp"
            }`}
            color={"black"}
            size={26}
          />
        </IconButton>
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
              const next = !autoRemoveActive;
              setAutoRemoveActive(next);
              setUser(
                new User(
                  user.tasks,
                  new Settings(
                    user.settings.sound,
                    user.settings.textColor,
                    user.settings.primaryBackColor,
                    user.settings.secondaryBackColor,
                    next
                  )
                )
              );
              saveUser(user);
            }}
          >
            <Ionicons
              name={`${
                autoRemoveActive
                  ? "close-circle-sharp"
                  : "checkmark-circle-sharp"
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
            Automatically assign subtasks the same due date as the main task.
          </Paragraph>
          <IconButton
            buttonPress={() => {
              const next = !autoRemoveActive;
              setAutoRemoveActive(next);
              setUser(
                new User(
                  user.tasks,
                  new Settings(
                    user.settings.sound,
                    user.settings.textColor,
                    user.settings.primaryBackColor,
                    user.settings.secondaryBackColor,
                    next
                  )
                )
              );
              saveUser(user);
            }}
          >
            <Ionicons
              name={`${
                autoRemoveActive
                  ? "close-circle-sharp"
                  : "checkmark-circle-sharp"
              }`}
              color={"black"}
              size={26}
            />
          </IconButton>
        </View>
      </View>
    </SettingsDropdown>
  );
};

export default Subtasks;
