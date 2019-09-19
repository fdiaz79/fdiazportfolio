const initState = {
    messages: [
        {id: '1', name: 'Fabian', createdAt: '06/06/2019', message: 'test mesagge 1', label: 'message1', idLabel:'#message1'},
        {id: '2', name: 'Diana', createdAt: '06/06/2019', message: 'test mesagge 2', label: 'message2', idLabel:'#message2'},
        {id: '3', name: 'Shirley', createdAt: '06/06/2019', message: 'test mesagge 3', label: 'message3', idLabel:'#message3'}
    ]
};
const messageReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_MESSAGE':
            console.log('created message ', action.message);
            return state;
        case 'CREATE_MESSAGE_ERROR':
            console.log('create message error ', action.err);
            return state;
        default:
            return state;

    }
    
} 

export default messageReducer;