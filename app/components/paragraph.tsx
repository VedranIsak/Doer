import { useFonts } from "expo-font";
import { ReactNode } from "react";
import { DimensionValue, StyleSheet, Text } from "react-native";

type TextAlignType = "auto" | "left" | "right" | "center" | "justify";
interface ParagraphProps {
  children: ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  width?: DimensionValue;
  textAlign?: TextAlignType;
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
