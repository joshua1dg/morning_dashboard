import React from 'react';
import './footer.scss';
import Weather from './weather'

export default (props) => {
    return (
        <div className="footer">
            <Weather/>
        </div>
    )
}