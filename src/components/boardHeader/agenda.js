import React, {Component} from 'react';
import AgendaToday from './agendaToday';
import axios from 'axios';
import { connect } from 'react-redux';
import {getAgendaObj} from '../../actions/index'

class Agenda extends Component{

    async componentDidMount(){
        this.props.getAgendaObj();
    }
    
    render(){
        const {agendaObj} = this.props;
        if (Object.keys(agendaObj).length !==0){
            return (
                <div className='agendaContainer'>
                    <AgendaToday agendaTodayObj={agendaObj[0]} />
                </div>
            );
        }

        return null;

    }
}

export default connect(mapStateToProps, {getAgendaObj})(Agenda);

function mapStateToProps(state){
    return{
        agendaObj: state.apiCall.agendaObj
    }
}