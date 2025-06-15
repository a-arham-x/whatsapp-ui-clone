// Chat.js
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";


interface CallProps {
  username: string;
  avatarUrl: ImageSourcePropType;  
  time: string;
  color: string;
  arrow: ImageSourcePropType;  
}

const CallItem: React.FC<CallProps> = ({ avatarUrl, username, time, color, arrow }) => {
    return (
        <View style={styles.container}>
            <Image
                source={avatarUrl}
                style={styles.imgStyle}
            />
            <View>
                <Text style={{...styles.name, color}}>{username}</Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                     <Image
                        source={arrow}
                        style={{width: 12, height: 12, resizeMode: "contain"}}
                    />
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
            <Image source={require('../../assets/images/calls-tab.jpg')} style={styles.callIcon}/>
        </View>
    );
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
        fontSize: 17,
    },
    time: {
        fontFamily: "OpenSans",
        color: "#aaa",
        fontSize: 14,
        marginLeft: 10
    },
    callIcon: {
        marginLeft: "auto",
        marginRight: 10,
        width: 20,
        height: 20
    }
});

export default CallItem;
