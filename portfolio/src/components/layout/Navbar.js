import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLink from './SignOutLink';
import './Navbar.css';
import { connect } from 'react-redux';


const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    console.log(profile.role)
    const links = auth.uid ? <SignOutLink /> : null;
    const adminLinks = profile.role === 'admin' ? <SignedInLinks /> : null;
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/signin" className="navbar-brand">
                <img src='/images/f-logo.png' width="80" height="60" className="d-inline-block" alt=""></img>
                Fabian Diaz
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink to = "/" exact className="nav-item nav-link ml-4">Home</NavLink>
                    <NavLink to="/About" className="nav-item nav-link ml-4">About</NavLink>
                    <NavLink to="/Portfolio" className="nav-item nav-link ml-4">Portfolio</NavLink>
                    <NavLink to="/Contact" className="nav-item nav-link ml-4">Contact</NavLink>
                </div>
                { adminLinks }
                { links }
                {/* <SignedInLinks /> */}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);