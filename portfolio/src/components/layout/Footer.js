import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render (){
        return(
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
        )
    }
}

export default Footer;