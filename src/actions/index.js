import axios from 'axios';

export function weatherCall(position){
    return async function (dispatch) {
        const weather = await getWeather(position);
        dispatch({
            type: 'weatherCall',
            payload: weather
        });
    }
}

async function getWeather(position) {
    const { latitude, longitude } = position.coords;
    console.log('this is long and lati in get weather!: ', longitude, latitude)
    const resp = await axios.post('/api/weatherApi.php', {
        longitude: longitude,
        latitude: latitude
    });
    const todayWeatherObj = resp.data.data[0];
    const weatherForecast = resp.data.data[1];

    console.log('response.data.data get weather: ', resp.data.data)

    return {todayWeatherObj: todayWeatherObj, weatherForecastObj: weatherForecast};


    // this.setState({
    //     weatherObj: {
    //         todayWeatherObj: todayWeatherObj,
    //         weatherForecastObj: weatherForecast
    //     }
    // })
}
