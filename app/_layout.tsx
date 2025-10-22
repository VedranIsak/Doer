// app/_layout.tsx
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { UserProvider } from "./context/UserContext";

export default function RootLayout() {
  return (
    <UserProvider>
        <StatusBar backgroundColor={"light-content"}></StatusBar>
        <Slot />
    </UserProvider>
  );
}
