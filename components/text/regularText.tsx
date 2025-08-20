import { Text, View, StyleSheet } from "react-native"
import { useFonts } from 'expo-font';
import { ReactNode } from "react";

const RegularText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [fontsLoaded] = useFonts({
        roboto: require("../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
    });

    const styles = StyleSheet.create({
        text: { fontFamily: "roboto", color: "#000000", fontSize: 16 }
    })


    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default RegularText;