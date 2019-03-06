import React, {Component} from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';

import axios from 'axios';
import Test from './test';


import './general/general.scss';
import Header from './boardHeader/header'
import Footer from './boardFooter/footer';
import Center from './boardCenter/center';

import {Route, Switch} from 'react-router-dom';

class App extends Component{

    getLongLat(){
        navigator.geolocation.getCurrentPosition(
            async function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                const sentToServer = axios.post('/api/weatherApi.php', {
                    longitude: position.coords.longitude,
                    latititude: position.coords.latitude
                });

            });
    }


    componentDidMount(){
        this.getLongLat();
    }

    render () {
            return (
                <div className='dashBoard'>
                        <Header/>
                        <Switch>
                            <Route path='/home' render={() => <Center section={'quote'}/>}/>
                            <Route path='/social' render={() => <Center section={'social'} />} />
                            <Route path='/news' render={() => <Center section={'news'}/>} />
                        </Switch>
                        <Footer/>
                </div>
            )
        }



    
}

export default App;
