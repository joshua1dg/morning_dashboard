import React, { Component } from 'react';
import Axios from 'axios';

class Test extends Component {
    async componentDidMount(){
        const resp = await Axios.get('/api/test.php');

        console.log('Test Resp:', resp);
    }

    render(){
        return <h1>Test Component!</h1>;
    }
}

export default Test;
