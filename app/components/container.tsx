import { ReactNode } from "react";
import { ColorValue, DimensionValue, StyleSheet, View } from "react-native";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface ContainerProps {
  children: ReactNode;
  flexDirection?: FlexDirection;
  margin?: DimensionValue;
  padding?: DimensionValue;
  backgroundColor?: ColorValue;
}

const Container = ({
  children,
  flexDirection,
  margin,
  padding,
  backgroundColor,
}: ContainerProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor ?? "rgba(255, 255, 255, .2)",
      width: "95%",
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      padding: padding ?? 0,
      margin: margin ?? 10,
      flexDirection: flexDirection ?? "column",
    },
  });

  return <View style={styles.container}>{children}</View>;
};

export default Container;
