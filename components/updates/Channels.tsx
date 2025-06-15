import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Channels() {
    const channels =[
        {imgSrc: require("@/assets/images/channel.jpg"), channelName: "Channel 1", followers: "13K Followers"},
        {imgSrc: require("@/assets/images/channel.jpg"), channelName: "Channel 2", followers: "177K Followers"},
        {imgSrc: require("@/assets/images/channel.jpg"), channelName: "Channel 3", followers: "59K Followers"},
        {imgSrc: require("@/assets/images/channel.jpg"), channelName: "Channel 4", followers: "103K Followers"},
    ]
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Channels</Text>
        <Text style={styles.smallText}>Stay updated on topics that matter to you. Find channels to follow below.</Text>
        <Text style={{...styles.smallText, marginTop: 30}}>Find channels to follow</Text>
        <View style={styles.channelsContainer}>
                    {channels.map((channel, i)=>
                        <View style={styles.channel} key={i}>
                            <Image
                        source={channel.imgSrc}
                        style={styles.imgStyle}
                    />
                        <View>
                            <Text style={styles.name}>{channel.channelName}</Text>
                            <Text style={styles.followers}>{channel.followers}</Text>
                        </View>
                        <Text style={styles.followButton}>
                            Follow
                        </Text>
                    </View>
                    )}
                </View>
                <Text style={styles.exploreButton}>
                    Explore More
                </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingBottom: 300,
    },
    text: {
        color: "#ffffff",
        fontFamily: "OpenSans",
        fontSize: 20,
        fontWeight: "700",
    },
    smallText: {
        color: "#aaa",
        fontFamily: "OpenSans",
        fontSize: 12,
        fontWeight: "700",
    },
    channelsContainer: {
        marginTop: 10,
    },  
    channel: {
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
    },
    name: {
        fontFamily: "OpenSans",
        color: "#fff",
    },
    followers: {
        fontFamily: "OpenSans",
        color: "#aaa",
        fontSize: 14,
    },
    followButton: {
        width: "25%",
        backgroundColor: "#103627",
        color: "#c5eacc",
        fontWeight: 700,
        padding: 5,
        textAlign: "center",
        marginLeft: "auto",
        borderRadius: 25,
    },
    exploreButton: {
        // marginLeft: 5,
        marginTop: 10,
        width: "40%",
        padding: 10,
        backgroundColor: '#0b1014',
        color: "#3e9b65",
        fontWeight: 700,
        borderWidth: 0.5,
        borderColor: "#aaa",
        textAlign: "center",
        borderRadius: 30,
    }
})

export default Channels
