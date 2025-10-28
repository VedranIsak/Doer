import { ColorValue } from "react-native";
import Notification from "./Notification";

class Settings {
  sound: boolean;
  textColor: ColorValue;
  primaryBackColor: ColorValue;
  secondaryBackColor: ColorValue;
  autoRemoveOldTasks: boolean;

  constructor(
    sound: boolean,
    textColor: ColorValue,
    primaryBackColor: ColorValue,
    secondaryBackColor: ColorValue,
    autoRemoveOldTasks: boolean,
  ) {
    this.sound = sound;
    this.textColor = textColor;
    this.primaryBackColor = primaryBackColor;
    this.secondaryBackColor = secondaryBackColor;
    this.autoRemoveOldTasks = autoRemoveOldTasks;
  }

  cloneWith(changes: Partial<Settings>) {
    return new Settings(
      changes.sound ?? this.sound,
      changes.textColor ?? this.textColor,
      changes.primaryBackColor ?? this.primaryBackColor,
      changes.secondaryBackColor ?? this.secondaryBackColor,
      changes.autoRemoveOldTasks ?? this.autoRemoveOldTasks,
    );
  }
}

export default Settings;
