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
                            <div className="accordion" id="message-list">
                                <div className="card" >
                                    <div className="card-header" id="headingOne">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseMessage" aria-expanded="false" aria-controls="collapseMessage">
                                                <span>Message from Fabian on 06/10/2019</span>                                            
                                            </button>
                                    </div>
                                    <div id="collapseMessage" className="collapse" aria-labelledby="headingOne" data-parent="#message-list">
                                        <div className="card-body">
                                            Test Message
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <span>Message from Fabian #2 on 06/10/2019</span>                                            
                                            </button>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
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