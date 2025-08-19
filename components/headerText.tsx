import { useFonts } from 'expo-font';
import { Text, StyleSheet, View } from 'react-native';

const HeaderText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [fontsLoaded] = useFonts({
        kronaOne: require("../assets/fonts/KronaOne-Regular.ttf")
    });

    const styles = StyleSheet.create({
        text: { fontFamily: "kronaOne", color: "#000000", fontSize: 20 }
    })

    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default HeaderText;

