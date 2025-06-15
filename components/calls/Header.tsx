import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Calls</Text>
        <View style={styles.iconsContainer}>
            <Image source={require('../../assets/images/search-icon-white.png')} style={{...styles.searchStyle}}/>
            <Image source={require('../../assets/images/menu.png')} style={styles.menuStyle}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: "15%",
        flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center",
        padding: 10,
    },
    text: {
        color: "#ffffff",
        fontFamily: "OpenSans",
        fontSize: 25,
        // paddingVertical: 20,
        paddingHorizontal: 5,
        // marginTop: 30,
    },
    iconsContainer: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: "15",
        marginLeft: "auto",
        marginTop: "-15%"
    },
    searchStyle: {
        width: 34,
        height: 30,
        marginTop: 55,
    },
    menuStyle: {
        width: 24,
        height: 20,
        marginTop: 55,  
    }
})

export default Header
