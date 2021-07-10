import React from 'react'
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
const Messages = ({messages, name}) => {
    <ScrollToBottom>
        {messages.map((messages, i)=><div key={i}><Messages messages={messages} name={name} /></div>)}
    </ScrollToBottom>
}
export default Messages
