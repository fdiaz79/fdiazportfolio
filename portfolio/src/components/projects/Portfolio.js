import React, { Component } from 'react'
import ProjectList from './ProjectList';
import './ProjectList.css';
import '../layout/Footer';
import Footer from '../layout/Footer';

class Portfolio extends Component {
    render() {
        return(
            <div>
                <div className="portfolio container">
                    <div className="row">
                        <div className="col-1">
                        </div>
                        <div className="col-10 project-list">
                            <ProjectList />
                        </div>
                        <div className="col-1">
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Portfolio;