import React, { Component } from 'react'

class AddProject extends Component {
    state={
        name: '',
        link: '',
        image:'',
        hub:''
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
                        <label htmlFor="hub" className="col-sm-2 col-form-label col-form-label-sm" id="url-label">Repo url:</label>
                        <div className="col-sm-10">
                            <input type="text" required className="form-control form-control-sm" id="hub" onChange={this.handleChange} />
                        </div>
                    </div>                                         
                    <button type="submit" className="btn btn-outline-success float-right green-button" id="projectSubmit">Submit</button>        
                </form>           
            </div>
        )
    }
}

export default AddProject;
