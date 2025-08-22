import { useFonts } from 'expo-font';
import { ReactNode } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface ScreenTextProps {
    children?: ReactNode;
    color?: string;
}

const ScreenText = ({ children, color }: ScreenTextProps) => {
    const [fontsLoaded] = useFonts({
        roboto: require("../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
    });

    const styles = StyleSheet.create({
        text: { fontFamily: "roboto", color: "white", fontWeight: "bold", fontSize: 32, margin: 25 }
    })

    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default ScreenText;

