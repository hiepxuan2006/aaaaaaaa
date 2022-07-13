import React from 'react';
import style from './CheckoutPage.module.scss';
import classNames from 'classnames/bind';
import { CheckoutLeft } from '~/Component/Checkout';
import CheckoutRight from '~/Component/Checkout/CheckoutRight';

const cx = classNames.bind(style);
function CheckoutPage(props) {
    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col l-7 m-7 c-12">
                    <CheckoutLeft />
                </div>
                <div className="col l-5 m-5 c-0">
                    <CheckoutRight />
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
