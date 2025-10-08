import { useFonts } from "expo-font";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, DimensionValue } from "react-native";

interface ButtonProps {
  children?: ReactNode;
  buttonPress?: () => void;
  width?: DimensionValue;
  backgroundColor?: string;
  color?: string;
  pressedColor?: string;
  marginTop?: DimensionValue;
  marginBottom?: DimensionValue;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonPress,
  width = "auto",
  backgroundColor = "white",
  pressedColor = "rgba(255, 255, 255, 0.4)",
  marginTop = 0,
  marginBottom = 0,
}: ButtonProps) => {
  const [fontsLoaded] = useFonts({
    CalSans: require("@/assets/fonts/CalSans.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const styles = StyleSheet.create({
    pressable: {
      borderRadius: 30,
      padding: 10,
      width: width,
      borderWidth: 4,
      backgroundColor: "white",
      // backgroundColor: "rgba(255, 255, 255, .2)",
      borderColor: "rgba(255, 255, 255, .8)",
      marginBottom: marginBottom,
      marginTop: marginTop
    },
    text: {
      color: "black",
      fontSize: 20,
      fontFamily: "CalSans",
      textAlign: "center",
      marginBottom: 5
    },
  });

  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? pressedColor : backgroundColor },
        styles.pressable,
      ]}
      onPress={buttonPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
