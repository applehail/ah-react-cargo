const initialState = () => {
    return {
        changed: false,
        cityFrom: '',
        cityFromId: '',
        cityTo: '',
        cityToId: '',
        cargoType: 1,
        paramsShowed: false
    }
}

const orderReducer = (state = initialState(), action) => {

    //console.log(action);
    switch (action.type) {

        case 'SHOW_ORDER_PARAMS':
            return Object.assign({}, state, {paramsShowed: true});
            break;

        case 'SET_CITY':
            let newState = Object.assign({}, state);
            if (action.values.name === 'cityFrom') {
                newState.cityFrom = action.values.value;
                newState.cityFromId = action.values.id;
            } else {
                newState.cityTo = action.values.value;
                newState.cityToId = action.values.id;
            }
            return newState;
            break;

        default:
            return state
    }
}

export default orderReducer;