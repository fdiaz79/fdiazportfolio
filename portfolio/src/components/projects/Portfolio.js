import React, { Component } from 'react'
import ProjectList from './ProjectList';

class Portfolio extends Component {
    render() {
        return(
            <div className="portfolio container">
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-10">
                        <ProjectList />
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;