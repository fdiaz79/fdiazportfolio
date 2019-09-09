import React, { Component } from 'react'

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
                    <div class="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </form>                
            </div>
        )
    }
}

export default SignIn;
