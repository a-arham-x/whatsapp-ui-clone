import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
      <TextInput
        style={styles.input}
        placeholder="Batman"
        placeholderTextColor="#aaa"
        value={text}
        onChangeText={setText}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // Fill screen
    // justifyContent: 'center',// Center vertically
    padding: 20,
    backgroundColor: '#101010',  // Dark bg
  },
  input: {
    height: 50,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    backgroundColor: '#fff',
  },
});
