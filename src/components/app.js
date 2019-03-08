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

    render () {
            return (
                <div className='dashBoard'>
                        <Header/>
                        <Switch>
                            <Route path='/home' render={() => <Center section={'quote'}/>}/>
                            <Route path='/social' render={() => <Center section={'social'} />} />
                            <Route path='/news' render={() => <Center section={'news'}/>} />
                        </Switch>
                        {/* <Footer/> */}
                </div>
            )
        }



    
}

export default App;
