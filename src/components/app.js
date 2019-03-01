import React, {Component, Fragment} from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';

import axios from 'axios';
import Test from './test';


import './general/general.scss';
import Header from './boardHeader/header'
import Footer from './boardFooter/footer';
import Home from './boardCenter/home';

class App extends Component{

    state = {
        'serverResponse': []
    }

    getLongLat(){
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);

            });
    }

    async getData(){
        const resp = await axios.get('/api/test.php');
        console.log('imediate response: ', resp);
        this.setState({
            'serverResponse' : resp.data.data
        });
    }

    componentDidMount(){
        this.getLongLat();
        this.getData();
    }

    render () {
        const { agenda, quote, user_id, weather } = this.state.serverResponse;

        if(this.state.serverResponse.length === 0){
            return (
                <div className='dashBoard'>
                    <p className="">Please Wait...</p>
                </div>
            )
        } else{
            return (
                <div className='dashBoard'>
                    <Fragment>
                        <Header agendaObj={agenda}/>
                        <Home feed={this.state.feed} />
                        <Footer weatherObj={weather} />
                    </Fragment>
                    {/* <Test/> */}
                </div>
            )
        }



    }
}

export default App;
