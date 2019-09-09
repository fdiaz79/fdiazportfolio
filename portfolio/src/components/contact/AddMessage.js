import React, { Component } from 'react';

const AddMessage = () => {
    return(
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
    )
}

export default AddMessage;