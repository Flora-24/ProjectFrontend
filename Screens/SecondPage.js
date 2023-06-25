import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  placeholderhandler,
} from "react-native";
import React from "react";

export default function SecondPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundIm}
        source={require("../assets/img2.jpg")}
      >
        <ScrollView style={styles.scrollview}>
          <View style={styles.Head}>
            <Text style={styles.Header}>
              Explore the profound connection between you and I and immerse
              yourself in a compilation of inspirational quotes that will help
              improve your
              <Text style={styles.innerText}> mood.</Text>
            </Text>
          </View>
          <View style={styles.Style}>
            <Text style={styles.Styletext}>Please tell us your name</Text>
            <TextInput
              style={styles.TextInput}
              placeholderTextColor="white"
              placeholder="Name Here..."
              onChangeText={placeholderhandler}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen3")}
            activeOpacity={0.8}
          >
            <View style={styles.button1}>
              <Text style={styles.button1text}>ENTER</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen3")}>
            <View>
              <Text style={styles.skip}>Skip for now</Text>
            </View>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </ScrollView>
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
    // justifyContent: "center",
    alignItems: "center",
  },
  Header: {
    justifyContent: "center",
    padding: 40,
    marginTop:120,
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontFamily: "PlayfairItalics",
  },
  Head: {
   padding:0,
  },
  backgroundIm: {
    width: "110%",
    height: "103%",
  },

  innerText: {
    color: "#B46EF9",
  },

  button1: {
    backgroundColor: "#B46EF9",
    padding: 12,
    marginTop: 20,
    alignItems: "center",
    width: 350,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  button1text: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },

  Style: {
    alignSelf: "center",
  },

  Styletext: {
    padding: 10,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontWeight: "300",
    color: "white",
  },

  TextInput: {
    backgroundColor: "#20232A",
    borderColor: "yellow",
    borderRadius: 20,
    borderWidth: 1,
    height: 60,
    width: 340,
    alignSelf: "center",
    padding: 20,
    margin: 10,
    color: "white",
    fontWeight: "bold",
  },
  skip: {
    marginTop: 20,
    color: "#F6FA62",
    alignSelf: "center",
    fontSize: 16,
  },
});