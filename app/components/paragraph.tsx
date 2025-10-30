import { useFonts } from "expo-font";
import { ReactNode } from "react";
import { DimensionValue, StyleSheet, Text } from "react-native";

type Position = "absolute" | "relative" | "static" | "fixed" | "sticky";
type TextAlignType = "auto" | "left" | "right" | "center" | "justify";
interface ParagraphProps {
  children: ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  marginBottom?: DimensionValue;
  marginTop?: DimensionValue;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  width?: DimensionValue;
  textAlign?: TextAlignType;
  position?: Position;
  top?: DimensionValue;
  bottom?: DimensionValue;
  right?: DimensionValue;
  left?: DimensionValue;
  opacity?: number;
}

const Paragraph = ({
  children,
  color = "black",
  fontSize = 16,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  width,
  textAlign,
  position,
  top,
  bottom,
  right,
  left,
  opacity
}: ParagraphProps) => {
  const [loaded] = useFonts({
    CalSans: require("../assets/fonts/CalSans.ttf"),
  });

  const getStyles = (fontSize: number) =>
    StyleSheet.create({
      text: {
        fontFamily: "CalSans",
        color: color,
        fontSize: fontSize,
        marginTop: marginTop ?? 0,
        marginBottom: marginBottom ?? 0,
        marginLeft: marginLeft ?? 0,
        marginRight: marginRight ?? 0,
        width: width ?? "auto",
        textAlign: textAlign ?? "auto",
        position: position,
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        opacity: opacity
      },
    });

  const styles = getStyles(fontSize);

  if (!loaded) {
    return null;
  } else {
    return <Text style={styles.text}>{children}</Text>;
  }
};

export default Paragraph;
