import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({email,password}) {
    this.props.signinUser({email,password});
  }
  renderAlert() {
    if (this.props.errorMsg) {
      return (
        <div className="alert alert-danger">{this.props.errorMsg}</div>
      )
    }
  }
  render() {
    const {handleSubmit, fields:{email,password}} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input {...email} className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} className="form-control" type="password" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMsg: state.auth.error,
  }
}

export default reduxForm({
  form:'Signin',
  fields: [
    'email',
    'password'
  ]
}, mapStateToProps, actions)(Signin)
