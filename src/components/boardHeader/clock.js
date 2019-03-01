import React, {Component} from 'react';

class Clock extends Component{
    state = {
        time: new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
    }

    componentDidMount() {
        setInterval(
            () => {
                this.setState({
                    time: new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
                })
            }
            , 1000)
    }

    render(){
        return(
            <div className="currentTimeContainer">
                <span>{this.state.time}<br />Sumday<br />Feb. 24th</span>
            </div>
        )

    }
}

export default Clock;