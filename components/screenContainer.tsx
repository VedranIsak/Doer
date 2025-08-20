import { ReactNode } from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenContainerProps {
    children: ReactNode;
}

const ScreenContainer = ({children}: ScreenContainerProps) => {

    const { width, height } = Dimensions.get("window");

    const styles = StyleSheet.create({
        container: { flex: 1 },
        image: { width: width, alignItems: "stretch", flexDirection: "column" }
    });

    return (
        <SafeAreaView>
            <ImageBackground style={styles.image} source={require("../assets/images/backgroundImage.jpeg")} resizeMode="cover">
                {children}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ScreenContainer;