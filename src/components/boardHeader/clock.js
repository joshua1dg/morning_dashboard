import React, {Component} from 'react';

class Clock extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            time: '',
            day: '',
            date: ''
        }
    }

    updateTime = () => {
        const dateObj = new Date();
        this.setState({
            time: dateObj.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' }),
            day: dateObj.toLocaleDateString('en-us', { weekday: 'long' }),
            date: dateObj.toLocaleDateString('en-us', { month: 'short', day: 'numeric' })
        })
    }


    componentDidMount() {
        this.updateTime();

        setInterval(this.updateTime, 1000);
    }

    render(){
        return(
            <div className="currentTimeContainer">
                <span>{this.state.time}<br />{this.state.day}<br />{this.state.date}</span>
            </div>
        )

    }
}

export default Clock;