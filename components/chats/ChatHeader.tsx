import { Image, StyleSheet, Text, View } from 'react-native';

export default function ChatHeader() {
  return <View style={styles.container}>
    <Text style={styles.text}>WhatsApp</Text>
    <View style={styles.subContainer}>
         <Image source={require('../../assets/images/camera.jpg')} style={{width: 22, height: 18, marginTop: 57}}/>
         <Image source={require('../../assets/images/menu.png')} style={styles.imgStyle}/>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center"
  },
  text: {
    color: "#ffffff",
    fontFamily: "OpenSans",
    fontWeight: "700",
    fontSize: 25,
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginTop: 30,
  },
  smallText: {
    color: "#ffffff",
    fontFamily: "OpenSans",
    fontSize: 15,
    padding: 20,
    marginTop: 30
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
  marginLeft: 175, // Pushes this view to the right
  gap: 20,
//   alignItems: "center", // Optional: vertically align camera + text
  },
  imgStyle: {
    width: 24,
    height: 20,
    marginTop: 55,
  }
});
