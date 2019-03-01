import React, {Component} from 'react';
import AgendaToday from './agendaToday';

class Agenda extends Component{
    
    render(){
        const {agendaObj} = this.props;
        return(
            <div className='agendaContainer'>
                    <AgendaToday agendaTodayObj = {agendaObj.shift()}/>
            </div>
        );
    }
}

export default Agenda;