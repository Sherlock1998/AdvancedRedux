import axios from 'axios';
import {browserHistory} from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_MESSAGE,
} from './types';
const rootURL = 'http://localhost:3090';

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
    browserHistory.push('/feature');
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

export function signupUser({email,password}) {
  return function(dispatch) {
    axios.post(`${rootURL}/signup`, {email,password})
      .then(response => {
        dispatch({type:AUTH_USER});
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => {
        dispatch(authError(response.data.error));
      })
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(rootURL, {
      headers: {authorization: localStorage.getItem('token')}
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload:error
  }
}
