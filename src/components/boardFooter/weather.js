import React, {Component} from 'react';

class Weather extends Component{
    parseFullWeather(weatherObj) {
        const {todayWeatherObj, weatherForecastObj} = this.props;
        const currentWeather = todayWeatherObj[0];
        const todayForecast = todayWeatherObj.slice(1);

        const currentWeatherElement = this.parseCurrentWeather(currentWeather);
        const todayForecastElements = this.parseTodayForecast(todayForecast);


        console.log('this is todayforecase elements: ', todayForecastElements);
        const forecastElements = { currentWeather: currentWeatherElement, todayForecast: todayForecastElements};
        console.log(forecastElements);
        return forecastElements;
    }

    parseCurrentWeather(currentWeatherObj){
        console.log('this is current weather in function: ', currentWeatherObj);
        const currentTemp = currentWeatherObj['Feels Like'][0];
        const icon = currentWeatherObj['Feels Like'][1];
        return(
            <div className="currentWeatherInfo">
                <div>Feels Like</div>
                <div>{currentTemp}</div>
                <div>{icon}</div>
            </div>
        )
    }

    parseTodayForecast(todayForecastObj){
        const todayForecastElements = todayForecastObj.map(
            (item) => {
                const hour = Object.keys(item);
                const lowestTemp = Object.values(item)[0][0];
                const highestTemp = Object.values(item)[0][1];
                const icon = Object.values(item)[0][2];

                return (
                    <div className="singleWeatherContainer" key={Object.keys(item)}>
                        <div>{hour}</div>
                        <div>{lowestTemp}</div>
                        <div>{highestTemp}</div>
                        <div>{icon}</div>
                    </div>
                )
            }
        );

        return todayForecastElements;
    }

    render(){
        const {weatherObj} = this.props;
        const weatherElements = this.parseFullWeather(weatherObj);

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
}

export default Weather;