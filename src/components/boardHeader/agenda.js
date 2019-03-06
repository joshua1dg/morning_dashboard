import React, {Component} from 'react';
import AgendaToday from './agendaToday';
import axios from 'axios';

class Agenda extends Component{

    state = {
        agendaObj: {}
    }

    async getAgendaObj(){
        const resp = await axios.get('/api/icsParser.php');
        return resp.data;
    }

    async componentDidMount(){
        const resp = await this.getAgendaObj();
        this.setState({
            agendaObj: resp.data
        })
    }
    
    render(){
        const {agendaObj} = this.state;
        if (Object.keys(this.state.agendaObj).length !==0){
            return (
                <div className='agendaContainer'>
                    <AgendaToday agendaTodayObj={agendaObj[0]} />
                </div>
            );
        }

        return null;

    }
}

export default Agenda;