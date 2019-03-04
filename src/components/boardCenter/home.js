import React from 'react';
import './home.scss'
import './quote';
import Quote from './quote';
import Social from './socialMedia';
import RssFeed from './rssFeed';

export default (props) => {
    // debugger;
    return (
        <div className="center">
                {/* <Social/> */}
                {/* <Quote feed={props.feed}/> */}
                <RssFeed/>
        </div>
    );
}