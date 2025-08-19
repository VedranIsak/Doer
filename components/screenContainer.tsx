import { ReactNode } from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";

interface ScreenContainerProps {
    children: ReactNode
}

const ScreenContainer = ({children}: ScreenContainerProps) => {
    const styles = StyleSheet.create({
        container: { flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "column" },
        image: { flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }
    });

    return (
        <ImageBackground style={styles.image} src="../assets/images/backgroundImage.jpeg" resizeMode="cover">
            <View style={styles.container}>
                {children}
            </View>
        </ImageBackground>
    )
}

export default ScreenContainer;