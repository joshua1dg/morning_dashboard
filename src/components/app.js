import React, {Component, Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from './dashboard';
import Submit from '../components/general/forms/submit';
import SignIn from '../components/general/forms/signIn'

class App extends Component{

    render(){
        return(
            // <Fragment>
            // <Dashboard/>
            // <Submit/>
            // </Fragment>
            <Switch>
                <Route exact path='/' render={()=>(<Redirect to='/credentials'/>)} />
                <Route path='/signin' component={SignIn}/>
                <Route path='/credentials' component={Submit}/>
                <Route path='/home' component={Dashboard}/>
            </Switch>
        )

    }

}

export default App;