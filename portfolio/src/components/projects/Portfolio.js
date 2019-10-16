import React, { Component } from 'react'
import ProjectList from './ProjectList';
import './ProjectList.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Portfolio extends Component {
    render() {
        console.log(this.props);
        const { projects } = this.props;
        console.log(projects);
        return(
            <div>
                {/* <div className="row portfolio container">                   */}
                    {/* <div className="col-12 project-list"> */}
                        <ProjectList projects={projects} />
                    {/* </div>                  */}
                {/* </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ 
        collection: 'projects', limit:6, orderBy: ['relevance', 'asc']
    }])
)(Portfolio);