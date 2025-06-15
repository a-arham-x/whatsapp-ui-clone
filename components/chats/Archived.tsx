import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Archived() {
  return (
    <View style={styles.archivedContainer}>
        <Image
          source={require('@/assets/images/archived.png')}
          style={{...styles.icon, width: 70, height: 30}}
          resizeMode="contain"
        />
        <Text style={styles.archivedText}>Archived</Text>
        <Text style={styles.archivedNumber}>22</Text>
      </View>
  )
}

const styles = StyleSheet.create({
archivedContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 10,
    paddingVertical: 10,
  },
  archivedText: {
    fontSize: 15,
    marginLeft: -10,
    color: "#aaa",
  },
  archivedNumber: {
    fontSize: 12,
    marginLeft: 'auto',  // pushes it to the right
    marginRight: 5,
    color: "#aaa",
  },
  icon: {
    width: 20, height: 20,
    marginRight: 10,
    tintColor: '#aaa',
  },
})

export default Archived
