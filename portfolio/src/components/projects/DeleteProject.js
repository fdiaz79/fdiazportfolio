import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class DeleteProject extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return(
            <div>
                <div className="portfolio container">
                    <div className="row">
                        <div className="col-1">
                        </div>
                        <div className="col-10 project-list">
                            List of projects
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
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps) (DeleteProject);