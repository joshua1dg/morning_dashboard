import React, {Component} from 'react';
import Input from './input'
import { Field, reduxForm } from 'redux-form'
// import { browserHistory } from 'react-router';
import { connect } from 'react-redux'
import {sendUserAuth} from '../../../actions/index'


class SignIn extends Component{

    onSubmit = async values => {
        console.log('Form Values', values);

        const resp = await this.props.sendUserAuth(values);
        console.log('this is response!: ', resp);

        if (!resp.success) {
            console.log('server did not give response!');
            return;
        } else if(resp.newAccount){
            this.props.history.push('/credentials');
        } else{
            this.props.history.push('/home');
        }

    }

    render(){

        console.log('props: ', this.props)

        const { handleSubmit } = this.props;

        const { onSubmit } = this;

        console.log('this is onSubmit: ', onSubmit)

        return (

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <Field name="username" component={Input} type='text' label='Enter a Username To Be Identified As' />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <Field name="password" component={Input} type='password' label='Enter Your Password' />
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
}

export default connect(mapStateToProps, {sendUserAuth})(reduxForm({
    form: 'sign_in_form'
})(SignIn));

function mapStateToProps(state) {
    return {
        signedIn: state.apiCall.signedIn,
    }
}