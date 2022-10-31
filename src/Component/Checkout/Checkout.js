import React from 'react';
import CheckoutLeft from './CheckoutLeft';
import CheckoutRight from "./CheckoutRight";
import classNames from "classnames/bind";
import style from "./Checkout.module.scss";
const cx = classNames.bind(style);

function Checkout(props) {
  return (
    <div className={cx("checkout")}>
      <div className={cx("heading")}>
        <h1>Checkout</h1>
      </div>
      <div className={cx("dis-column", "row")}>
        <div className="col l-7 m-7 c-12">
          <CheckoutLeft />
        </div>
        <div className="col l-5 m-5 c-12">
          <CheckoutRight />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
