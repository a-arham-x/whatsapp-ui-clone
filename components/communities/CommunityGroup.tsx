import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface GroupProps { 
    groupName: string; 
    groupIcon: any; 
    lastMessage: string; 
    lastMessageTime: string; 
}

const CommunityGroup: React.FC<GroupProps> = ({groupName, groupIcon, lastMessage, lastMessageTime}) => {
  return (
    <View style={styles.container}>
                <Image
                    source={groupIcon}
                    style={groupName==="Announcements"?{...styles.imgStyle, borderRadius: 5} : styles.imgStyle}
                />
                <View>
                    <Text style={styles.name}>{groupName}</Text>
                    <Text style={styles.message}>
                        {lastMessage.length > 36 ? `${lastMessage.slice(0, 36)}...` : lastMessage}
                    </Text>
                </View>
                <Text style={styles.time}>{lastMessageTime}</Text>
                {/* other chat bubble content */}
            </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,   // space out each Chat
        paddingHorizontal: 10,
    },
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,     // space between avatar and text
    },
    name: {
        fontFamily: "OpenSans",
        color: "#fff",
    },
    message: {
        fontFamily: "OpenSans",
        color: "#aaa",
        fontSize: 14,
    },
    time: {
        fontFamily: "OpenSans",
        color: "#aaa",
        fontSize: 12,
        marginLeft: "auto",
        marginRight: 10,
        marginBottom: 'auto',
        marginTop: 8,
    }
})

export default CommunityGroup
