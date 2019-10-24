import React, { Component } from 'react';
import DeleteList from './DeleteList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class DeleteProject extends Component {
    render() {
        const { projects, profile } = this.props;
        // if (!auth.uid) return <Redirect to='/signin' />
        if (profile.role !== "admin") return <Redirect to='/signin' />
        return(
            <div>
                <div className="portfolio container">
                    <div className="row">
                        <div className="col-1">
                        </div>
                        <div className="col-10 project-list">
                            <DeleteList projects={projects} />
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
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        projects: state.firestore.ordered.projects
    }
}

export default connect(mapStateToProps) (DeleteProject);