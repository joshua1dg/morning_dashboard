import React from 'react';
import Input from './input'
import {Field, reduxForm} from 'redux-form'

const CredentialForm = (props) => {
    return (
        <form>
            <div className="row">
                <div className="input-field col s6 offset-s3">
                    <Field id='email' name="email" component={Input} type='text' label='Enter Your Email'/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 offset-s3">
                    <Field name="password" component={Input} type='text' label='Enter Your Password'/>
                </div>
            </div>
            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn purple">Sign In</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'credential_form'
})(CredentialForm);