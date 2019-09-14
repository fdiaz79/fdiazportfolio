const initState = {
    messages: [
        {id: '1', firstName: 'Fabian', lastName: 'Diaz', date: '06/06/2019', message: 'test mesagge 1', label: 'message1', idLabel:'#message1'},
        {id: '2', firstName: 'Diana', lastName: 'Diaz', date: '06/06/2019', message: 'test mesagge 2', label: 'message2', idLabel:'#message2'},
        {id: '3', firstName: 'Shirley', lastName: 'Diaz', date: '06/06/2019', message: 'test mesagge 3', label: 'message3', idLabel:'#message3'}
    ]
};
const messageReducer = (state = initState, action) => {
    return state;
} 

export default messageReducer;