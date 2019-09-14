import React, { Component } from 'react'
import ProjectList from './ProjectList';
import './ProjectList.css';
import { connect } from 'react-redux';

class Portfolio extends Component {
    render() {
        // console.log(this.props);
        const { projects } = this.props;
        return(
            <div>
                <div className="portfolio container">
                    <div className="row">
                        <div className="col-1">
                        </div>
                        <div className="col-10 project-list">
                            <ProjectList projects={projects} />
                        </div>
                        <div className="col-1">
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Portfolio);