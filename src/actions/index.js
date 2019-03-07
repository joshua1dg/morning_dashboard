import axios from 'axios';
import types from './types';

export function getRssData() {
    return async function (dispatch){
        const resp = await axios.get('/api/rssParser.php');
        // const finalResp = this.parseRssFeed(resp.data.data['Reddit']);
        dispatch({
            type: types.GET_RSS,
            payload: {
                newsObj: resp.data.data['Reddit']
            }
        })
    }

}

export function getQuote(){
    return async function (dispatch){
        const resp = await axios.get('/api/quoteApi.php');
        console.log('this is quote rsp: ', resp)
        dispatch({
            type: types.GET_QUOTE,
            payload: {
                quoteObj: {
                    quote: resp.data.text,
                    author: resp.data.citation
                }
            }
        })

    }
}

export function getAgendaObj(){
    return async function (dispatch){
        const resp = await axios.get('/api/icsParser.php');
        const newObj = {agendaObj: resp.data.data};

        dispatch({
            type: types.GET_AGENDA,
            payload: newObj
        })
    }
}

export function weatherCall(position){
    return async function (dispatch) {
        const weather = await getWeather(position);

        dispatch({
            type: types.GET_WEATHER,
            payload: weather
        });
    }
}

async function getWeather(position) {
    const { latitude, longitude } = position.coords;
    const resp = await axios.post('/api/weatherApi.php', {
        longitude: longitude,
        latitude: latitude
    });
    console.log('this is response of weather! ', resp);


    const todayWeatherObj = resp.data.data[0];
    const weatherForecast = resp.data.data[1];


    return {
        todayWeatherObj: todayWeatherObj, 
        weatherForecastObj: weatherForecast
    };


}
