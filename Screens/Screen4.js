import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import RNTextArea from "@freakycoder/react-native-text-area";
import axios from "axios";

// Perform the connection and handle the response and error here

export default function Screen4() {

  const YourComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const handleSend = async (newMessage = []) => {
        try {
          const response = await axios.get(
            "http://localhost:5000"
          );
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      // const [text, setText] = useState("");
      // URL url = new URL("http://localhost:PORT");
      // HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      // connection.setRequestMethod("GET");
      // const submitText = (e) => {
      //   console.log("rejd");
      //   fetch(`sentiment?text=${text}`).then((res) =>
      //     res.json().then((data) => {
      //       // Setting a data from api
      //       setdata({
      //         name: data.Name,
      //         age: data.Age,
      //         date: data.Date,
      //         programming: data.programming,
      //       });
      //     })
      //   );
      // };
      YourComponent;

    };
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hey, How are you doing today?</Text>
      <RNTextArea
        maxCharLimit={100}
        placeholderTextColor="blue"
        exceedCharCountColor="#990606"
        placeholder={"Write your review..."}
        onChangeText={(text) => setText(text)}
        style={styles.TextArea}
      ></RNTextArea>
      {/* <Button
        onPress={(e) => submitText(e)}
        title="Submit"
        color="#841584"
        width="40"
        accessibilityLabel="Learn more about this purple button"
      /> */}
      <TouchableOpacity onPress={(e) => submitText(e)} >
        <View>
          <Text style={styles.Submit}> Submit</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
      color: "white",
      fontWeight: "bold",
      padding: 30,
      marginTop: 40,
      marginBottom: 40,
      textAlign: "center",
      fontSize: 24,
    },
    TextArea: {
      padding: 10,
      width: "80%",
      height: "40%",
      borderRadius: 20,
      alignSelf: "center",
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
      backgroundColor: "#B46EF9",
      width: 150,
      borderWidth: 1,
      borderRadius: 20,
      textAlign: "center",
      padding: 12,
    },
  });
