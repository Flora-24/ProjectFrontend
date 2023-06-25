import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet,Text,View } from "react-native";
import React, {useState} from "react";

export default function Chat() {
    const ChaBot = () => {
        const [messages, setMessages] = useState([])
        
        const YOUR_CHATGPT_API_KEY =
            "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";
        
        const handleSend = async (newMessage = []) => {
            try {
                // Get the user's message
                const userMessage = newMessage[0];

                //add the user's message to the messages state
                setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage));
                
            }
        }
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
}
    
}