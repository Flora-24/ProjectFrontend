import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Welcomes({ navigation }) {

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundIm}
        source={require("../assets/img1.jpg")}
      >
        <View>
          <Text style={styles.Header}>
            Welcome To <Text style={styles.innerText}> IAffirm</Text>
          </Text>

          <Text style={styles.Intro}>
            The power of affirmations lies in repeating them to yourself
            regularly to reinforce the positive belief.
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SecondPage")}>
          <View style={styles.Button}>
            <Text style={styles.buttontext}>Continue</Text>
          </View>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 0,
    flexDirection: "column",
    alignItems: "center",
  },

  backgroundIm: {
    width: "100%",
    height: "100%",
  },

  Header: {
    fontWeight: "bold",
    fontFamily: "Mulish1",
    padding: 100,
    textAlign: "center",
    fontSize: 34,
    color: "white",
  },
  innerText: {
    color: "#B46EF9",
  },
  Intro: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "PlayfairItalics",
    justifyContent: "center",
    padding: 20,
  },
  Button: {
    backgroundColor: "#B46EF9",
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    width: 130,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  buttontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
