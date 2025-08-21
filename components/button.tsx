import { useFonts } from "expo-font";
import { ReactNode } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

interface ButtonProps {
    children: ReactNode;
    buttonPress: () => void;
}

const Button: React.FC<ButtonProps> = ({children, buttonPress}: ButtonProps) => {
    const [fontsLoaded] = useFonts({
        roboto: require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
    });

    const styles = StyleSheet.create({
        pressable: { borderRadius: 50, backgroundColor: "#007AFF", padding: 20 },
        text: { color: "white", fontSize: 20, fontWeight: "bold", fontFamily: "roboto", textAlign: "center" }
    })

    return (
        <View>
            <Pressable style={styles.pressable} onPress={buttonPress}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default Button;