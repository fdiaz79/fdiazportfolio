import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="index-jumbotron">
                <h1 id="wd-title">
                    <span class="first-letter">W</span>EB <span class="first-letter">D</span>EVELOPMENT <span class="first-letter">M</span>ADE <span class="first-letter">S</span>IMPLE.
                </h1>
                <h5 id="wd-paragraph">
                    For elegant designs and powerful applications.
                </h5>
            </div>
        )
    }
}

export default Home;