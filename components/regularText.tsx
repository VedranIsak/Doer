import { Text, View, StyleSheet } from "react-native"
import { useFonts } from 'expo-font';
import { ReactNode } from "react";

const RegularText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [fontsLoaded] = useFonts({
        kronaOne: require("../assets/fonts/KronaOne-Regular.ttf")
    });

    const styles = StyleSheet.create({
        text: { fontFamily: "kronaOne", color: "#000000", fontSize: 16, margin: 5 }
    })

    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default RegularText;