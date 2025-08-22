import { Text, View, StyleSheet } from "react-native"
import { useFonts } from 'expo-font';
import { ReactNode } from "react";

interface RegularTextProps {
    children?: ReactNode;
    color?: string;
}

const RegularText = ({ children, color }: RegularTextProps) => {
    const [fontsLoaded] = useFonts({
        roboto: require("../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
    });

    const styles = StyleSheet.create({
        text: { fontFamily: "roboto", color: color ?? "#000000", fontSize: 20 }
    })


    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default RegularText;