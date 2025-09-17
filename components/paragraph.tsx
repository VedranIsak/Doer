import { useFonts } from "expo-font";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface ParagraphProps {
    children: ReactNode;
    color?: string;
    fontSize?: number;
    fontWeight?: string;
    marginBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
}

const Paragraph = ({children, color = "black", fontSize = 16, 
    marginBottom, marginTop, marginLeft, marginRight}: ParagraphProps) => {
    const [loaded] = useFonts({
        Akira: require("@/assets/fonts/Akira.otf"),
        Fredoka: require("@/assets/fonts/Fredoka-Medium.ttf")
    });

    const getStyles = (fontSize: number) => (
        StyleSheet.create({
            text: { fontFamily: (fontSize === 16 || fontSize === 18 ? "Fredoka" : "Akira"), 
            color: color, fontSize: fontSize, marginTop: marginTop ?? 0, 
            marginBottom: marginBottom ?? 0, marginLeft: marginLeft ?? 0,
            marginRight: marginRight ?? 0
            }
        })
    )

    const styles = getStyles(fontSize);

    if (!loaded) {
        return null;
    }
    else {
        return (
            <Text style={styles.text}>{children}</Text>
        )
    }
}

export default Paragraph;