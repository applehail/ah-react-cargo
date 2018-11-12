import React from 'react';
import ReactDOM from 'react-dom';
import Config from '../config';

class OrderParams extends React.Component {


    render() {

        const cargoTypeClass1 = this.props.cl1;
        const cargoTypeClass2 = this.props.cl2;

        return (
            <div className="cargo-list">
                <div className="cargo-list__cont">
                    <div className="cargo-list__title">Укажите тип и параметры отправления</div>
                    <div className="cargo-list__box">
                        <div className="cargo-list__box _tab_mode _docs_only">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className={`cargo cargo__docs ${cargoTypeClass1}`}>
                                        <div className="cargo__cont">
                                            <div className="cargo__name">
                                                <div className="cargo__title">
                                                    <input type="radio" id="cargo1" name="cargo_type" className="cargo__input"  />
                                                    <label htmlFor="cargo1" className="cargo__label" ><span></span>Документы</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className={`cargo cargo__heavy ${cargoTypeClass2}`}>
                                        <div className="cargo__cont">
                                            <div className="cargo__name">
                                                <div className="cargo__title">
                                                    <input type="radio" id="cargo2" className="cargo__input" name="cargo_type" />
                                                    <label htmlFor="cargo2" className="cargo__label">
                                                        <span></span>Груз</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="cargo__item cargo__item-save">
                        <button className="cargo__save button btn btn-warning ld-ext-right">
                            Найти
                            <div className="ld ld-ring ld-cycle"></div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderParams;
