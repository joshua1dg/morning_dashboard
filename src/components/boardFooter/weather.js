import axios from 'axios';
import React, {Component} from 'react';

class Weather extends Component{

    state = {
        weatherObj: {
            todayWeatherObj: [],
            weatherForecastObj: []
        }
    }

    async getWeather(position) {
        const { latitude, longitude } = position.coords;
        console.log('this is long and lati in get weather!: ', longitude, latitude)
        const resp = await axios.post('/api/weatherApi.php', {
            longitude: longitude,
            latitude: latitude
        });
        const todayWeatherObj = resp.data.data[0];
        const weatherForecast = resp.data.data[1];


        this.setState({
            weatherObj: {
                todayWeatherObj: todayWeatherObj,
                weatherForecastObj: weatherForecast
            }
        })
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
        navigator.geolocation.getCurrentPosition((position) => {this.getWeather(position)});

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