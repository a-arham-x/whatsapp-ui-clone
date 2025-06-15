import CommunitiesList from '@/components/communities/CommunitiesList';
import CommunitiesMessage from '@/components/communities/CommunitiesMessage';
import Header from '@/components/communities/Header';
import NewCommunity from '@/components/communities/NewCommunity';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function CommunitiesScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scroll}>
        <CommunitiesMessage/>
        <NewCommunity />
        <CommunitiesList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
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
