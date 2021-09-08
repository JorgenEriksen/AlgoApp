import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLoginToken = async () => {
  try {
    return await AsyncStorage.getItem("login_token");
  } catch (e) {
    // read error
    console.log(e);
  }
};

export const setLoginTokenItem = async (token) => {
  try {
    await AsyncStorage.setItem("login_token", token);
  } catch (e) {
    // saving error
    console.log(e);
  }
};
