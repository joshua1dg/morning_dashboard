import React from 'react';
import Input from './input'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'


const CredentialForm = (props) => {
    const { onSubmit, formInfoStored, handleSubmit, signedIn } = props;
    if (formInfoStored === true) {
        // history.push('/home');
        console.log('FORM INFO STORED!')
    }

    if(!signedIn){
        return <Redirect to='/SignIn'/>
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="input-field col s6 offset-s3">
                    <Field name="username" component={Input} type='text' label='Enter a Username To Be Identified As' />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 offset-s3">
                    <Field name="AppleCalendarInfo" component={Input} type='text' label='Enter Your Apple Calendar URL' />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 offset-s3">
                    <Field name="RedditInfo" component={Input} type='text' label='Enter Your SubReddit RSS Feed' />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 offset-s3">
                    <Field name="YoutubeInfo" component={Input} type='text' label='Enter Your Youtube Username' />
                </div>
            </div>
            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn purple">Load Dashboard</button>
                </div>
            </div>
        </form>
    )
}

export default connect(mapStateToProps)(reduxForm({
    form: 'credential_form'
})(CredentialForm));

function mapStateToProps(state) {
    return {
        formInfoStored: state.apiCall.formInfoStored,
        signedIn: state.apiCall.signedIn
    }
}