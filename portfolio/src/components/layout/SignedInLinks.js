import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const SignedInLinks = () => {
    return (
        <div className="navbar-nav ml-auto">
            <NavLink to="/newProject" className="nav-item nav-link ml-4">Add New Project</NavLink>
            <NavLink to="/deleteProject" className="nav-item nav-link ml-4">Delete Project</NavLink>
            <NavLink to="/signOut" className="nav-item nav-link ml-4">Sign Out</NavLink>
        </div>
    )
}

export default SignedInLinks;