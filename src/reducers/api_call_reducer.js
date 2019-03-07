const DEFAULT_STATE={
    longitude: null,
    latitude: null
}

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
    case 'weatherCall':
        return action.payload;
    default:
        return state;   
    }
}