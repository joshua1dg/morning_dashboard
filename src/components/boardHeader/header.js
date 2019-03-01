import React, {Component} from 'react';
import './header.scss';
import Clock from './clock';

class Header extends Component{
    render (){
        return (
            <div className="header">
                <Clock/>
                <div className="agendaToday">
                </div>
            </div>
        );
    };
}


export default Header;