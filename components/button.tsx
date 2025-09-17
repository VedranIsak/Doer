import { useFonts } from "expo-font";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, DimensionValue } from "react-native";

interface ButtonProps {
    children?: ReactNode;
    buttonPress?: () => void;
    width?: DimensionValue;
}

const Button: React.FC<ButtonProps> = ({children, buttonPress, width}: ButtonProps) => {
    const [fontsLoaded] = useFonts({
        Akira: require("@/assets/fonts/Akira.otf")
    });

    if(!fontsLoaded) {
        return null;
    }

    const styles = StyleSheet.create({
        pressable: { 
            borderRadius: 50, backgroundColor: "rgb(173, 61, 111)", 
            padding: 20, width: width ?? "auto", borderWidth: 3, borderColor: "rgba(255, 255, 255, 0.4)" 
        },
        text: { color: "white", fontSize: 20, fontFamily: "Akira", textAlign: "center" }
    })

    return (
        <Pressable style={styles.pressable} onPress={buttonPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default Button;