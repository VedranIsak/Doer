import Paragraph from "@/components/paragraph";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenContainerProps {
  children: ReactNode;
  img: string;
  title: string;
}

const ScreenContainer = ({ children, img, title }: ScreenContainerProps) => {
  const { width, height } = Dimensions.get("window");

  const styles = StyleSheet.create({
    mainContainer: {
      height: height,
      width: width,
      backgroundColor: "#470047",
    },
    contentContainer: { flex: 1, marginBottom: 50 },
    content: {
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
    },
    image: { width: width, height: 200, marginBottom: 50 },
    headerContainer: {
      position: "absolute",
      width: "45%",
      height: "auto",
      borderRadius: 40,
      backgroundColor: "white",
      top: 140,
      left: "27.5%",
      paddingTop: 30,
      paddingBottom: 30,
      alignItems: "center",
    },
  });

  const headerImages: Record<string, any> = {
    index: require("@/assets/images/index.png"),
    create: require("@/assets/images/create.jpeg"),
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <LinearGradient
        colors={["#6a1a74", "#b3206c"]}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      <StatusBar backgroundColor={"light-content"}></StatusBar>
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.content}
      >
        <Image
          resizeMode="stretch"
          source={headerImages[img]}
          style={styles.image}
        />
        <View style={styles.headerContainer}>
          <Paragraph fontSize={26} color="black">
            {title}
          </Paragraph>
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenContainer;
