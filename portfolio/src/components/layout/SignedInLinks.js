import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';



const SignedInLinks = (props) => {
    return (
        <div className="navbar-nav ml-auto">
            <NavLink to="/newProject" className="nav-item nav-link ml-4">Add New Project</NavLink>
            <NavLink to="/deleteProject" className="nav-item nav-link ml-4">Delete Project</NavLink>
            <a className="nav-item nav-link ml-4" onClick={props.signOut} >Sign Out</a>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);