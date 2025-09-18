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

const Button: React.FC<ButtonProps> = ({children, buttonPress, width = "auto", 
    backgroundColor = "white", color = "black",
    pressedColor = "rgba(255, 255, 255, 0.4)",
    marginTop = 0, marginBottom = 0} : ButtonProps) => {
    const [fontsLoaded] = useFonts({
        Roboto: require("@/assets/fonts/Roboto.ttf")
    });

    if(!fontsLoaded) {
        return null;
    }

    const styles = StyleSheet.create({
        pressable: { 
            borderRadius: 25, padding: 20, width: width, borderWidth: 3,
            backgroundColor: backgroundColor, borderColor: "rgba(255, 255, 255, .5)", 
            marginBottom: marginBottom, marginTop: marginTop
        },
        text: { 
            color: color, fontSize: 20, fontFamily: "Roboto", textAlign: "center"
        }
    })

    return (
        <Pressable style={({pressed}) => [ { backgroundColor: pressed ? pressedColor: backgroundColor }, styles.pressable ]} onPress={buttonPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default Button;