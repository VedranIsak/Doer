import { useFonts } from 'expo-font';
import { Text, StyleSheet, View } from 'react-native';

const ScreenText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

