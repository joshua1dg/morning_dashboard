import React from 'react';
import './home.scss'
import './quote';
import Quote from './quote';

export default (props) => {
    // debugger;
    return (
        <div className="center">
            <div className="quoteContainer" >
                <Quote feed={props.feed}/>
            </div>
        </div>
    );
}