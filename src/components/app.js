import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './dashboard';
import Submit from '../components/general/submit';

class App extends Component{

    render(){
        return(
            <Switch>
                <Route to='/credentials' component={Submit}/>
                <Route to='/home' component={Dashboard}/>
            </Switch>
        )

    }

}

export default App;