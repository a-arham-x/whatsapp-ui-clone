import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function MyStatus() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Status</Text>
        <View style={styles.myStatusView}>
            <Image source={require('../../assets/images/my-profile-pic.png')} style={styles.imgStyle}/>
            <Image source={require('../../assets/images/add-symbol.png')} style={styles.addSymbol}/>
            <View style={styles.description}>
                <Text style={styles.descriptionHeader}>Add Status</Text>
                <Text style={styles.descriptionText}>Disappears after 24 hours</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: "flex-start",
        // width: "100%",
        padding: 10,
        gap: 10,
    },
    text: {
        color: "#ffffff",
        fontFamily: "OpenSans",
        fontSize: 20,
        paddingHorizontal: 5,
        fontWeight: "700",
    },
    myStatusView: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        gap: 3,
    },
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12, 
    }, 
    addSymbol: {
        width: 15,
        height: 15,
        borderRadius: 8,
        marginRight: 12, 
        marginTop: 30,
        marginLeft: -30,
    },
    description: {
        // flex: 1,
        alignItems: "flex-start",
    },
    descriptionHeader: {
        color: "#ffffff",
        fontFamily: "OpenSans",
        fontSize: 15,
        fontWeight: "700",
    },
    descriptionText: {
        color: "#aaa",
    }
})

export default MyStatus
