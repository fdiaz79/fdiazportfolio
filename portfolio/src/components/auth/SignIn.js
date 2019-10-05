import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';


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
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to="/" />
        return (
            <div className="container">
                <div className="signinForm">
                    <form className="signInForm" onSubmit={this.handleSubmit}>
                        <h5>SIGN IN</h5>
                        <input type="email" id="email" className="txtb" placeholder="Enter Email" onChange={this.handleChange} />
                        <input type="password" id="password" className="txtb" placeholder="Enter Password" onChange={this.handleChange} />
                        <input type="submit" className="logbtn prettyBut" value="Sign In" />
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
