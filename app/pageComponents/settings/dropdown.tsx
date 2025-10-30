import React, { useContext, useMemo, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalContainer from "@/app/components/modalContainer";
import Paragraph from "@/app/components/paragraph";
import { UserContext } from "../../context/UserContext";

type SettingsDropdownProps = {
  title: string;
  infoText: string;
  children?: React.ReactNode;
  estimatedMaxHeight?: number; // default 600
  duration?: number; 
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, .25)",
    margin: 2.5,
    borderRadius: 10,
    boxShadow: ".25px .25px 4px gray",
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
    left: "82.5%",
  },
  clipper: {
    width: "100%",
    overflow: "hidden", 
  },
  contentInner: {
    width: "100%",
  },
});

const SettingsDropdown = ({
  title,
  infoText,
  children,
  estimatedMaxHeight = 600,
  duration = 400,
}: SettingsDropdownProps) => {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const progress = useRef(new Animated.Value(0)).current; 

  const rotate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const maxH = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, estimatedMaxHeight],
  });

  const opacity = progress.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0, 0, 1],
  });

  const run = (toValue: 0 | 1) => {
    Animated.timing(progress, {
      toValue,
      duration,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false, // animates maxHeight => must be false
    }).start();
  };

  const toggle = () => {
    const next = !open;
    setOpen(next);
    run(next ? 1 : 0);
  };

  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressableContainer} onPress={toggle}>
        <Paragraph
          marginBottom={5}
          marginLeft={5}
          color={user.settings.textColor as string}
          fontSize={22}
        >
          {title}
        </Paragraph>

        <Pressable
          onPress={() => setShowInfoModal(true)}
          style={styles.infoIcon}
          hitSlop={8}
        >
          <Ionicons
            name="information-circle-sharp"
            color={user.settings.textColor as string}
            size={30}
          />
        </Pressable>

        <Animated.View style={{ transform: [{ rotate }] }}>
          <Ionicons
            name="arrow-down-circle-sharp"
            color={user.settings.textColor as string}
            size={30}
          />
        </Animated.View>
      </Pressable>

      <Animated.View style={[styles.clipper, { maxHeight: maxH }]}>
        <Animated.View style={{ opacity }}>
          <View
            style={styles.contentInner}
            pointerEvents={open ? "auto" : "none"}
          >
            {children}
          </View>
        </Animated.View>
      </Animated.View>

      <ModalContainer
        showModalContainer={showInfoModal}
        setShowModalContainer={setShowInfoModal}
      >
        <View style={{ padding: 10 }}>
          <Paragraph color={user.settings.textColor as string}>
            {infoText}
          </Paragraph>
        </View>
      </ModalContainer>
    </View>
  );
};

export default SettingsDropdown;
