import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="row" id="about-content">
                <div className="col-sm-5" id="card-div">
                    <div className="card" id="about-card">
                        <div className="card-body text-fade-in">
                            <h5 className="card-title">
                                <span className="first-letter">A</span>BOUT <span className="first-letter"> M</span>E
                                <img className="card-img-top" id="img-profile" src="/images/profile1.jpg" alt="Card image cap" />

                            </h5>
                            <hr />
                            <p className="card-text about-text">
                                Front and Back End Web developer with a background in semi-professional singing, office managing and customer service. Strong computer hardware knowledgement. Passionate about learning about new technologies and tools, eager for new challenges and great team player.
                            </p>
                            <p className="about-text">
                                Experience with HTML, CSS, JavaScript, Bootstrap, Materialize, NodeJS, JQuery, ExpressJS, AngularJS, FireBase, MySQL MongoDB, and Access. Some Python and C++.    
                            </p>
                            {/* <a href="contact.html" className="btn btn-outline-success float-right" id="green-button">Contact Me</a> */}
                        </div>
                        {/* <img className="card-img-top" id="img-profile" src="/images/profile1.jpg" alt="Card image cap" /> */}
                    </div>
                </div>
                <div className="col-sm-7" id="bars-div">
                    <div className="card" id="skills-card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <span className="first-letter">S</span>OFTWARE <span className="first-letter"> S</span>KILLS
                            </h5>
                            <div className="card-text">
                                <li>

                                </li>
                                <h5>HTML <img src="/images/html.png" alt="html" className="img-responsive portfolio-img" /></h5>
                                <span className="skill-bar"><span className="html"></span></span>
                                <li>

                                </li>
                                <h5>CSS <img src="/images/css3.png" alt="css3" className="img-responsive portfolio-img" /></h5>
                                <span className="skill-bar"><span className="css"></span></span><li>

                                </li>
                                <h5>JAVASCRIPT <img src="/images/javascript.png" alt="javascript" className="img-responsive portfolio-img"/></h5>
                                <span className="skill-bar"><span className="javascript"></span></span>
                                <li>

                                </li>
                                <h5>REACT <img src="/images/react.png" alt="react" className="img-responsive portfolio-img" /></h5>
                                <span className="skill-bar"><span className="react"></span></span>
                                <li>

                                </li>
                                <h5>NODEJS <img src="/images/nodejs.png" alt="nodejs" className="img-responsive portfolio-img"/></h5>
                                <span className="skill-bar"><span className="nodejs"></span></span>
                                <li>

                                </li>
                                <h5>MONGODB <img src="/images/mongodb.png" alt="mongodb" className="img-responsive portfolio-img" /></h5>
                                <span className="skill-bar"><span className="mongo"></span></span>
                                <li>

                                </li>
                                <h5>PHP <img src="/images/php.png" alt="php" className="img-responsive portfolio-img" /></h5>
                                <span className="skill-bar"><span className="php"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;