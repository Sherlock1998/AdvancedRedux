const rootURL = 'http://localhost:3090';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
} from './types';

export function signinUser({email,password}) {
  return function(dispatch) {
    //Submit email & password to server
    axios.post(`${rootURL}/signin`, {email,password})
    .then(response => {
    //If request is good, update the state to authenticated
    dispatch({type:AUTH_USER});
    //Save JWT token
    localStorage.setItem('token',response.data.token);
    //redirect to /feature
    browserHistory.push('/features');
  })
  .catch(()=> {
    //if request is bad, show err msg
    dispatch(authError('bad login info'))
  })
  }
}
export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER,
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload:error
  }
}
