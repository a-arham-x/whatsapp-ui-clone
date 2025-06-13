import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const ICON_SIZE = 56;

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const TAB_HEIGHT = 110;
  return (
    <>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,

        // 1) Make the bar bigger...
        tabBarStyle: {
          position: 'absolute',   // ⬅ absolute positioning
          left: 0,
          right: 0,
          bottom: 0,
          height: TAB_HEIGHT,     // your new height
          backgroundColor: '#0b1014',
          borderTopWidth: 0,
        },

        // 2) Don’t inset the scene container (we’re floating the bar instead)
        // tabBarSafeAreaInsets: {
        //   bottom: 0,
        // },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={ require('@/assets/images/chats-tab.jpg') }
              style={
                styles.icon
              }
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,       // your desired size
            fontWeight: '600',  // optional
            marginTop: 4,
          },
        }}
      />
      <Tabs.Screen
        name="updates"
        options={{
          title: 'Updates',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={ require('@/assets/images/updates-tab.jpg') }
              style={
                {
                  width: 30,
                  height: 30,
                  resizeMode: "contain"
                }
              }
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,       // your desired size
            fontWeight: '600',  // optional
            marginTop: 4,
          },
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: 'Communities',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={ require('@/assets/images/communities-tab.jpg') }
              style={
                {
                  width: 30,
                  height: 30,
                  resizeMode: "contain"
                }
              }
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,       // your desired size
            fontWeight: '600',  // optional
            marginTop: 4,
          },
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: 'Calls',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={ require('@/assets/images/calls-tab.jpg') }
              style={
                {
                  width: 20,
                  height: 20,
                  resizeMode: "contain"
                }
              }
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,       // your desired size
            fontWeight: '600',  // optional
            marginTop: 4,
          },
        }}
      />
    </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: 'contain',
  },
});
