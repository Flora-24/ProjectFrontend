import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, } from "react-native";
import React from "react";

export default function Screen3({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <ImageBackground
          resizeMode="cover"
          style={styles.backgroundIm}
          source={require("../assets/img5.jpg")}
        >
          <View style={styles.Header}>
            <Text style={styles.Header}>
              Hey , Please let us know the areas you want to improve on..
            </Text>
          </View>
          <View style={styles.Boxa}>
            <TouchableOpacity activeOpacity={0.6}>
              <View>
                <Text style={styles.InnerBox1}>Health/Fittness</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.Box}>
                <Text style={styles.InnerBox1}> Personal Growth</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.Boxb}>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.Box}>
                <Text style={styles.InnerBox2}>Relationships</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.Box2}>
                <Text style={styles.InnerBox2}>Stress/Anxiety</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Screen4")}>
            <View>
              <Text style={styles.Button}>Continue</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Screen4")}>
            <View>
              <Text style={styles.skip}>Skip for now</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <View>
              <Text style={styles.Chat}>Continue</Text>
            </View>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  backgroundIm: {
    width: "100%",
    height: "100%",
  },
  Header: {
    fontWeight: "bold",
    padding: 30,
    marginTop: 10,
    marginBottom: 40,
    textAlign: "center",
    fontSize: 24,
    color: "white",
    // font
  },
  scrollview: {
    width: "100%",
    height: "100%",
  },
  Boxa: {
    flexDirection: "row",
    padding: 0,
    marginBottom: 0,
    justifyContent: "space-evenly",
  },
  Boxb: {
    flexDirection: "row",
    padding: 0,
    marginBottom: 0,
    justifyContent: "space-evenly",
  },

  Box2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  InnerBox2: {
    textAlign: "center",
    color: "yellow",
    fontSize: 20,
    marginBottom: 50,
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    margin: 10,
    width: 180,
    height: 70,
    borderColor: "yellow",
  },
  InnerBox1: {
    textAlign: "center",
    color: "yellow",
    fontSize: 20,
    // backgroundColor: "blue",
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginBottom: 25,
    width: 180,
    height: 80,
    borderColor: "yellow",
  },

  Button: {
    marginTop: 20,
    color: "white",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#B46EF9",
    padding: 12,
    margin: 0,
    width: 300,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center",
  },
  skip: {
    marginTop: 20,
    color: "#F6FA62",
    alignSelf: "center",
    fontSize: 16,
  },
  Chat: {
    marginTop: 20,
    color: "white",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#B46EF9",
    padding: 12,
    margin: 0,
    width: 300,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center",
  },
});