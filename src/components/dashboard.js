import React, {Component} from 'react';
import '../assets/css/app.css';



import './general/general.scss';
import Header from './boardHeader/header'
import Footer from './boardFooter/footer';
import Center from './boardCenter/center';
import Submit from './general/submit';

import {Route, Switch} from 'react-router-dom';

class Dashboard extends Component{

    render () {
            return (
                <div className='dashBoard'>
                        <Header/>
                        <Switch>
                            <Route path='/home' render={() => <Center section={'quote'}/>}/>
                            <Route path='/social' render={() => <Center section={'social'} />} />
                            <Route path='/news' render={() => <Center section={'news'}/>} />
                        </Switch>
                        {/* <Submit/> */}
                        {/* <Footer/> */}
                </div>
            )
        }



    
}

export default Dashboard;
