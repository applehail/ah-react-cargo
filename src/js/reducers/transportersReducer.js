const initialState = () => {
    return {
        results: [],
        loading: false
    }
}

const transportersReducer = (state = initialState(), action) => {

    //console.log(action);
    switch (action.type) {

        case 'FIND_TRANSPORTERS':
            return state;
            break;

        default:
            return state;
    }
}

export default transportersReducer;