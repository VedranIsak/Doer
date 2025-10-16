import Paragraph from "@/components/paragraph";
import { ThemeContext } from "@/context/ThemeContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode, useContext } from "react";
import {
  ColorValue,
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
  const { primaryBackColor, secondaryBackColor } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainContainer: {
      height: height,
      width: width,
      backgroundColor: primaryBackColor
    },
    contentContainer: { flex: 1, marginBottom: 50 },
    content: {
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
    },
    image: { width: width, height: 200, marginBottom: 20 },
    headerContainer: {
      position: "absolute",
      width: "100%",
      height: "auto",
      backgroundColor: "white",
      top: 140,
      left: "0%",
      paddingTop: 10,
      paddingBottom: 20,
      alignItems: "center"
    },
  });

  const headerImages: Record<string, any> = {
    index: require("@/assets/images/index.png"),
    create: require("@/assets/images/create.jpeg"),
    settings: require("@/assets/images/settings.jpg"),
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <LinearGradient
        colors={[primaryBackColor, secondaryBackColor]}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
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
