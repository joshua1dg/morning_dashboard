const DEFAULT_STATE={
    longitude: null,
    latitude: null
}

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
    case 'getLocation':
        //  combine state and action.payload into new state and return it
    default:
        return state;   
    }
}