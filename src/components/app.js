import React, {Component, Fragment} from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';

import Axios from 'axios';
import Test from './test';


import './general/general.scss';
import Header from './boardHeader/header'
import Footer from './boardFooter/footer';
import Home from './boardCenter/home';

class App extends Component{

    state = {
        'feed': []
    }

    async componentDidMount(){
        const resp = await Axios.get('/api/test.php');
        this.state={
            'feed': resp.data
        }

        console.log('Test Resp:', this.state);
    }

    render () {


        return(
            <div className='dashBoard'>
                <Fragment>
                    <Header />
                    <Home feed={this.state.feed}/>
                    <Footer />
                </Fragment>
                {/* <Test/> */}
            </div>
        )

    }
}

export default App;
