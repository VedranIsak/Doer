// app/_layout.tsx
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { UserContext, UserProvider } from "./context/UserContext";
import { useContext } from "react";

//Fixa detta med light-content, dark-content
export default function RootLayout() {
  const { user } = useContext(UserContext);
  console.log(user.settings.textColor);
  return (
    <UserProvider>
      <StatusBar
        backgroundColor={
          user.settings.textColor === "white" ? "light-content" : "dark-content"
        }
      ></StatusBar>
      <Slot />
    </UserProvider>
  );
}
