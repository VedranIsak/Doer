import { UserContext } from "../context/UserContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { useContext } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const BASE = Platform.OS === "ios" ? 56 : 54; // visual height above the inset
  const HEIGHT = BASE + Math.max(insets.bottom, 16); // add safe-area
  const { user } = useContext(UserContext);

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: HEIGHT,
          paddingTop: 8,
          paddingBottom: Math.max(insets.bottom, 16), // <- key line
          // Use an opaque bg so the home indicator doesn't show through:
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          overflow: "hidden",
          backgroundColor: "transparent",
        },
        tabBarBackground: () => (
          <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
            {/* Opaque base so nothing white bleeds through */}
            <View
              style={[
                StyleSheet.absoluteFillObject,
                { backgroundColor: user.settings.primaryBackColor },
              ]}
            />
            {/* Avoid semi-transparent white; use two opaque purples instead */}
            <LinearGradient
              colors={[
                user.settings.primaryBackColor,
                user.settings.secondaryBackColor,
              ]}
              style={StyleSheet.absoluteFillObject}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Ionicons
              name="home-sharp"
              color={user.settings.textColor as string}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create Task",
          tabBarIcon: () => (
            <Ionicons
              name="add-circle-sharp"
              color={user.settings.textColor as string}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: () => (
            <Ionicons
              name="calendar-clear-sharp"
              color={user.settings.textColor as string}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Ionicons
              name="settings-sharp"
              color={user.settings.textColor as string}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
}
