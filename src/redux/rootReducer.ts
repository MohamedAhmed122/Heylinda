import {combineReducers} from 'redux';
import sessionReducer from './freeSessions/reducer';

const rootReducer = combineReducers({
  freeSessions: sessionReducer,
});

export default rootReducer;
