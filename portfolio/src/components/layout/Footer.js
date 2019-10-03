import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render (){
        return(
            <section>
                <div className="scroll text">
                    <div>
                        <span id="social-text1">ALSO IN SOCIAL MEDIA</span>
                        <a href="mailto:fdiaz79@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/gmail.png" className="contact-logos" alt="Logo"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/fabian-diaz-50650b166/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/linkedin.png" className="contact-logos" alt="Logo"></img>
                        </a>
                        <a href="https://github.com/fdiaz79" target="_blank" rel="noopener noreferrer">
                            <img src="/images/github.png" className="contact-logos" alt="Logo"></img>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;