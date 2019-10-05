import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import './AddProject.css';

class AddProject extends Component {
    state={
        name: '',
        tech: '',
        link: '',
        image:'',
        hub:'',
        relevance:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
    }
    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to= '/signin' />
        return (
            <div className="container">
                <form id="project-form" onSubmit={this.handleSubmit}>
                    <h5>ADD NEW PROJECT</h5>
                    <br></br>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-sm" id="name-label">Project Name:</label>
                        <div className="col-sm-10">
                            <input type="text" required className="form-control form-control-sm" id="name" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="tech" className="col-sm-2 col-form-label col-form-label-sm" id="tech-label">Technologies:</label>
                        <div className="col-sm-10">
                            <input type="text" required className="form-control form-control-sm" id="tech" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="link" className="col-sm-2 col-form-label col-form-label-sm" id="url-label">Project url:</label>
                        <div className="col-sm-10">
                            <input type="text" required className="form-control form-control-sm" id="link" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="image" className="col-sm-2 col-form-label col-form-label-sm" id="file-label">Project image file:</label>
                        <div className="col-sm-10">
                            <input type="text" required className="form-control form-control-sm" id="image" onChange={this.handleChange} />
                        </div>
                    </div>   
                    <div className="form-group row">
                        <label htmlFor="hub" className="col-sm-2 col-form-label col-form-label-sm" id="hub-label">Repo url:</label>
                        <div className="col-sm-10">
                            <input type="text" required className="form-control form-control-sm" id="hub" onChange={this.handleChange} />
                        </div>
                    </div>  
                    <div className="form-group row">
                        <label htmlFor="relevance" className="col-sm-2 col-form-label col-form-label-sm" id="relevance-label">Relevance:</label>
                        <div className="col-sm-10">
                            <input type="number" required className="form-control form-control-sm" id="relevance" onChange={this.handleChange} />
                        </div>
                    </div>                
                    <button type="submit" className="btn float-right prettyBut" id="projectSubmit">Submit</button>                       
                    {/* <button type="submit" className="float-right prettyBut" id="projectSubmit"> Submit </button>         */}
                </form>           
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
