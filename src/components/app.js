import React, {Fragment} from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Test from './test';
import './general/general.scss';
import Header from './boardHeader/header'
import Footer from './boardFooter/footer';
import Home from './boardCenter/home';

const App = () => (
    <div className='dashBoard'>
        <Fragment>
            <Header/>
            <Home/>
            <Footer/>
        </Fragment>
        {/* <Test/> */}
    </div>
);

export default App;
