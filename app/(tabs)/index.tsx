import Chat from "@/components/chats/Chat";
import ChatHeader from '@/components/chats/ChatHeader';
import { Text } from '@react-navigation/elements';
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [text, setText] = useState('');

  const chatList = [
    {imgSrc: require("@/assets/images/profile-pic.png"), username: "Jaudat", message: "How much did u sleep?", time: "9:35 am"},
    {imgSrc: require("@/assets/images/profile-pic-1.png"), username: "Ismaeel", message: "Ooooooo", time: "9:21 am"},
    {imgSrc: require("@/assets/images/profile-pic-2.png"), username: "Ramish", message: "Hn chl set hai", time: "8:46 am"},
    {imgSrc: require("@/assets/images/profile-pic-3.png"), username: "Ahmad Zafar", message: "When is u come back?", time: "7:41 am"},
    {imgSrc: require("@/assets/images/profile-pic-4.png"), username: "Hassaan", message: "Reacted 😂 to your message", time: "12:22 am"},
    {imgSrc: require("@/assets/images/profile-pic-5.png"), username: "Fahd", message: 'You reacted 😂 to "Image"', time: "Yesterday"},
    {imgSrc: require("@/assets/images/profile-pic-6.png"), username: "Yuvraj", message: "Pull gya yuvi", time: "Yesterday"},
  ]

  return (
    <View style={styles.container}>
      {/* 1. Header (fixed height) */}
      <View style={styles.headerContainer}>
        <ChatHeader/>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Image
              source={require('@/assets/images/search.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <TextInput
              style={styles.input}
              placeholder="Ask Meta AI or Search"
              placeholderTextColor="#aaa"
              value={text}
              onChangeText={setText}
            />
          </View>
        </View>
      </View>

      {/* 2. Archived row (natural height) */}
      <View style={styles.archivedContainer}>
        <Image
          source={require('@/assets/images/archived.png')}
          style={{...styles.icon, width: 70, height: 30}}
          resizeMode="contain"
        />
        <Text style={styles.archivedText}>Archived</Text>
        <Text style={styles.archivedNumber}>22</Text>
      </View>

      {/* 3. Chats list fills remaining space */}
      <ScrollView>
        {chatList.map((chat, i)=>
            <Chat key={i} avatarUrl={chat.imgSrc} username={chat.username} message={chat.message} time={chat.time}/>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  headerContainer: {
    height: "21.3%",  // stays fixed
    paddingTop: 10,
    paddingHorizontal: 10,
  },

  inputContainer: { marginTop: 2 },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#23282c',
    borderRadius: 50,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 10,
    // marginTop: -5,
  },
  icon: {
    width: 20, height: 20,
    marginRight: 10,
    tintColor: '#aaa',
  },
  input: {
    flex: 1,
    color: '#fff',
  },

  archivedContainer: {
    flexDirection: "row",
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 10,
    paddingVertical: 10,
  },
  archivedText: {
    fontSize: 15,
    marginLeft: -10,
    color: "#aaa",
  },
  archivedNumber: {
    fontSize: 12,
    marginLeft: 'auto',  // pushes it to the right
    marginRight: 5,
    color: "#aaa",
  },

});
