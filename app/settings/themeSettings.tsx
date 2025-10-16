import IconButton from "@/components/iconButton";
import SettingsDropdown from "./settingsDropdown";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

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
    borderRadius: 15,
    borderColor: "white",
  },
});

interface ThemeButtonProps {
  primColor: string;
  secColor: string;
  title: string;
}

const ThemeSettings = () => {
  const themeContext = useContext(ThemeContext);
  const setPrimaryBackColor = themeContext.setPrimaryBackColor;
  const setSecondaryBackColor = themeContext.setSecondaryBackColor;
  const setBackColors = (prim: string, sec: string) => {
    setPrimaryBackColor(prim);
    setSecondaryBackColor(sec);
  };

  const ThemeButton = ({ primColor, secColor, title }: ThemeButtonProps) => (
    <IconButton
      buttonPress={() => {
        setBackColors(primColor, secColor);
      }}
      title={title}
      borderRadius={15}
      marginBottom={12.5}
      width={"90%"}
    >
      <View style={styles.buttonIcon}>
        <LinearGradient
          colors={[primColor, secColor]}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </View>
    </IconButton>
  );

  return (
    <SettingsDropdown title="Themes">
      <ThemeButton primColor={"#6a1a74"} secColor={"#b3206c"} title="Dreamy" />
      <ThemeButton
        primColor={"#1a1e74ff"}
        secColor={"#2089b3ff"}
        title="Oceanic"
      />
      <ThemeButton primColor={"#130415ff"} secColor={"#545454ff"} title="Dim" />
      <ThemeButton
        primColor={"#ec860aff"}
        secColor={"#ecc30cff"}
        title="Fiery"
      />
      <ThemeButton
        primColor={"#057621ff"}
        secColor={"#0cec5aff"}
        title="Earthly"
      />{" "}
    </SettingsDropdown>
  );
};

export default ThemeSettings;
