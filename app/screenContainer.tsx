import Paragraph from "@/components/paragraph";
import { ReactNode } from "react";
import { Dimensions, Image, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenContainerProps {
    children: ReactNode;
    img: string;
    title: string;
}

const ScreenContainer = ({children, img, title}: ScreenContainerProps) => {
    const { width, height } = Dimensions.get("window");

    const styles = StyleSheet.create({
        container: { height: height, width: width, backgroundColor: "#470047" },
        image: { width: width, height: 200, marginBottom: 50 },
        headerContainer: { 
            position: "absolute", width: "70%", height: "auto", 
            borderRadius: 15, backgroundColor: "white", top: 140, 
            left: "15%", paddingTop: 40, paddingBottom: 40, alignItems: "center" 
        }
    });

    const headerImages: Record<string, any> = {
        index: require("@/assets/images/index.png"),
        create: require("@/assets/images/create.jpeg"),
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"light-content"}></StatusBar>
            <Image resizeMode="stretch" source={headerImages[img]} style={styles.image} />
            <View style={styles.headerContainer}>
                <Paragraph fontSize={24} color="#000000">{title}</Paragraph>
            </View>
            {children}
        </SafeAreaView>
    )
}

export default ScreenContainer;