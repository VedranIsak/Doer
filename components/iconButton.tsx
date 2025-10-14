import { useFonts } from "expo-font";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, DimensionValue } from "react-native";

interface IconButtonProps {
  title: string;
  children?: ReactNode;
  buttonPress?: () => void;
  width?: DimensionValue;
  borderRadius?: DimensionValue;
  backgroundColor?: string;
  color?: string;
  pressedColor?: string;
  marginTop?: DimensionValue;
  marginBottom?: DimensionValue;
}

const IconButton: React.FC<IconButtonProps> = ({
  title,
  children,
  buttonPress,
  width = "auto",
  borderRadius,
  backgroundColor,
  pressedColor,
  marginTop = 0,
  marginBottom = 0,
}: IconButtonProps) => {
  const [fontsLoaded] = useFonts({
    CalSans: require("@/assets/fonts/CalSans.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const styles = StyleSheet.create({
    pressable: {
      borderRadius: borderRadius ?? 50,
      padding: 10,
      width: width,
      marginBottom: marginBottom,
      marginTop: marginTop,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    text: {
      color: "black",
      fontSize: 20,
      fontFamily: "CalSans",
      textAlign: "center",
      marginBottom: 5,
      marginRight: 10,
      marginLeft: 10
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
      <Text style={styles.text}>{title}</Text>
      {children}
    </Pressable>
  );
};

export default IconButton;
