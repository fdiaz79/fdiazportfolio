import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';



const SignOutLink = (props) => {
    return (
        <div className="navbar-nav ml-auto">
            <NavLink to="/" className="nav-item nav-link ml-4" onClick={props.signOut} >Sign Out</NavLink>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignOutLink);