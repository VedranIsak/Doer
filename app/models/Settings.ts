import { ColorValue } from "react-native";

class Settings {
  sound: boolean;
  textColor: ColorValue;
  primaryBackColor: ColorValue;
  secondaryBackColor: ColorValue;
  autoRemoveOldTasks: boolean;
  subTasksActive: boolean;
  autoMarkSubTasks: boolean;
  autoAssignDateForSubTasks: boolean;

  constructor(
    sound: boolean,
    textColor: ColorValue,
    primaryBackColor: ColorValue,
    secondaryBackColor: ColorValue,
    autoRemoveOldTasks: boolean,
    subTasksActive: boolean,
    autoMarkSubTasks: boolean,
    autoAssignDateForSubTasks: boolean
  ) {
    this.sound = sound;
    this.textColor = textColor;
    this.primaryBackColor = primaryBackColor;
    this.secondaryBackColor = secondaryBackColor;
    this.autoRemoveOldTasks = autoRemoveOldTasks;
    this.subTasksActive = subTasksActive;
    this.autoMarkSubTasks = autoMarkSubTasks;
    this.autoAssignDateForSubTasks = autoAssignDateForSubTasks;
  }

  cloneWith(changes: Partial<Settings>) {
    return new Settings(
      changes.sound ?? this.sound,
      changes.textColor ?? this.textColor,
      changes.primaryBackColor ?? this.primaryBackColor,
      changes.secondaryBackColor ?? this.secondaryBackColor,
      changes.autoRemoveOldTasks ?? this.autoRemoveOldTasks,
      changes.subTasksActive ?? this.subTasksActive,
      changes.autoMarkSubTasks ?? this.autoMarkSubTasks,
      changes.autoAssignDateForSubTasks ?? this.autoAssignDateForSubTasks
    );
  }
}

export default Settings;
