import React from 'react';
import './footer.scss';
import Weather from './weather'

export default (props) => {

    return (
        <div className="footer">
            <Weather todayWeatherObj={props.weatherObj[0]} weatherForecast={props.weatherObj[1]}/>
        </div>
    )
}