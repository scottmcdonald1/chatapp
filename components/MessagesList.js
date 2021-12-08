import React, { useState } from "react"


export default function MessageList(props) {

    return (
        <ul className="message-list">
            {props.messages.map(message => {
                {if (message.currentUser === true) {
                    return (
                        <li className="message user-message" key={message.id}>
                            <div>{message.senderId}</div>
                            <div>{message.text}</div>
                        </li>
                    )
                } else {
                    return (
                        <li className="message" key={message.id}>
                            <div>{message.senderId}</div>
                            <div>{message.text}</div>
                        </li>
                    )
                }} 
                
            })}
        </ul>
    )
}

