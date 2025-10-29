import { UserContext } from "../context/UserContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { useContext } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Paragraph from "../components/paragraph";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const BASE = Platform.OS === "ios" ? 56 : 54;
  const HEIGHT = BASE + Math.max(insets.bottom, 16);
  const { user } = useContext(UserContext);
  const [loaded] = useFonts({
    CalSans: require("../assets/fonts/CalSans.ttf"),
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: user.settings.textColor as string,
        tabBarInactiveTintColor: user.settings.textColor as string,
        tabBarItemStyle: {
          borderRadius: 15,
          overflow: "hidden",
          paddingTop: 2.5
        },
        tabBarStyle: {
          height: HEIGHT,
          paddingTop: 8,
          paddingBottom: Math.max(insets.bottom, 16),
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          overflow: "hidden",
          backgroundColor: "transparent",
        },
        tabBarBackground: () => (
          <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
            <View
              style={[
                StyleSheet.absoluteFillObject,
                { backgroundColor: user.settings.primaryBackColor },
              ]}
            />
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
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name={"home-sharp"}
                size={26}
                color={user.settings.textColor as string}
              />
              {focused ? (
                <Paragraph width={"100%"} color={user.settings.textColor as string}>Home</Paragraph>
              ) : null}
            </View>
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

      {/* <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarButton: (props) => (
            <Pressable
              onPress={props.onPress}
              onLongPress={props.onLongPress}
              accessibilityRole={props.accessibilityRole}
              accessibilityState={props.accessibilityState}
              accessibilityLabel={props.accessibilityLabel}
              testID={props.testID}
              style={({ pressed }) => [
                props.style,
                pressed && { backgroundColor: "rgba(200,200,200,0.2)" },
              ]}
              android_ripple={{
                color: "rgba(200,200,200,0.18)",
                borderless: false,
              }}
            >
              {props.children}
            </Pressable>
          ),
          tabBarIcon: () => (
            <Ionicons
              name="settings-sharp"
              color={user.settings.textColor as string}
              size={30}
            />
          ),
        }}
      /> */}
    </Tabs>
  );
}
