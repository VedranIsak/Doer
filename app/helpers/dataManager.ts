import User from "@/app/models/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskModel from "../models/Task";
import Settings from "../models/Settings";

export async function saveUser(user: User) {
  await AsyncStorage.setItem("user", JSON.stringify(user));
}

export async function loadUser(): Promise<User> {
  return new Promise<User>(async (resolve, reject) => {
    const result = await AsyncStorage.getItem("user");
    if (result) {
      const user = JSON.parse(result) as User;
      resolve(new User(reviveTasks(user.tasks), reviveSettings(user.settings)));
    } else {
      reject("Could not parse User data");
    }
  });
}

function reviveSettings(rawSettings: any): Settings {
  return new Settings(
    rawSettings.sound,
    rawSettings.textColor,
    rawSettings.primaryBackColor,
    rawSettings.secondaryBackColor,
    rawSettings.autoRemoveOldTasks
  );
}

function reviveTasks(rawTasks: any[]): TaskModel[] {
  return rawTasks.map(
    (t) =>
      new TaskModel(
        t.dueDate,
        t.time,
        t.title,
        t.description,
        t.isCompleted,
        t.priorityLevel,
        t.subTasks ?? []
      )
  );
}

export async function remove(key: string) {
  await AsyncStorage.removeItem(key);
}
