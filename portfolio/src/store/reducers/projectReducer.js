const initState = {
    projects: [
        {id: '1', title: 'WePlan', description: 'Organize your events', tech: 'HTML, Bootstrap, JS, MERN', link: 'https://weplan-app.herokuapp.com/', hub:'https://github.com/sespert/WePlan', image:'/images/wePlan.png'},
        {id: '2', title: 'WePlan2', description: 'Organize your events', tech: 'HTML, Bootstrap, JS, MERN', link: 'https://weplan-app.herokuapp.com/', hub:'https://github.com/sespert/WePlan', image:'/images/wePlan.png'},
        {id: '3', title: 'WePlan3', description: 'Organize your events', tech: 'HTML, Bootstrap, JS, MERN', link: 'https://weplan-app.herokuapp.com/', hub:'https://github.com/sespert/WePlan', image:'/images/wePlan.png'}
    ]
};
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);

    }
    return state;
} 

export default projectReducer;