import CallsList from '@/components/calls/CallsList';
import Favourites from '@/components/calls/Favourites';
import Header from '@/components/calls/Header';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Calls() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scroll}>
        <Favourites />
        <CallsList/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingBottom: 100,
  },
  scroll: {
    flexGrow: 1,     
    marginTop: 5,           
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
