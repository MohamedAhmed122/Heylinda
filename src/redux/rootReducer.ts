import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import {persistReducer} from 'redux-persist';
// REDUCERS
import sessionReducer from './freeSessions/reducer';
import AuthReducer from './Auth/reducer';

const persistConfig = {
  key: 'FreeSessions',
  storage: AsyncStorage,
  whiteList: ['freeSessions', 'auth'],
};

const rootReducer = combineReducers({
  freeSessions: sessionReducer,
  auth: AuthReducer,
});

export default persistReducer(persistConfig, rootReducer);
