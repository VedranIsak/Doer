import Paragraph from "@/components/paragraph";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import {
  Animated,
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  UIManager,
  View,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type SettingsDropdownProps = {
  title: string;
  children?: React.ReactNode;
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, .3)",
    margin: 5,
    borderRadius: 10,
    flex: 1,
  },
  pressableContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
  },
  infoIcon: {
    position: "absolute",
    left: "82.5%"
  }
});

const SettingsDropdown = ({ title, children }: SettingsDropdownProps) => {
  const [open, setOpen] = useState(false);
  const rotate = useRef(new Animated.Value(0)).current;

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const next = !open;
    setOpen(next);
    Animated.timing(rotate, {
      toValue: next ? 1 : 0,
      duration: 180,
      useNativeDriver: true,
    }).start();
  };

  const rotation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressableContainer} onPress={toggle}>
        <Paragraph marginBottom={5} marginLeft={5} color="white" fontSize={22}>
          {title}
        </Paragraph>
          <Ionicons style={styles.infoIcon} name="information-circle-sharp" color={"white"} size={30} />
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <Ionicons name="arrow-down-circle-sharp" color={"white"} size={30} />
        </Animated.View>
      </Pressable>

      {open && <View>{children}</View>}
    </View>
  );
};

export default SettingsDropdown;
