import React from 'react';
import MessageSummary from './MessageSummary';


const MessageList = ({messages}) => {
    return(
        <div id="message-list">
            <h5>MESSAGE LIST</h5>
            { messages && messages.map(message => {
                return(
                    <MessageSummary message={message} key={message.id} />
                )
            })}
        </div>
            
        
    )
}
export default MessageList;