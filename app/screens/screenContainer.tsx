import { ReactNode } from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenContainerProps {
    children: ReactNode;
}

const ScreenContainer = ({children}: ScreenContainerProps) => {

    const { width, height } = Dimensions.get("window");

    const styles = StyleSheet.create({
        container: { height: height, width: width },
        image: { height: height, width: width }
    });

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.image} source={require("../../assets/images/backgroundImage.jpeg")} resizeMode="cover">
                {children}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ScreenContainer;