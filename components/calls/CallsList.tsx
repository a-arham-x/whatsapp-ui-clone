import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CallItem from './CallItem'

function CallsList() {
    const callsList = [
        {
            username: "Ibraheem",
            avatarUrl: require("../../assets/images/profile-pic-10.png"),
            time: "Yesterday, 19:18",
            color: "white",
            arrow: require("../../assets/images/green-arrow-up.jpg"),
        },
        {
            username: "Shabbar (2)",
            avatarUrl: require("../../assets/images/profile-pic-8.png"),
            time: "14 June, 19:35",
            color: "white",
            arrow: require("../../assets/images/green-arrow-down.jpg"),
        },
        {
            username: "Ismaeel",
            avatarUrl: require("../../assets/images/profile-pic-1.png"),
            time: "13 June, 23:47",
            color: "#ff2f4f",
            arrow: require("../../assets/images/red-arrow-down.jpg"),
        },
        {
            username: "Ismaeel",
            avatarUrl: require("../../assets/images/profile-pic-1.png"),
            time: "12 June, 21:34",
            color: "#ff2f4f",
            arrow: require("../../assets/images/red-arrow-down.jpg"),
        },
        {
            username: "Hassaan",
            avatarUrl: require("../../assets/images/profile-pic-4.png"),
            time: "11 June, 16:16",
            color: "#ff2f4f",
            arrow: require("../../assets/images/red-arrow-down.jpg"),
        },
        {
            username: "Shabbar",
            avatarUrl: require("../../assets/images/profile-pic-8.png"),
            time: "10 June, 22:01",
            color: "white",
            arrow: require("../../assets/images/green-arrow-up.jpg"),
        },
        {
            username: "Ramish",
            avatarUrl: require("../../assets/images/profile-pic-2.png"),
            time: "10 June, 19:45",
            color: "#ff2f4f",
            arrow: require("../../assets/images/red-arrow-down.jpg"),
        }
    ]
  return (
    <View>
        <Text style={styles.text}>Recent</Text>
        <View style={styles.callsView}>
            {callsList.map((call, i)=>
                <CallItem key={i} username={call.username} avatarUrl={call.avatarUrl} time={call.time} color={call.color} arrow={call.arrow}/>
            )}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 700,
        marginTop: 20,
        marginLeft: 10,
    },
    callsView: {
        marginTop: 10,
    }
})

export default CallsList
