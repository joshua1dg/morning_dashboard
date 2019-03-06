import axios from 'axios';
import React, {Component} from 'react';

class Weather extends Component{

    state = {
        weatherObj: {
            todayWeatherObj: [],
            weatherForecastObj: []
        }
    }

    async getWeather(){
        const resp = await axios.get('/api/weatherApi.php');
        return {todayWeatherObj:resp.data.data[0], weatherForecast:resp.data.data[1]};
    }

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
                <div>Feels Like</div>
                <div>{currentTemp}</div>
                <div>{description}</div>
                <div>{icon}</div>
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
                        <div>{icon}</div>
                    </div>
                )
            }
        );

        return todayForecastElements;
    }

    async componentDidMount(){
        const resp = await this.getWeather();
        const {todayWeatherObj, weatherForecast} = resp;
        this.setState({
            weatherObj: {
                todayWeatherObj: todayWeatherObj,
                weatherForecastObj: weatherForecast
            }
        })
    }

    render(){
        const { todayWeatherObj, weatherForecastObj } = this.state.weatherObj;

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

export default Weather;