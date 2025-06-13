import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CommunitiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🌐 Communities will appear here...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
