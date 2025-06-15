import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Communities</Text>
        <Image source={require('../../assets/images/menu.png')} style={styles.menuStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
    },
    text: {
        color: "#ffffff",
        fontFamily: "OpenSans",
        fontSize: 25,
        // paddingVertical: 20,
        paddingHorizontal: 5,
        // marginTop: 30,
    },
    menuStyle: {
        width: 24,
        height: 20,
        // marginTop: 55,
    }
})

export default Header
