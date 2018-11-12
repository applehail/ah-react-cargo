import React from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';
import {setCity, showOrderParams, findTransporters} from '../actions';

let ActiveOrder = connect(
    store => ({
        order: store.order
    }), {
        setCity,
        showOrderParams,
        findTransporters
    }
)(Order);

export default ActiveOrder;