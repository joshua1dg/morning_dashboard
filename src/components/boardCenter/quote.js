import React from 'react';

export default (props) => {
    console.log('props in quote ', props);
    return(
        <div className="quoteContainer" >
            <div className='quote'>{props.feed['text']}<br />- {props.feed['citation']}</div>
        </div>
    );


};