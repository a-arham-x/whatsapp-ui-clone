import React from 'react'
import { View } from 'react-native'
import Chat from './Chat'

function ChatList() {

    const chatList = [
        {imgSrc: require("@/assets/images/profile-pic.png"), username: "Jaudat", message: "How much did u sleep?", time: "9:35 am"},
        {imgSrc: require("@/assets/images/profile-pic-1.png"), username: "Ismaeel", message: "Ooooooo", time: "9:21 am"},
        {imgSrc: require("@/assets/images/profile-pic-2.png"), username: "Ramish", message: "Hn chl set hai", time: "8:46 am"},
        {imgSrc: require("@/assets/images/profile-pic-3.png"), username: "Ahmad Zafar", message: "When is u come back?", time: "7:41 am"},
        {imgSrc: require("@/assets/images/profile-pic-4.png"), username: "Hassaan", message: "Reacted 😂 to your message", time: "12:22 am"},
        {imgSrc: require("@/assets/images/profile-pic-5.png"), username: "Fahd", message: 'You reacted 😂 to "Image"', time: "Yesterday"},
        {imgSrc: require("@/assets/images/profile-pic-6.png"), username: "Yuvraj", message: "Pull gya yuvi", time: "Yesterday"},
      ]
  return (
    <View>
        {chatList.map((chat, i)=>
                    <Chat key={i} avatarUrl={chat.imgSrc} username={chat.username} message={chat.message} time={chat.time}/>
                )}
    </View>
  )
}

export default ChatList
