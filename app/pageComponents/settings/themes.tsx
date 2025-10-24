import IconButton from "@/app/components/iconButton";
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { UserContext } from "../../context/UserContext";
import Settings from "../../models/Settings";
import User from "../../models/User";
import SettingsDropdown from "./dropdown";

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
    borderRadius: 50,
    borderColor: "white",
  },
});

interface ThemeButtonProps {
  textColor: ColorValue;
  primBackColor: ColorValue;
  secBackColor: ColorValue;
  title: string;
}

const Themes = () => {
  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;
  const setThemeColors = (
    primBackColor: ColorValue,
    secBackColor: ColorValue,
    textColor: ColorValue
  ) => {
    setUser(
      new User(
        user.tasks,
        new Settings(
          user.settings.sound,
          textColor,
          primBackColor,
          secBackColor,
          user.settings.autoRemoveOldTasks,
          user.settings.sendAlertsOldTasks,
          user.settings.muteDailyNotifications,
          user.settings.dailyNotifications
        )
      )
    );
  };

  const ThemeButton = ({
    primBackColor,
    secBackColor,
    textColor,
    title,
  }: ThemeButtonProps) => (
    <IconButton
      buttonPress={() => {
        setThemeColors(primBackColor, secBackColor, textColor);
      }}
      title={title}
      marginBottom={12.5}
      width={"90%"}
    >
      <View style={styles.buttonIcon}>
        <LinearGradient
          colors={[primBackColor, secBackColor]}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </View>
    </IconButton>
  );

  return (
    <SettingsDropdown
      title="Themes"
      infoText="Manage and switch between different application themes"
    >
      <ThemeButton
        primBackColor={"#6a1a74"}
        secBackColor={"#b3206c"}
        textColor={"white"}
        title="Dreamy"
      />
      <ThemeButton
        primBackColor={"#1a1e74ff"}
        secBackColor={"#2c7b9aff"}
        textColor={"white"}
        title="Oceanic"
      />
      <ThemeButton
        primBackColor={"#130415ff"}
        secBackColor={"#5b5b5bff"}
        textColor={"white"}
        title="Dim"
      />
      <ThemeButton
        primBackColor={"#dededeff"}
        secBackColor={"#c5c5c5ff"}
        textColor={"black"}
        title="Bright"
      />
    </SettingsDropdown>
  );
};

export default Themes;
