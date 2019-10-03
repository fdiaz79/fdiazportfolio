import React, { Component } from 'react';
import './Sign.css';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    state={
        email: '',
        password: '',
        firstName:'',
        lastName:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form className="signInForm" onSubmit={this.handleSubmit}>
                    <h5>SIGN UP</h5>
                    <input type="email" id="email" className="txtb" placeholder="Enter Email" onChange={this.handleChange} />
                    <input type="password" id="password" className="txtb" placeholder="Enter Password" onChange={this.handleChange} />
                    <input type="text" id="firstName" className="txtb" placeholder="First Name" onChange={this.handleChange} />
                    <input type="text" id="lastName" className="txtb" placeholder="Last Name" onChange={this.handleChange} />
                    <input type="submit" className="logbtn prettyBut" value="Sign Up" />
                    <div className="bottom-text">
                        Already have an account? <Link to="/signin">Sign In </Link>
                    </div>
                    <div className="loginMessage">
                        authError!!!
                        {/* { authError ? <p>{authError}</p> : null } */}
                    </div>
                </form>                
            </div>
        )
    }
}

export default SignUp;
