import authReducer from './authReducer';
import projectReducer from './projectReducer';
import messageReducer from './messageReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    message: messageReducer
});

export default rootReducer;