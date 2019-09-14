import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';
import $ from 'jquery';

class SignIn extends Component {
    state={
        email: '',
        password: ''
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
                    <h5>SIGN IN</h5>
                    <div className="txtb">
                        <input type="email" id="email" onChange={this.handleChange} />
                        <span data-placeholder="Enter email"></span>
                    </div>
                    <div className="txtb">
                        <input type="password" id="password" onChange={this.handleChange} />
                        <span data-placeholder="Enter password"></span>
                    </div>
                    <button type="submit" className="logbtn">Sign In</button>
                    <div className="bottom-text">
                        Don't have an account? <Link to="/signup">Sign Up </Link>
                    </div>
                    {/* <div class="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button> */}
                </form>                
                    
                             
            </div>
        
        )
        
    }
    
}

export default SignIn;
