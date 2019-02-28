import React, {Component} from 'react';
import './header.scss';

class Header extends Component{
    state={
        time: new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'})
    }

    componentDidMount() {
        setInterval(
            () =>{
                this.setState({
                    time: new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'})
                })
            }
        , 1000)
    }
    

    render (){
        return (
            <div className="header">
                <div className="currentTime">
                    <h3>{this.state.time}<br/>Sumday<br/>Feb. 24th</h3>
                </div>
                <div className="agendaToday"></div>
            </div>
        );
    };
}


export default Header;