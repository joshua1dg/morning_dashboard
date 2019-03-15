import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import  { weatherCall } from '../../actions/index'

class Weather extends Component{

    parseFullWeather(todayWeatherObj, weatherForecastObj) {
        const currentWeather = todayWeatherObj[0];
        const todayForecast = todayWeatherObj.slice(1);

        const currentWeatherElement = this.parseCurrentWeather(currentWeather);
        const todayForecastElements = this.parseTodayForecast(todayForecast);


        const forecastElements = { currentWeather: currentWeatherElement, todayForecast: todayForecastElements};
        return forecastElements;
    }

    parseCurrentWeather(currentWeatherObj){
        const currentTemp = currentWeatherObj['Feels Like'][0];
        const description = currentWeatherObj['Feels Like'][1];
        const icon = currentWeatherObj['Feels Like'][2];

        return(
            <div className="currentWeatherInfo">
                <div className='feelsLike'>Feels Like</div>
                <div className='currentTemp'>{currentTemp}</div>
                <div className='description'>{description}</div>
                <div className='icon'><img src={`/dist/images/weatherIcons/icon${icon}.png`} /></div>
            </div>
        )
    }

    parseTodayForecast(todayForecastObj){
        const todayForecastElements = todayForecastObj.map(
            (item) => {
                const hour = Object.keys(item);
                const lowestTemp = Object.values(item)[0][0];
                const description = Object.values(item)[0][1];
                const icon = Object.values(item)[0][2];

                return (
                    <div className="singleWeatherContainer" key={Object.keys(item)}>
                        <div>{hour}</div>
                        <div>{lowestTemp}</div>
                        <div>{description}</div>
                        <div><img src={`/dist/images/weatherIcons/icon${icon}.png`}/></div>
                    </div>
                )
            }
        );

        return todayForecastElements;
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => this.props.weatherCall(position));
    }


    render(){

        const { todayWeatherObj, weatherForecastObj } = this.props;

        if (todayWeatherObj.length !== 0){
            const weatherElements = this.parseFullWeather(todayWeatherObj, weatherForecastObj);

            return (
                <div className="weatherContainer">
                    <div className="currentWeather">
                        {weatherElements.currentWeather}
                    </div>
                    <div className="weatherForecast">
                        {weatherElements.todayForecast}
                    </div>
                </div>

            );
        }

        return null;
    }
}

function mapStateToProps(state) {

    return {
        longitude: state.apiCall.longitude,
        latitude: state.apiCall.latitude,
        todayWeatherObj: state.apiCall.todayWeatherObj,
        weatherForecastObj: state.apiCall.weatherForecastObj
    }
}

export default connect(mapStateToProps, { weatherCall })(Weather);