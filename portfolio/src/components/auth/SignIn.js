import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'


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
        this.props.signIn(this.state);
    }
  
    render() {
        const { authError } = this.props;
        return (
            // <div className="container">
            //     <form className="signInForm" onSubmit={this.handleSubmit}>
            //         <h5>SIGN IN</h5>
            //         <div className="txtb">
            //             <input type="email" id="email" onChange={this.handleChange} />
            //             <span data-placeholder="Enter email"></span>
            //         </div>
            //         <div className="txtb">
            //             <input type="password" id="password" onChange={this.handleChange} />
            //             <span data-placeholder="Enter password"></span>
            //         </div>
            //         <button type="submit" className="logbtn">Sign In</button>
            //         <div className="bottom-text">
            //             Don't have an account? <Link to="/signup">Sign Up </Link>
            //         </div>
            //         {<div class="form-group">
            //             <label htmlFor="email">Email address</label>
            //             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
            //             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            //         </div>
            //         <div class="form-group">
            //             <label htmlFor="password">Password</label>
            //             <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
            //         </div>
            //         <button type="submit" className="btn btn-primary">Sign In</button>}
            //     </form>                     
            // </div>
            <div className="container">
                <div className="signinForm">
                    <form className="signInForm" onSubmit={this.handleSubmit}>
                        <h5>SIGN IN</h5>
                        <input type="email" id="email" className="txtb" placeholder="Enter Email" onChange={this.handleChange} />
                        <input type="password" id="password" className="txtb" placeholder="Enter Password" onChange={this.handleChange} />
                        <input type="submit" className="logbtn" value="Sign In" />
                        <div className="bottom-text">
                            Don't have an account? <Link to="/signup">Sign Up </Link>
                        </div>
                        <div className="loginMessage">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </form>
                </div>
            </div>

        
        )
        
    }
    
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
