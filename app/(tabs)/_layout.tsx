import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { 
            backgroundColor: "white",
            paddingTop: 10,
            outline: "none",
            borderWidth: 0
         } 
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Ionicons name="home-sharp" color={"black"} size={28}  />
          )
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create Task",
          tabBarIcon: () => (
            <Ionicons name="add-circle-sharp" color={"black"} size={28}  />
          )
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: () => (
            <Ionicons name="calendar-clear-sharp" color={"black"} size={28}  />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Ionicons name="settings-sharp" color={"black"} size={28}  />
          )
        }}
      />
    </Tabs>
  );
}
