import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'user';

export const saveUser = async (user: object) => {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const loadUser = async () => {
  const data = await AsyncStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearUser = async () => {
  await AsyncStorage.removeItem(USER_KEY);
};
