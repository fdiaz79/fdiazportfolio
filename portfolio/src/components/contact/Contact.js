import React, { Component } from 'react';
import './contact.css';
import AddMessage from './AddMessage';
import MessageList from './MessageList';


class Contact extends Component {
    render () {
        return(
            <div className="contact-container">
                <div className="row">
                    <div className="col-sm-6">
                        <AddMessage />
                    </div>
                <div className="col-sm-6"> 
                    <div className="row">
                        <div className="container container-margin">
                            <MessageList />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;