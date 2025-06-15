import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function CommunitiesMessage() {
  return (
          <View style={styles.container}>
            <Image source={require('../../assets/images/bulb.jpg')} style={styles.imgStyle} />
          
            <View style={styles.textContainer}> 
              <Text style={styles.headText}>Communities are moving</Text>
              <Text style={styles.mainText}>
                View and create communities from the Chats tab, and organise them with a list.
              </Text>
              <Text style={styles.addedText}>Add communities list</Text>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 15,
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: "#aaa",
    borderRadius: 10,
    gap: 20,
  },
  imgStyle: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1, // 🧠 THIS IS KEY
    // flexWrap: "wrap",
  },
  headText: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
  },
  mainText: {
    color: "#fff",
    flexWrap: "wrap",
  },
  addedText: {
    color: "#4f9",
    fontWeight: 700,
    fontSize: 13,
  },
});


export default CommunitiesMessage

