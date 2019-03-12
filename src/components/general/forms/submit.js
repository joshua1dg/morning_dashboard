import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { sendUserCredentials } from '../../../actions/index'
import CredentialForm from './credentialForm';
import { Redirect } from 'react-router-dom';

class Submit extends Component {
    handleSubmit = async values => {
        console.log('Form Values', values);

        const resp = await this.props.sendUserCredentials(values);
        if (!resp.success) {
            console.log('server did not give response!');
            return;
        }
        console.log('resp after await: ', resp);

        // this.props.history.push('/home');
    }

    render() {
        const { formInfoStored } = this.props;
        if (formInfoStored === true) {
            console.log('form info stored in render submit!');

            return <Redirect exact from='/credentials' to='/home' />;
        }

        else {
            console.log('Form Info NOT STORED IN SUBMIT RENDER!')
        }

        return (
            <div className="container">
                <h3>Credential Form!</h3>
                <CredentialForm history={this.props.history} onSubmit={this.handleSubmit} />
            </div>
        )

    }

}

export default connect(mapStateToProps, { sendUserCredentials })(Submit);

function mapStateToProps(state) {
    return {
        formInfoStored: state.apiCall.formInfoStored
    }
}