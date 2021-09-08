import React, { useState } from "react";
import { setLoginTokenItem } from "../../utils/storage";
import { StyleSheet, Text, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { APIURL } from "@env";
import { Input, Button } from "native-base";

const styles = StyleSheet.create({
  pageContainer: {
    display: "flex",
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  displayNameContainer: {
    margin: "30px",
  },
});

const SignIn = ({ setUserToken, setValidUserToken }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayNameInput, setDisplayNameInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const SignInButton = async () => {
    if (isLoading) {
      // if still loading from api request
      return;
    }
    if (displayNameInput.length < 3) {
      setErrorMessage("Display name needs to be at least 3 characters long");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(`${APIURL}/Player`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: displayNameInput,
        }),
      });

      if (response.ok) {
        const token = await response.json();
        console.log(token);
        setLoginTokenItem(token);
        setUserToken(token);
        setValidUserToken(true);
        setIsLoading(false);
      } else {
        setErrorMessage("Something went wrong. Try again later");
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage("Could not connect to server. Please try again later");
      setIsLoading(false);
    }
  };

  const displayNameChange = (value) => {
    setDisplayNameInput(value);
    setErrorMessage("");
  };

  return (
    <View style={styles.pageContainer}>
      <Icon name="user" size={80} style={{ textAlign: "center" }} />
      <View style={styles.displayNameContainer}>
        <Input
          placeholder="Display Name"
          onChange={(event) => displayNameChange(event.target.value)}
        />
      </View>
      <Button
        isLoading={isLoading}
        //isLoadingText="Submitting"
        onPress={() => SignInButton()}
      >
        Enter
      </Button>
      {errorMessage.length > 0 && <Text>{errorMessage}</Text>}
    </View>
  );
};

export default SignIn;
