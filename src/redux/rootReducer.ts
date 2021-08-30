import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import {persistReducer} from 'redux-persist';
import sessionReducer from './freeSessions/reducer';

const persistConfig = {
  key: 'FreeSessions',
  storage: AsyncStorage,
  whiteList: ['freeSessions'],
};

const rootReducer = combineReducers({
  freeSessions: sessionReducer,
});

export default persistReducer(persistConfig, rootReducer);
