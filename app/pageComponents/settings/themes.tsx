import IconButton from "@/app/components/iconButton";
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { UserContext } from "../../context/UserContext";
import Settings from "../../models/Settings";
import User from "../../models/User";
import SettingsDropdown from "./dropdown";
import { saveUser } from "@/app/helpers/dataManager";

const styles = StyleSheet.create({
  container: {
    marginTop: 2.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    overflow: "hidden",
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: "lightgrey",
    borderWidth: 4,
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
          user.settings.subTasksActive,
          user.settings.autoMarkSubTasks,
          user.settings.autoAssignDateForSubTasks
        )
      )
    );
    saveUser(user);
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
      marginBottom={10}
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
      modalTitle="Themes"
      infoText="Switch between different themes for Doer"
    >
      <View style={styles.container}>
        <ThemeButton
          primBackColor={"#6a1a74"}
          secBackColor={"#b3206c"}
          textColor={"white"}
          title="Dreamy"
        />
        <ThemeButton
          primBackColor={"#1a1e74ff"}
          secBackColor={"#3644a3ff"}
          textColor={"white"}
          title="Oceanic"
        />
        <ThemeButton
          primBackColor={"#130415ff"}
          secBackColor={"#3c3c3cff"}
          textColor={"white"}
          title="Dim"
        />
        <ThemeButton
          primBackColor={"#ffffffff"}
          secBackColor={"#e8e8e8ff"}
          textColor={"black"}
          title="Bright"
        />
      </View>
    </SettingsDropdown>
  );
};

export default Themes;
