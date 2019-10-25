import React from 'react';
import MessageSummary from './MessageSummary';
import { connect } from 'react-redux';


const MessageList = ({ messages, auth }) => {
    // console.log(auth);
    // const { messages } = props;
    const list = auth.uid ?  messages && messages.map(message => {
        return(
            <MessageSummary message={message} key={message.id} />
        )
    }) :  <p>Please Sign in to be able to see the messages</p>
    return(
        <div id="message-list">
            <h5>MESSAGE LIST</h5>
            {/* { messages && messages.map(message => {
                return(
                    <MessageSummary message={message} key={message.id} />
                )
            })} */}
            { list }
        </div>
            
        
    )
}

const mapStateToProps=(state) => {
    // console.log(state);
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(MessageList);