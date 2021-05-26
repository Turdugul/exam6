import React from 'react';
import {Field, reduxForm}  from 'redux-form';


const RegisterForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="emailField">Email</label>
              <Field className="form-control" id="emailField" name="email" type="email" component="input" /> 
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="usernameField">Username</label>
              <Field className="form-control" id="usernameField" name="username" type="text" component="input" /> 
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="passwordField">Password</label>
              <Field className="form-control" id="passwordField" name="password" type="password" component="input" /> 
            </div>
            <button className="btn btn-primary mb-3">
                Register
            </button>
        </form>
    );
};

export default reduxForm({form:"register"})(RegisterForm);