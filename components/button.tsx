import { useFonts } from "expo-font";
import { Pressable, StyleSheet, View, Text } from "react-native";

const Button: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [fontsLoaded] = useFonts({
        kronaOne: require("../assets/fonts/KronaOne-Regular.ttf")
    });

    const styles = StyleSheet.create({
        pressable: { width: "auto", borderRadius: 50, backgroundColor: "#ffffff", padding: 20, margin: 20 },
        text: { color: "black", fontSize: 16, fontFamily: "kronaOne", textAlign: "center" }
    })

    return (
        <View>
            <Pressable style={styles.pressable}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default Button;