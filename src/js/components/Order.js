import React from 'react';
import ReactDOM from 'react-dom';
import SuggestInput from './SuggestInput';
import OrderParams from './OrderParams';
import Config from '../config';

class Order extends React.Component {

    constructor(props) {

        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.handleShowParams = this.handleShowParams.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();
        this.props.findTransporters(this.props.order);
    }

    handleShowParams(event) {

        event.preventDefault();
        this.props.showOrderParams();
    }

    cityChange(value, name, id) {

        this.props.setCity({value, name, id});
    }

    cityFetcher() {

        return (q) => {
            return new Promise((resolve) => {
                setTimeout(function() {
                    resolve({items: Config.defaultCities.slice(0, 2)});
                }, 500);
            });
        }
    }

    render() {

        const defaultCities = Config.defaultCities;
        const order = this.props.order;
        const step = ( order.paramsShowed || (order.cityFrom && order.cityTo && !order.changed) ) ? 2 : 1;
        const formClass = 'form order order--' + step;
        const cargoType =  order.cargoType == 1 ? 'Документы' : 'Груз';
        const cargoTypeAdd = '';
        const cargoLabel = ( step == 2 || order.changed) ? (cargoType + cargoTypeAdd) : 'Что отправляем?' ;
        return (
            <React.Fragment>
                <form className={formClass} onSubmit={this.handleSubmit} autoComplete="off" >
                    <div className="order__address">
                        <div className="row">
                            <div className="col-4">
                                <div className="order__geo-item">
                                    <a href="" className="btn btn-light order__country-link"></a>
                                    <input type="hidden" name="cityFrom_id" value={order.cityFromId} />
                                    <SuggestInput id="1" name="cityFrom" fetcher={this.cityFetcher} onChange={this.cityChange} placeholder="Город отправителя" value={order.cityFrom} default={defaultCities} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="order__geo-item">
                                    <a href="" className="btn btn-light order__country-link"></a>
                                    <input type="hidden" name="cityTo_id" value={order.cityToId} />
                                    <SuggestInput id="2" name="cityTo" fetcher={this.cityFetcher} onChange={this.cityChange} placeholder="Город получателя" value={order.cityTo} default={defaultCities} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="order__links">
                                    <a onClick={this.handleShowParams} className="order__params-link" href="">{cargoLabel}</a>
                                    <button type="submit" className="btn btn-warning order__find-link">Найти</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    { order.paramsShowed && <OrderParams cl1="active" cl2="" /> }
                </form>
            </React.Fragment>
        );
    }
}

export default Order;
