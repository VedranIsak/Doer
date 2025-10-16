// app/_layout.tsx
import { SoundProvider } from "@/context/SoundContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <StatusBar backgroundColor={"light-content"}></StatusBar>
        <Slot />
      </SoundProvider>
    </ThemeProvider>
  );
}
