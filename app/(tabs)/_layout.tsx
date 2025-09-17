import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { 
            backgroundColor: "rgb(173, 61, 111)",
            borderColor: "rgba(255, 255, 255, 0.4)",
            paddingBottom: 10,   // ⬅️ keep spacing below icons
            paddingTop: 10,      // ⬅️ optional, to center better
         } 
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Ionicons name="home-sharp" color={"white"} size={32}  />
          )
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create Task",
          tabBarIcon: () => (
            <Ionicons name="add-circle-sharp" color={"white"} size={32}  />
          )
        }}
      />
    </Tabs>
  );
}
