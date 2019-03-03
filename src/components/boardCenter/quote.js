import React from 'react';

export default (props) => (
    <div className="quoteContainer" >
        <div className='quote'>{props.feed['text']}<br/>- {props.feed['citation']}</div>
    </div>

);