import { ColorValue } from "react-native";
import Notification from "./Notification";

class Settings {
  sound: boolean;
  primaryBackColor: ColorValue;
  secondaryBackColor: ColorValue;
  autoRemoveOldTasks: boolean;
  sendAlertsOldTasks: boolean;
  muteDailyNotifications: boolean;
  dailyNotifications: Notification[];

  constructor(sound: boolean, primaryBackColor: ColorValue, secondaryBackColor: ColorValue, 
    autoRemoveOldTasks: boolean, sendAlertsOldTasks: boolean, muteDailyNotifications: boolean,
    dailyNotifications: Notification[]
  ) {
    this.sound = sound;
    this.primaryBackColor = primaryBackColor;
    this.secondaryBackColor = secondaryBackColor;
    this.autoRemoveOldTasks = autoRemoveOldTasks;
    this.sendAlertsOldTasks = sendAlertsOldTasks;
    this.muteDailyNotifications = muteDailyNotifications;
    this.dailyNotifications = dailyNotifications;
  }
}

export default Settings;
