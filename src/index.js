import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index.js'

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
    <Router>
        <App />
    </Router>
    </Provider>,
    document.getElementById('root')
);
