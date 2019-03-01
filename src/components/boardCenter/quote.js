import React from 'react';

export default (props) => (
    
    <div className='quote'>{props.feed['text']}<br/>- {props.feed['citation']}</div>

);