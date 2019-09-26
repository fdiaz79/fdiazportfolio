import authReducer from './authReducer';
import projectReducer from './projectReducer';
import messageReducer from './messageReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    message: messageReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;