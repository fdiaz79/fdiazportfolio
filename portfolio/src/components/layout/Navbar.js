import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img src='/images/f-logo.png' width="80" height="60" className="d-inline-block" alt=""></img>
                Fabian Diaz
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to = "/" className="nav-item nav-link active ml-4">Home <span className="sr-only">(current)</span></Link>
                    <Link to="/About" className="nav-item nav-link ml-4">About</Link>
                    <Link to="/" className="nav-item nav-link ml-4">Portfolio</Link>
                    <Link to="/Contact" className="nav-item nav-link ml-4">Contact</Link>
                </div>
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar;