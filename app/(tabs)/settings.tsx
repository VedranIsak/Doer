import ScreenContainer from "@/app/components/screenContainer";
import React from "react";
import { StyleSheet, View } from "react-native";
import ExpiredTasks from "../pageComponents/settings/expiredTasks";
import Sound from "../pageComponents/settings/sound";
import Themes from "../pageComponents/settings/themes";
import Subtasks from "../pageComponents/settings/subTasks";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  }
});

const Settings = () => {
  return (
    <ScreenContainer title="Settings" img="settings">
      <View style={styles.container}>
        <Themes />
        <Sound />
        <ExpiredTasks />
        <Subtasks />
      </View>
    </ScreenContainer>
  );
};

export default Settings;
