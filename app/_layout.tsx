// app/_layout.tsx
import { Slot } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#470047" }}>
      <LinearGradient
        colors={["#6a1a74", "#b3206c"]}
        style={StyleSheet.absoluteFillObject}
      />
      <Slot />
    </View>
  );
}
