import React from 'react'

const MessageSummary = ({message}) => {
    return (
        <div className="accordion">
            <div className="card" >
                <div className="card-header" id="headingOne">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={message.idLabel} aria-expanded="false" aria-controls={message.label}>
                            <span>Message from {message.firstName} on {message.date}</span>                                            
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
