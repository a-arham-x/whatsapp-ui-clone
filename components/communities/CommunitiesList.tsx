import React from 'react'
import { StyleSheet, View } from 'react-native'
import CommunityCard from './CommunityCard'

function CommunitiesList() {
    const communities = [
        {
            communityIcon: require("@/assets/images/community-icon.png"),
            communityName: "Community 1",
            groups: [
                {
                    groupName: "Announcements",
                    groupIcon: require("@/assets/images/announcements-icon.jpg"),
                    lastMessage: "Mr Jerry Elvish joined from the community",
                    lastMessageTime: "15:24"
                },
                {
                    groupName: "Group 1",
                    groupIcon: require("@/assets/images/group-icon.jpg"),
                    lastMessage: "Mr Jerry Elvish joined from the community",
                    lastMessageTime: "15:24"
                },
                {
                    groupName: "Group 2",
                    groupIcon: require("@/assets/images/group-icon.jpg"),
                    lastMessage: "Mr Jerry Elvish joined from the community",
                    lastMessageTime: "15:23"
                }
            ]
        },
        {
            communityIcon: require("@/assets/images/community-icon.png"),
            communityName: "Community 2",
            groups: [
                {
                    groupName: "Announcements",
                    groupIcon: require("@/assets/images/announcements-icon.jpg"),
                    lastMessage: "Some user reacted ❤️ to admmin's message",
                    lastMessageTime: "14:01"
                },
                {
                    groupName: "Group 1",
                    groupIcon: require("@/assets/images/group-icon.jpg"),
                    lastMessage: "+92 314 12345678 joined from the community",
                    lastMessageTime: "15:24"
                },
                {
                    groupName: "Group 2",
                    groupIcon: require("@/assets/images/group-icon.jpg"),
                    lastMessage: "Mr Jerry Elvish joined from the community",
                    lastMessageTime: "15:23"
                }
            ]
        }
    ]
  return (
    <View style={styles.container}>
        {communities.map((community, i)=>
            <CommunityCard key={i} communityIcon={community.communityIcon} communityName={community.communityName} groups={community.groups}/>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 200,
    }
})

export default CommunitiesList
