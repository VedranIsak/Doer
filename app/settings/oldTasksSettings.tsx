import { View } from "react-native";
import SettingsDropdown from "./settingsDropdown";
import Button from "@/components/button";

const OldTasksSettings = () => {
  return (
    <SettingsDropdown title="Old Tasks">
      <Button width={"90%"} marginBottom={10} buttonPress={() => {}}>
        Autoremove old not completed tasks
      </Button>
      <Button width={"90%"} marginBottom={15}>Alert me about old not completed tasks</Button>
    </SettingsDropdown>
  );
};

export default OldTasksSettings;
