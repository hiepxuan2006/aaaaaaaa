import React from 'react';
import style from './Cart.module.scss';
import CartLeft from '~/Component/Cart/CartLeft';
import CartRight from '~/Component/Cart/CartRight';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function cart(props) {
    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col l-8 m-8 c-12">
                    <CartLeft />
                </div>
                <div className="col l-4 m-4 c-0">
                    <CartRight />
                </div>
            </div>
        </div>
    );
}

export default cart;
