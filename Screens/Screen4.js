import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import RNTextArea from "@freakycoder/react-native-text-area";

export default function Screen4() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const submitText = (e) => {
    fetch(`http://192.168.43.251:3001/sentiment?text=${text}`).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setSentiment(data.sentiment);
      });
    });
  };

  const [quote, setQuote] = useState([]);

  const fetchQuotes = () => {
    fetch(`http://192.168.43.251:3001/quotes?sentiment=${sentiment}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };
  useEffect(() => {
    fetchQuotes();
  }, [sentiment]);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundIm}
        source={require("../assets/img3.jpg")}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.header}>
            <Text style={styles.Intro}>
              The power of affirmations lies in repeating them to yourself
              regularly to reinforce the positive belief...
              {/* <Text style={styles.Nelson}> -Nelson Mandela</Text> */}
            </Text>
          </Text>

          <RNTextArea
            maxCharLimit={100}
            placeholderTextColor="black"
            exceedCharCountColor="#990606"
            placeholder={"Tell us how you are feeling..."}
            onChangeText={(text) => setText(text)}
            style={styles.TextArea}
          >
            <Text style={styles.Type}>
              {quote.text}
              {quote.author}
            </Text>
          </RNTextArea>
          <TouchableOpacity onPress={(e) => submitText(e)}>
            <View>
              <Text style={styles.Submit}> Submit </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,

    flexDirection: "column",
    justifyContent: "space-around",
  },
  backgroundIm: {
    width: "100%",
    height: "100%",
  },
  header: {
    padding: 30,
    marginTop: 50,
    marginBottom: 40,
    textAlign: "center",
  },
  Intro: {
    color: "white",
    fontWeight: 500,
    textAlign: "center",
    fontSize: 26,
    fontFamily: "Mulish2",
  },
  TextArea: {
    padding: 10,
    width: "80%",
    height: "40%",
    borderRadius: 20,
    alignSelf: "center",
  },
  Type: {
    // marginBottom: 40,
    color: "blue",
    fontSize: 22,
  },
  scrollview: {
    width: "100%",
    height: "150%",
  },
  Submit: {
    marginTop: 20,
    color: "white",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#B46EF9",
    width: 150,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center",
    padding: 12,
  },
  Nelson: {
    fontSize: 20,
    color: "#B46EF9",
    fontFamily: "PlayfairItalics",
  },
});
