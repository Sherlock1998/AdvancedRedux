import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }
  renderAlert() {
    if (this.props.errorMsg) {
      return (
        <div className="alert alert-danger">{this.props.errorMsg}</div>
      )
    }
  }
  render() {
    const {handleSubmit, fields: {email,password,confirmed_password}} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input {...email} className="form-control"/>
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} className="form-control" type="password" />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Re-type password</label>
          <input {...confirmed_password} className="form-control" type="password" />
          {confirmed_password.touched && confirmed_password.error && <div className="error">{confirmed_password.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMsg: state.auth.error,
  }
}

function validate(formProps) {
  const errors = {};

  if(!formProps.email) {
    errors.email = 'Please enter an email';
  }
  if(!formProps.password) {
    errors.password = 'Please enter a password';
  }
  if(!formProps.confirmed_password) {
    errors.password = 'Please enter a password';
  }

  if(formProps.password !== formProps.confirmed_password) {
    errors.password = 'Passwords do not match';
  }
//   formProps.forEach = function Object_forEach (object) {
//   for (var key in object) {
//     if (object.hasOwnProperty(key)) {
//       console.log(object.hasOwnProperty(key))
//     };
//   }
// };



  return errors;
}

export default reduxForm({
  form:'Signup',
  fields: [
    'email',
    'password',
    'confirmed_password',
  ],
  validate,
},mapStateToProps,actions)(Signup)
