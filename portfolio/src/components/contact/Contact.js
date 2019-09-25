import React, { Component } from 'react';
import './contact.css';
import AddMessage from './AddMessage';
import MessageList from './MessageList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Contact extends Component {
    render () {
        console.log(this.props);
        const { messages } = this.props;
        console.log (messages);
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
    console.log(state);
    return{
        messages: state.firestore.ordered.messages
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'messages'
    }])
) (Contact);