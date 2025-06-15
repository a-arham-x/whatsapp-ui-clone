import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import CommunityGroup from './CommunityGroup';

interface CommunityProps {
  communityIcon: ImageSourcePropType;
  communityName: string;
  groups: { groupName: string; groupIcon: any; lastMessage: string; lastMessageTime: string; }[];
}

const CommunityCard: React.FC<CommunityProps> =  ({communityIcon, communityName, groups}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headContainer}>
            <View style={styles.imgContainer}>
                <Image source={communityIcon} style={styles.imgStyle}/>
            </View>
            <Text style={styles.text}>{communityName}</Text>
        </View>
        <View>
            {groups.map((group, i)=>
                <CommunityGroup key={i} groupName={group.groupName} groupIcon={group.groupIcon} lastMessage={group.lastMessage} lastMessageTime={group.lastMessageTime}/>
            )}
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#000",
        borderBottomWidth: 10,
        paddingBottom: 10,
    },
    headContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#aaa",
    },
    imgContainer: {
        width: "20%"
    },
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginLeft: 15,
        // marginRight: 12,
        // marginLeft: -50,
        // marginTop: -50, 
    },
    text: {
        color: "#fff",
        fontSize: 17,
        fontWeight: 700,
        marginLeft: 10,
        // marginTop: 10,
    }
})


export default CommunityCard
