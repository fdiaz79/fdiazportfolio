import React, { Component } from 'react';
import './contact.css';
import AddMessage from './AddMessage';
import MessageList from './MessageList';
import { connect } from 'react-redux';


class Contact extends Component {
    render () {
        // console.log(this.props);
        const { messages } = this.props;
        return(
            <div className="contact-container">
                <div className="row">
                    <div className="col-sm-6">
                        <AddMessage />
                    </div>
                <div className="col-sm-6"> 
                    <div className="row">
                        <div className="container container-margin">
                            <MessageList messages={messages} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        messages: state.message.messages
    }
}
export default connect(mapStateToProps)(Contact);