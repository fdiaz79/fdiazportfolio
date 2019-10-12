import React from 'react';
import moment from 'moment';

const MessageSummary = ({message}) => {
    return (
        <div className="accordion">
            <div className="card" >
                <div className="card-header" id="headingOne">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={message.idLabel} aria-expanded="false" aria-controls={message.label}>
                            <span>Message from {message.name} on {moment(message.createdAt.toDate()).calendar()}</span>                                            
                        </button>
                </div>
                <div id={message.label} className="collapse" aria-labelledby="headingOne" data-parent="#message-list">
                    <div className="card-body">
                        {message.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageSummary;
