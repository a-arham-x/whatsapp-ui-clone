import Channels from '@/components/updates/Channels';
import MyStatus from '@/components/updates/MyStatus';
import RecentUpdates from '@/components/updates/RecentUpdates';
import UpdatesHeader from '@/components/updates/UpdatesHeader';
import ViewedUpdates from '@/components/updates/ViewedUpdates';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

export default function UpdatesScreen() {
  return (
    <View style={styles.container}>
      <UpdatesHeader />
      <ScrollView style={styles.scroll}>
        <MyStatus />
        <RecentUpdates />
        <ViewedUpdates />
        <Channels />
        {/* <UpdatesHeader />
        <RecentUpdates />
        <Channels /> */}
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
