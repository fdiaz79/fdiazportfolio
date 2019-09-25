import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../../store/actions/messageActions';

class AddMessage extends Component {
    state={
        name: '',
        email: '',
        message: '',
        createdAt: '',
        label: '',
        idLabel: ''
    }
    handleChange = (e) => {
        var day = new Date();
        var dayString = day.toString();
        console.log(dayString);
        this.setState({
            [e.target.id]: e.target.value,
            createdAt: dayString,
            label: dayString,
            idLabel: '#'+dayString
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // var day = new Date();
        // var dayString = day.toString();
        // console.log(dayString);
        // this.setState({
        //     createdAt: 'dayString',
        //     label: 'dayString',
        //     idLabel: '#'+'dayString'
        // })
        console.log(this.state);
        this.props.createMessage(this.state);
    }
    render() {
        return(
            <div className="row">
                <div className="container container-margin col-12" id="message-input">
                    <h5>LEAVE A MESSAGE</h5>
                    <form id="message-form" onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="John Smith" required onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="example@email.com" required onChange={this.handleChange} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea className="form-control" id="message" rows="5" required onChange={this.handleChange} ></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-info float-right blue-button" id="contactSubmit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (message) => dispatch(createMessage(message))
    }
}
export default connect(null, mapDispatchToProps)(AddMessage);