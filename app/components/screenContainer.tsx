import Paragraph from "@/app/components/paragraph";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode, useContext } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../context/UserContext";

interface ScreenContainerProps {
  children: ReactNode;
  img: string;
  title: string;
}

const ScreenContainer = ({ children, img, title }: ScreenContainerProps) => {
  const { width, height } = Dimensions.get("window");
  const { user } = useContext(UserContext);
  const primaryBackColor = user.settings.primaryBackColor;
  const secondaryBackColor = user.settings.secondaryBackColor;

  const styles = StyleSheet.create({
    mainContainer: {
      height: height,
      width: width,
      backgroundColor: primaryBackColor,
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
      width: "60%",
      height: "auto",
      backgroundColor: "rgb(240, 240, 240)",
      top: 145,
      borderRadius: 15,
      left: "20%",
      paddingTop: 15,
      paddingBottom: 20,
      alignItems: "center",
      boxShadow: ".25px .25px 4px gray",
    },
  });

  const headerImages: Record<string, any> = {
    index: require("../assets/images/index.png"),
    create: require("../assets/images/create.jpeg"),
    settings: require("../assets/images/settings.jpg"),
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
