import { useFonts } from 'expo-font';
import { Text, StyleSheet, View } from 'react-native';

const ScreenText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [fontsLoaded] = useFonts({
        kronaOne: require("../assets/fonts/KronaOne-Regular.ttf")
    });

    const styles = StyleSheet.create({
        text: { fontFamily: "kronaOne", color: "white", fontSize: 24, margin: 25 }
    })

    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default ScreenText;

