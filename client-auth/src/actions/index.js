const rootURL = 'http://localhost:3090';
import axios from 'axios';

export function signinUser({email,password}) {
  return function(dispatch) {
    //Submit email & password to server
    axios.post(`${rootURL}/signin`, {email,password})
    //If request is good, update the state to authenticated
    //Save JWT token
    //redirect to /feature

    //if request is bad, show err msg
  }
}
