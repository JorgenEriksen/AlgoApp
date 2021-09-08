import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

import { getLoginToken } from "./utils/storage";
import GameList from "./containers/GameList";
import SignIn from "./containers/SignIn";

const Stack = createStackNavigator();

export default function App() {
  const [validUserToken, setValidUserToken] = useState(false);
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      let token = await getLoginToken();
      console.log(token);
      if (token) {
        console.log(token);
      }
    };
    fetchToken();
  }, []);

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {!validUserToken ? (
              <Stack.Screen name="Sign In">
                {(props) => (
                  <SignIn
                    setValidUserToken={setValidUserToken}
                    setUserToken={setUserToken}
                  />
                )}
              </Stack.Screen>
            ) : (
              <>
                <Stack.Screen name="test" component={GameList} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
