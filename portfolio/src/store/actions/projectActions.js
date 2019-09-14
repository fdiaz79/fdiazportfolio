export const createProject = (project) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ type: 'CREATE_PROJECT', project }); //project is equivalent to project:project in ES6
    }
};