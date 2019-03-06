import React, {Component} from 'react';
import './header.scss';
import Clock from './clock';
import Agenda from './agenda';

class Header extends Component{

    render (){

        return (
            <div className="header">
                <Clock/>
                <Agenda/>
            </div>
        );
    };
}


export default Header;