import { NextPage } from 'next'
import React, { useState } from "react"
import MessageList from '../components/MessagesList';
import SendMessageForm from '../components/SendMessageForm';
import Title from '../components/Title';
import { useRouter } from 'next/router';

// const username = "ricardo";

const DUMMY_DATA = [
    {
        senderId: "Goose",
        text: "Hey.",
        currentUser: false
    },
    {
        senderId: "BarBar",
        text: "What's up?",
        currentUser: false
    }
]

export default function ChatRoom() {

    const router = useRouter();

    const username = router.query.user;

    const [messages, setMessages] = useState(DUMMY_DATA);

    const sendMessage = (inputText) => {
        const newMessage = {
            senderId: `${username}`,
            text: `${inputText}`,
            currentUser: true
        }
        setMessages((messages) => [...messages, newMessage]);
    }

    return (
        <div className="app">
            <Title />
            <div className="chat-room">
                <MessageList messages={messages} />
                <SendMessageForm 
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    )
}



;