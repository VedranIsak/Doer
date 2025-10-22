import User from '@/app/models/User';
import AsyncStorage from '@react-native-async-storage';

export async function save<T>(key: string, value: T) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function load<T>(key: string): Promise<User> {
  return new Promise<User>(async (resolve, reject) => {
      const result = await AsyncStorage.getItem(key);
      if(result) {
        resolve(JSON.parse(result) as User)
      }
      else {
        reject("Could not parse User data");
      }

  })
}

export async function remove(key: string) {
  await AsyncStorage.removeItem(key);
}
