import types from '../actions/types'

const DEFAULT_STATE = {
    signedIn: false,
    formInfoStored: false,
    longitude: null,
    latitude: null,
    todayWeatherObj: [],
    weatherForecastObj: [],
    agendaObj: {},
    quoteObj: {},
    newsObj: [],
    youtubeInfo: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_WEATHER:
            return { ...state, ...action.payload };
        case types.GET_AGENDA:
            return { ...state, ...action.payload }
        case types.GET_QUOTE:
            return { ...state, ...action.payload }
        case types.GET_RSS:
            return { ...state, ...action.payload }
        case types.GET_YOUTUBE_INFO:
            return { ...state, ...action.payload }
        case types.SEND_USER_INFO:
            return { ...state, ...action.payload }
        case types.SEND_USER_AUTH:
            return {...state, ...action.payload}
        default:
            return state;
    }
}