import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function ViewedUpdates() {
    const updates = [
            {imgSrc: require("@/assets/images/profile-pic-7.png"), username: "Talha Memon", time: "Yesterday"},
            {imgSrc: require("@/assets/images/profile-pic-8.png"), username: "Shabbar", time: "Yesterday"},
            {imgSrc: require("@/assets/images/profile-pic-9.png"), username: "Saddam", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-7.png"), username: "Talha Memon", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-8.png"), username: "Shabbar", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-9.png"), username: "Saddam", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-7.png"), username: "Talha Memon", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-8.png"), username: "Shabbar", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-9.png"), username: "Saddam", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-7.png"), username: "Talha Memon", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-8.png"), username: "Shabbar", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-9.png"), username: "Saddam", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-7.png"), username: "Talha Memon", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-8.png"), username: "Shabbar", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-9.png"), username: "Saddam", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-7.png"), username: "Talha Memon", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-8.png"), username: "Shabbar", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-9.png"), username: "Saddam", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-7.png"), username: "Talha Memon", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-8.png"), username: "Shabbar", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-9.png"), username: "Saddam", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-7.png"), username: "Talha Memon", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-8.png"), username: "Shabbar", time: "Yesterday"},
            // {imgSrc: require("@/assets/images/profile-pic-9.png"), username: "Saddam", time: "Yesterday"},
    ]
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Viewed updates</Text>
        <View>
            {updates.map((update, i)=>
                <View style={styles.update} key={i}>
                    <Image
                source={update.imgSrc}
                style={styles.imgStyle}
            />
                <View>
                    <Text style={styles.name}>{update.username}</Text>
                    <Text style={styles.time}>{update.time}</Text>
                </View>
            </View>
            )}
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: "flex-start",
        padding: 10,
        // width: "100%",
        paddingHorizontal: 15,
        gap: 10,
    },
    text: {
        color: "#aaa",
        fontFamily: "OpenSans",
        fontSize: 12,
        fontWeight: "700",
    },
    update: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,   // space out each Chat
        // paddingHorizontal: 10,
    },
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
        borderWidth: 2,
        borderColor: '#aaa', 
    },
    name: {
        fontFamily: "OpenSans",
        color: "#fff",
    },
    time: {
        fontFamily: "OpenSans",
        color: "#aaa",
        fontSize: 14,
    }
})

export default ViewedUpdates
