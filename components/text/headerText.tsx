import { useFonts } from 'expo-font';
import { ReactNode } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface HeaderTextProps {
    children?: ReactNode;
    color?: string;
}

const HeaderText = ({ children, color }: HeaderTextProps) => {
    const [fontsLoaded] = useFonts({
        roboto: require("../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
    });

    const styles = StyleSheet.create({
        text: { fontFamily: "roboto", fontWeight: "bold", color: color ?? "#000000", fontSize: 24 }
    })

    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default HeaderText;

