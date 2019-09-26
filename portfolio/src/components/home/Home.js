import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="index-jumbotron">
                <h1 id="wd-title">
                    <span className="first-letter">W</span>EB <span className="first-letter">D</span>EVELOPMENT <span className="first-letter">M</span>ADE <span className="first-letter">S</span>IMPLE.
                </h1>
                <h5 id="wd-paragraph">
                    For elegant designs and powerful applications.
                </h5>
            </div>
        )
    }
}

export default Home;