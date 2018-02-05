import { combineReducers } from 'redux';
import authenticationReducer from './authenticate';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
});

export default rootReducer;
