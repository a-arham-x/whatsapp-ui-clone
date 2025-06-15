import Archived from "@/components/chats/Archived";
import ChatHeader from '@/components/chats/ChatHeader';
import ChatList from "@/components/chats/ChatList";
import SearchBar from "@/components/chats/SearchBar";
import React from "react";
import { ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <ChatHeader/>
        <SearchBar />
      </View>
      <Archived />
      <ChatList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  headerContainer: {
    height: "21.3%",  // stays fixed
    paddingTop: 10,
    paddingHorizontal: 10,
  },

});
