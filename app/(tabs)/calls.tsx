import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📞 Calls functionality under construction...</Text>
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
