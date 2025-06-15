import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar() {
  const [text, setText] = useState('');

  return (
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
  );
}

const styles = StyleSheet.create({
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
});
