import React, { useState } from "react";


export default function SendMessageForm(props) {

    const [message, useMessage] = useState('');

    const handleChange = (e) => {
        useMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendMessage(message);
        useMessage('');
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="send-message-form">
            <input 
                onChange={handleChange}
                value={message}
                placeholder="Type your message and hit ENTER"
                type="text"
            />
        </form>
    )
}