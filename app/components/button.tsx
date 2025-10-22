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
  width,
  backgroundColor,
  pressedColor,
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
      borderRadius: 50,
      padding: 12.5,
      width: width ?? "auto",
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
        { backgroundColor: pressed ? pressedColor ?? "white" : backgroundColor ?? "rgba(255, 255, 255, .75)" },
        styles.pressable,
      ]}
      onPress={buttonPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
