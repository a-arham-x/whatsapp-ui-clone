import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function NewCommunity() {
  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image source={require('../../assets/images/community.png')} style={styles.imgStyle}/>
            <Image source={require('../../assets/images/add-symbol.png')} style={styles.addSymbol}/>
        </View>
        <Text style={styles.text}>New Community</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 10,
    paddingBottom: 10,
  },
  imgContainer: {
    width: "20%"
  },
    imgStyle: {
        width: 180,
        height: 180,
        borderRadius: 5,
        // marginRight: 12,
        marginLeft: -50,
        marginTop: -50, 
    },
    addSymbol: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 12, 
        marginTop: -85,
        marginLeft: 50,
    },
    text: {
        color: "#fff",
        fontSize: 17,
        fontWeight: 700,
        marginLeft: 10,
        marginTop: 10,
    }
})

export default NewCommunity
