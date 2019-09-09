import React, { Component } from 'react'

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
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="firstName" className="form-control" id="firstName" aria-describedby="firstNameHelp" placeholder="Enter firstName" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="lastName" className="form-control" id="lastName" aria-describedby="lastNameHelp" placeholder="Enter lastName" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>                
            </div>
        )
    }
}

export default SignUp;
