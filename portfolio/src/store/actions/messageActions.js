export const createMessage = (message) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('messages').add({
            ...message
            // createdAt: new Date()
        }).then (() => {
            dispatch({ type: 'CREATE_MESSAGE', message });
        }).catch ((err) => {
            dispatch({ type: 'CREATE_MESSAGE_ERROR', err});
        })
    }
};