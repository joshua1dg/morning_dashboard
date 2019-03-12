import React, {Component} from 'react';
import '../assets/css/app.css';



import './general/general.scss';
import Header from './boardHeader/header'
import Footer from './boardFooter/footer';
import Center from './boardCenter/center';
import Submit from './general/forms/submit';

import {Route, Switch} from 'react-router-dom';

class Dashboard extends Component{

    render () {
            return (
                <div className='dashBoard'>
                        <Header/>
                        <Switch>
                            <Route exact path='/home' render={() => <Center section={'quote'}/>}/>
                            <Route path='/home/social' render={() => <Center section={'social'} />} />
                            <Route path='/home/news' render={() => <Center section={'news'}/>} />
                        </Switch>
                        {/* <Submit/> */}
                        <Footer/>
                </div>
            )
        }



    
}

export default Dashboard;
