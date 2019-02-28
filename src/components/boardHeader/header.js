import React from 'react';
import './header.scss';

export default () => {
    return (
        <div className="header">
            <div className="currentTime">Time</div>
            <div className="agendaToday"></div>
        </div>
    );
};