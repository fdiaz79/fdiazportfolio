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
                    <div className="row">
                        <div className="container container-margin col-12" id="message-input">
                            <h5>LEAVE A MESSAGE</h5>
                            <form>
                                <div className="form-group">
                                    <label for="contact-name">Name:</label>
                                    <input type="text" className="form-control" id="contact-name" placeholder="John Smith" required />
                                </div>
                                <div className="form-group">
                                    <label for="contact-email">Email address:</label>
                                    <input type="email" className="form-control" id="contact-email" aria-describedby="emailHelp" placeholder="example@email.com" required />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="contact-message">Message:</label>
                                    <textarea className="form-control" id="contact-message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-info float-right blue-button" id="contact-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6"> 
                    <div className="row">
                        <div className="container container-margin">
                            <h5>MESSAGE LIST</h5>
                            <MessageList />
                        </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="scroll text">
                        <div>
                            <span id="social-text1">ALSO IN SOCIAL MEDIA</span>
                            <a href="mailto:fdiaz79@gmail.com" target="_blank">
                                <img src="/images/gmail.png" className="contact-logos"></img>
                            </a>
                            <a href="https://www.linkedin.com/in/fabian-diaz-50650b166/" target="_blank">
                                <img src="/images/linkedin.png" className="contact-logos"></img>
                            </a>
                            <a href="https://github.com/fdiaz79" target="_blank">
                                <img src="/images/github.png" className="contact-logos"></img>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;