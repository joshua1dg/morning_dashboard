import React, {Component} from 'react';

class AgendaToday extends Component{
    parseTodayAgenda(agendaObj) {

        const todayAgendaElements = agendaObj.today.map(info => {
            const [k, v] = Object.entries(info)[0];
            return(
                <div className="eventContainer" key={k}>
                    <div className="title">{v}</div>
                    <div className="startTime">{k}</div>
                </div>
            )
        });

        this.modifyWidthOfEvent(todayAgendaElements);

        return todayAgendaElements;
    }

    modifyWidthOfEvent(array){
        const length = array.length;
    }

    render(){
        return(
            <div className='agendaToday'>
                {this.parseTodayAgenda(this.props.agendaTodayObj)}
            </div>
        );
    }

}
export default AgendaToday;
