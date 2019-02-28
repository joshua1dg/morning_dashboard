import React from 'react';
import './home.scss'

export default (props) => {
    return (
        <div className="center">
            <div className="quoteContainer">{props.feed}</div>
        </div>
    );
}