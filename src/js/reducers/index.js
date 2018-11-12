import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import transportersReducer from './transportersReducer';

export default combineReducers({
    order: orderReducer,
    transporters: transportersReducer
})
