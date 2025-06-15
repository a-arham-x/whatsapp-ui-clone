// Chat.js
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";


interface ChatProps {
  username: string;
  message: string;
  avatarUrl: ImageSourcePropType;   // the “?” makes it optional
  time: string;
}

const Chat: React.FC<ChatProps> = ({ avatarUrl, username, message, time }) => {
    return (
        <View style={styles.container}>
            <Image
                source={avatarUrl}
                style={styles.imgStyle}
            />
            <View>
                <Text style={styles.name}>{username}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
            <Text style={styles.time}>{time}</Text>
            {/* other chat bubble content */}
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
});

export default Chat;
