import React, {Component, Fragment} from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';

import axios from 'axios';
import Test from './test';


import './general/general.scss';
import Header from './boardHeader/header'
import Footer from './boardFooter/footer';
import Home from './boardCenter/home';

import {Route, Switch} from 'react-router-dom';

class App extends Component{

    getLongLat(){
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);

            });
    }


    componentDidMount(){
        this.getLongLat();
        // this.getHomeData();
    }

    render () {
            return (
                <div className='dashBoard'>
                    <Fragment>
                        <Header/>
                        <Switch>
                            <Route path='/home' render={() => <Home section={'quote'}/>}/>
                            <Route path='/social' render={() => <Home section={'social'} />} />
                            <Route path='/news' render={() => <Home section={'news'}/>} />
                        </Switch>
                        <Footer/>
                    </Fragment>
                    {/* <Test/> */}
                </div>
            )
        }



    
}

export default App;
