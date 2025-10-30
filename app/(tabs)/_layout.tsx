import { UserContext } from "../context/UserContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { useContext } from "react";
import { Platform, StyleSheet, View } from "react-native";
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
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          height: HEIGHT,
          paddingTop: 0,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          overflow: "hidden",
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarBackground: () => (
          <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
            <View
              style={[
                StyleSheet.absoluteFillObject,
                { backgroundColor: "transparent" },
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
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={"home-sharp"}
                size={26}
                color={user.settings.textColor as string}
              />
              {focused ? (
                <Paragraph
                  marginBottom={-27.5}
                  width={"100%"}
                  color={user.settings.textColor as string}
                >
                  Home
                </Paragraph>
              ) : null}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create Task",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={"add-circle-sharp"}
                size={26}
                color={user.settings.textColor as string}
              />
              {focused ? (
                <Paragraph
                  marginBottom={-27.5}
                  width={"100%"}
                  color={user.settings.textColor as string}
                >
                  Add task
                </Paragraph>
              ) : null}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={"calendar-clear-sharp"}
                size={26}
                color={user.settings.textColor as string}
              />
              {focused ? (
                <Paragraph
                  marginBottom={-45}
                  width={"100%"}
                  color={user.settings.textColor as string}
                >
                  Calendar
                </Paragraph>
              ) : null}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={"settings-sharp"}
                size={26}
                color={user.settings.textColor as string}
              />
              {focused ? (
                <Paragraph
                  marginBottom={-25}
                  width={"100%"}
                  color={user.settings.textColor as string}
                >
                  Settings
                </Paragraph>
              ) : null}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
